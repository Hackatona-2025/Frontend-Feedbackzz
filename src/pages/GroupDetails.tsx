import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router-dom";

export default function GroupDetails() {
  const { groupId } = useParams();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-white">Group Details</h1>
      <Card>
        <CardHeader>
          <CardTitle>Group {groupId}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Add group details here */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 