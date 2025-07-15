
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const Spirituality = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Spirituality</h1>
          <p className="text-xl text-muted-foreground">Sacred as Core Dimension</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Sacred Integration</Badge>
        <Badge variant="secondary">Pluralistic</Badge>
        <Badge variant="secondary">Inner Development</Badge>
        <Badge variant="secondary">Reverence</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Restoring the Sacred</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            The spirituality proposal restores the sacred as a core dimension of societal architecture—recognizing 
            that inner development, reverence for life, and connection to something greater than the self are essential 
            to human and planetary wellbeing. In a world shaped by fragmentation, burnout, and disillusionment, this 
            framework invites the integration of pluralistic spiritual practices, collective ritual, and contemplative 
            tools into the very fabric of culture.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Spirituality;
