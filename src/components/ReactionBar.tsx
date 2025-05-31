interface ReactionBarProps {
  reactions: number[];
}


export default function ReactionBar({ reactions }: ReactionBarProps) {
  const icons = ['👍', '⚡', '💡', '😐', '👎'];
  return (
    <div className="flex justify-around mt-3">
      {reactions.map((count: number, i: number) => (
        <div key={i} className="flex items-center gap-1">
          <span>{icons[i]}</span>
          <span>{count}</span>
        </div>
      ))}
    </div>
  );
}
