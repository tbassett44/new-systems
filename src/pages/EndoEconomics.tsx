import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, AlertTriangle, TrendingUp, Users, Leaf, Brain, Heart, Shield, Zap, Target, MapPin } from "lucide-react";

const EndoEconomics = () => {
  useEffect(() => {
    document.title = "Toward a New Economic Model | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Endo Economics, a new economic model that redirects GDP flow toward collective wellbeing, life-supporting activities, and regenerative systems.');
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Toward a New Economic Model | New Systems and Structures');
    }
  }, []);
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
            The inspiration behind "Endo Economics" arises from the evolutionary principle of endosymbiosis—a foundational process in biology through which distinct organisms merge to form a more complex, cooperative whole. This process gave rise to mitochondria and chloroplasts, essential cellular components that once existed as independent organisms. Evolution favored this integration not through domination, but through mutual benefit, shared function, and interdependence.
          </p>
          <p className="leading-relaxed">
            In this spirit, Endo Economics proposes that our economic systems can evolve in the same way—by uniting previously siloed and competitive domains into cooperative ecosystems of shared value. When different parts of society (labor sectors, public systems, innovation hubs, ecological services) function in harmony toward the health of the whole, the result is greater stability, adaptability, and specialization. By embedding cooperation at the cellular level of economic architecture, we unlock the evolutionary advantage of systems designed not for domination, but for long-term flourishing. Endo Economics sees the economy not as a marketplace of isolated agents, but as a living system—dynamic, intelligent, and capable of co-evolving with humanity's deeper needs.
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
            The Gross Domestic Product (GDP) of the United States is projected to be $30.34 trillion annually in 2025 (O'Neill 2025). To understand and redirect this flow, we isolate the two core components that represent value flowing into human lives and collective infrastructure:
          </p>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3 text-lg">Wage Flow (Human Labor Economy)</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-2xl font-bold text-blue-600 mb-1">~$9.94 trillion</p>
                  <p className="text-sm text-blue-700">Total annual wages paid to the U.S. workforce</p>
                </div>
                <p className="text-sm text-blue-700">
                  This covers compensation for ~92% of the U.S. employed population, across 23 primary occupational sectors. [Data 1]
                </p>
                <div className="mt-4 p-3 bg-blue-100 rounded">
                  <p className="text-sm text-blue-800">
                    <strong>Additional Coverage:</strong> Including the remaining 8% of the workforce not accounted for in the annual wage above, as well as the total of people currently unemployed (7.2M), assuming a "high" average of $70,000/year UBI, this would total $1.3608 trillion
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3 text-lg">Government Operations Flow (Public Service Economy)</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-bold text-green-600 mb-1">~$7.36 trillion</p>
                  <p className="text-sm text-green-700 mb-2">Total annual federal spending [Data 2]</p>
                  <p className="text-sm text-green-700">
                    Includes Social Security, Medicare, Medicaid, SNAP, Unemployment Insurance, ACA subsidies, federal agency budgets, and interest on national debt.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-100 p-3 rounded">
                    <p className="text-lg font-semibold text-green-800">$2.515 trillion</p>
                    <p className="text-sm text-green-700">Budgets from all 50 US States [Data 3]</p>
                  </div>
                  
                  <div className="bg-green-100 p-3 rounded">
                    <p className="text-lg font-semibold text-green-800">$1.1 trillion</p>
                    <p className="text-sm text-green-700">Financial flow from Federal Government to States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
            <p className="text-purple-800 font-medium text-lg">
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
            <p className="text-white font-medium">• What if we restructured these flows to be values-aligned, regenerative, and participatory?</p>
            <p className="text-white font-medium">• What if wages reflected collective priorities, social benefit, and ecological restoration?</p>
            <p className="text-white font-medium">• What if public spending was participatory and transparent?</p>
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

      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700">
            <Target className="h-6 w-6" />
            Nested Distribution Within Careers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            This model of distribution can be recursively applied within each career category. For example, within "Healthcare Practitioners," there are sub-careers like surgeons, nurses, midwives, and therapists. Each sub-group can:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>Allocate their share of the total category budget internally</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>Use a similar merit-based, normal distribution to support growth and diversity within the field</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>Create custom metrics that reflect the values and outcomes specific to their role</div>
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">This nested structure allows for:</h4>
            <div className="space-y-2">
              <p className="text-sm text-purple-700">• Autonomy within professional ecosystems</p>
              <p className="text-sm text-purple-700">• Precision in resource allocation</p>
              <p className="text-sm text-purple-700">• Recognition of nuanced contributions across specialties</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-emerald-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-700">
            <MapPin className="h-6 w-6" />
            Adjusting for Cost of Living (COL)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            To ensure equity across geographic regions, the economic model incorporates adjustments based on local cost of living. This recognizes that a thriving wage in one area may not meet basic needs in another. Several methods are proposed, which will need additional experimentation and refinement to determine the best strategy:
          </p>
          <div className="space-y-4">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-2">Regional COL Index Modifier</h4>
              <p className="text-sm text-emerald-700">Salaries are adjusted using a multiplier based on local living cost indices, similar to federal per diem or COLA models.</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-2">Living Wage Anchoring</h4>
              <p className="text-sm text-emerald-700">The minimum wage for any career category is tied to the local living wage, ensuring a dignified baseline for all.</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-2">Geo-Clustering</h4>
              <p className="text-sm text-emerald-700">Locations are grouped into cost-of-living bands (e.g., high, medium, low), each with its own standardized budget calibration.</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-2">Hybrid Factor Weighting</h4>
              <p className="text-sm text-emerald-700">COL becomes one component (e.g., 15%) in a weighted formula that also includes merit, education, and experience.</p>
            </div>
          </div>
          <div className="bg-emerald-100 p-4 rounded-lg border-l-4 border-emerald-400">
            <p className="text-emerald-800 font-medium">
              These adjustments ensure that the same role offers equivalent quality of life across diverse geographies, and that the model maintains both equity and adaptability over time.
            </p>
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
        <CardContent className="space-y-6">
          <p className="leading-relaxed">
            This portion represents capital income, business profits, investment returns, private equity, corporate R&D, and miscellaneous production outputs. If reimagined through a values-aligned lens, it becomes a powerful fund for evolutionary public benefit.
          </p>
          <p className="leading-relaxed font-medium">
            Here are some possibility domains to explore:
          </p>
          
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-4 text-lg">🌱 1. Regenerative Infrastructure</h4>
              <p className="text-sm text-green-700 mb-4">Allocate capital toward systems that heal rather than extract:</p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-green-800">Regenerative Agriculture:</p>
                  <p className="text-sm text-green-700">Rebuild topsoil, biodiversity, and carbon sinks</p>
                </div>
                <div>
                  <p className="font-medium text-green-800">Circular Manufacturing:</p>
                  <p className="text-sm text-green-700">Decentralized, low-waste, regionally appropriate production</p>
                </div>
                <div>
                  <p className="font-medium text-green-800">Decarbonized Energy:</p>
                  <p className="text-sm text-green-700">Transition to solar, wind, geothermal, and community energy ownership</p>
                </div>
                <div>
                  <p className="font-medium text-green-800">Ecological Restoration:</p>
                  <p className="text-sm text-green-700">Watersheds, rewilding, wetland restoration, and urban greening</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-4 text-lg">🧠 2. Human Development Systems</h4>
              <p className="text-sm text-blue-700 mb-4">Fund long-term human thriving at every scale:</p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-blue-800">Universal Preventive Healthcare:</p>
                  <p className="text-sm text-blue-700">Free physical, mental, and integrative health services</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">Lifelong Learning Ecosystems:</p>
                  <p className="text-sm text-blue-700">Open-access education hubs, mentorship programs, skill libraries</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">Wellbeing Technology R&D:</p>
                  <p className="text-sm text-blue-700">Invest in tools that enhance emotional, cognitive, and social coherence</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">Art & Cultural Stewardship:</p>
                  <p className="text-sm text-blue-700">Sustain creators, historians, and visionaries as essential workers</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-4 text-lg">🛠️ 3. Evolutionary Governance & Infrastructure</h4>
              <p className="text-sm text-purple-700 mb-4">Support participatory and adaptive social architecture:</p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-purple-800">Open Civic Tech:</p>
                  <p className="text-sm text-purple-700">Decentralized digital platforms for governance, voting, and community insight</p>
                </div>
                <div>
                  <p className="font-medium text-purple-800">Public Innovation Funds:</p>
                  <p className="text-sm text-purple-700">Localized co-op VC models supporting citizen-led solutions</p>
                </div>
                <div>
                  <p className="font-medium text-purple-800">Global Collaboration Portals:</p>
                  <p className="text-sm text-purple-700">Coordinated planetary research and mutual aid networks</p>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-4 text-lg">🫱 4. Redistributed Private Capital</h4>
              <p className="text-sm text-orange-700 mb-4">Rather than eliminate private profit entirely, transform it:</p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-orange-800">Stakeholder Dividends:</p>
                  <p className="text-sm text-orange-700">Redirect corporate profits into citizen dividends or co-op shares</p>
                </div>
                <div>
                  <p className="font-medium text-orange-800">Commons Equity Pools:</p>
                  <p className="text-sm text-orange-700">Turn extractive gains (e.g., from land speculation or data) into social wealth funds</p>
                </div>
                <div>
                  <p className="font-medium text-orange-800">Time-Bound Ownership Models:</p>
                  <p className="text-sm text-orange-700">Corporate equity returns to commons after a fixed time unless democratically extended</p>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-4 text-lg">💡 5. Resilience & Transformation Buffer</h4>
              <p className="text-sm text-amber-700 mb-4">Keep a percentage for flexible, future-facing initiatives:</p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-amber-800">Crisis Response Fund:</p>
                  <p className="text-sm text-amber-700">Earthquakes, floods, pandemics, etc.</p>
                </div>
                <div>
                  <p className="font-medium text-amber-800">Innovation Sandbox:</p>
                  <p className="text-sm text-amber-700">Fund emerging tech, paradigm-breaking science, or collective intelligence labs</p>
                </div>
                <div>
                  <p className="font-medium text-amber-800">Planetary Scale Initiatives:</p>
                  <p className="text-sm text-amber-700">Ocean cleanup, global literacy, interspecies communication, etc.</p>
                </div>
              </div>
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
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            One of the most transformative impacts of the Endo Economics model is its capacity to de-risk integrity. In the current economy, many individuals—especially those from marginalized or precarious backgrounds—are forced to compromise their values to meet basic needs. Jobs that perpetuate harm, extractive systems, or cultural dissonance are often the only viable options for survival.
          </p>
          <p className="leading-relaxed">
            By providing a guaranteed baseline of income and resource access, Endo Economics creates the conditions for ethical clarity and vocational freedom. People are no longer compelled to tolerate toxic workplaces, unethical industries, or meaningless labor. Instead, they gain the flexibility to self-organize around projects, communities, and efforts that align with their deeper sense of purpose and positive social or ecological impact.
          </p>
          <p className="leading-relaxed">
            This shift is not just humane—it is structurally intelligent. When work becomes a field of self-organizing desire, rather than coercion, it naturally optimizes for motivation, creativity, cooperation, and resilience. The result is a distributed intelligence network of people doing what they are intrinsically called to do, rather than merely what they are economically forced to do.
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

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-white">References</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">[Data 1]</h3>
            <p className="text-sm text-white mb-4">
              23 Categories of Careers, representing ~92% of current US Jobs. Annual Mean Wage was multiplied by the total number of employees in that career to give a total value of wage flowing through that career. All 23 careers Total Wage Flow, adds up to the total wage flow of $9.94T.
            </p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-left text-white">Career Group</TableHead>
                    <TableHead className="text-right text-white">Employment (Millions)</TableHead>
                    <TableHead className="text-right text-white">Annual Mean Wage (USD)</TableHead>
                    <TableHead className="text-right text-white">Total Wage Flow (Trillions USD)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-white">Management</TableCell>
                    <TableCell className="text-right text-white">10.5</TableCell>
                    <TableCell className="text-right text-white">$137,750</TableCell>
                    <TableCell className="text-right text-white">$1.446375</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Healthcare Practitioners & Technical</TableCell>
                    <TableCell className="text-right text-white">9.28</TableCell>
                    <TableCell className="text-right text-white">$102,060</TableCell>
                    <TableCell className="text-right text-white">$0.9471168</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Business & Financial Operations</TableCell>
                    <TableCell className="text-right text-white">10.09</TableCell>
                    <TableCell className="text-right text-white">$90,580</TableCell>
                    <TableCell className="text-right text-white">$0.9139522</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Office & Administrative Support</TableCell>
                    <TableCell className="text-right text-white">18.53</TableCell>
                    <TableCell className="text-right text-white">$47,940</TableCell>
                    <TableCell className="text-right text-white">$0.8883282</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Sales & Related</TableCell>
                    <TableCell className="text-right text-white">13.38</TableCell>
                    <TableCell className="text-right text-white">$53,280</TableCell>
                    <TableCell className="text-right text-white">$0.7128864</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Transportation & Material Moving</TableCell>
                    <TableCell className="text-right text-white">13.75</TableCell>
                    <TableCell className="text-right text-white">$46,690</TableCell>
                    <TableCell className="text-right text-white">$0.6419875</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Computer & Mathematical</TableCell>
                    <TableCell className="text-right text-white">5.18</TableCell>
                    <TableCell className="text-right text-white">$113,140</TableCell>
                    <TableCell className="text-right text-white">$0.5860652</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Education, Training & Library</TableCell>
                    <TableCell className="text-right text-white">8.74</TableCell>
                    <TableCell className="text-right text-white">$66,400</TableCell>
                    <TableCell className="text-right text-white">$0.580336</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Food Preparation & Serving Related</TableCell>
                    <TableCell className="text-right text-white">13.25</TableCell>
                    <TableCell className="text-right text-white">$34,490</TableCell>
                    <TableCell className="text-right text-white">$0.4569925</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Production</TableCell>
                    <TableCell className="text-right text-white">8.77</TableCell>
                    <TableCell className="text-right text-white">$47,620</TableCell>
                    <TableCell className="text-right text-white">$0.4176274</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Construction & Extraction</TableCell>
                    <TableCell className="text-right text-white">6.23</TableCell>
                    <TableCell className="text-right text-white">$61,500</TableCell>
                    <TableCell className="text-right text-white">$0.383145</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Installation, Maintenance & Repair</TableCell>
                    <TableCell className="text-right text-white">5.99</TableCell>
                    <TableCell className="text-right text-white">$58,500</TableCell>
                    <TableCell className="text-right text-white">$0.350415</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Healthcare Support</TableCell>
                    <TableCell className="text-right text-white">7.06</TableCell>
                    <TableCell className="text-right text-white">$38,220</TableCell>
                    <TableCell className="text-right text-white">$0.2698332</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Architecture & Engineering</TableCell>
                    <TableCell className="text-right text-white">2.54</TableCell>
                    <TableCell className="text-right text-white">$99,090</TableCell>
                    <TableCell className="text-right text-white">$0.2516886</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Protective Service</TableCell>
                    <TableCell className="text-right text-white">3.5</TableCell>
                    <TableCell className="text-right text-white">$57,710</TableCell>
                    <TableCell className="text-right text-white">$0.201985</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Building & Grounds Cleaning & Maintenance</TableCell>
                    <TableCell className="text-right text-white">4.43</TableCell>
                    <TableCell className="text-right text-white">$38,320</TableCell>
                    <TableCell className="text-right text-white">$0.1697576</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Legal</TableCell>
                    <TableCell className="text-right text-white">1.24</TableCell>
                    <TableCell className="text-right text-white">$133,820</TableCell>
                    <TableCell className="text-right text-white">$0.1659368</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Arts, Design, Entertainment, Sports & Media</TableCell>
                    <TableCell className="text-right text-white">2.11</TableCell>
                    <TableCell className="text-right text-white">$75,520</TableCell>
                    <TableCell className="text-right text-white">$0.1593472</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Community & Social Services</TableCell>
                    <TableCell className="text-right text-white">2.42</TableCell>
                    <TableCell className="text-right text-white">$58,980</TableCell>
                    <TableCell className="text-right text-white">$0.1427316</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Life, Physical & Social Science</TableCell>
                    <TableCell className="text-right text-white">1.39</TableCell>
                    <TableCell className="text-right text-white">$87,870</TableCell>
                    <TableCell className="text-right text-white">$0.1221393</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Personal Care & Service</TableCell>
                    <TableCell className="text-right text-white">3.04</TableCell>
                    <TableCell className="text-right text-white">$38,430</TableCell>
                    <TableCell className="text-right text-white">$0.1168272</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Farming, Fishing & Forestry</TableCell>
                    <TableCell className="text-right text-white">0.43</TableCell>
                    <TableCell className="text-right text-white">$39,970</TableCell>
                    <TableCell className="text-right text-white">$0.0171871</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">[Data 2]</h3>
            <p className="text-sm text-white mb-4">
              Breakdown of spending by Government Agency / Program. In total across each category, this leads to $7.36T
            </p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-left text-white">Category</TableHead>
                    <TableHead className="text-right text-white">Estimated Annual Outlays</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-white">Social Security (OASI + DI)</TableCell>
                    <TableCell className="text-right text-white">$1.23 trillion</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Medicare</TableCell>
                    <TableCell className="text-right text-white">$900 billion</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Medicaid (federal share)</TableCell>
                    <TableCell className="text-right text-white">$655 billion</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Net interest on national debt</TableCell>
                    <TableCell className="text-right text-white">$952 billion (2025 projected)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Health & Human Services (admin/other)</TableCell>
                    <TableCell className="text-right text-white">$945 billion</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Defense (DoD + Intel/civilian)</TableCell>
                    <TableCell className="text-right text-white">$873 billion</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Veterans Affairs (including health)</TableCell>
                    <TableCell className="text-right text-white">$308 billion</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Department of Education</TableCell>
                    <TableCell className="text-right text-white">$250 billion</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Agriculture</TableCell>
                    <TableCell className="text-right text-white">$242 billion</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Other agencies (HUD, Interior, Commerce, Justice, Energy…)</TableCell>
                    <TableCell className="text-right text-white">$179 billion</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Unemployment Insurance + other income security</TableCell>
                    <TableCell className="text-right text-white">~$150 billion*</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Transportation</TableCell>
                    <TableCell className="text-right text-white">$145 billion</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">State & Foreign Ops</TableCell>
                    <TableCell className="text-right text-white">$130 billion</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Premium Tax Credits (ACA subsidies)</TableCell>
                    <TableCell className="text-right text-white">$110 billion</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Homeland Security</TableCell>
                    <TableCell className="text-right text-white">$102 billion</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Supplemental SNAP</TableCell>
                    <TableCell className="text-right text-white">$100 billion</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Department of Labor</TableCell>
                    <TableCell className="text-right text-white">$97.5 billion</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>;
};

export default EndoEconomics;
