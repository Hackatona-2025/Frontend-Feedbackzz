import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function Layout() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    switch (path) {
      case 'AI':
        navigate('/ai-analysis');
        break;
      case 'Profile':
        navigate('/profile');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Header />
      <main className="container mx-auto px-4 py-6 pb-20">
        <Outlet />
      </main>
      <BottomNav onSelect={handleNavigation} />
    </div>
  );
} 