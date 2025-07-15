
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette } from "lucide-react";

const Arts = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Palette className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Arts and Culture</h1>
          <p className="text-xl text-muted-foreground">Creativity as Public Good</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Public Good</Badge>
        <Badge variant="secondary">Cultural Healing</Badge>
        <Badge variant="secondary">Community-Supported</Badge>
        <Badge variant="secondary">Regenerative</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Creativity as Catalytic Force</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            The arts and culture proposal reframes creativity as a public good and catalytic force for regeneration, 
            healing, and coherence. In contrast to a commodified culture industry that often extracts meaning for profit, 
            this framework envisions a thriving cultural ecosystem where artists, musicians, performers, storytellers, 
            and tradition-bearers are supported as core agents of societal evolution.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Arts;
