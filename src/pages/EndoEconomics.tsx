
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins } from "lucide-react";

const EndoEconomics = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Coins className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Endo Economics</h1>
          <p className="text-xl text-muted-foreground">A New Economic System</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Economic Transformation</Badge>
        <Badge variant="secondary">Regenerative</Badge>
        <Badge variant="secondary">Symbiotic</Badge>
        <Badge variant="secondary">Value Creation</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Fundamental Redesign</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            The Endo Economics whitepaper proposes a fundamental redesign of our economic system—one that shifts 
            from extraction to symbiosis, from scarcity-driven accumulation to regenerative value creation. Inspired 
            by the biological principle of endosymbiosis, this model frames the economy as a living system where 
            each part contributes to the health of the whole.
          </p>
          <p className="leading-relaxed">
            In contrast to current systems that concentrate wealth and externalize harm, Endo Economics offers a 
            framework for equitable distribution, adaptive feedback, and circular flows of resources. By anchoring 
            value in contribution, wellbeing, and relational integrity rather than consumption and control, this 
            model has the potential to liberate vast reservoirs of human creativity, purpose, and collaboration that 
            remain dormant under today's extractive norms.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Principles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-primary mb-2">From Extraction to Symbiosis</h3>
              <p className="text-sm text-muted-foreground">
                Moving away from systems that extract value toward systems that create mutual benefit and regeneration.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Circular Resource Flows</h3>
              <p className="text-sm text-muted-foreground">
                Resources circulate through the system, minimizing waste and maximizing value creation at every stage.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Distributed Ownership</h3>
              <p className="text-sm text-muted-foreground">
                Power and resources are distributed rather than concentrated, ensuring broader participation in prosperity.
              </p>
            </div>
            <div>
              <h3 className="font-semibred text-primary mb-2">Multiple Value Dimensions</h3>
              <p className="text-sm text-muted-foreground">
                Value is measured not just in financial terms but in wellbeing, ecological health, and social cohesion.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Biological Inspiration</CardTitle>
          <CardDescription>Learning from Endosymbiosis</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            Endosymbiosis is the biological process where different organisms live together in a mutually beneficial 
            relationship. This principle inspired the economic model presented here, where individual actors and 
            organizations work together in ways that benefit the entire system.
          </p>
          <p className="leading-relaxed">
            Just as cells evolved through endosymbiotic relationships to become more complex and capable, our economic 
            systems can evolve to become more intelligent, adaptive, and life-supporting through similar principles 
            of mutual benefit and shared prosperity.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Implementation Pathways</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold mb-2">Pilot Programs</h3>
              <p className="text-sm text-muted-foreground">
                Start with small-scale implementations in communities ready to experiment with new economic models.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold mb-2">Technology Infrastructure</h3>
              <p className="text-sm text-muted-foreground">
                Develop the digital tools and platforms needed to support distributed economic coordination.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold mb-2">Policy Integration</h3>
              <p className="text-sm text-muted-foreground">
                Work with existing institutions to integrate regenerative economic principles into policy frameworks.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EndoEconomics;
