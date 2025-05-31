import { Button } from "./ui/button";

interface TabSelectorProps {
  activeTab: number;
  onChange: (tabIndex: number) => void;
}

export default function TabSelector({ activeTab, onChange }: TabSelectorProps) {
  const tabs = ["grupo 1", "grupo 2", "grupo 3", "grupo 4", "grupo 5"];

  return (
    <div className="w-full overflow-x-auto flex gap-8 px-4">
      {tabs.map((tab, index) => (
        <Button
          key={index}
          className={`!bg-[#334155] text-white !rounded-xl ${activeTab === index ? "!bg-violet-500" : ""}`}
          onClick={() => onChange(index)}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
}
