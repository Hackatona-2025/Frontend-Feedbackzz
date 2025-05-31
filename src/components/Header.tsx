import { DisplayCoins } from "./DisplayCoins"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/20 bg-gradient-to-br from-slate-800 to-slate-700 supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-1 sm:space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-pink-600 to-purple-600">
            <span className="text-sm font-bold text-white">F</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-pink-300 to-blue-600 bg-clip-text text-transparent">
            FeedBackz
          </h1>
        </div>

        <div className="flex items-center gap-2 sm:space-x-4">
          <DisplayCoins coins={310} />
          <Link to="/profile" className="transition-transform hover:scale-105">
            <Avatar className="h-9 w-9 ring-2 ring-slate-200 hover:ring-slate-300 transition-all">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="bg-gradient-to-br from-slate-100 to-slate-200 text-slate-700 text-sm font-medium">
                CN
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
