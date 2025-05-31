import { Coins } from "lucide-react";

export function DisplayCoins({ coins }: { coins: number }) {
  return (
    <div className="flex items-center justify-end p-2 bg-[#334155] rounded-4xl shadow-lg">
      <Coins size={18} className="fill-amber-400" />
      <span className="text-white text-sm font-semibold ml-2">{coins}</span>
    </div>
  );
}
