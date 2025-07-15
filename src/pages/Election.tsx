
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Vote } from "lucide-react";

const Election = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Vote className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Regenerative Election</h1>
          <p className="text-xl text-muted-foreground">Creating a Stage for Democratic Dialogue</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Democratic Renewal</Badge>
        <Badge variant="secondary">Participatory</Badge>
        <Badge variant="secondary">Values-Aligned</Badge>
        <Badge variant="secondary">Co-Creation</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Visionary Approach to Democratic Renewal</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            The Regenerative Election offers a visionary yet grounded approach to democratic renewal—by operating outside 
            the constraints of the existing electoral system, it creates the freedom to prototype what participatory, 
            trust-rich, and values-aligned politics could look like. Rather than reacting to a broken structure, it builds 
            a living alternative: one rooted in dialogue, transparency, and wellbeing.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Election;
