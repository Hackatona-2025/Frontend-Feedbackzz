import { Button } from "./ui/button";

interface TabSelectorProps {
  activeTab: string;
  onChange: (tabIndex: number) => void;
}

export default function TabSelector({ activeTab, onChange }: TabSelectorProps) {
  const tabs = ["Feed", "Feedbacks", "Reações", "Relatórios"];

  const handleTabChange = (index: number) => {

  }

  return (
    <div className="w-full overflow-x-auto flex gap-8 px-4">
      {tabs.map((tab, index) => (
        <Button
          key={index}
          className={`!bg-[#334155] text-white !rounded-xl ${activeTab === tab ? "!bg-violet-500" : ""}`}
          onClick={() => onChange(index)}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
}
