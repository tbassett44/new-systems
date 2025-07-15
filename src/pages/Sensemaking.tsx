
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain } from "lucide-react";

const Sensemaking = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Brain className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Collective Sensemaking and Governance</h1>
          <p className="text-xl text-muted-foreground">AI-Enhanced Civic Intelligence</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Civic Intelligence</Badge>
        <Badge variant="secondary">AI-Enhanced</Badge>
        <Badge variant="secondary">Participatory</Badge>
        <Badge variant="secondary">Adaptive Governance</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>New Form of Civic Intelligence</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            The collective sensemaking proposal introduces a new form of civic intelligence—one that harnesses AI to 
            surface the deeper patterns, needs, and perceptions emerging within society. In a time marked by fragmentation, 
            misinformation, and disconnection between people and institutions, this system enables communities to respond 
            not just to headlines or polls, but to the underlying stories shaping our collective reality.
          </p>
          <p className="leading-relaxed">
            By asking strategic, reflective questions and analyzing large-scale qualitative responses, we can build a 
            living, participatory dataset that reveals where attention, care, and resources are most needed.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sensemaking;
