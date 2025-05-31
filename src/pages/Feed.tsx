import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Switch } from '../components/ui/switch';
import FeedbackCard from '../components/FeedbackCard';

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
      id: '1',
      title: 'Melhorias no processo de deploy',
      content: 'Sugiro implementarmos um processo de CI/CD mais robusto @tech-lead #devops #improvement',
      author: 'João Silva',
      isAnonymous: false,
      mentions: ['tech-lead'],
      hashtags: ['devops', 'improvement'],
      reactions: [5, 2, 1, 0, 1],
      createdAt: '2024-03-20T10:00:00Z'
    },
    {
      id: '2',
      title: 'Feedback sobre a última sprint',
      content: 'A comunicação entre os times precisa melhorar #teamwork #communication',
      author: 'Anonymous',
      isAnonymous: true,
      mentions: [],
      hashtags: ['teamwork', 'communication'],
      reactions: [3, 1, 2, 1, 0],
      createdAt: '2024-03-19T15:30:00Z'
    }
  ]);

  const [newFeedback, setNewFeedback] = useState({
    title: '',
    content: '',
    isAnonymous: false,
    mentions: [] as string[],
    hashtags: [] as string[]
  });

  const handleCreateFeedback = () => {
    // Extract mentions and hashtags
    const mentions = newFeedback.content.match(/@\w+/g)?.map(m => m.slice(1)) || [];
    const hashtags = newFeedback.content.match(/#\w+/g)?.map(h => h.slice(1)) || [];

    const feedback: Feedback = {
      id: Date.now().toString(),
      title: newFeedback.title,
      content: newFeedback.content,
      author: newFeedback.isAnonymous ? 'Anonymous' : 'Current User', // Replace with actual user
      isAnonymous: newFeedback.isAnonymous,
      mentions,
      hashtags,
      reactions: [0, 0, 0, 0, 0],
      createdAt: new Date().toISOString()
    };

    setFeedbacks([feedback, ...feedbacks]);
    setNewFeedback({
      title: '',
      content: '',
      isAnonymous: false,
      mentions: [],
      hashtags: []
    });
  };

  const handleReaction = (feedbackId: string, reactionIndex: number) => {
    setFeedbacks(feedbacks.map(feedback => {
      if (feedback.id === feedbackId) {
        const newReactions = [...feedback.reactions];
        newReactions[reactionIndex]++;
        return { ...feedback, reactions: newReactions };
      }
      return feedback;
    }));
  };

  return (
    <div className="space-y-6 py-6">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full">Criar Feedback</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Criar Novo Feedback</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                value={newFeedback.title}
                onChange={(e) => setNewFeedback({ ...newFeedback, title: e.target.value })}
                placeholder="Digite o título do feedback"
              />
            </div>
            <div>
              <Label htmlFor="content">Conteúdo</Label>
              <Textarea
                id="content"
                value={newFeedback.content}
                onChange={(e) => setNewFeedback({ ...newFeedback, content: e.target.value })}
                placeholder="Digite seu feedback. Use @ para mencionar pessoas e # para hashtags"
                className="min-h-[150px]"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="anonymous"
                checked={newFeedback.isAnonymous}
                onCheckedChange={(checked) => setNewFeedback({ ...newFeedback, isAnonymous: checked })}
              />
              <Label htmlFor="anonymous">Postar anonimamente</Label>
            </div>
            <Button onClick={handleCreateFeedback} className="w-full">
              Publicar Feedback
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="space-y-4">
        {feedbacks.map((feedback) => (
          <FeedbackCard
            key={feedback.id}
            feedback={feedback}
            onReaction={handleReaction}
          />
        ))}
      </div>
    </div>
  );
} 