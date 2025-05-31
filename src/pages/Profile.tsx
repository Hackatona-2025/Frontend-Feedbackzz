import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Profile() {
  return (
    <div className="w-screen max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Profile</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card className="w-full">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl">User Profile</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Avatar className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="text-lg sm:text-xl">U</AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left w-full">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">User Name</h2>
                <p className="text-sm sm:text-base text-muted-foreground">user@email.com</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl">Statistics</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-secondary rounded-lg">
                <p className="text-sm text-muted-foreground">Feedbacks Given</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <p className="text-sm text-muted-foreground">Points Earned</p>
                <p className="text-2xl font-bold">1,250</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
