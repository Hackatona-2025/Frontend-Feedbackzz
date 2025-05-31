import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export default function Layout() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    switch (path) {
      case "AI":
        navigate("/ai-analysis");
        break;
      case "Profile":
        navigate("/profile");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full bg-gray-50 text-gray-900">
        <Outlet />
      </main>
      <BottomNav onSelect={handleNavigation} />
    </div>
  );
}
