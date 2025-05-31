import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Newspaper, Brain, ShoppingCart, Settings, PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";

interface BottomNavProps {
  onSelect: (tab: string) => void;
}

export default function BottomNav({ onSelect }: BottomNavProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

  const tabs = [
    { label: "Feed", icon: Newspaper, path: "/" },
    { label: "AI", icon: Brain, path: "/ai-analysis" },
    { label: "Add", icon: PlusCircle, isAdd: true },
    { label: "Store", icon: ShoppingCart, path: "/store" },
    { label: "Admin", icon: Settings, path: "/admin/groups" },
  ];

  const handleClick = (tab: typeof tabs[0]) => {
    if (tab.isAdd) {
      setDialogOpen(true);
    } else if (tab.path) {
      onSelect(tab.label);
      navigate(tab.path);
    }
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-br from-slate-800 to-slate-700 text-white flex justify-around py-2 border-t border-[#2d3a4f] z-50">
        {tabs.map((tab, i) => (
          <div
            key={i}
            onClick={() => handleClick(tab)}
            className={`relative text-center cursor-pointer transition-colors p-2 rounded-md hover:bg-[#2d3a4f] flex-1 max-w-[80px] ${
              location.pathname === tab.path ? "text-violet-400" : ""
            }`}
          >
            <tab.icon className={`w-6 h-6 mx-auto ${tab.isAdd ? "text-green-400" : ""}`} />
            <div className="text-[10px] sm:text-xs mt-1 truncate">{tab.label}</div>
          </div>
        ))}
      </nav>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Adicionar feedback</DialogTitle>
            <DialogDescription>
             Adicione um feedback para um colaborador.
            </DialogDescription>
          </DialogHeader>
          <form>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input id="username-1" name="username" defaultValue="@peduarte" />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" type="button">Cancelar</Button>
              </DialogClose>
              <Button type="submit">Adicionar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
