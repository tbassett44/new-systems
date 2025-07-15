
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Recycle } from "lucide-react";

const WasteManagement = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Recycle className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Waste Management</h1>
          <p className="text-xl text-muted-foreground">Transformative Waste-to-Resource Systems</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Circular Economy</Badge>
        <Badge variant="secondary">Resource Recovery</Badge>
        <Badge variant="secondary">Clean Energy</Badge>
        <Badge variant="secondary">Public Health</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>From Waste to Resource</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            The waste management proposal outlines a transformative approach to one of the most overlooked yet urgent 
            systemic failures in modern society. Rather than treating waste as an inevitable byproduct to be buried 
            or burned, this vision repositions it as a critical leverage point for ecological restoration, public 
            health, and economic renewal.
          </p>
          <p className="leading-relaxed">
            By deploying high-capacity, regionally distributed waste-to-resource facilities—such as the Eden Energy 
            model—we could process the entirety of the nation's daily waste output while generating clean energy, 
            recovering materials, and eliminating toxic emissions.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>System Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-primary mb-2">Environmental Impact</h3>
              <p className="text-sm text-muted-foreground">
                Eliminate harmful landfills and incinerators while reducing toxic emissions and supporting ecosystem regeneration.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Energy Generation</h3>
              <p className="text-sm text-muted-foreground">
                Transform waste streams into clean energy sources, contributing to renewable energy infrastructure.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Material Recovery</h3>
              <p className="text-sm text-muted-foreground">
                Extract valuable materials and resources from waste streams, creating circular resource loops.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Public Health</h3>
              <p className="text-sm text-muted-foreground">
                Reduce disease burden by eliminating toxic waste accumulation and improving air and water quality.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Economic Viability</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            With a one-time capital investment equivalent to a fraction of annual military spending, this system could 
            replace harmful landfills and incinerators, reduce disease burden, and regenerate ecosystems. It turns 
            waste from a liability into a cornerstone of a circular, regenerative infrastructure—unlocking massive 
            environmental and social gains.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Investment Comparison</h4>
            <p className="text-sm text-muted-foreground">
              The capital required for national implementation represents only a small fraction of current annual 
              military expenditure, while providing immediate returns in energy generation, material recovery, 
              and reduced healthcare costs.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WasteManagement;
