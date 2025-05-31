import { useLocation, useNavigate } from 'react-router-dom';
import { Newspaper, Brain, User, ShoppingCart, Settings } from 'lucide-react';

interface BottomNavProps {
  onSelect: (tab: string) => void;
}

export default function BottomNav({ onSelect }: BottomNavProps) {
  const location = useLocation();
  const navigate = useNavigate();
  
  const tabs = [
    { label: 'Feed', icon: Newspaper, path: '/' },
    { label: 'AI', icon: Brain, path: '/ai-analysis' },
    { label: 'Profile', icon: User, path: '/profile' },
    { label: 'Store', icon: ShoppingCart, path: '/store' },
    { label: 'Admin', icon: Settings, path: '/admin/groups' }
  ];

  const handleClick = (tab: typeof tabs[0]) => {
    onSelect(tab.label);
    navigate(tab.path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1e293b] text-white flex justify-around py-2 border-t border-[#2d3a4f] z-50">
      {tabs.map((tab, i) => (
        <div 
          key={i} 
          onClick={() => handleClick(tab)} 
          className={`relative text-center cursor-pointer transition-colors p-2 rounded-md hover:bg-[#2d3a4f] flex-1 max-w-[80px] ${
            location.pathname === tab.path ? 'text-violet-400' : ''
          }`}
        >
          <tab.icon className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" />
          <div className="text-[10px] sm:text-xs mt-1 truncate">{tab.label}</div>
        </div>
      ))}
    </nav>
  );
}
