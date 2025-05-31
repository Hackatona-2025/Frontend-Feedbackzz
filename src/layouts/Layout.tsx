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
    <div className="w-screen min-h-screen h-full bg-[#0f172a] text-white relative">
      <Header />
      <main className="w-full pt-[0px]">
        <Outlet />
      </main>
      <BottomNav onSelect={handleNavigation} />
    </div>
  );
}
