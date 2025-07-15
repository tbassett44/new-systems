
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Sun, Atom, Recycle, Shield, Globe, DollarSign, CheckCircle } from "lucide-react";

const Energy = () => {
  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Regenerative Energy Infrastructure
            </h1>
            <p className="text-xl text-muted-foreground">
              Powering a Thriving Civilization Beyond Carbon
            </p>
          </div>
        </div>

        <div className="border-l-4 border-primary/30 pl-6 py-2">
          <p className="text-sm text-muted-foreground mb-2">By</p>
          <p className="font-medium">Juicy Life</p>
          <p className="text-sm text-primary">juicy@actualize.earth</p>
          <p className="text-sm text-muted-foreground mt-1">
            and Aether, an AI collaborator powered by GPT-4 by OpenAI
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Clean Energy</Badge>
          <Badge variant="secondary">Thorium Reactors</Badge>
          <Badge variant="secondary">Fusion Power</Badge>
          <Badge variant="secondary">Decentralized Grid</Badge>
          <Badge variant="secondary">Post-Carbon</Badge>
        </div>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Overview and Purpose
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-muted-foreground">
            This whitepaper outlines a pathway toward a clean, abundant, and regenerative energy future. 
            Grounded in the principles of systemic wellbeing and long-term resilience, it highlights 
            underfunded but promising technologies—such as thorium molten salt reactors and Tokamak 
            fusion reactors—that offer scalable alternatives to fossil fuels. By redirecting investment 
            flows through an Endo Economics lens, we can catalyze a global energy transition that 
            prioritizes safety, decentralization, and planetary health.
          </p>
        </CardContent>
      </Card>

      {/* The Problem */}
      <Card>
        <CardHeader>
          <CardTitle className="text-destructive">The Problem: Fossil Dependency and Innovation Suppression</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="border-l-4 border-destructive/30 pl-4">
              <h3 className="font-semibold text-destructive mb-2">Climate Crisis</h3>
              <p className="text-sm text-muted-foreground">
                Continued reliance on fossil fuels drives emissions, climate disruption, and ecological degradation.
              </p>
            </div>
            <div className="border-l-4 border-destructive/30 pl-4">
              <h3 className="font-semibold text-destructive mb-2">Centralized Control</h3>
              <p className="text-sm text-muted-foreground">
                Legacy energy systems concentrate power in the hands of a few corporations or governments.
              </p>
            </div>
            <div className="border-l-4 border-destructive/30 pl-4">
              <h3 className="font-semibold text-destructive mb-2">Suppressed Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Breakthrough technologies like thorium reactors were shelved due to geopolitical and industrial inertia.
              </p>
            </div>
            <div className="border-l-4 border-destructive/30 pl-4">
              <h3 className="font-semibold text-destructive mb-2">Underinvestment</h3>
              <p className="text-sm text-muted-foreground">
                Fusion research has suffered from decades of underfunding relative to its long-term potential.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Solution */}
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">The Solution: Decentralized and Safe Next-Gen Energy Systems</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Thorium Reactors */}
          <div className="bg-primary/5 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Atom className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">1. Thorium Molten Salt Reactors</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Safer than traditional uranium reactors (inherent safety, low pressure)</li>
              <li>• Produce less long-lived radioactive waste</li>
              <li>• Cannot melt down like conventional nuclear plants</li>
              <li>• Abundant fuel supply (thorium is more common than uranium)</li>
              <li>• Prototypes proven as early as the 1960s (Oak Ridge National Laboratory)</li>
            </ul>
          </div>

          {/* Fusion Reactors */}
          <div className="bg-secondary/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Sun className="h-6 w-6 text-secondary-foreground" />
              <h3 className="text-xl font-semibold">2. Tokamak Fusion Reactors</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Mimic the energy generation of the sun via nuclear fusion</li>
              <li>• Produce massive energy output with zero carbon emissions</li>
              <li>• Minimal radioactive waste and no risk of meltdown</li>
              <li>• International collaboration already underway (e.g., ITER project)</li>
              <li>• Once commercialized, could provide virtually limitless power</li>
            </ul>
          </div>

          {/* Grid Architecture */}
          <div className="bg-accent/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-accent-foreground" />
              <h3 className="text-xl font-semibold">3. Regenerative Grid Architecture</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Distributed renewable energy systems (solar, wind, geothermal)</li>
              <li>• Microgrids and community-scale storage</li>
              <li>• AI-assisted energy flow optimization</li>
              <li>• Open-source hardware and peer-managed infrastructure</li>
            </ul>
          </div>

          {/* Solar Note */}
          <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-muted-foreground/30">
            <h3 className="text-lg font-semibold mb-3">4. A Note on Solar Energy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              While solar power has played a key role in decentralizing energy and reducing operational 
              emissions, its regenerative potential must be assessed holistically. The production of 
              photovoltaic panels involves high material throughput, often using rare or difficult-to-recycle 
              elements sourced through extractive practices. Additionally, solar's relatively low energy 
              return on investment (EROI) compared to nuclear and fusion, combined with its dependence 
              on energy storage systems, raises long-term sustainability concerns. For solar to remain 
              a positive contributor, it must be deployed with lifecycle accountability, integrated into 
              mixed energy systems, and supported by robust recycling and material recovery programs.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Operational Framework */}
      <Card>
        <CardHeader>
          <CardTitle>Operational Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-primary">Mapping Layer</h4>
                <p className="text-sm text-muted-foreground">Geographic and population-based energy need assessment</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-primary">R&D Layer</h4>
                <p className="text-sm text-muted-foreground">Strategic funding of underdeveloped tech like thorium/fusion</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-primary">Governance Layer</h4>
                <p className="text-sm text-muted-foreground">Decentralized decision-making with community participation</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-primary">Funding Layer</h4>
                <p className="text-sm text-muted-foreground">Redirect subsidies from fossil fuels to regenerative tech via Endo Economics flows</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-primary">Deployment Layer</h4>
                <p className="text-sm text-muted-foreground">Public-private partnerships, cooperatives, and international collaboration</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Integration with Endo Economics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Recycle className="h-5 w-5 text-primary" />
            Integration with Endo Economics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-muted-foreground">
            The Endo Economics model unlocks resource flow toward solutions that serve collective wellbeing. 
            Instead of funding extraction, public wealth can be redirected toward energy systems that support 
            long-term health and climate stability. Guaranteed income and transparent resource allocation 
            give communities agency to co-own their energy future—aligning economic incentives with planetary needs.
          </p>
        </CardContent>
      </Card>

      {/* Project Costs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            Estimated Project Costs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="font-medium">Thorium reactor (5–10 MW prototype)</span>
              <span className="text-primary font-semibold">$500M–$1B</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="font-medium">Tokamak fusion reactor (e.g., ITER-scale)</span>
              <span className="text-primary font-semibold">$20B+</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="font-medium">Community solar microgrid (1 MW)</span>
              <span className="text-primary font-semibold">$2M–$4M</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="font-medium">Battery storage system (1 MWh)</span>
              <span className="text-primary font-semibold">$500K–$1M</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium">Smart grid deployment (per city)</span>
              <span className="text-primary font-semibold">$50M–$300M</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Net Positive Outcomes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Climate Mitigation</h4>
                  <p className="text-sm text-muted-foreground">Major reduction in greenhouse gas emissions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Energy Sovereignty</h4>
                  <p className="text-sm text-muted-foreground">Local communities control their power</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Innovation Reignited</h4>
                  <p className="text-sm text-muted-foreground">Funding flows toward long-neglected solutions</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Safety and Resilience</h4>
                  <p className="text-sm text-muted-foreground">Decentralized systems minimize risk</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Generational Equity</h4>
                  <p className="text-sm text-muted-foreground">Future generations inherit a stable, powered planet</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Economic Efficiency</h4>
                  <p className="text-sm text-muted-foreground">Reduced long-term costs of climate impact and energy loss</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conclusion */}
      <Card>
        <CardHeader>
          <CardTitle>Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-muted-foreground">
            A regenerative energy infrastructure is not only possible—it is essential. We must reclaim 
            innovation, liberate funding, and prioritize the health of both people and planet. With 
            technologies like thorium and fusion on the horizon, and distributed renewables already 
            in hand, we stand at the threshold of an energy renaissance. This proposal is an invitation 
            to step boldly into that future.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Energy;
