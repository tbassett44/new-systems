
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope } from "lucide-react";

const Science = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Microscope className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Science</h1>
          <p className="text-xl text-muted-foreground">Open & Participatory Research</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Open Science</Badge>
        <Badge variant="secondary">Participatory</Badge>
        <Badge variant="secondary">Interdisciplinary</Badge>
        <Badge variant="secondary">Community-Focused</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reclaiming Research as Collective Pursuit</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            The science proposal reclaims research and discovery as a collective, ethical, and regenerative pursuit—shifting 
            from institutionally gated knowledge production to an open, participatory science commons. In contrast to the 
            current model—where funding biases, siloed research, and corporate patents often steer inquiry—this framework 
            supports transparent, interdisciplinary, and locally relevant scientific exploration.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Science;
