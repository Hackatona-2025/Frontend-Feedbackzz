"use client"

import { useState } from "react"
import type { ChangeEvent } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, MessageSquare } from "lucide-react"

interface AIAnalysis {
  analysis: string
  sentiment: string
  suggestions: string[]
  score: number
}

// Mock service function
const getAIFeedback = async (feedback: string): Promise<AIAnalysis> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return {
    analysis: `Analysis of: ${feedback.substring(0, 50)}...`,
    sentiment: "Positive",
    suggestions: ["Consider providing specific examples", "Add actionable next steps", "Include timeline expectations"],
    score: 85,
  }
}

export default function AIAnalysisForm() {
  const [feedback, setFeedback] = useState("")
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAnalyze = async () => {
    if (!feedback.trim()) return

    setLoading(true)
    setError(null)

    try {
      const result = await getAIFeedback(feedback)
      setAnalysis(result)
    } catch (error) {
      setError("Failed to analyze feedback. Please try again.")
      console.error("Analysis error:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleFeedbackChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value)
  }

  return (
    <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="mb-4 sm:mb-6">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
            AI Feedback Analysis
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Enter your feedback below to get an AI-powered analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <Textarea
            placeholder="Type your feedback here..."
            value={feedback}
            onChange={handleFeedbackChange}
            className="mb-4 min-h-[120px] sm:min-h-[150px] text-sm sm:text-base"
          />
          <Button
            onClick={handleAnalyze}
            disabled={loading || !feedback.trim()}
            className="w-full text-sm sm:text-base"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze Feedback"
            )}
          </Button>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="mb-4 sm:mb-6">
          <AlertTitle className="text-sm sm:text-base">Error</AlertTitle>
          <AlertDescription className="text-sm">{error}</AlertDescription>
        </Alert>
      )}

      {analysis && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl">Analysis Results</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Overall Analysis</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{analysis.analysis}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Sentiment</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{analysis.sentiment}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl">Suggestions & Score</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Suggestions</h3>
                <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2">
                  {analysis.suggestions.map((suggestion: string, index: number) => (
                    <li key={index} className="text-muted-foreground text-sm sm:text-base">
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Score</h3>
                <div className="w-full bg-secondary rounded-full h-2 sm:h-2.5">
                  <div
                    className="bg-primary h-2 sm:h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${analysis.score}%` }}
                  ></div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{analysis.score}/100</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
