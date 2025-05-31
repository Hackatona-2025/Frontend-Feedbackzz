import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GroupManagement() {
  return (
    <div className="w-max space-y-4">
      <h1 className="text-2xl font-bold text-white">Group Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Groups</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button>Create New Group</Button>
            {/* Add group list here */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 