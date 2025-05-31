import { DisplayCoins } from "./DisplayCoins";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex sticky top-0 items-center justify-around bg-gradient-to-br from-slate-800 to-slate-700 p-4">
      <h2 className="flex text-white text-2xl justify-center font-semibold">FeedBackz</h2>
      <div className="flex items-center gap-4">
        <DisplayCoins coins={310} />
        <Link to="/profile">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
}

export default Header;
