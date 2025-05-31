import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import feedbackService from "@/services/feedbackService";
import authService from "@/services/authService";
import { toast } from "sonner";

interface AddFeedbackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddFeedbackDialog({ open, onOpenChange }: AddFeedbackDialogProps) {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  // Função para criar um novo feedback
  async function handleCreateFeedback() {
    try {
      setLoading(true);
      
      // Obter o usuário atual
      const currentUser = authService.getCurrentUser();
      
      if (!currentUser) {
        toast.error("Você precisa estar logado para enviar um feedback");
        return;
      }
      
      if (!content.trim()) {
        toast.error("O conteúdo do feedback não pode estar vazio");
        return;
      }

      // Criar o objeto de feedback
      const feedbackData = {
        content: content.trim(),
        authorId: currentUser.id,
        isAnonymous: isAnonymous,
        // Não incluir groupId para evitar erro de chave estrangeira
      };

      await feedbackService.createFeedback(feedbackData);
      
      toast.success("Feedback enviado com sucesso!");
      
      // Limpar o formulário e fechar o diálogo
      setContent("");
      setIsAnonymous(false);
      onOpenChange(false);
    } catch (error) {
      console.error("Erro ao criar feedback:", error);
      toast.error("Não foi possível enviar o feedback. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-2xl mx-auto">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">Criar Novo Feedback</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 max-h-[70vh] overflow-y-auto">
          <div>
            <Label htmlFor="content" className="text-sm sm:text-base">
              Conteúdo
            </Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Digite seu feedback. Use @ para mencionar pessoas e # para hashtags"
              className="min-h-[120px] sm:min-h-[150px] mt-1 text-sm sm:text-base"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="anonymous"
              checked={isAnonymous}
              onCheckedChange={setIsAnonymous}
            />
            <Label htmlFor="anonymous" className="text-sm sm:text-base">
              Postar anonimamente
            </Label>
          </div>
          <Button 
            onClick={handleCreateFeedback} 
            className="w-full text-sm sm:text-base"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Publicar Feedback"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
