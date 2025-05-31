import { Coins } from "lucide-react"

export function DisplayCoins({ coins }: { coins: number }) {
  return (
    <div className="flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200/50 rounded-full">
      <div className="flex items-center justify-center w-5 h-5 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full">
        <Coins size={12} className="text-white" />
      </div>
      <span className="text-amber-700 text-sm font-semibold tabular-nums">{coins.toLocaleString()}</span>
    </div>
  )
}
