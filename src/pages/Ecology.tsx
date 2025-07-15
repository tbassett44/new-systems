
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf } from "lucide-react";

const Ecology = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Leaf className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Ecological Regeneration Infrastructure</h1>
          <p className="text-xl text-muted-foreground">Bioregional Earth Stewardship</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Bioregional</Badge>
        <Badge variant="secondary">Earth Stewardship</Badge>
        <Badge variant="secondary">Ecosystem Restoration</Badge>
        <Badge variant="secondary">Verified Impact</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Restoring Earth's Living Systems</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            The ecological regeneration proposal outlines a bioregionally anchored system to restore the health of 
            Earth's living systems through decentralized coordination, transparent funding, and verified impact. 
            Grounded in the principles of mutual thriving and aligned with the Endo Economics model, this framework 
            enables communities to steward their watersheds, forests, soils, and coastlines using a blend of traditional 
            knowledge, local governance, and digital tools.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ecology;
