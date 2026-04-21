import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Train, Bus, Bike, Car, Package, Activity, AlertTriangle, TrendingUp, MapPin, DollarSign, Shield } from "lucide-react";

const Mobility = () => {
  useEffect(() => {
    document.title = "Regenerative Mobility & Resource Flow | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Designing efficient, layered systems for movement, access, and distribution—reframing mobility as the circulatory system of civilization.');
    }
  }, []);

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-primary mb-2">🚆 Regenerative Mobility & Resource Flow Infrastructure</h1>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Designing Efficient, Layered Systems for Movement, Access, and Distribution</h2>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">Layered Systems</Badge>
        <Badge variant="secondary" className="bg-green-100 text-green-800">Flow Design</Badge>
        <Badge variant="secondary" className="bg-purple-100 text-purple-800">Adaptive Infrastructure</Badge>
        <Badge variant="secondary" className="bg-orange-100 text-orange-800">Resource Distribution</Badge>
      </div>

      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="text-primary flex items-center gap-2">
            <Activity className="h-6 w-6 text-blue-600" />
            Overview and Purpose
          </CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none space-y-4">
          <p className="leading-relaxed text-lg">
            Mobility is one of the most immediate ways people experience the success or failure of a society's systems. Long wait times, unreliable service, congestion, and fragmented logistics are not just inconveniences—they are signals of deeper structural misalignment.
          </p>
          <p className="leading-relaxed text-lg">
            Transportation is not merely about getting from one place to another. It is the <span className="font-semibold text-primary">circulatory system of civilization</span>—the mechanism through which people access opportunity, goods reach communities, and resources flow across regions.
          </p>
          <p className="leading-relaxed">In today's dominant model, mobility systems are:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>fragmented across modes and agencies</li>
            <li>poorly aligned with actual patterns of demand</li>
            <li>constrained by outdated infrastructure and incentives</li>
            <li>and disconnected from real-time feedback</li>
          </ul>
          <p className="leading-relaxed">
            The result is a system that consumes enormous resources while delivering inconsistent and often inequitable outcomes.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="text-blue-800 font-medium">
              A regenerative approach reframes mobility as an integrated, multi-scale flow system—designed for efficiency, reliability, adaptability, and dignity.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Activity className="h-6 w-6" />
            Core Principle: Design for Scale, Not Mode
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            Effective transportation systems are not defined by any single technology, but by the coherence of their layers. Just as the human body relies on a hierarchy of vessels—from high-capacity arteries to fine-grained capillaries—mobility systems must be designed across scales, with each layer optimized for its function.
          </p>
          <p className="leading-relaxed">The goal is not to promote trains, buses, or cars in isolation, but to optimize for:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>throughput</li>
            <li>reliability</li>
            <li>energy efficiency</li>
            <li>accessibility</li>
            <li>and total system coherence</li>
          </ul>
          <p className="leading-relaxed font-medium text-primary">
            This represents a shift from mode-based thinking to flow-based design.
          </p>
        </CardContent>
      </Card>

      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <AlertTriangle className="h-6 w-6" />
            The Problem: Fragmentation and Inefficiency
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">1. Mode Mismatch</h3>
            <p className="mb-2">Systems are often forced to perform outside their optimal design:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>buses operating in mixed traffic lose reliability and speed</li>
              <li>cars are over-relied upon for high-volume corridors</li>
              <li>high-capacity systems are underdeveloped where they are most needed</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">2. Lack of Hierarchical Design</h3>
            <p className="mb-2">Most regions lack a clear structure of:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>high-capacity backbone systems</li>
              <li>mid-capacity connectors</li>
              <li>last-mile access</li>
            </ul>
            <p className="mt-2">Resulting in patchwork infrastructure that underperforms across all layers.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">3. Broken Feedback Loops</h3>
            <p className="mb-2">Riders regularly experience:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>long wait times</li>
              <li>missed stops</li>
              <li>inconsistent service</li>
            </ul>
            <p className="mt-2 italic">Systems fail when feedback is not effectively integrated into design and adaptation.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">4. Misaligned Incentives</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>politically driven rather than performance-based</li>
              <li>slow to adapt once deployed</li>
              <li>disconnected from user experience</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">5. Separation of Mobility and Resource Distribution</h3>
            <p>The movement of people, goods, waste, and energy is treated as separate systems, leading to inefficiencies in routing, infrastructure use, and economic flow.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <TrendingUp className="h-6 w-6" />
            The Regenerative Model: Layered Mobility Systems
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-l-4 border-blue-400 pl-4">
            <h3 className="font-semibold text-lg flex items-center gap-2"><Train className="h-5 w-5" /> 1. High-Capacity Arteries (Macro Flow)</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Rail systems (light rail, metro, regional rail) where density supports them</li>
              <li>Designed for frequency, reliability, and high throughput</li>
            </ul>
            <p className="mt-2"><span className="font-medium">Role:</span> Move large volumes efficiently and predictably</p>
          </div>
          <div className="border-l-4 border-purple-400 pl-4">
            <h3 className="font-semibold text-lg flex items-center gap-2"><Bus className="h-5 w-5" /> 2. Mid-Capacity Connectors (Mesoscale Flow)</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Bus Rapid Transit (BRT), trams, and dedicated-lane systems</li>
              <li>Require true priority infrastructure (dedicated lanes, signal priority)</li>
            </ul>
            <p className="mt-2 italic">Without dedicated infrastructure, buses degrade into the same inefficiencies as general traffic.</p>
          </div>
          <div className="border-l-4 border-green-400 pl-4">
            <h3 className="font-semibold text-lg flex items-center gap-2"><Bike className="h-5 w-5" /> 3. Distributed Capillaries (Micro Flow)</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Walking, biking, and micro-mobility systems</li>
              <li>Localized, high-frequency movement</li>
            </ul>
            <p className="mt-2"><span className="font-medium">Role:</span> Provide accessible, low-cost last-mile connectivity</p>
          </div>
          <div className="border-l-4 border-orange-400 pl-4">
            <h3 className="font-semibold text-lg flex items-center gap-2"><Car className="h-5 w-5" /> 4. Adaptive Vehicle Layer</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Personal vehicles and shared mobility</li>
              <li>Essential in lower-density environments</li>
            </ul>
            <p className="mt-2"><span className="font-medium">Role:</span> Supplemental—not dominant—mobility layer</p>
          </div>
          <div className="border-l-4 border-amber-400 pl-4">
            <h3 className="font-semibold text-lg flex items-center gap-2"><Package className="h-5 w-5" /> 5. Integrated Resource Distribution Layer</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Coordinated movement of goods, materials, waste, and energy</li>
              <li>AI-assisted logistics and regional hubs</li>
            </ul>
            <p className="mt-2"><span className="font-medium">Role:</span> Align economic and material flows with infrastructure</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Activity className="h-6 w-6" />
            Real-Time Feedback and Adaptive Infrastructure
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>A regenerative mobility system is not static—it evolves. By integrating:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>real-time usage data</li>
            <li>rider feedback</li>
            <li>AI-assisted optimization</li>
          </ul>
          <p>systems can:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>dynamically adjust routes and frequency</li>
            <li>identify inefficiencies early</li>
            <li>continuously improve performance</li>
          </ul>
          <p className="font-medium">This restores the feedback loop between people and infrastructure.</p>
        </CardContent>
      </Card>

      <Card className="border-emerald-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-700">
            <TrendingUp className="h-6 w-6" />
            Economic and Systemic Impact
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>Efficient mobility systems unlock:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Time recovery as a primary economic asset</li>
            <li>Expanded access to opportunity</li>
            <li>Reduced long-term infrastructure costs</li>
            <li>Lower emissions and ecological impact</li>
            <li>Increased public trust through reliability</li>
          </ul>
          <p className="mt-3 font-medium">Mobility becomes a multiplier across all systems—economic, social, and ecological.</p>
        </CardContent>
      </Card>

      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-700">
            <MapPin className="h-6 w-6" />
            🌄 Regional Example: Boulder, Denver, and the Front Range Corridor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-1">Population Base</h3>
            <p>~3 million people (Denver metro + Boulder region)</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Current Challenges</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Heavy car dependency between Boulder and Denver</li>
              <li>Limited high-frequency transit</li>
              <li>Bus systems constrained by traffic</li>
              <li>Weak last-mile connectivity</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Proposed Layered System</h3>
            <div>
              <p className="font-medium">🛤️ Regional Backbone (Boulder ⇄ Denver)</p>
              <ul className="list-disc pl-6">
                <li>High-frequency rail or equivalent high-capacity corridor</li>
                <li>Travel time competitive with peak-hour driving</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">🚍 BRT Connectors</p>
              <ul className="list-disc pl-6">
                <li>Fully dedicated lanes along US-36</li>
                <li>Signal priority and consistent scheduling</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">🚲 Local Capillary Networks</p>
              <ul className="list-disc pl-6">
                <li>Protected bike infrastructure</li>
                <li>Walkable neighborhoods</li>
                <li>Micro-mobility integration</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">🚗 Adaptive Layer</p>
              <ul className="list-disc pl-6">
                <li>Cars remain available for low-density and specialized use</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">📦 Resource Flow Integration</p>
              <ul className="list-disc pl-6">
                <li>Logistics hubs along corridors</li>
                <li>Reduced redundant delivery traffic</li>
                <li>Integration with waste and energy systems</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <p className="font-semibold text-red-800 mb-2">Today:</p>
              <ul className="list-disc pl-6 text-red-900">
                <li>long waits</li>
                <li>inconsistent service</li>
                <li>car dependency</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-800 mb-2">In a regenerative system:</p>
              <ul className="list-disc pl-6 text-green-900">
                <li>predictable, frequent transit</li>
                <li>seamless multi-layer movement</li>
                <li>multiple viable options</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-700">
            <DollarSign className="h-6 w-6" />
            💰 Investment, Operations, and Funding
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Capital Investment (One-Time)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b bg-muted">
                    <th className="text-left p-2">Component</th>
                    <th className="text-left p-2">Estimated Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">Rail / Backbone</td><td className="p-2">$2B – $4.5B</td></tr>
                  <tr className="border-b"><td className="p-2">BRT Systems</td><td className="p-2">$300M – $800M</td></tr>
                  <tr className="border-b"><td className="p-2">Local Infrastructure</td><td className="p-2">$200M – $600M</td></tr>
                  <tr className="border-b"><td className="p-2">Logistics Integration</td><td className="p-2">$200M – $500M</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 font-medium">👉 Total: ~$4B – $5B (working range)</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Annual Operating Costs</h3>
            <p>👉 ~$40M – $100M per year</p>
            <p>→ ~$13 – $33 per resident annually</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">🏦 Hybrid Funding Model (Recommended)</h3>
            <div>
              <p className="font-medium">Long-Term Layer (20–30 Year Bond)</p>
              <p>Used for: rail backbone, major fixed infrastructure</p>
              <p>→ ~$260M/year → ~$7–8/month per resident</p>
            </div>
            <div>
              <p className="font-medium">Short-Term Layer (10-Year Bond)</p>
              <p>Used for: BRT systems, local mobility upgrades, logistics optimization</p>
              <p>→ ~$300M/year → ~$10/month per resident</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
              <p className="font-semibold text-amber-800">Total Annual Public Cost</p>
              <p className="text-amber-900">👉 ~$550M – $650M/year → ~$17 – $19 per person per month</p>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">🚗 Offset: Reduced Personal Costs</h3>
            <p>Average car cost: → $8,000 – $12,000/year</p>
            <p>Even modest reduction (10–20%): → $800 – $2,400/year saved</p>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-800">Net Effect</p>
              <ul className="list-disc pl-6 text-green-900">
                <li>Public cost: ~$200/year</li>
                <li>Potential savings: $800+</li>
              </ul>
              <p className="mt-1 font-medium text-green-900">👉 4–10x positive return per individual</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">System-Level Gains</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>reduced congestion</li>
              <li>increased labor mobility</li>
              <li>lower road maintenance</li>
              <li>improved logistics efficiency</li>
              <li>stronger regional economy</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-700">
            <Shield className="h-6 w-6" />
            Risks and Constraints
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div><span className="font-semibold">Cost Overruns —</span> Mitigation: phased rollout, transparent oversight</div>
          <div><span className="font-semibold">Adoption Risk —</span> Mitigation: prioritize reliability over expansion</div>
          <div><span className="font-semibold">Political Complexity —</span> Mitigation: participatory governance and clear metrics</div>
          <div><span className="font-semibold">Density Limitations —</span> Mitigation: tailor solutions regionally</div>
          <div><span className="font-semibold">Integration Risks —</span> Mitigation: strategic—not total—system merging</div>
        </CardContent>
      </Card>

      <Card className="border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-primary">Closing Insight</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed text-lg">The question is not whether we can afford to build efficient mobility systems.</p>
          <p className="leading-relaxed text-lg">It is whether we can afford to continue operating inefficient ones.</p>
          <p className="leading-relaxed">At a regional scale, the investment required is measurable and finite. The cost of inaction is continuous—paid in time, stress, inefficiency, and lost opportunity.</p>
          <p className="leading-relaxed font-medium text-primary">A regenerative mobility system is not defined by any single technology, but by the intelligence of its design—layered, adaptive, and aligned with the flow of life.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Mobility;
