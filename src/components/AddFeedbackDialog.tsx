import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";

interface AddFeedbackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type NewFeedback = {
  title: string;
  content: string;
  isAnonymous: boolean;
};

export default function AddFeedbackDialog({ open, onOpenChange }: AddFeedbackDialogProps) {
  const [newFeedback, setNewFeedback] = useState<NewFeedback>({
    title: "",
    content: "",
    isAnonymous: false,
  });

  // Exemplo de handle de publicação (você pode integrar API, etc.)
  function handleCreateFeedback() {
    setNewFeedback({ title: "", content: "", isAnonymous: false });
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-2xl mx-auto z-[999]">
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
              className="mt-1 text-sm sm:text-base shadow-lg"
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
              className="min-h-[120px] sm:min-h-[150px] mt-1 text-sm sm:text-base shadow-lg"
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
          <Button onClick={handleCreateFeedback} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-sm sm:text-base">
            Publicar Feedback
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
