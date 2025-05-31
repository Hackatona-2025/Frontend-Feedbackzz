import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ButtonReport } from './ButtonReport';

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
        <div className="flex items-center">
        <ButtonReport>
        </ButtonReport>
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
