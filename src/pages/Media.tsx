
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Radio } from "lucide-react";

const Media = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Radio className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Media</h1>
          <p className="text-xl text-muted-foreground">Regenerative & Participatory</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Decentralized</Badge>
        <Badge variant="secondary">Truth-Oriented</Badge>
        <Badge variant="secondary">Community-Rooted</Badge>
        <Badge variant="secondary">Participatory</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reclaiming Narrative as Public Good</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            The media proposal reclaims narrative, attention, and trust as public goods by building a decentralized, 
            participatory, and regenerative media infrastructure. In contrast to the current landscape—dominated by 
            corporate ownership, algorithmic bias, and sensationalism—this framework supports locally-rooted storytelling, 
            distributed editorial networks, and feedback-integrated sensemaking systems.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Media;
