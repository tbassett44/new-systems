
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skull } from "lucide-react";

const Death = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Skull className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Death and Dignity</h1>
          <p className="text-xl text-muted-foreground">Conscious Relationship with Life's Final Passage</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Conscious Dying</Badge>
        <Badge variant="secondary">Dignity</Badge>
        <Badge variant="secondary">Self-Sovereignty</Badge>
        <Badge variant="secondary">Sacred Transition</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reclaiming Conscious Relationship with Death</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            Modern systems often treat death as a failure—something to be avoided, hidden, or medicalized into oblivion. 
            In doing so, we strip it of its sacredness, its potential for meaning, and the agency of those experiencing it. 
            A regenerative civilization must not only rethink how we live, but also how we die—with dignity, presence, and choice.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Death;
