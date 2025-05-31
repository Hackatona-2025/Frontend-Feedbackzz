import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar } from "lucide-react"

interface CarouselDemoProps {
  groups?: Group[]
}

export interface Group {
  id: string
  name: string
  membersCount: number
  description?: string
  createdAt?: string
}

export function GroupCards({ groups = [] }: CarouselDemoProps) {
  if (groups.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-64">
        <div className="text-center">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No groups available</p>
          <p className="text-gray-400 text-sm">Create your first group to get started</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="flex justify-center items-center flex-wrap gap-4 overflow-y-auto">
        {groups.map((group) => (
          <Card
            key={group.id}
            className="w-[220px] h-[200px] hover:shadow-lg transition-shadow duration-200 cursor-pointer group flex-shrink-0"
          >
            <CardContent className="flex flex-col items-center justify-center h-full p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <Users className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-center mb-2">{group.name}</h3>

              <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                <Users className="h-4 w-4" />
                <span>
                  {group.membersCount} member{group.membersCount !== 1 ? "s" : ""}
                </span>
              </div>

              {group.description && (
                <p className="text-xs text-gray-400 text-center mb-2">{group.description}</p>
              )}

              {group.createdAt && (
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(group.createdAt).toLocaleDateString()}</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
