interface PointsCardProps {
  points: number;
}

export default function PointsCard({ points }: PointsCardProps) {
  return (
    <div className="flex items-center bg-[#253159] px-8 py-3 rounded-2xl mb-2 shadow-md">
      <span className="text-yellow-400 text-xl mr-2">🪙</span>
      <span className="text-white font-bold text-lg">{points} pontos</span>
    </div>
  );
}
