interface ReactionButtonProps {
  icon: React.ReactNode
  count: number
  color: string
  onClick?: () => void
}

export function ReactionButton({ icon, count, color, onClick }: ReactionButtonProps) {
  return (
    <button
      className={`select-none flex items-center gap-1 px-3 py-1 rounded-full font-medium text-sm hover:opacity-80 transition-opacity ${color}`}
      onClick={onClick}
      type="button"
    >
      {icon}
      <span className="select-none">{count}</span>
    </button>
  )
}