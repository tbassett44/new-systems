import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, AlertTriangle, CheckCircle, Users, Heart, Globe, TreePine, Droplets, Sprout } from "lucide-react";

const Ecology = () => {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-foreground">Ecological Regeneration Infrastructure</h1>
        <p className="text-xl text-muted-foreground">Building Bioregional Systems to Heal Land, Life, and Climate</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Bioregional</Badge>
        <Badge variant="secondary">Regenerative</Badge>
        <Badge variant="secondary">Ecosystem Restoration</Badge>
        <Badge variant="secondary">Community Stewardship</Badge>
        <Badge variant="secondary">Climate Resilience</Badge>
        <Badge variant="secondary">Verified Impact</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Globe className="h-5 w-5 text-primary" />
            Overview and Purpose
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4 text-foreground">
            This whitepaper proposes a scalable, decentralized infrastructure to support ecological regeneration at the local, regional, and planetary levels. Grounded in the recognition that human and planetary wellbeing are inseparable, this model seeks to align technology, governance, and funding with the living systems that sustain us.
          </p>
          <p className="leading-relaxed text-foreground">
            Rather than viewing nature as a passive resource to be managed, this framework treats ecosystems as dynamic partners in the evolution of human civilization. By leveraging satellite imagery, AI-supported mapping, community observation, and regenerative finance tools, we can prioritize, fund, and measure projects that restore the health of watersheds, soil systems, forests, and biodiversity.
          </p>
        </CardContent>
      </Card>

      <Card className="border-destructive/20 bg-destructive/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            The Problem: Ecological Collapse and Disconnected Stewardship
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-destructive mt-1 shrink-0" />
              <div className="text-destructive/90">
                <strong>Widespread Degradation:</strong> Deforestation, soil erosion, water contamination, and habitat loss continue at accelerating rates.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-destructive mt-1 shrink-0" />
              <div className="text-destructive/90">
                <strong>Top-Down Conservation:</strong> Many environmental efforts are bureaucratic, extractive, or disconnected from local wisdom.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-destructive mt-1 shrink-0" />
              <div className="text-destructive/90">
                <strong>Lack of Feedback Loops:</strong> Communities lack tools to track ecological change or verify regenerative efforts.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-destructive mt-1 shrink-0" />
              <div className="text-destructive/90">
                <strong>Funding Gaps:</strong> Regeneration is often underfunded or tied to centralized grants that are slow, inequitable, or ineffective.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200/50 bg-green-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <Sprout className="h-5 w-5" />
            The Solution: Regenerative Infrastructure for Bioregional Health
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
                <Users className="h-4 w-4" />
                1. Bioregional Regeneration Hubs
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-green-700/90">
                <li>Local councils or cooperatives map and prioritize regeneration goals (e.g., watershed repair, pollinator corridors, rewilding)</li>
                <li>Use of digital tools to engage citizen scientists, elders, farmers, and youth in co-designing projects</li>
                <li>Interoperable platforms connect local action to global knowledge</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
                <Globe className="h-4 w-4" />
                2. Data-Driven Tracking and Verification
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-green-700/90">
                <li>Use of satellite imagery, drone surveys, and community reporting to monitor ecological indicators</li>
                <li>AI supports pattern recognition, trend detection, and predictive modeling</li>
                <li>Open dashboards offer real-time visibility into ecosystem health and project progress</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
                <Heart className="h-4 w-4" />
                3. Regenerative Funding Models
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-green-700/90">
                <li>Community-led treasury or DAO mechanisms distribute funds to projects based on verified impact</li>
                <li>Ecological performance metrics tied to funding flows (e.g., increased soil carbon, restored riparian buffers)</li>
                <li>Integration with local currencies, impact tokens, or public benefit coins</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
                <Users className="h-4 w-4" />
                4. Knowledge Commons and Skill Exchange
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-green-700/90">
                <li>Decentralized libraries of practices, tools, and case studies</li>
                <li>Credentialed and peer-validated regenerative practitioners</li>
                <li>Networks for mentorship, land access, and tools-sharing across regions</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Operational Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="border-l-4 border-primary pl-4">
              <strong>Mapping Layer:</strong> Bioregional mapping of land use, degradation hotspots, and restoration priorities
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <strong>Monitoring Layer:</strong> Multi-modal sensing (satellite, drone, ground-level) + community observation
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <strong>Governance Layer:</strong> Local councils + token-weighted or reputation-based governance protocols
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <strong>Funding Layer:</strong> Flow-based or milestone-based funding tied to ecological outcomes
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <strong>Education Layer:</strong> Regenerative literacy woven into public platforms, curricula, and rites of passage
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Integration with Endo Economics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            Ecological regeneration aligns seamlessly with the Endo Economics model, which reframes value through symbiosis, adaptability, and systemic wellbeing. Rather than rewarding extractive behavior, Endo Economics redirects resources toward actions that sustain and regenerate the commons. In this model, ecological regeneration projects function as verified nodes of value creation, with measurable impact on climate resilience, biodiversity, and human wellbeing.
          </p>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <TreePine className="h-5 w-5" />
            Estimated Project Costs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 text-sm">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-foreground">Riparian buffer zone restoration (1 mile)</span>
              <span className="font-semibold text-foreground">$40,000–$75,000</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-foreground">Rewilding 100 acres (native flora/fauna)</span>
              <span className="font-semibold text-foreground">$100,000–$250,000</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-foreground">Urban permaculture retrofit (1 acre)</span>
              <span className="font-semibold text-foreground">$20,000–$50,000</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-foreground">Soil carbon enhancement (100 acres, annual)</span>
              <span className="font-semibold text-foreground">$25,000–$60,000</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-foreground">Watershed-level coordination (10,000 acres)</span>
              <span className="font-semibold text-foreground">$250,000–$500,000</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-foreground">Wetland restoration (10 acres)</span>
              <span className="font-semibold text-foreground">$150,000–$300,000</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-foreground">Coral reef restoration (1 hectare)</span>
              <span className="font-semibold text-foreground">$250,000–$500,000</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-foreground">Indigenous-led forest stewardship (1000 acres, annual)</span>
              <span className="font-semibold text-foreground">$75,000–$150,000</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-foreground">Myco-remediation of contaminated soil (per acre)</span>
              <span className="font-semibold text-foreground">$10,000–$30,000</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-foreground">Pollinator habitat corridor (per linear mile)</span>
              <span className="font-semibold text-foreground">$15,000–$35,000</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-foreground">Mangrove forest regeneration (per hectare)</span>
              <span className="font-semibold text-foreground">$80,000–$120,000</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-foreground">Fire-adapted ecosystem restoration (100 acres)</span>
              <span className="font-semibold text-foreground">$60,000–$100,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground">Greenbelt revitalization (per mile)</span>
              <span className="font-semibold text-foreground">$45,000–$90,000</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            These investments generate long-term dividends in food security, carbon drawdown, water retention, biodiversity, and climate adaptation—and when embedded in the Endo Economics flow, they become self-reinforcing components of an economy built on mutual thriving.
          </p>
        </CardContent>
      </Card>

      <Card className="border-green-200/50 bg-green-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <CheckCircle className="h-5 w-5" />
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
              <span className="text-green-700"><strong>Healing Landscapes:</strong> Measurable regeneration of soil, water, air, and biodiversity</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
              <span className="text-green-700"><strong>Climate Resilience:</strong> Reduced risk of droughts, fires, floods, and other disruptions</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
              <span className="text-green-700"><strong>Community Empowerment:</strong> Local stewardship and skill-building at the ground level</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
              <span className="text-green-700"><strong>Transparent Accountability:</strong> Public, real-time visibility into ecological progress</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
              <span className="text-green-700"><strong>Aligned Funding:</strong> Financial systems that reward stewardship and long-term thinking</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
              <span className="text-green-700"><strong>Knowledge Propagation:</strong> Regenerative know-how shared freely across borders and generations</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-foreground">
            Ecological regeneration is not a peripheral concern—it is the foundation for any viable future. This proposal offers a structure for collective re-alignment with Earth's intelligence through open technology, participatory governance, and bioregional responsibility. It is an invitation to treat the planet not as a problem to solve, but as a partner to regenerate with—one watershed, one forest, one field at a time.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ecology;
