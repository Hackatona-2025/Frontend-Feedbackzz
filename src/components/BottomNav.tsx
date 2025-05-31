import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Newspaper,
  Brain,
  ShoppingCart,
  Settings,
  PlusCircle,
} from "lucide-react";
import AddFeedbackDialog from "./AddFeedbackDialog";
import authService from "@/services/authService";

interface BottomNavProps {
  onSelect: (tab: string) => void;
}

export default function BottomNav({ onSelect }: BottomNavProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  const currentUser = authService.getCurrentUser();
  const isAdmin = currentUser?.role === 'ADMIN';

  const tabs = [
    { label: "Feed", icon: Newspaper, path: "/" },
    { label: "AI", icon: Brain, path: "/ai-analysis" },
    { label: "Add", icon: PlusCircle, isAdd: true },
    { label: "Store", icon: ShoppingCart, path: "/store" },
    ...(isAdmin ? [{ label: "Admin", icon: Settings, path: "/admin/groups" }] : []),
  ];

  const handleClick = (tab: (typeof tabs)[0]) => {
    if (tab.isAdd) {
      setDialogOpen(true);
    } else if (tab.path) {
      onSelect(tab.label);
      navigate(tab.path);
    }
  };

  return (
    <>
      <nav className="sticky bottom-0 bg-gradient-to-br from-slate-800 to-slate-700 text-white flex justify-around py-2 border-t border-[#2d3a4f] z-50">
        {tabs.map((tab, i) => (
          <div
            key={i}
            onClick={() => handleClick(tab)}
            className={`relative text-center cursor-pointer transition-colors p-2 rounded-md hover:bg-[#2d3a4f] flex-1 max-w-[80px] ${
              location.pathname === tab.path ? "text-violet-400" : ""
            }`}
          >
            <tab.icon
              className={`w-6 h-6 mx-auto ${tab.isAdd ? "text-green-400" : ""}`}
            />
            <div className="text-[10px] sm:text-xs mt-1 truncate">
              {tab.label}
            </div>
          </div>
        ))}
      </nav>
      <AddFeedbackDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
