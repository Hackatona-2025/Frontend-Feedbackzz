"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import FeedbackCard from "@/components/FeedbackCard"

interface Feedback {
  id: string
  title: string
  content: string
  author: string
  isAnonymous: boolean
  mentions: string[]
  hashtags: string[]
  reactions: number[]
  createdAt: string
}

export default function Feed() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    {
      id: "1",
      title: "Melhorias no processo de deploy",
      content: "Sugiro implementarmos um processo de CI/CD mais robusto @tech-lead #devops #improvement",
      author: "João Silva",
      isAnonymous: false,
      mentions: ["tech-lead"],
      hashtags: ["devops", "improvement"],
      reactions: [5, 2, 1, 0, 1],
      createdAt: "2024-03-20T10:00:00Z",
    },
    {
      id: "2",
      title: "Feedback sobre a última sprint",
      content: "A comunicação entre os times precisa melhorar #teamwork #communication",
      author: "Anonymous",
      isAnonymous: true,
      mentions: [],
      hashtags: ["teamwork", "communication"],
      reactions: [3, 1, 2, 1, 0],
      createdAt: "2024-03-19T15:30:00Z",
    },
  ])

  const [newFeedback, setNewFeedback] = useState({
    title: "",
    content: "",
    isAnonymous: false,
    mentions: [] as string[],
    hashtags: [] as string[],
  })

  const handleCreateFeedback = () => {
    // Extract mentions and hashtags
    const mentions = newFeedback.content.match(/@\w+/g)?.map((m) => m.slice(1)) || []
    const hashtags = newFeedback.content.match(/#\w+/g)?.map((h) => h.slice(1)) || []

    const feedback: Feedback = {
      id: Date.now().toString(),
      title: newFeedback.title,
      content: newFeedback.content,
      author: newFeedback.isAnonymous ? "Anonymous" : "Current User",
      isAnonymous: newFeedback.isAnonymous,
      mentions,
      hashtags,
      reactions: [0, 0, 0, 0, 0],
      createdAt: new Date().toISOString(),
    }

    setFeedbacks([feedback, ...feedbacks])
    setNewFeedback({
      title: "",
      content: "",
      isAnonymous: false,
      mentions: [],
      hashtags: [],
    })
  }

  const handleReaction = (feedbackId: string, reactionIndex: number) => {
    setFeedbacks(
      feedbacks.map((feedback) => {
        if (feedback.id === feedbackId) {
          const newReactions = [...feedback.reactions]
          newReactions[reactionIndex]++
          return { ...feedback, reactions: newReactions }
        }
        return feedback
      }),
    )
  }

  return (
    <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full text-sm sm:text-base">Criar Feedback</Button>
        </DialogTrigger>
        <DialogContent className="w-[95vw] max-w-2xl mx-auto">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl">Criar Novo Feedback</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-[70vh] overflow-y-auto">
            <div>
              <Label htmlFor="title" className="text-sm sm:text-base">
                Título
              </Label>
              <Input
                id="title"
                value={newFeedback.title}
                onChange={(e) => setNewFeedback({ ...newFeedback, title: e.target.value })}
                placeholder="Digite o título do feedback"
                className="mt-1 text-sm sm:text-base"
              />
            </div>
            <div>
              <Label htmlFor="content" className="text-sm sm:text-base">
                Conteúdo
              </Label>
              <Textarea
                id="content"
                value={newFeedback.content}
                onChange={(e) => setNewFeedback({ ...newFeedback, content: e.target.value })}
                placeholder="Digite seu feedback. Use @ para mencionar pessoas e # para hashtags"
                className="min-h-[120px] sm:min-h-[150px] mt-1 text-sm sm:text-base"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="anonymous"
                checked={newFeedback.isAnonymous}
                onCheckedChange={(checked) => setNewFeedback({ ...newFeedback, isAnonymous: checked })}
              />
              <Label htmlFor="anonymous" className="text-sm sm:text-base">
                Postar anonimamente
              </Label>
            </div>
            <Button onClick={handleCreateFeedback} className="w-full text-sm sm:text-base">
              Publicar Feedback
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} onReaction={handleReaction} />
        ))}
      </div>
    </div>
  )
}
