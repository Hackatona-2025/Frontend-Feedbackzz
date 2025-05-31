import { useEffect, useState } from "react";


export default function TabSelector() {
  const [activeTab, setActiveTab] = useState<number>();
  const [tabs, setTabs] = useState<string[]>();

  const onHandleGroupClick = () => {
    //implementar chamada para trocar aba
  }

  const getAllGroups = async () => {
    //implementar chamada de buscar groups
    const data = ["data"]; //passar final da resposta
    setTabs(data);
  }

  useEffect(() => {
    getAllGroups();
  }, []);

  return (
    <div className="bg-white border-b border-gray-50 px-4 py-2 mt-4">
      <div className="flex gap-2 overflow-x-auto">
        {tabs?.map((tab: string, index: number) => (
          <button key={index} onClick={() => { setActiveTab(index); onHandleGroupClick(); }} className={`${activeTab === index ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-gray-50"} text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gray-200 whitespace-nowrap hover:scale-105`}>
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
