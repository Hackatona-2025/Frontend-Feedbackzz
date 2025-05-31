import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Flag, MoreVertical } from 'lucide-react';

interface FeedbackCardProps {
  feedback: {
    id: string;
    title: string;
    content: string;
    author: string;
    isAnonymous: boolean;
    mentions: string[];
    hashtags: string[];
    reactions: number[];
    createdAt: string;
  };
  onReaction: (feedbackId: string, reactionIndex: number) => void;
}

export default function FeedbackCard({ feedback, onReaction }: FeedbackCardProps) {
  const [showReportDialog, setShowReportDialog] = useState(false);
  const [reportReason, setReportReason] = useState('');

  const handleReport = () => {
    // TODO: Implement report functionality
    console.log('Report submitted:', { feedbackId: feedback.id, reason: reportReason });
    setShowReportDialog(false);
    setReportReason('');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderMentions = (content: string) => {
    return content.split(' ').map((word, index) => {
      if (word.startsWith('@')) {
        return (
          <span key={index} className="text-violet-400">
            {word}{' '}
          </span>
        );
      }
      if (word.startsWith('#')) {
        return (
          <span key={index} className="text-blue-400">
            {word}{' '}
          </span>
        );
      }
      return word + ' ';
    });
  };

  return (
    <Card className="bg-[#334155] text-white">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-lg font-bold">{feedback.title}</CardTitle>
          <div className="text-sm text-gray-400">
            {feedback.isAnonymous ? 'Anonymous' : feedback.author} • {formatDate(feedback.createdAt)}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog open={showReportDialog} onOpenChange={setShowReportDialog}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Flag className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Reportar Feedback</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <textarea
                  className="w-full min-h-[100px] p-2 rounded-md bg-gray-100 text-gray-900"
                  placeholder="Digite o motivo da denúncia..."
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                />
                <Button onClick={handleReport} className="w-full">
                  Enviar Denúncia
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{renderMentions(feedback.content)}</p>
        <div className="flex justify-around">
          {['👍', '⚡', '💡', '😐', '👎'].map((emoji, index) => (
            <button
              key={index}
              onClick={() => onReaction(feedback.id, index)}
              className="flex items-center space-x-1 text-sm hover:text-violet-400 transition-colors"
            >
              <span>{emoji}</span>
              <span>{feedback.reactions[index]}</span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
