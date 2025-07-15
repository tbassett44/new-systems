import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, TrendingUp, Users, Leaf, Brain, Heart, Shield, Zap } from "lucide-react";
const EndoEconomics = () => {
  return <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-primary mb-2">Toward a New Economic Model</h1>
        <h2 className="text-3xl font-semibold text-blue-600 mb-3">Redirecting GDP Flow for Collective Wellbeing</h2>
        <h3 className="text-2xl font-medium text-green-600 mb-4">Endo Economics</h3>
        
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">Regenerative Economics</Badge>
        <Badge variant="secondary" className="bg-green-100 text-green-800">Systemic Wellbeing</Badge>
        <Badge variant="secondary" className="bg-purple-100 text-purple-800">Collective Prosperity</Badge>
        <Badge variant="secondary" className="bg-orange-100 text-orange-800">Economic Democracy</Badge>
      </div>

      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="text-primary flex items-center gap-2">
            <Brain className="h-6 w-6 text-blue-600" />
            Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed text-lg">
            This whitepaper is a call to reimagine the very architecture of our economy at a moment of deep systemic misalignment. While the U.S. GDP exceeds $30 trillion annually, a staggering portion of that value fails to translate into human wellbeing, ecological regeneration, or long-term resilience. This document illuminates the hidden flows beneath that number—wages, public spending, and capital—and proposes a practical, values-driven framework to distribute these resources in service of collective thriving. It offers not just critique, but blueprint: a vision for an economy that works for people and planet, and a roadmap to begin building it now.
          </p>
        </CardContent>
      </Card>

      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <AlertTriangle className="h-6 w-6" />
            Critique of the Current Economic System
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            The current economic system, while vast and complex, is fundamentally misaligned with the wellbeing of the majority of people and the long-term health of the planet. It treats value creation primarily through the lens of capital accumulation and short-term profit, often at the expense of human dignity, ecological stability, and community cohesion.
          </p>
          <p className="leading-relaxed">
            Wealth flows disproportionately toward those who already hold capital, while millions work full-time jobs that still fail to meet their basic needs. Entire sectors of labor—caregiving, education, ecological restoration—are undervalued or ignored by traditional market mechanisms, despite their vital contributions to society.
          </p>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h4 className="font-semibold text-red-800 mb-2">The Numbers Don't Lie</h4>
            <p className="text-red-700">
              As of 2024, the top 1% of Americans hold more wealth than the entire bottom 90% combined. The top 1% control over 30% of the nation's total wealth, while the bottom half holds less than 3%. CEOs now earn up to 400 times more than the average worker—a gap that has expanded dramatically since the 1970s, when the ratio was closer to 20-to-1.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <Leaf className="h-6 w-6" />
            Endosymbiotic Evolution and the Roots of Endo Economics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            The inspiration behind "Endo Economics" arises from the evolutionary principle of endosymbiosis—a foundational process in biology through which distinct organisms merge to form a more complex, cooperative whole. This process gave rise to mitochondria and chloroplasts, essential cellular components that once existed as independent organisms.
          </p>
          <p className="leading-relaxed">
            In this spirit, Endo Economics proposes that our economic systems can evolve in the same way—by uniting previously siloed and competitive domains into cooperative ecosystems of shared value. By embedding cooperation at the cellular level of economic architecture, we unlock the evolutionary advantage of systems designed not for domination, but for long-term flourishing.
          </p>
        </CardContent>
      </Card>

      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700">
            <TrendingUp className="h-6 w-6" />
            High Level Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Guaranteed Basic Income & Dignified Livelihoods</strong>
                <p className="text-sm text-muted-foreground">Every person receives a baseline income that supports wellbeing, with the opportunity to grow through meaningful contribution.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">No More Personal Taxes or Business Taxes</strong>
                <p className="text-sm text-muted-foreground">Core services and social systems are funded through distributed value flows, eliminating the need for individual income taxation.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Adaptive Economic Flow Architecture</strong>
                <p className="text-sm text-muted-foreground">The system flexes with changing human needs, ecological realities, and technological progress—redistributing resources in real time.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Merit-Based Career Progression with Equity Floors</strong>
                <p className="text-sm text-muted-foreground">Compensation within each career adjusts dynamically based on values-aligned merit, while ensuring no one falls below a thriving threshold.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Universal Access to Core Services</strong>
                <p className="text-sm text-muted-foreground">Healthcare, education, housing, and nourishment become universally available—not as charity, but as baseline infrastructure.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Resilient to Future Shocks</strong>
                <p className="text-sm text-muted-foreground">By decentralizing and diversifying economic control, the model is designed to absorb and adapt to crises—climate, technological, or financial.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-700">
            <TrendingUp className="h-6 w-6" />
            Current Economic Flow
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="leading-relaxed">
            The Gross Domestic Product (GDP) of the United States is projected to be $30.34 trillion annually in 2025. To understand and redirect this flow, we isolate the two core components that represent value flowing into human lives and collective infrastructure:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Wage Flow (Human Labor Economy)</h4>
              <p className="text-2xl font-bold text-blue-600">~$9.94 trillion</p>
              <p className="text-sm text-blue-700">Total annual wages paid to ~92% of the U.S. workforce across 23 primary occupational sectors</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Government Operations Flow</h4>
              <p className="text-2xl font-bold text-green-600">~$7.36 trillion</p>
              <p className="text-sm text-green-700">Federal spending including Social Security, Medicare, Medicaid, and all agency budgets</p>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-purple-800 font-medium">
              Together, these components account for ~$22.3 trillion, or 74% of total U.S. GDP. This represents the most human-centric portion of the economy: what people are paid, and what is spent to serve and support them.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-emerald-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-700">
            <Heart className="h-6 w-6" />
            The Vision
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            The proposal is to use these two dominant flows as the foundation of a redesigned economic system that ensures access to essential needs, dignified livelihoods, and systemic wellbeing for all people. Rather than letting economic flows accumulate into extractive corporate profits or passive capital gains, we ask:
          </p>
          <div className="space-y-2 mb-4">
            <p className="text-emerald-700 font-medium">• What if we restructured these flows to be values-aligned, regenerative, and participatory?</p>
            <p className="text-emerald-700 font-medium">• What if wages reflected collective priorities, social benefit, and ecological restoration?</p>
            <p className="text-emerald-700 font-medium">• What if public spending was participatory and transparent?</p>
          </div>
          <div className="bg-emerald-100 p-4 rounded-lg">
            <p className="text-emerald-800 font-medium">
              This informs a fundamental organizing principle that the Economic Flow is part of the Commons, where we treat wages and public spending as the commons of collective value, to be stewarded in service of thriving people and ecosystems.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-700">
            <Users className="h-6 w-6" />
            Merit-Based Distribution
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            To ensure fairness while allowing room for excellence and growth, each category of careers will adopt a distribution model based on a standard normal distribution. This model allows for:
          </p>
          <div className="grid gap-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>A thriving base wage as the minimum for everyone in the category</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>A midpoint representing the average contribution level</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>A tail range for exceptional contributors or those with seniority, leadership, or high-impact outcomes</div>
            </div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-2">Merit Assessment Examples:</h4>
            <p className="text-sm text-orange-700 mb-1"><strong>Surgeons:</strong> patient outcomes, peer review, malpractice rates, years of service</p>
            <p className="text-sm text-orange-700 mb-1"><strong>Teachers:</strong> student growth, community feedback, years teaching, continuing education</p>
            <p className="text-sm text-orange-700"><strong>Plumbers:</strong> client satisfaction, project volume, service innovation</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-teal-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-teal-700">
            <Leaf className="h-6 w-6" />
            Reclaiming Capital for Collective Evolution (~26% of GDP)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            This portion represents capital income, business profits, investment returns, private equity, corporate R&D, and miscellaneous production outputs. If reimagined through a values-aligned lens, it becomes a powerful fund for evolutionary public benefit.
          </p>
          <div className="grid gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">🌱 Regenerative Infrastructure</h4>
              <p className="text-sm text-green-700">Regenerative agriculture, circular manufacturing, decarbonized energy, ecological restoration</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">🧠 Human Development Systems</h4>
              <p className="text-sm text-blue-700">Universal healthcare, lifelong learning, wellbeing technology R&D, arts & cultural stewardship</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">🛠️ Evolutionary Governance & Infrastructure</h4>
              <p className="text-sm text-purple-700">Open civic tech, public innovation funds, global collaboration portals</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">🔄 Resilience & Transformation Buffer</h4>
              <p className="text-sm text-amber-700">Crisis response, innovation sandbox, planetary scale initiatives</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-indigo-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-indigo-700">
            <Shield className="h-6 w-6" />
            Liberating Ethical Alignment and Purpose-Driven Work
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            One of the most transformative impacts of the Endo Economics model is its capacity to de-risk integrity. In the current economy, many individuals—especially those from marginalized or precarious backgrounds—are forced to compromise their values to meet basic needs.
          </p>
          <p className="leading-relaxed mb-4">
            By providing a guaranteed baseline of income and resource access, Endo Economics creates the conditions for ethical clarity and vocational freedom. People are no longer compelled to tolerate toxic workplaces, unethical industries, or meaningless labor.
          </p>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <p className="text-indigo-800 font-medium">
              Endo Economics, in this sense, is not just an economic redesign—it is a liberation engine for cultural renewal, ethical agency, and authentic contribution.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-yellow-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-700">
            <AlertTriangle className="h-6 w-6" />
            Potential Unforeseen Harms and Mitigation Strategies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-yellow-800">Value Drift or Exploitation</h4>
              <p className="text-sm text-yellow-700 mb-2">Risk: Participants could seek to game the system</p>
              <p className="text-sm text-yellow-600">Mitigation: Multi-layered verification with AI-assisted pattern recognition and peer reputation systems</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-yellow-800">Transition Shock</h4>
              <p className="text-sm text-yellow-700 mb-2">Risk: Sudden restructuring could disrupt existing sectors</p>
              <p className="text-sm text-yellow-600">Mitigation: Pilot programs, localized trials, and phased rollouts</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-yellow-800">System Capture</h4>
              <p className="text-sm text-yellow-700 mb-2">Risk: Power could re-concentrate in hidden forms</p>
              <p className="text-sm text-yellow-600">Mitigation: Open-source protocols, decentralized infrastructure, and regenerative checks-and-balances</p>
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
            A new economic architecture is not only possible—it is necessary. By identifying and redirecting the dominant flows of GDP already rooted in labor and public service, we can begin constructing an economy that supports wholeness, equity, and regenerative flourishing for all.
          </p>
          <p className="leading-relaxed text-lg mt-4 font-medium text-primary">
            Drafted with the intent to spark dialogue, iteration, and collaboration toward collective economic transformation.
          </p>
        </CardContent>
      </Card>
    </div>;
};
export default EndoEconomics;