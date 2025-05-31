import { Card, CardContent } from "./ui/card";
import { TriangleAlert, MessageCircle, ThumbsUp, Zap, Lightbulb, Smile } from "lucide-react";
import { ReactionButton } from "./ReactionButton";
import { useState } from "react";

interface FeedbackCardProps {
  feedback: Feedback;
  onReactionClick: (feedbackId: string, reactionIndex: number) => void;
}
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

export default function FeedbackCard({
  feedback,
  onReactionClick,
}: FeedbackCardProps) {
  const [selectedReaction, setSelectedReaction] = useState<string>();
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const renderMentions = (content: string) => {
    return content.split(" ").map((word, index) => {
      if (word.startsWith("@")) {
        return (
          <span key={index} className="text-violet-400">
            {word}{" "}
          </span>
        );
      }
      if (word.startsWith("#")) {
        return (
          <span key={index} className="text-blue-400">
            {word}{" "}
          </span>
        );
      }
      return word + " ";
    });
  };

  const handleComplaint = () => {
    // Handle complaint logic here, e.g., open a modal or redirect to a complaint page
  }

  return (
    <div className="p-4 space-y-4">
      <Card
        key={feedback.id}
        className="hover:shadow-lg transition-shadow duration-200"
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-center mb-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {feedback.isAnonymous
                    ? "..."
                    : feedback.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-md sm:text-lg text-gray-900">
                  {feedback.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {feedback.isAnonymous ? "Anônimo" : feedback.author} •{" "}
                  {formatDate(feedback.createdAt)}
                </p>
              </div>
            </div>
            <button onClick={handleComplaint} className="p-2 bg-transparent border-1 border-red-300 hover:bg-gray-100 rounded-lg transition-colors">
              <TriangleAlert className="h-5 w-5 text-red-600" />
            </button>
          </div>

          <p className="text-gray-700 mb-4">
            {renderMentions(feedback.content)}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {feedback.hashtags?.map((tag: string) => (
              <span
                key={tag}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <ReactionButton
              icon={<ThumbsUp className="h-4 w-4" />}
              count={feedback.reactions[0]}
              color="bg-blue-100 text-blue-600"
              onClick={() => {onReactionClick(feedback.id, 0); setSelectedReaction("ThumbsUp")}}
            />
            <ReactionButton
              icon={<Zap className="h-4 w-4" />}
              count={feedback.reactions[1]}
              color="bg-yellow-100 text-yellow-600"
              onClick={() => onReactionClick(feedback.id, 1)}
            />
            <ReactionButton
              icon={<Lightbulb className="h-4 w-4" />}
              count={feedback.reactions[2]}
              color="bg-green-100 text-green-600"
              onClick={() => onReactionClick(feedback.id, 2)}
            />
            <ReactionButton
              icon={<Smile className="h-4 w-4" />}
              count={feedback.reactions[3]}
              color="bg-orange-100 text-orange-600"
              onClick={() => onReactionClick(feedback.id, 3)}
            />
            {feedback.reactions[4] > 0 && (
              <ReactionButton
                icon={<MessageCircle className="h-4 w-4" />}
                count={feedback.reactions[4]}
                color="bg-purple-100 text-purple-600"
                onClick={() => onReactionClick(feedback.id, 4)}
              />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}