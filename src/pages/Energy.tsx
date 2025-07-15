
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

const Energy = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Zap className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Regenerative Energy Infrastructure</h1>
          <p className="text-xl text-muted-foreground">Next-Generation Energy Systems</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Clean Energy</Badge>
        <Badge variant="secondary">Thorium Reactors</Badge>
        <Badge variant="secondary">Distributed Grid</Badge>
        <Badge variant="secondary">Post-Carbon</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Energy as Foundation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            The future of civilization depends on how we generate, distribute, and govern energy. Despite having 
            access to cleaner, safer, and more efficient technologies—such as thorium molten salt reactors—political 
            inertia and entrenched fossil fuel interests have stalled their development.
          </p>
          <p className="leading-relaxed">
            The story of thorium represents a broader systemic failure to invest in long-term, life-affirming 
            innovation. As other nations, like China, move forward with next-generation energy systems, the 
            opportunity remains for a bold, regenerative energy transition.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Thorium Molten Salt Reactors</CardTitle>
          <CardDescription>Safer, Cleaner Nuclear Technology</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold mb-2">Safety Advantages</h3>
              <p className="text-sm text-muted-foreground">
                Cannot melt down due to physics-based safety mechanisms. No high-pressure systems or risk of catastrophic failure.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold mb-2">Waste Reduction</h3>
              <p className="text-sm text-muted-foreground">
                Produces minimal long-lived radioactive waste compared to conventional nuclear reactors.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold mb-2">Abundant Fuel</h3>
              <p className="text-sm text-muted-foreground">
                Thorium is 3-4 times more abundant than uranium and found in many countries, reducing geopolitical dependencies.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Distributed Renewable Grid</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            A regenerative energy transition embraces distributed renewables, decentralized grids, and advanced 
            nuclear solutions to power a thriving, post-carbon world. This approach reduces transmission losses, 
            increases resilience, and empowers local communities.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-primary mb-2">Solar & Wind Integration</h3>
              <p className="text-sm text-muted-foreground">
                Maximize renewable energy potential with smart grid technology and energy storage solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Community Ownership</h3>
              <p className="text-sm text-muted-foreground">
                Enable local ownership of energy infrastructure, keeping economic benefits within communities.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Implementation Strategy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            This section explores how such a shift could be resourced, implemented, and aligned with the principles 
            of Endo Economics to ensure energy serves people and planet—not profit alone.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Global Opportunity</h4>
            <p className="text-sm text-muted-foreground">
              While political barriers have slowed adoption in some regions, the opportunity exists for nations 
              to lead in next-generation energy technology, creating competitive advantages in the global transition 
              to clean energy.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Energy;
