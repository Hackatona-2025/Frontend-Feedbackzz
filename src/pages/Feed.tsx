"use client";

import { useState, useEffect } from "react";
import FeedbackCard from "@/components/FeedbackCard";
import TabSelector from "@/components/TabSelector";
import feedbackService from "@/services/feedbackService";
import type { Feedback } from "@/services/feedbackService";
import { toast } from "sonner";

export default function Feed() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeedbacks() {
      try {
        setLoading(true);
        const data = await feedbackService.getAllFeedbacks();
        setFeedbacks(data);
      } catch (error) {
        toast.error("Erro ao carregar feedbacks");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadFeedbacks();
  }, []);

  const handleReaction = async (
    feedbackId: string, 
    reactionType: "THUMBS_UP" | "THUMBS_DOWN" | "LIGHT_BULB" | "SAD_FACE" | "THUNDER"
  ) => {
    try {
      await feedbackService.addReaction(feedbackId, reactionType);
      // Recarregar feedbacks após adicionar reação
      const updatedFeedbacks = await feedbackService.getAllFeedbacks();
      setFeedbacks(updatedFeedbacks);
      toast.success("Reação adicionada!");
    } catch (error) {
      toast.error("Erro ao adicionar reação");
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full max-w-screen overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
      <TabSelector />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback) => (
            <FeedbackCard
              key={feedback.id}
              feedback={feedback}
              onReactionClick={handleReaction}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">Nenhum feedback encontrado</p>
          </div>
        )}
      </div>
    </div>
  );
}
