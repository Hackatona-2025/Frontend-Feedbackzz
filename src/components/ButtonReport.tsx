import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Flag } from "lucide-react"

export function ButtonReport() {
  const [clicked, onClick] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button
        className="bg-black hover:bg-black text-white border border-red-500"
        onClick={() => onClick(!clicked)}
        >
    <Flag
    className={`h-5 w-5 transition-colors duration-200 ${
      clicked ? "!text-red-500" : "!text-white"
    }`}
  />
</Button>

    </div>
  )
}
