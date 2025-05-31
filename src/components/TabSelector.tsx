import { Button } from "./ui/button";

interface TabSelectorProps {
  activeTab: number;
  onChange: (tabIndex: number) => void;
}

export default function TabSelector({ activeTab, onChange }: TabSelectorProps) {
  const tabs = ['grupo 1', 'grupo 2', 'grupo 3'];

  return (
    <div className="w-full overflow-x-auto flex gap-2 px-4">
      {tabs.map((tab, index) => (
        <Button
          key={tab}
          className={`bg-[#1e293b] text-white ${activeTab === index ? 'bg-violet-500' : ''} flex-1`}
          onClick={() => onChange(index)}
        >
          ⭐ {tab}
        </Button>
      ))}
    </div>
  );
}
