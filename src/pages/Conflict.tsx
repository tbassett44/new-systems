
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

const Conflict = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Users className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Conflict Transformation</h1>
          <p className="text-xl text-muted-foreground">Restorative Processes for All</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Restorative</Badge>
        <Badge variant="secondary">Proactive</Badge>
        <Badge variant="secondary">Community-Based</Badge>
        <Badge variant="secondary">Growth-Oriented</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>From Suppression to Restoration</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            This proposal reimagines how individuals and communities engage with conflict—shifting from suppression 
            or punishment to proactive, relational repair. By embedding restorative tools in schools, neighborhoods, 
            and digital platforms, we empower people of all ages to name harm, take responsibility, and co-create healing.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Conflict;
