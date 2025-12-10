"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import type { QuizQuestion } from "@/lib/quiz-data"
import { shuffleArray } from "@/lib/utils"

interface ShuffledQuestion {
  question: string
  options: string[]
  correctAnswer: string | string[]
  originalIndex: number
}

interface QuizProps {
  quizData: QuizQuestion[]
  examTitle: string
  onBackToSelection: () => void
}

export default function Quiz({ quizData, examTitle, onBackToSelection }: QuizProps) {
  const shuffledQuestions = useMemo<ShuffledQuestion[]>(() => {
    const shuffledQs = shuffleArray(
      quizData.map((q, index) => ({
        ...q,
        originalIndex: index,
      })),
    )

    return shuffledQs.map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }))
  }, [quizData])

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | string[]>("")
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(quizData.length).fill(false))
  const [userAnswers, setUserAnswers] = useState<(string | string[])[]>(new Array(quizData.length).fill(""))
  const [correctAnswers, setCorrectAnswers] = useState<boolean[]>(new Array(quizData.length).fill(false))

  const question = shuffledQuestions[currentQuestion]
  const isMultipleAnswer = Array.isArray(question.correctAnswer)

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleCheckboxChange = (option: string, checked: boolean) => {
    const currentAnswers = Array.isArray(selectedAnswer) ? selectedAnswer : []
    if (checked) {
      setSelectedAnswer([...currentAnswers, option])
    } else {
      setSelectedAnswer(currentAnswers.filter((a) => a !== option))
    }
  }

  const isAnswerCorrect = () => {
    if (Array.isArray(question.correctAnswer)) {
      const selected = Array.isArray(selectedAnswer) ? selectedAnswer : []
      return (
        selected.length === question.correctAnswer.length &&
        selected.every((ans) => question.correctAnswer.includes(ans))
      )
    } else {
      return selectedAnswer === question.correctAnswer
    }
  }

  const handleNext = () => {
    const hasAnswer = Array.isArray(selectedAnswer) ? selectedAnswer.length > 0 : selectedAnswer !== ""

    if (hasAnswer) {
      const isCorrect = isAnswerCorrect()

      const newUserAnswers = [...userAnswers]
      newUserAnswers[currentQuestion] = selectedAnswer
      setUserAnswers(newUserAnswers)

      const newCorrectAnswers = [...correctAnswers]
      newCorrectAnswers[currentQuestion] = isCorrect
      setCorrectAnswers(newCorrectAnswers)

      if (isCorrect && !answeredQuestions[currentQuestion]) {
        setScore(score + 1)
      }

      const newAnswered = [...answeredQuestions]
      newAnswered[currentQuestion] = true
      setAnsweredQuestions(newAnswered)

      if (currentQuestion < shuffledQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        const nextQuestion = shuffledQuestions[currentQuestion + 1]
        setSelectedAnswer(Array.isArray(nextQuestion.correctAnswer) ? [] : "")
      } else {
        setShowResults(true)
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      const prevQuestion = shuffledQuestions[currentQuestion - 1]
      setSelectedAnswer(Array.isArray(prevQuestion.correctAnswer) ? [] : "")
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    const firstQuestion = shuffledQuestions[0]
    setSelectedAnswer(Array.isArray(firstQuestion.correctAnswer) ? [] : "")
    setScore(0)
    setShowResults(false)
    setAnsweredQuestions(new Array(shuffledQuestions.length).fill(false))
    setUserAnswers(new Array(shuffledQuestions.length).fill(""))
    setCorrectAnswers(new Array(shuffledQuestions.length).fill(false))
  }

  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100

  if (showResults) {
    return (
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">{examTitle} Complete!</CardTitle>
          <CardDescription>Here are your results</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-6xl font-bold text-primary mb-2">
              {score}/{shuffledQuestions.length}
            </div>
            <p className="text-muted-foreground">You scored {Math.round((score / shuffledQuestions.length) * 100)}%</p>
          </div>
          <div className="space-y-4">
            {shuffledQuestions.map((q, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  correctAnswers[index]
                    ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                    : "border-red-500 bg-red-50 dark:bg-red-950/20"
                }`}
              >
                <p className="font-medium mb-2">{q.question}</p>
                <p className="text-sm text-muted-foreground mb-1">
                  Your answer:{" "}
                  {Array.isArray(userAnswers[index])
                    ? (userAnswers[index] as string[]).join(", ")
                    : (userAnswers[index] as string)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Correct answer{Array.isArray(q.correctAnswer) ? "s" : ""}:{" "}
                  {Array.isArray(q.correctAnswer) ? q.correctAnswer.join(", ") : q.correctAnswer}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="outline" onClick={onBackToSelection} className="flex-1 bg-transparent">
            Back to Selection
          </Button>
          <Button onClick={handleRestart} className="flex-1">
            Restart Quiz
          </Button>
        </CardFooter>
      </Card>
    )
  }

  const hasSelectedAnswer = Array.isArray(selectedAnswer) ? selectedAnswer.length > 0 : selectedAnswer !== ""

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-xl mb-2">{examTitle}</CardTitle>
        <div className="flex justify-between items-center mb-2">
          <CardDescription>
            Question {currentQuestion + 1} of {shuffledQuestions.length}
          </CardDescription>
        </div>
        <Progress value={progress} className="mb-4" />
        <CardTitle className="text-2xl text-balance">{question.question}</CardTitle>
        {isMultipleAnswer && <CardDescription className="text-sm italic">Select all correct answers</CardDescription>}
      </CardHeader>
      <CardContent>
        {isMultipleAnswer ? (
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-accent/50 transition-colors"
              >
                <Checkbox
                  id={`option-${index}`}
                  checked={Array.isArray(selectedAnswer) && selectedAnswer.includes(option)}
                  onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        ) : (
          <RadioGroup value={selectedAnswer as string} onValueChange={handleAnswerSelect}>
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer"
                >
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        )}
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
          Previous
        </Button>
        <Button onClick={handleNext} disabled={!hasSelectedAnswer}>
          {currentQuestion === shuffledQuestions.length - 1 ? "Finish" : "Next"}
        </Button>
      </CardFooter>
    </Card>
  )
}
