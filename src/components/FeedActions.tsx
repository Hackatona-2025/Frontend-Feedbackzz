import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { EllipsisVertical } from "lucide-react"

export function FeedActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          className="text-sm mb-3 bg-black-700"
        >
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Ações</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Reportar
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
