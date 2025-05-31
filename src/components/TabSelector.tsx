interface TabSelectorProps {
  activeTab: number;
  onChange: (tabIndex: number) => void;
}

export default function TabSelector({ activeTab, onChange }: TabSelectorProps) {
  const tabs = ['grupo 1', 'grupo 2', 'grupo 3'];

  return (
    <div className="flex gap-2 px-4">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`rounded-full px-4 py-2 font-medium ${
            activeTab === index ? 'bg-violet-500 text-white' : 'bg-gray-600 text-white'
          }`}
          onClick={() => onChange(index)}
        >
          ⭐ {tab}
        </button>
      ))}
    </div>
  );
}
