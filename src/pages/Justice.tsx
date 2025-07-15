
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale } from "lucide-react";

const Justice = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Scale className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Justice</h1>
          <p className="text-xl text-muted-foreground">Restorative & Transformative Systems</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Restorative</Badge>
        <Badge variant="secondary">Transformative</Badge>
        <Badge variant="secondary">Community-Rooted</Badge>
        <Badge variant="secondary">Healing-Centered</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reimagining Justice Through Dignity</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            The justice proposal reimagines law, accountability, and rehabilitation through the lens of dignity, healing, 
            and systemic coherence. Rather than relying on punitive incarceration models that isolate, dehumanize, and 
            often exacerbate harm, this framework advocates for a transition toward restorative, transformative, and 
            community-rooted justice systems.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Justice;
