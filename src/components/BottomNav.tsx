import { useLocation, useNavigate } from "react-router-dom";

interface BottomNavProps {
  onSelect: (tab: string) => void;
}

export default function BottomNav({ onSelect }: BottomNavProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { label: "Feed", icon: "📝", path: "/" },
    { label: "AI", icon: "🤖", path: "/ai-analysis" },
    { label: "Profile", icon: "👤", path: "/profile" },
    { label: "Store", icon: "🛒", path: "/store" },
    { label: "Admin", icon: "🔧", path: "/admin/groups" },
  ];

  const handleClick = (tab: (typeof tabs)[0]) => {
    onSelect(tab.label);
    navigate(tab.path);
  };

  return (
    <nav className="sticky bottom-0 left-0 right-0 bg-[#1e293b] text-white flex justify-around py-2 border-t border-[#2d3a4f]">
      {tabs.map((tab, i) => (
        <div
          key={i}
          onClick={() => handleClick(tab)}
          className={`relative text-center cursor-pointer transition-colors p-2 rounded-md hover:bg-[#2d3a4f] ${
            location.pathname === tab.path ? "text-violet-400" : ""
          }`}
        >
          <span className="text-xl">{tab.icon}</span>
          <div className="text-xs mt-1">{tab.label}</div>
        </div>
      ))}
    </nav>
  );
}
