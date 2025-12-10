"use client"

import { useState } from "react"
import Quiz from "@/components/quiz"
import ExamSelector from "@/components/exam-selector"
import { availableExams } from "@/lib/quiz-data"

export default function Home() {
  const [selectedExamIndex, setSelectedExamIndex] = useState<number | null>(null)

  const handleSelectExam = (index: number) => {
    setSelectedExamIndex(index)
  }

  const handleBackToSelection = () => {
    setSelectedExamIndex(null)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      {selectedExamIndex === null ? (
        <ExamSelector exams={availableExams} onSelectExam={handleSelectExam} />
      ) : (
        <Quiz
          quizData={availableExams[selectedExamIndex].questions}
          examTitle={availableExams[selectedExamIndex].title}
          onBackToSelection={handleBackToSelection}
        />
      )}
    </main>
  )
}
