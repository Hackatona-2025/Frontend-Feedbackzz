"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, MessageSquare, Lightbulb } from "lucide-react"

interface AnalysisResult {
  overallScore: number
  sentiment: string
  suggestions: string[]
  mentions: {
    user: string
    count: number
    sentiment: string
  }[]
  hashtags: {
    tag: string
    count: number
    sentiment: string
  }[]
}

export default function AIAnalysis() {
  const [activeTab, setActiveTab] = useState("suggestions");
  const [analysis] = useState<AnalysisResult>({
    overallScore: 75,
    sentiment: "Positivo",
    suggestions: [
      "Considere dar mais feedbacks construtivos sobre processos",
      "Tente mencionar mais colegas em seus feedbacks",
      "Use mais hashtags para categorizar seus feedbacks",
    ],
    mentions: [
      { user: "@tech-lead", count: 5, sentiment: "Positivo" },
      { user: "@design-team", count: 3, sentiment: "Neutro" },
      { user: "@product-manager", count: 2, sentiment: "Positivo" },
    ],
    hashtags: [
      { tag: "#improvement", count: 8, sentiment: "Positivo" },
      { tag: "#teamwork", count: 6, sentiment: "Positivo" },
      { tag: "#process", count: 4, sentiment: "Neutro" },
    ],
  })

  return (
    <div className="w-screen h-full flex justify-center items-center space-y-4 sm:space-y-6 p-4 sm:p-6">
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Bot className="h-5 w-5 sm:h-6 sm:w-6" />
            Análise de Feedback
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Análise detalhada dos seus feedbacks e interações
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sm sm:text-base">Pontuação Geral</h3>
                <span className="text-xl sm:text-2xl font-bold text-violet-500">{analysis.overallScore}%</span>
              </div>
              <Progress value={analysis.overallScore} className="h-2 sm:h-3 fill-gray" />
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Sentimento Geral</h3>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-violet-500" />
                <span className="text-base sm:text-lg">{analysis.sentiment}</span>
              </div>
            </div>

            <Tabs defaultValue="suggestions" className="w-full">
              <TabsList className="flex justify-between text-xs sm:text-sm">
                <TabsTrigger value="suggestions" className={`bg-white px-2 sm:px-4 ${activeTab === "suggestions" ? "bg-gradient-to-br from-blue-500 to-purple-600" : "" }`} onClick={() => setActiveTab("suggestions")}>
                  Sugestões
                </TabsTrigger>
                <TabsTrigger value="mentions" className={`bg-white px-2 sm:px-4 ${activeTab === "mentions" ? "bg-gradient-to-br from-blue-500 to-purple-600" : "" }`} onClick={() => setActiveTab("mentions")}>
                  Menções
                </TabsTrigger>
                <TabsTrigger value="hashtags" className={`bg-white px-2 sm:px-4 ${activeTab === "hashtags" ? "bg-gradient-to-br from-blue-500 to-purple-600" : "" }`} onClick={() => setActiveTab("hashtags")}>
                  Hashtags
                </TabsTrigger>
              </TabsList>
              <TabsContent value="suggestions" className="space-y-3 sm:space-y-4 mt-4">
                {analysis.suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base">{suggestion}</p>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="mentions" className="space-y-3 sm:space-y-4 mt-4">
                {analysis.mentions.map((mention, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-violet-400 text-sm sm:text-base">{mention.user}</span>
                      <span className="text-xs sm:text-sm text-gray-400">({mention.count} menções)</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400">{mention.sentiment}</span>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="hashtags" className="space-y-3 sm:space-y-4 mt-4">
                {analysis.hashtags.map((hashtag, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-blue-400 text-sm sm:text-base">#{hashtag.tag}</span>
                      <span className="text-xs sm:text-sm text-gray-400">({hashtag.count} usos)</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400">{hashtag.sentiment}</span>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
