"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"
import type { ExamData } from "@/lib/quiz-data"

interface ExamSelectorProps {
  exams: ExamData[]
  onSelectExam: (index: number) => void
}

export default function ExamSelector({ exams, onSelectExam }: ExamSelectorProps) {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl">Choose Your Exam</CardTitle>
        <CardDescription>Select an exam to test your knowledge</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {exams.map((exam, index) => (
          <div
            key={index}
            className="border-2 rounded-lg p-6 hover:border-primary transition-colors cursor-pointer"
            onClick={() => onSelectExam(index)}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{exam.title}</h3>
                <p className="text-muted-foreground mb-4">{exam.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{exam.questions.length} questions</span>
                  <Button onClick={() => onSelectExam(index)}>Start Exam</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
