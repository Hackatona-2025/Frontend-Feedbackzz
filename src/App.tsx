import Header from '../src/components/Header';
import TabSelector from '../src/components/TabSelector';
import FeedbackCard from '../src/components/FeedbackCard';
import BottomNav from '../src/components/BottomNav';
import { useState } from 'react';

export default function FeedbackPage() {
  const [tab, setTab] = useState<number>(0);

  return (
    <div className="w-screen h-screen bg-[#0f172a]">
      <Header />
      <TabSelector activeTab={tab} onChange={setTab} />
      <div className="px-4">
        <FeedbackCard
          title="Basic dialog title"
          description="A dialog is a type of modal window that appears..."
          reactions={[1, 1, 1, 1, 1]}
        />
        <FeedbackCard
          title="Basic dialog title"
          description="A dialog is a type of modal window that appears..."
          reactions={[1, 0, 1, 1, 1]}
        />
      </div>
      <BottomNav selectedTab={tab} onSelect={(label) => console.log(label)} />
    </div>
  );
}