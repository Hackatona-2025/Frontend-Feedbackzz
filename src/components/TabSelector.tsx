import { Button } from "./ui/button";

interface TabSelectorProps {
  activeTab: string;
  onChange: (tabIndex: number) => void;
}

export default function TabSelector({ activeTab, onChange }: TabSelectorProps) {
  const tabs = ["Feed", "Feedbacks", "Reações", "Relatórios"];

  return (
    <div className="bg-white border-b border-gray-50 px-4 py-2 mt-4">
        <div className="flex gap-2 overflow-x-auto">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium whitespace-nowrap">
            Feed
          </button>
          <button className="bg-gray-100 text-gray-600 px-6 py-2 rounded-full font-medium whitespace-nowrap hover:bg-gray-200 transition-colors">
            Feedbacks
          </button>
          <button className="bg-gray-100 text-gray-600 px-6 py-2 rounded-full font-medium whitespace-nowrap hover:bg-gray-200 transition-colors">
            Reações
          </button>
          <button className="bg-gray-100 text-gray-600 px-6 py-2 rounded-full font-medium whitespace-nowrap hover:bg-gray-200 transition-colors">
            Relatórios
          </button>
        </div>
      </div>
  );
}
