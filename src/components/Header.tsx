import { DisplayCoins } from "./DisplayCoins";
function Header() {
  return (
    <div className="flex sticky top-0 items-center justify-around bg-[#1e293b] p-4">
      <h2 className="flex text-white text-2xl justify-center font-semibold">FeedBackz</h2>
      <DisplayCoins coins={310} />
    </div>
  );
}

export default Header;
