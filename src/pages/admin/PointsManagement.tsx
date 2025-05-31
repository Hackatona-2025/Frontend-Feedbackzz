import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PointsManagement() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-white">Points Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>User Points</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Add points management UI here */}
            <Button>Update Points</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 