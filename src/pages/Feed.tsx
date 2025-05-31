"use client";

import { useState } from "react";
import FeedbackCard from "@/components/FeedbackCard";
import TabSelector from "@/components/TabSelector";

interface Feedback {
  id: string;
  title: string;
  content: string;
  author: string;
  isAnonymous: boolean;
  mentions: string[];
  hashtags: string[];
  reactions: number[];
  createdAt: string;
}

export default function Feed() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    {
      id: "1",
      title: "Melhorias no processo de deploy",
      content:
        "Sugiro implementarmos um processo de CI/CD mais robusto @tech-lead #devops #improvement",
      author: "João Silva",
      isAnonymous: false,
      mentions: ["tech-lead"],
      hashtags: ["devops", "improvement"],
      reactions: [5, 2, 1, 0, 1,],
      createdAt: "2024-03-20T10:00:00Z",
    },
    {
      id: "2",
      title: "Feedback sobre a última sprint",
      content:
        "A comunicação entre os times precisa melhorar #teamwork #communication",
      author: "Anonymous",
      isAnonymous: true,
      mentions: [],
      hashtags: ["teamwork", "communication"],
      reactions: [3, 1, 2, 1, 0],
      createdAt: "2024-03-19T15:30:00Z",
    },
    {
      id: "3",
      title: "Sobre a infra do projeto...",
      content:
        "Eu gostaria de sugerir uma melhoria no processo de integração contínua! @devops-team #improvement",
      author: "Bernardo Kirsch",
      isAnonymous: false,
      mentions: [],
      hashtags: ["teamwork", "communication"],
      reactions: [8, 3, 10, 1, 9],
      createdAt: "2024-03-19T11:40:00Z",
    },
    {
      id: "4",
      title: "A Hacktona",
      content:
        "Achei que o yama ia fazer o time dele para a hacktona, não gostei! Ficou devendo @yamagutti !! #chateado @coordenação",
      author: "Anonymous",
      isAnonymous: true,
      mentions: ["coordenação", "yamagutti"],
      hashtags: ["chateado"],
      reactions: [3, 1002, 2002, 1, 200
      ],
      createdAt: "2024-03-19T11:38:00Z",
    },
  ]);

  const handleReaction = (feedbackId: string, reactionIndex: number) => {
    setFeedbacks(
      feedbacks.map((feedback) => {
        if (feedback.id === feedbackId) {
          const newReactions = [...feedback.reactions];
          newReactions[reactionIndex]++;
          return { ...feedback, reactions: newReactions };
        }
        return feedback;
      })
    );
  };

  return (
    <div className="min-h-screen w-full max-w-screen overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
      <TabSelector />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {feedbacks.map((feedback) => (
          <FeedbackCard
            key={feedback.id}
            feedback={feedback}
            onReactionClick={handleReaction}
          />
        ))}
      </div>
    </div>
  );
}
