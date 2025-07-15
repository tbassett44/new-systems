
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";

const Wellbeing = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Heart className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Wellbeing Tracking</h1>
          <p className="text-xl text-muted-foreground">AI-Enhanced Framework for Human Flourishing</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Human Flourishing</Badge>
        <Badge variant="secondary">AI-Enhanced</Badge>
        <Badge variant="secondary">Holistic</Badge>
        <Badge variant="secondary">Participatory</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Comprehensive Wellbeing Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            The wellbeing tracking proposal envisions a participatory, AI-enhanced framework for understanding and 
            supporting human flourishing across all dimensions of life—physical, mental, emotional, spiritual, 
            relational, occupational, financial, and environmental. By leveraging the same collective sensemaking 
            architecture, this system invites individuals to reflect on their lived experience and share qualitative 
            insights about what's supporting or inhibiting their wellbeing.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Wellbeing;
