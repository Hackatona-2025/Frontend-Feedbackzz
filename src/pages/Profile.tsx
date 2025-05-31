import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-white">Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">User Name</h2>
              <p className="text-muted-foreground">user@email.com</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 