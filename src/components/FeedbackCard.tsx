import { Card, CardContent } from "./ui/card";
import { MessageCircle, ThumbsUp, Zap, Lightbulb, Smile } from "lucide-react";
import { ReactionButton } from "./ReactionButton";
import type { Feedback } from "@/services/feedbackService";

interface FeedbackCardProps {
  feedback: Feedback;
  onReactionClick: (feedbackId: string, reactionType: "THUMBS_UP" | "THUMBS_DOWN" | "LIGHT_BULB" | "SAD_FACE" | "THUNDER") => void;
}

export default function FeedbackCard({ feedback, onReactionClick }: FeedbackCardProps) {
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "Data inválida";
    }
  };

  const renderContent = (content: string) => {
    if (!content) return "";
    
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

  // Extrair hashtags do conteúdo
  const extractTags = (content: string): string[] => {
    if (!content) return [];
    
    return content.split(" ")
      .filter(word => word.startsWith("#"))
      .map(tag => tag.substring(1));
  };

  const hashtags = extractTags(feedback.content || "");

  // Contagem de reações (placeholder até implementarmos reações reais)
  const reactionCounts = {
    THUMBS_UP: 0,
    THUMBS_DOWN: 0,
    LIGHT_BULB: 0,
    SAD_FACE: 0,
    THUNDER: 0
  };

  // Obter a primeira letra do ID do autor se não tiver nome
  const getAuthorInitial = () => {
    if (feedback.isAnonymous) return "...";
    
    // Tentar obter a inicial do ID do autor (fallback seguro)
    if (feedback.authorId) return feedback.authorId.charAt(0).toUpperCase();
    
    return "?";
  };

  return (
    <div className="p-4 space-y-4">
      <Card
        key={feedback.id}
        className="hover:shadow-lg transition-shadow duration-200"
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {getAuthorInitial()}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  Feedback
                </h3>
                <p className="text-sm text-gray-500">
                  {feedback.isAnonymous ? "Anônimo" : feedback.authorId} •{" "}
                  {formatDate(feedback.createdAt || new Date().toString())}
                </p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MessageCircle className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          <p className="text-gray-700 mb-4">
            {renderContent(feedback.content || "")}
          </p>

          {hashtags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {hashtags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            <ReactionButton
              icon={<ThumbsUp className="h-4 w-4" />}
              count={reactionCounts.THUMBS_UP}
              color="bg-blue-100 text-blue-600"
              onClick={() => onReactionClick(feedback.id, "THUMBS_UP")}
            />
            <ReactionButton
              icon={<Zap className="h-4 w-4" />}
              count={reactionCounts.THUNDER}
              color="bg-yellow-100 text-yellow-600"
              onClick={() => onReactionClick(feedback.id, "THUNDER")}
            />
            <ReactionButton
              icon={<Lightbulb className="h-4 w-4" />}
              count={reactionCounts.LIGHT_BULB}
              color="bg-green-100 text-green-600"
              onClick={() => onReactionClick(feedback.id, "LIGHT_BULB")}
            />
            <ReactionButton
              icon={<Smile className="h-4 w-4" />}
              count={reactionCounts.SAD_FACE}
              color="bg-orange-100 text-orange-600"
              onClick={() => onReactionClick(feedback.id, "SAD_FACE")}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}