
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Sun, Atom, Recycle, Shield, Globe, DollarSign, CheckCircle } from "lucide-react";

const Energy = () => {
  useEffect(() => {
    document.title = "Regenerative Energy Infrastructure | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about regenerative energy infrastructure that powers a thriving civilization beyond carbon through decentralized renewable energy systems and community resilience.');
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Regenerative Energy Infrastructure | New Systems and Structures');
    }
  }, []);
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Regenerative Energy Infrastructure</h1>
        <h2 className="text-2xl font-semibold text-muted-foreground mb-4">Powering a Thriving Civilization Beyond Carbon</h2>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <Badge variant="secondary" className="bg-green-100 text-green-800">Clean Energy</Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">Thorium Reactors</Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">Fusion Power</Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800">Decentralized Grid</Badge>
          <Badge variant="secondary" className="bg-teal-100 text-teal-800">Post-Carbon</Badge>
        </div>
      </div>

      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="text-primary flex items-center gap-2">
            <Globe className="h-6 w-6 text-blue-600" />
            Overview and Purpose
          </CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed text-lg">
            This whitepaper outlines a pathway toward a clean, abundant, and regenerative energy future. 
            Grounded in the principles of systemic wellbeing and long-term resilience, it highlights 
            underfunded but promising technologies—such as thorium molten salt reactors and Tokamak 
            fusion reactors—that offer scalable alternatives to fossil fuels. By redirecting investment 
            flows through an Endo Economics lens, we can catalyze a global energy transition that 
            prioritizes safety, decentralization, and planetary health.
          </p>
        </CardContent>
      </Card>

      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <Shield className="h-6 w-6" />
            The Problem: Fossil Dependency and Innovation Suppression
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <strong>Climate Crisis:</strong> Continued reliance on fossil fuels drives emissions, climate disruption, and ecological degradation.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <strong>Centralized Control:</strong> Legacy energy systems concentrate power in the hands of a few corporations or governments.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <strong>Suppressed Innovation:</strong> Breakthrough technologies like thorium reactors were shelved due to geopolitical and industrial inertia.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <strong>Underinvestment:</strong> Fusion research has suffered from decades of underfunding relative to its long-term potential.
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <Zap className="h-6 w-6" />
            The Solution: Decentralized and Safe Next-Gen Energy Systems
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-950/50 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <Atom className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">1. Thorium Molten Salt Reactors</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-blue-800 dark:text-blue-200">Safer than traditional uranium reactors (inherent safety, low pressure)</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-blue-800 dark:text-blue-200">Produce less long-lived radioactive waste</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-blue-800 dark:text-blue-200">Cannot melt down like conventional nuclear plants</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-blue-800 dark:text-blue-200">Abundant fuel supply (thorium is more common than uranium)</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-blue-800 dark:text-blue-200">Prototypes proven as early as the 1960s (Oak Ridge National Laboratory)</div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-950/50 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-4">
              <Sun className="h-6 w-6 text-green-600 dark:text-green-400" />
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-100">2. Tokamak Fusion Reactors</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-green-800 dark:text-green-200">Mimic the energy generation of the sun via nuclear fusion</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-green-800 dark:text-green-200">Produce massive energy output with zero carbon emissions</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-green-800 dark:text-green-200">Minimal radioactive waste and no risk of meltdown</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-green-800 dark:text-green-200">International collaboration already underway (e.g., ITER project)</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-green-800 dark:text-green-200">Once commercialized, could provide virtually limitless power</div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-950/50 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100">3. Regenerative Grid Architecture</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-purple-800 dark:text-purple-200">Distributed renewable energy systems (solar, wind, geothermal)</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-purple-800 dark:text-purple-200">Microgrids and community-scale storage</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-purple-800 dark:text-purple-200">AI-assisted energy flow optimization</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-purple-800 dark:text-purple-200">Open-source hardware and peer-managed infrastructure</div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/50 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
            <h3 className="text-lg font-semibold mb-3 text-amber-900 dark:text-amber-100">4. A Note on Solar Energy</h3>
            <p className="text-amber-800 dark:text-amber-200 leading-relaxed">
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

      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-700">
            <Recycle className="h-6 w-6" />
            Operational Framework
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="border-l-4 border-primary pl-4">
              <strong className="text-primary">Mapping Layer:</strong> Geographic and population-based energy need assessment
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <strong className="text-green-700">R&D Layer:</strong> Strategic funding of underdeveloped tech like thorium/fusion
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <strong className="text-blue-700">Governance Layer:</strong> Decentralized decision-making with community participation
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <strong className="text-yellow-700">Funding Layer:</strong> Redirect subsidies from fossil fuels to regenerative tech via Endo Economics flows
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <strong className="text-purple-700">Deployment Layer:</strong> Public-private partnerships, cooperatives, and international collaboration
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-teal-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-teal-700">
            <Recycle className="h-6 w-6" />
            Integration with Endo Economics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            The Endo Economics model unlocks resource flow toward solutions that serve collective wellbeing. 
            Instead of funding extraction, public wealth can be redirected toward energy systems that support 
            long-term health and climate stability. Guaranteed income and transparent resource allocation 
            give communities agency to co-own their energy future—aligning economic incentives with planetary needs.
          </p>
        </CardContent>
      </Card>

      <Card className="border-indigo-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-indigo-700">
            <DollarSign className="h-6 w-6" />
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

      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <CheckCircle className="h-6 w-6" />
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Climate Mitigation:</strong> Major reduction in greenhouse gas emissions
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Energy Sovereignty:</strong> Local communities control their power
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Innovation Reignited:</strong> Funding flows toward long-neglected solutions
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Safety and Resilience:</strong> Decentralized systems minimize risk
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Generational Equity:</strong> Future generations inherit a stable, powered planet
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Economic Efficiency:</strong> Reduced long-term costs of climate impact and energy loss
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="text-primary">Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-lg">
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
