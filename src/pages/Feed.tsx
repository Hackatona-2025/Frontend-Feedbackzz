"use client"

import { useState } from "react"
import FeedbackCard from "@/components/FeedbackCard"
import TabSelector from "@/components/TabSelector"

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
      <TabSelector />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} onReaction={handleReaction} />
        ))}
      </div>
    </div>
  )
}
