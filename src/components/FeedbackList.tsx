import { useState } from "react";
import FeedbackCard from "./FeedbackCard";

// Exemplo de dados iniciais:
const initialFeedbacks = [
  {
    id: "1",
    title: "Ótima funcionalidade",
    content: "Muito bom! @admin #ux",
    author: "João",
    isAnonymous: false,
    mentions: ["admin"],
    hashtags: ["ux"],
    reactions: [1, 0, 0, 0, 0],
    createdAt: "2024-05-31T14:00:00Z"
  },
  // ...outros feedbacks
];

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState(initialFeedbacks);

  function handleReactionClick(feedbackId: string, reactionIndex: number) {
    setFeedbacks(feedbacks =>
      feedbacks.map(feedback =>
        feedback.id === feedbackId
          ? {
              ...feedback,
              reactions: feedback.reactions.map((count, idx) =>
                idx === reactionIndex ? count + 1 : count
              ),
            }
          : feedback
      )
    );
  }

  return (
    <div>
      {feedbacks.map((feedback) => (
        <FeedbackCard
          key={feedback.id}
          feedback={feedback}
          onReactionClick={handleReactionClick}
        />
      ))}
    </div>
  );
}
