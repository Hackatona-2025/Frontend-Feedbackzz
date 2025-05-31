interface BottomNavProps {
  selectedTab: number;
  onSelect: (tab: string) => void;
}

export default function BottomNav({  onSelect }: BottomNavProps) {
  const tabs = [
    { label: 'carrinho', icon: '🛒' },
    { label: 'grupo 2', icon: '⭐', badge: 2 },
    { label: 'psicologia', icon: '🧠' },
    { label: 'perfil', icon: '👤' },
    { label: 'grupo 3', icon: '⭐', badge: 3 },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1e293b] flex justify-around py-2">
      {tabs.map((tab, i) => (
        <div key={i} onClick={() => onSelect(tab.label)} className="relative text-center text-white">
          <span>{tab.icon}</span>
          <div className="text-xs">{tab.label}</div>
          {tab.badge && (
            <span className="absolute -top-1 right-0 bg-violet-500 rounded-full px-1 text-xs">
              {tab.badge}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
