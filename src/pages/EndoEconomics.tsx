
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins, TrendingUp, Users, Leaf, Heart, ArrowRight } from "lucide-react";

const EndoEconomics = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Coins className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Toward a New Economic Model</h1>
          <p className="text-xl text-muted-foreground">Redirecting GDP Flow for Collective Wellbeing</p>
          <p className="text-lg font-semibold text-primary mt-2">Endo Economics</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border">
        <p className="text-sm text-muted-foreground mb-2">By</p>
        <p className="font-medium">Juicy Life - juicy@actualize.earth</p>
        <p className="text-sm text-muted-foreground">and Aether, an AI collaborator powered by GPT-4 by OpenAI</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Economic Transformation</Badge>
        <Badge variant="secondary">GDP Redistribution</Badge>
        <Badge variant="secondary">Collective Wellbeing</Badge>
        <Badge variant="secondary">Regenerative</Badge>
        <Badge variant="secondary">Values-Aligned</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            This whitepaper is a call to reimagine the very architecture of our economy at a moment of deep systemic 
            misalignment. While the U.S. GDP exceeds $30 trillion annually, a staggering portion of that value fails 
            to translate into human wellbeing, ecological regeneration, or long-term resilience. This document illuminates 
            the hidden flows beneath that number—wages, public spending, and capital—and proposes a practical, values-driven 
            framework to distribute these resources in service of collective thriving. It offers not just critique, but 
            blueprint: a vision for an economy that works for people and planet, and a roadmap to begin building it now.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Critique of the Current Economic System</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            The current economic system, while vast and complex, is fundamentally misaligned with the wellbeing of the 
            majority of people and the long-term health of the planet. It treats value creation primarily through the 
            lens of capital accumulation and short-term profit, often at the expense of human dignity, ecological stability, 
            and community cohesion.
          </p>
          
          <div className="bg-destructive/5 border-l-4 border-destructive/30 p-4 rounded">
            <h3 className="font-semibold text-destructive mb-2">Wealth Concentration Statistics</h3>
            <ul className="space-y-2 text-sm">
              <li>• Top 1% of Americans hold more wealth than the entire bottom 90% combined</li>
              <li>• Top 1% control over 30% of national wealth, while bottom half holds less than 3%</li>
              <li>• CEOs earn up to 400x more than average workers (was 20x in the 1970s)</li>
              <li>• Since 1989, top 1% wealth share has nearly doubled while median wages stagnated</li>
            </ul>
          </div>

          <p className="leading-relaxed">
            This concentration of wealth not only distorts economic opportunity, but also erodes democratic influence, 
            concentrates decision-making power, and undermines collective resilience. Any system aspiring toward fairness, 
            adaptability, and wellbeing must directly address and redesign this structural imbalance.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-600" />
            Endosymbiotic Evolution and the Roots of Endo Economics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            The inspiration behind "Endo Economics" arises from the evolutionary principle of endosymbiosis—a foundational 
            process in biology through which distinct organisms merge to form a more complex, cooperative whole. This process 
            gave rise to mitochondria and chloroplasts, essential cellular components that once existed as independent organisms.
          </p>
          <p className="leading-relaxed">
            In this spirit, Endo Economics proposes that our economic systems can evolve in the same way—by uniting previously 
            siloed and competitive domains into cooperative ecosystems of shared value. When different parts of society function 
            in harmony toward the health of the whole, the result is greater stability, adaptability, and specialization.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            High Level Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {[
              "Guaranteed Basic Income & Dignified Livelihoods",
              "No More Personal Taxes or Business Taxes",
              "Adaptive Economic Flow Architecture",
              "Merit-Based Career Progression with Equity Floors",
              "Resource Allocation Driven by Collective Wellbeing",
              "Participatory Public Spending",
              "Regenerative Capital Channels",
              "Universal Access to Core Services",
              "Economic Inclusion of the Currently Unemployed",
              "Resilient to Future Shocks"
            ].map((outcome, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-primary">{outcome.split(' - ')[0]}</p>
                  {outcome.includes(' - ') && (
                    <p className="text-sm text-muted-foreground mt-1">{outcome.split(' - ')[1]}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Current Economic Flow
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="leading-relaxed">
            The Gross Domestic Product (GDP) of the United States is projected to be <span className="font-semibold text-primary">$30.34 trillion annually</span> in 2025. 
            To understand and redirect this flow, we isolate the two core components that represent value flowing into human lives and collective infrastructure:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Wage Flow (Human Labor Economy)</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">~$9.94 trillion</p>
              <p className="text-sm text-blue-700">
                Total annual wages paid to the U.S. workforce, covering ~92% of employed population across 23 primary occupational sectors.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Government Operations Flow</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">~$7.36 trillion</p>
              <p className="text-sm text-green-700">
                Total annual federal spending including Social Security, Medicare, Medicaid, and all federal agency budgets.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
            <p className="text-center">
              <span className="text-lg font-semibold text-purple-800">Together: ~$22.3 trillion</span>
              <br />
              <span className="text-sm text-purple-600">74% of total U.S. GDP - the most human-centric portion of the economy</span>
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>The Vision</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            The proposal is to use these two dominant flows as the foundation of a redesigned economic system that ensures 
            access to essential needs, dignified livelihoods, and systemic wellbeing for all people. Rather than letting 
            economic flows accumulate into extractive corporate profits or passive capital gains, we ask:
          </p>

          <div className="space-y-3">
            {[
              "What if we restructured these flows to be values-aligned, regenerative, and participatory?",
              "What if instead of wages being dictated solely by market abstraction, they reflected collective priorities, social benefit, and ecological restoration?",
              "What if public spending was participatory and transparent, with communities deciding how collective surplus is reinvested?"
            ].map((question, index) => (
              <div key={index} className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                <p className="text-amber-800 font-medium">{question}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <p className="font-semibold text-primary mb-2">Fundamental Organizing Principle:</p>
            <p className="text-sm">
              The Economic Flow is part of the Commons, where we treat wages and public spending as the commons of 
              collective value, to be stewarded in service of thriving people and ecosystems.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Merit-Based Distribution</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            To ensure fairness while allowing room for excellence and growth, each category of careers will adopt a 
            distribution model based on a standard normal distribution. This model allows for:
          </p>

          <div className="grid gap-4">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>A thriving base wage as the minimum for everyone in the category</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>A midpoint representing the average contribution level</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>A tail range for exceptional contributors with seniority, leadership, or high-impact outcomes</span>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Merit Assessment Examples:</h3>
            <div className="grid gap-3 text-sm">
              <div><strong>Surgeons:</strong> patient outcomes, peer review, malpractice rates, years of service</div>
              <div><strong>Teachers:</strong> student growth, community feedback, years teaching, continuing education</div>
              <div><strong>Plumbers:</strong> client satisfaction, project volume, service innovation</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-600" />
            Reclaiming Capital for Collective Evolution (~26% of GDP)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="leading-relaxed">
            This portion represents capital income, business profits, investment returns, private equity, corporate R&D, 
            and miscellaneous production outputs. If reimagined through a values-aligned lens, it becomes a powerful 
            fund for evolutionary public benefit.
          </p>

          <div className="grid gap-4">
            {[
              {
                icon: "🌱",
                title: "Regenerative Infrastructure",
                items: ["Regenerative Agriculture", "Circular Manufacturing", "Decarbonized Energy", "Ecological Restoration"]
              },
              {
                icon: "🧠",
                title: "Human Development Systems",
                items: ["Universal Preventive Healthcare", "Lifelong Learning Ecosystems", "Wellbeing Technology R&D", "Art & Cultural Stewardship"]
              },
              {
                icon: "🛠️",
                title: "Evolutionary Governance & Infrastructure",
                items: ["Open Civic Tech", "Public Innovation Funds", "Global Collaboration Portals"]
              },
              {
                icon: "🫱",
                title: "Redistributed Private Capital",
                items: ["Stakeholder Dividends", "Commons Equity Pools", "Time-Bound Ownership Models"]
              }
            ].map((category, index) => (
              <div key={index} className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-lg border">
                <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <span className="text-lg">{category.icon}</span>
                  {category.title}
                </h3>
                <div className="grid gap-2">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-indigo-600" />
            Liberating Ethical Alignment and Purpose-Driven Work
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            One of the most transformative impacts of the Endo Economics model is its capacity to de-risk integrity. 
            In the current economy, many individuals—especially those from marginalized or precarious backgrounds—are 
            forced to compromise their values to meet basic needs.
          </p>
          <p className="leading-relaxed mb-4">
            By providing a guaranteed baseline of income and resource access, Endo Economics creates the conditions for 
            ethical clarity and vocational freedom. People are no longer compelled to tolerate toxic workplaces, unethical 
            industries, or meaningless labor.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded">
            <p className="text-indigo-800 font-medium">
              Endo Economics is not just an economic redesign—it is a liberation engine for cultural renewal, 
              ethical agency, and authentic contribution.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Potential Unforeseen Harms and Mitigation Strategies</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            While the Endo Economics model is designed to optimize systemic wellbeing and equity, any shift of this 
            magnitude carries potential unintended consequences. Here are key risks and mitigation strategies:
          </p>

          <div className="space-y-4">
            {[
              {
                risk: "Value Drift or Exploitation",
                description: "Participants could seek to game the system—exaggerating needs, minimizing contributions, or exploiting redistribution.",
                mitigation: "Use multi-layered verification—AI-assisted pattern recognition, peer reputation systems, and decentralized governance."
              },
              {
                risk: "Disincentivizing High-Leverage Contribution",
                description: "Guaranteed income might unintentionally reduce motivation for ambitious innovation or hard-to-measure service.",
                mitigation: "Layer in qualitative forms of value recognition—social contribution scores, peer elevation, or access to new tools."
              },
              {
                risk: "System Capture",
                description: "Power could re-concentrate in hidden forms (technocratic elites, platform controllers).",
                mitigation: "Maintain open-source protocols, decentralized infrastructure, and regenerative checks-and-balances throughout."
              }
            ].map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-semibold text-red-600 mb-2">{item.risk}</h3>
                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                <p className="text-sm text-green-700 font-medium">Mitigation: {item.mitigation}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-lg">
            A new economic architecture is not only possible—it is necessary. By identifying and redirecting the dominant 
            flows of GDP already rooted in labor and public service, we can begin constructing an economy that supports 
            wholeness, equity, and regenerative flourishing for all.
          </p>
          <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border">
            <p className="text-center text-primary font-medium">
              Drafted with the intent to spark dialogue, iteration, and collaboration toward collective economic transformation.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EndoEconomics;
