
interface StoreNavBarProps {
  points: number;
}
export default function StoreNavBar({ points }: StoreNavBarProps) {
  return (
    <header className="bg-[#202946] flex items-center justify-between px-4 py-3">
      <button>
        <svg width={28} height={28} fill="none" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h20M4 16h20"/></svg>
      </button>
      <span className="text-white font-bold text-lg">FeedBackz</span>
      <div className="flex items-center space-x-1 bg-[#293256] px-3 py-1 rounded-full">
        <span className="text-yellow-400">🪙</span>
        <span className="text-white font-semibold">{points}</span>
      </div>
    </header>
  );
}
