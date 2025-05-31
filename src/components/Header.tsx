import { Menu } from "lucide-react"
import { DisplayCoins } from "./DisplayCoins";
function Header() {
  return (
    <div className="flex items-center justify-between bg-[#1e293b] p-4">
      <Menu className="text-white" size={24} />
      <h2 className="text-white text-2xl font-semibold">FeedBackz</h2>
      <DisplayCoins coins={310} />
    </div>
  );
}

export default Header;
