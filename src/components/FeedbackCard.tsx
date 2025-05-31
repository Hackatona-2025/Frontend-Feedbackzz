import ReactionBar from "./ReactionBar";

interface FeedbackCardProps {
  title: string;
  description: string;
  reactions: number[];
}

export default function FeedbackCard({ title, description, reactions }: FeedbackCardProps) {
  return (
    <div className="bg-[#334155] p-4 rounded-xl text-white my-2">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-lg">{title}</h2>
        <span>⚠️</span>
      </div>
      <p className="text-sm">{description}</p>
      <ReactionBar reactions={reactions} />
    </div>
  );
}
