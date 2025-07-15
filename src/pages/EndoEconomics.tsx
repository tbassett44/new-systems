import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle } from "lucide-react";

const EndoEconomics = () => {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-primary">Endo Economics</h1>
        <p className="text-xl text-muted-foreground">An Economic Model for Regenerative Civilization</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Regenerative Economics</Badge>
        <Badge variant="secondary">Systemic Wellbeing</Badge>
        <Badge variant="secondary">Equitable Resource Flow</Badge>
        <Badge variant="secondary">Community Resilience</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Overview and Purpose</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed">
            This whitepaper introduces Endo Economics—an economic model designed to support a regenerative civilization. Moving beyond extractive, growth-dependent systems, Endo Economics prioritizes the health and resilience of the whole: people, planet, and future generations. It is an economic framework rooted in symbiosis, adaptability, and systemic coherence.
          </p>
          <p className="leading-relaxed">
            Endo Economics is not just a set of policies or metrics—it is a fundamental shift in how we perceive value. Instead of equating wealth with financial accumulation, this model recognizes that true prosperity arises from the flourishing of living systems. It invites us to redesign our economic infrastructure to align with the natural world, fostering reciprocal relationships and equitable resource flows.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            The Problem: Extractive and Destructive Economic Systems
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Ecological Degradation:</strong> Current economic models drive deforestation, pollution, and climate change.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Social Inequity:</strong> Wealth is concentrated in the hands of a few, leading to widespread poverty and suffering.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Systemic Instability:</strong> Growth-dependent economies are prone to boom-and-bust cycles and financial crises.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Erosion of Community:</strong> Market forces undermine local economies, social bonds, and cultural traditions.
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">The Solution: Endo Economics - An Economic Model for a Regenerative Civilization</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Core Principles:</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-primary/30 pl-4">
                <h5 className="font-medium text-primary">Systemic Wellbeing</h5>
                <p className="text-sm text-muted-foreground">
                  Prioritize the health and resilience of the whole system, including ecological, social, and economic dimensions.
                </p>
              </div>
              <div className="border-l-4 border-blue-300 pl-4">
                <h5 className="font-medium text-blue-700">Equitable Resource Flow</h5>
                <p className="text-sm text-muted-foreground">
                  Ensure that resources are distributed fairly and sustainably, meeting the needs of all members of society.
                </p>
              </div>
              <div className="border-l-4 border-green-300 pl-4">
                <h5 className="font-medium text-green-700">Regenerative Practices</h5>
                <p className="text-sm text-muted-foreground">
                  Invest in practices that restore and enhance natural systems, building soil, sequestering carbon, and promoting biodiversity.
                </p>
              </div>
              <div className="border-l-4 border-purple-300 pl-4">
                <h5 className="font-medium text-purple-700">Community Resilience</h5>
                <p className="text-sm text-muted-foreground">
                  Strengthen local economies, social networks, and cultural traditions, fostering self-reliance and adaptability.
                </p>
              </div>
              <div className="border-l-4 border-orange-300 pl-4">
                <h5 className="font-medium text-orange-700">Ethical Consumption</h5>
                <p className="text-sm text-muted-foreground">
                  Promote mindful consumption patterns that minimize waste, reduce environmental impact, and support fair labor practices.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Operational Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Resource Layer</h4>
              <p className="text-sm">Sustainable management of natural resources, prioritizing regeneration and conservation</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Production Layer</h4>
              <p className="text-sm">Localized and circular production systems, minimizing waste and maximizing resource efficiency</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Distribution Layer</h4>
              <p className="text-sm">Equitable distribution of goods and services, ensuring basic needs are met for all</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Consumption Layer</h4>
              <p className="text-sm">Mindful consumption patterns that prioritize quality, durability, and ethical sourcing</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Regeneration Layer</h4>
              <p className="text-sm">Investment in ecological restoration, community building, and social healing</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <CheckCircle className="h-5 w-5" />
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Ecological Restoration:</strong> Reversal of environmental degradation and enhancement of biodiversity
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Social Equity:</strong> Reduction of poverty and inequality, ensuring basic needs are met for all
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Economic Stability:</strong> Creation of resilient and sustainable economic systems
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Community Empowerment:</strong> Strengthening of local economies and social networks
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Cultural Flourishing:</strong> Revitalization of cultural traditions and promotion of creativity and innovation
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            Endo Economics offers a pathway towards a regenerative civilization—one that prioritizes the health and wellbeing of all. By shifting our focus from extraction to restoration, from competition to collaboration, and from growth to resilience, we can create an economic system that supports a thriving planet and a flourishing human society.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EndoEconomics;
