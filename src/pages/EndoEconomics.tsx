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
        <CardContent className="prose max-w-none space-y-4">
          <p className="leading-relaxed text-lg">
            This proposal is a call to reimagine the very architecture of our economy at a moment of deep systemic misalignment. While the U.S. GDP exceeds <span className="font-semibold text-primary">$30 trillion annually</span>, a staggering portion of that value fails to translate into human wellbeing, ecological regeneration, or long-term resilience.
          </p>
          <p className="leading-relaxed text-lg">
            This document illuminates the hidden flows beneath that number—<span className="text-blue-600 font-medium">wages</span>, <span className="text-green-600 font-medium">public spending</span>, and <span className="text-purple-600 font-medium">capital/enterprise value</span>—and proposes a practical, values-driven framework to distribute these resources in service of collective thriving.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="text-blue-800 font-medium">
              It offers not just critique, but blueprint: a vision for an economy that works for people and planet, and a roadmap to begin building it now.
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

      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-700">
            <Heart className="h-6 w-6" />
            Reclaiming Economics as the Stewardship of Home
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed text-lg">
            The word <span className="font-semibold italic">economy</span> comes from the Greek <span className="font-semibold text-amber-700">oikonomía</span>—meaning the "management of the household." At its root, economics was never about abstract markets or corporate growth—it was about how we care for the resources, relationships, and responsibilities that sustain life.
          </p>
          <p className="leading-relaxed">
            Our "house" is not just a personal dwelling, but our shared society and planetary ecosystem. And right now, that house is divided—economically, politically, and spiritually.
          </p>
          <p className="leading-relaxed">
            In his famous address, Abraham Lincoln warned that <span className="italic">"a house divided against itself cannot stand."</span> He spoke not just of political tension, but of a deeper fragmentation—a failure to recognize our interdependence. Long before him, George Washington, in his Farewell Address, cautioned that the emergence of political factions would fracture the soul of the nation, undermining the very experiment of democracy.
          </p>
          <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
            <p className="text-amber-800 font-semibold text-lg">
              These warnings were not just poetic—they were prophetic.
            </p>
          </div>
          <p className="leading-relaxed">
            What we now face is a culture caught in adversarial systems, where politics, economics, and identity are weaponized against one another. The result is gridlock, exploitation, and widespread disillusionment.
          </p>
          <p className="leading-relaxed font-medium text-amber-700">
            Endo Economics invites us to return to the original meaning of economy—not as domination, but as home care. Not as extraction, but as symbiosis.
          </p>
          <p className="leading-relaxed">
            By making the flow of resources transparent, decentralized, and participatory, we rebuild the foundation of trust. By aligning resource flows with human and ecological wellbeing, we transform economics into a healing force. This is how we begin to reunify the household, not just politically but structurally. This is how we make our shared home livable again.
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
            The current economic system, while vast and complex, is fundamentally misaligned with the wellbeing of the majority of people and the long-term health of the planet. It treats value creation primarily through the lens of capital accumulation and short-term profit, often at the expense of:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              <span className="text-red-700 font-medium">human dignity,</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              <span className="text-red-700 font-medium">ecological stability, and</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              <span className="text-red-700 font-medium">community cohesion.</span>
            </li>
          </ul>
          <p className="leading-relaxed">
            Wealth flows disproportionately toward those who already hold capital, while millions work full-time jobs that still fail to meet their basic needs. Entire sectors of labor—caregiving, education, ecological restoration—are <span className="font-semibold">systematically undervalued or ignored</span> by traditional market mechanisms, despite their vital contributions to society.
          </p>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h4 className="font-bold text-red-800 mb-3 text-lg">The Numbers Don't Lie</h4>
            <p className="text-red-700 mb-3">As of 2024:</p>
            <ul className="space-y-2 text-red-700">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>The top 1% of Americans hold more wealth than the <span className="font-semibold">entire bottom 90% combined</span>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>The top 1% control over <span className="font-semibold">30% of the nation's total wealth</span>, while the bottom half holds less than 3%.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>CEOs now earn up to <span className="font-semibold">400 times more</span> than the average worker—a gap that has expanded dramatically since the 1970s, when the ratio was closer to 20-to-1.</span>
              </li>
            </ul>
            <p className="text-red-800 font-semibold mt-4 pt-3 border-t border-red-200">
              These are not just statistics—they are signals of structural failure.
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
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            The inspiration behind <span className="font-semibold text-green-700">"Endo Economics"</span> arises from the evolutionary principle of <span className="font-semibold italic">endosymbiosis</span>—a foundational process in biology through which distinct organisms merge to form a more complex, cooperative whole. This process gave rise to mitochondria and chloroplasts, essential cellular components that once existed as independent organisms.
          </p>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <p className="text-green-800 font-medium">
              Evolution favored this integration not through domination, but through mutual benefit, shared function, and interdependence.
            </p>
          </div>
          <p className="leading-relaxed">
            In this spirit, Endo Economics proposes that our economic systems can evolve in the same way—by uniting previously siloed and competitive domains into cooperative ecosystems of shared value. When different parts of society (labor sectors, public systems, innovation hubs, ecological services) function in harmony toward the health of the whole, the result is greater:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-green-700 font-medium">stability,</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-green-700 font-medium">adaptability, and</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-green-700 font-medium">specialization.</span>
            </li>
          </ul>
          <p className="leading-relaxed">
            By embedding cooperation at the <span className="italic">"cellular"</span> level of economic architecture, we unlock the evolutionary advantage of systems designed not for domination, but for long-term flourishing.
          </p>
          <p className="leading-relaxed font-medium text-green-700">
            Endo Economics sees the economy not as a marketplace of isolated agents, but as a living system—dynamic, intelligent, and capable of co-evolving with humanity's deeper needs.
          </p>
        </CardContent>
      </Card>

      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="text-primary">Distinguishing Endo Economics from Socialism and Communism</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            As the Endo Economics model gains attention, it is essential to clearly distinguish its foundations from existing frameworks such as socialism and communism. While all three systems share a concern for equity and social wellbeing, Endo Economics is rooted in <span className="font-semibold">evolutionary and ecological logic</span> rather than ideological redistribution.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-300">
              <h4 className="font-semibold text-red-800 mb-2">It does not:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-red-700">
                  <span className="font-bold">•</span>
                  <span>advocate for state ownership of all property, nor</span>
                </li>
                <li className="flex items-start gap-2 text-red-700">
                  <span className="font-bold">•</span>
                  <span>seek to centralize control in a single authority.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-300">
              <h4 className="font-semibold text-green-800 mb-2">Instead, it emphasizes:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-green-700">
                  <span className="font-bold">•</span>
                  <span>decentralization,</span>
                </li>
                <li className="flex items-start gap-2 text-green-700">
                  <span className="font-bold">•</span>
                  <span>self-sovereignty,</span>
                </li>
                <li className="flex items-start gap-2 text-green-700">
                  <span className="font-bold">•</span>
                  <span>flow-based coordination, and</span>
                </li>
                <li className="flex items-start gap-2 text-green-700">
                  <span className="font-bold">•</span>
                  <span>a regenerative value logic inspired by living systems.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="leading-relaxed">
            Unlike socialism or communism, which often rely on centralized planning and homogenized incentives, Endo Economics fosters:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              <span className="text-blue-700 font-medium">local autonomy,</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              <span className="text-blue-700 font-medium">diversity of contribution, and</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              <span className="text-blue-700 font-medium">multiple dimensions of value beyond labor alone.</span>
            </li>
          </ul>
          
          <p className="leading-relaxed">
            Resources are distributed not through coercive state apparatuses but via:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              <span className="text-purple-700 font-medium">participatory governance,</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              <span className="text-purple-700 font-medium">verifiable outcomes, and</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              <span className="text-purple-700 font-medium">open reputation systems.</span>
            </li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="text-blue-800 font-medium">
              It is not about eliminating private enterprise or standardizing outcomes—it is about creating conditions where wellbeing and mutual thriving are the primary organizing principles, with individuals empowered to contribute in ways aligned with their deepest gifts and community context.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-cyan-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-cyan-700">
            <Shield className="h-6 w-6" />
            Radical Transparency: A Foundation for Trust
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            Endo Economics doesn't ask people to "just trust" a new system. Instead, it proposes to rebuild trust at the field level through:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
              <span className="text-cyan-700 font-medium">Radical transparency of flows,</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
              <span className="text-cyan-700 font-medium">Shared visibility, and</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
              <span className="text-cyan-700 font-medium">Commons-based governance.</span>
            </li>
          </ul>
          
          <p className="leading-relaxed">
            All economic flows within the Commons system are:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
              <span>publicly or semi-publicly auditable, and</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
              <span>traceable from source to destination.</span>
            </li>
          </ul>
          
          <p className="leading-relaxed">
            Every transaction, whether it's a contribution, distribution, or internal allocation, is logged to a ledger that people can inspect in appropriate ways.
          </p>
          
          <p className="leading-relaxed">
            Blockchains or distributed ledgers can serve as the technological backbone to ensure:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
              <span><span className="font-medium">integrity</span> (transactions can't be altered retroactively),</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
              <span><span className="font-medium">permanence</span> (history can't be quietly erased), and</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
              <span><span className="font-medium">clarity</span> (flows can be followed across time and space) —</span>
            </li>
          </ul>
          <p className="leading-relaxed italic text-muted-foreground">
            without requiring blind faith in any single institution.
          </p>
          
          <p className="leading-relaxed font-medium">
            This transparency offers several key advantages:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Decentralized Accountability</strong>
                <p className="text-muted-foreground">No single entity can hide or redirect funds without immediate visibility and social consequences.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Public Oversight and Feedback</strong>
                <p className="text-muted-foreground">Communities can see where their shared resources are going, enabling informed feedback, contestation, and co-governance.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Confidence in Commons-Based Systems</strong>
                <p className="text-muted-foreground">When people can literally "follow the money," they are more likely to participate, contribute, and collaborate.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Reduced Corruption</strong>
                <p className="text-muted-foreground">Open ledgers eliminate many of the shadows in which exploitation, backroom deals, and embezzlement have historically flourished.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400 space-y-3">
            <p className="text-cyan-800">
              In this sense, <span className="font-semibold">transparency is not surveillance</span>. Surveillance concentrates power and hides its own operations; transparency distributes power and reveals the rules. The aim is not to watch people, but to let people watch the system.
            </p>
          </div>
          
          <p className="leading-relaxed">
            Endo Economics does not rely on trusting a government or a corporation.<br />
            <span className="font-medium text-cyan-700">It relies on trusting the field we create together — the code, the visibility, and each other.</span>
          </p>
          
          <p className="leading-relaxed">
            By making flows visible and co-governed, we begin to restore what money was originally meant to be: <span className="font-medium">a trustworthy medium of coordination</span>, embedded in a culture of care rather than extraction.
          </p>
          
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg border border-cyan-200">
            <p className="text-cyan-800 font-medium text-center">
              This is how radical transparency re-establishes a healthy trust field around money — and why it is a foundational pillar of a truly regenerative economy.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700">
            <TrendingUp className="h-6 w-6" />
            High-Level Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed font-medium text-purple-700">
            Endo Economics is designed to support a set of tangible, lived outcomes:
          </p>
          <div className="grid gap-4">
            <div className="flex items-start gap-3 bg-purple-50/50 p-4 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Guaranteed Basic Wage & Dignified Livelihoods</strong>
                <p className="text-muted-foreground">Every person receives a baseline income that supports wellbeing, with the opportunity to grow through meaningful contribution. <span className="font-medium text-purple-700">No one falls below a thriving threshold.</span></p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-purple-50/50 p-4 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">No More Personal or Business Income Taxes</strong>
                <p className="text-muted-foreground">Core services and social systems are funded through distributed value flows within the Commons. Individual and business income taxation can be replaced by Commons-mediated flow allocation, dramatically simplifying financial life while increasing transparency.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-purple-50/50 p-4 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Adaptive Economic Flow Architecture</strong>
                <p className="text-muted-foreground mb-2">The system flexes with:</p>
                <ul className="space-y-1 ml-4 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                    <span>changing human needs,</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                    <span>ecological realities, and</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                    <span>technological progress—</span>
                  </li>
                </ul>
                <p className="text-muted-foreground mt-2">redistributing resources in real time rather than locking into rigid budget cycles.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-purple-50/50 p-4 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Merit-Based Career Progression with Equity Floors</strong>
                <p className="text-muted-foreground">Compensation within each career adjusts dynamically based on values-aligned merit, while ensuring no one falls below a thriving baseline. Excellence is rewarded without sacrificing equity.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-purple-50/50 p-4 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Universal Access to Core Services</strong>
                <p className="text-muted-foreground">Healthcare, education, housing, and nourishment become universally available—<span className="font-medium">not as charity, but as baseline infrastructure.</span></p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-purple-50/50 p-4 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Resilience to Future Shocks</strong>
                <p className="text-muted-foreground">By decentralizing and diversifying economic control, the model is designed to absorb and adapt to crises—whether climate, technological, or financial.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-indigo-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-indigo-700">
            <Zap className="h-6 w-6" />
            The Three Great Rivers of GDP
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
            <p className="text-indigo-800 font-medium">
              The central move of Endo Economics is to treat these three flows as Commons flows:
            </p>
            <p className="text-indigo-700 mt-2">
              All three rivers—<span className="font-semibold">Labor</span>, <span className="font-semibold">Public</span>, and <span className="font-semibold">Production/Capital</span>—flow through a transparent Commons Treasury before being redistributed.
            </p>
          </div>
          
          <p className="leading-relaxed">This enables:</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
              <span className="text-indigo-700 font-medium">unified visibility,</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
              <span className="text-indigo-700 font-medium">participatory governance, and</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
              <span className="text-indigo-700 font-medium">structurally aligned incentives.</span>
            </li>
          </ul>
          
          <p className="leading-relaxed">Once inside the Commons, flows are allocated into:</p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
              <p className="font-medium text-blue-800">Individual Livelihoods</p>
              <p className="text-sm text-blue-700">(wages and thriving baselines)</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
              <p className="font-medium text-green-800">Business Operations</p>
              <p className="text-sm text-green-700">(hard expenses, tools, wages)</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400">
              <p className="font-medium text-amber-800">Public Services & Infrastructure</p>
              <p className="text-sm text-amber-700">(health, education, social systems)</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-400">
              <p className="font-medium text-purple-800">Evolutionary Surplus</p>
              <p className="text-sm text-purple-700">(regeneration, innovation, resilience)</p>
            </div>
          </div>

          {/* Business Operations via the Commons */}
          <div className="border-t border-indigo-200 pt-6">
            <h4 className="font-semibold text-indigo-800 text-lg mb-4">Business Operations via the Commons</h4>
            <p className="leading-relaxed mb-4">
              All business revenue flows into the Commons instead of sitting in private silos.
            </p>
            <p className="leading-relaxed mb-3">
              Businesses receive Commons-issued company cards or credit channels to cover:
            </p>
            <ul className="space-y-2 ml-4 mb-4">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                <span>rent and facilities,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                <span>inventory and raw materials,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                <span>tools, utilities, logistics,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                <span>payroll (which returns into the wage substrate),</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                <span>capital expenditures.</span>
              </li>
            </ul>
            
            <p className="leading-relaxed mb-3 font-medium">AI-assisted analysis monitors transactions:</p>
            <ul className="space-y-2 ml-4 mb-4">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
                <span>comparing spending to sector norms,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
                <span>adjusting for scale, geography, and seasonality,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
                <span>detecting anomalies and fraud,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
                <span>identifying early signs of distress.</span>
              </li>
            </ul>
            
            <p className="leading-relaxed mb-3 font-medium">Human oversight panels:</p>
            <ul className="space-y-2 ml-4 mb-4">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                <span>review flagged transactions with context and nuance,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                <span>approve increases in credit limits for growing or high-impact enterprises,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                <span>adjust or support restructuring when risk appears.</span>
              </li>
            </ul>
            
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-indigo-800">
                This ensures hard expenses are honored, while the Commons retains the ability to guide surplus and capital flows toward long-term collective benefit.
              </p>
            </div>
          </div>

          {/* Wages Through the Commons */}
          <div className="border-t border-indigo-200 pt-6">
            <h4 className="font-semibold text-indigo-800 text-lg mb-4">Wages Through the Commons</h4>
            <p className="leading-relaxed mb-4">
              Employers no longer pay salaries directly. Instead, the Human Labor Flow is managed through the Commons as a <span className="font-semibold text-indigo-700">livelihood substrate</span>.
            </p>
            <p className="leading-relaxed mb-3">People receive:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>a guaranteed thriving baseline income,</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>career-category merit-based adjustments,</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>cost-of-living adjustments based on region,</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>predictable and dignified income independent of any single employer.</span>
              </li>
            </ul>
          </div>

          {/* Public Services Through the Commons */}
          <div className="border-t border-indigo-200 pt-6">
            <h4 className="font-semibold text-indigo-800 text-lg mb-4">Public Services Through the Commons</h4>
            <p className="leading-relaxed mb-3">
              The existing public flows (<span className="font-semibold">~$10T</span>) are routed through the Commons into:
            </p>
            <ul className="space-y-2 ml-4 mb-4">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span>healthcare,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span>education,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span>social safety nets,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span>infrastructure,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span>civic institutions.</span>
              </li>
            </ul>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <p className="text-green-800 font-medium">
                Public budgets become transparent and participatory, with communities helping to shape priorities and evaluate outcomes.
              </p>
            </div>
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
        <CardContent className="space-y-6">
          <p className="leading-relaxed">
            To ensure fairness while allowing room for excellence and growth, each category of careers adopts a distribution model based on a <span className="font-semibold">standard normal distribution</span>. This model allows for:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              <span>A <span className="font-medium text-orange-700">thriving base wage</span> as the minimum for everyone in the category</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              <span>A <span className="font-medium text-orange-700">midpoint</span> representing the average contribution level</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              <span>A <span className="font-medium text-orange-700">tail range</span> for exceptional contributors or those with seniority, leadership, or high-impact outcomes</span>
            </li>
          </ul>
          
          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <h4 className="font-semibold text-orange-800 mb-3">Merit Assessment Examples:</h4>
            <div className="space-y-2">
              <p className="text-orange-700"><span className="font-semibold">Surgeons:</span> patient outcomes, peer review, malpractice rates, years of service</p>
              <p className="text-orange-700"><span className="font-semibold">Teachers:</span> student growth, community feedback, years teaching, continuing education</p>
              <p className="text-orange-700"><span className="font-semibold">Plumbers:</span> client satisfaction, project volume, service innovation</p>
            </div>
          </div>

          {/* Nested Distribution Within Careers */}
          <div className="border-t border-orange-200 pt-6">
            <h4 className="font-semibold text-purple-800 text-lg mb-4 flex items-center gap-2">
              <Target className="h-5 w-5" />
              Nested Distribution Within Careers
            </h4>
            <p className="leading-relaxed mb-4">
              This model can be recursively applied within each career category. For example, within "Healthcare Practitioners," there are sub-careers like surgeons, nurses, midwives, and therapists. Each sub-group can:
            </p>
            <ul className="space-y-2 ml-4 mb-4">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                <span>Allocate their share of the total category budget internally</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                <span>Use a similar merit-based, normal distribution to support growth and diversity within the field</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                <span>Create custom metrics that reflect the values and outcomes specific to their role</span>
              </li>
            </ul>
            
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">This nested structure allows for:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-purple-700">
                  <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                  <span>Autonomy within professional ecosystems</span>
                </li>
                <li className="flex items-center gap-2 text-purple-700">
                  <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                  <span>Precision in resource allocation</span>
                </li>
                <li className="flex items-center gap-2 text-purple-700">
                  <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                  <span>Recognition of nuanced contributions across specialties</span>
                </li>
              </ul>
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
              <h4 className="font-semibold text-white">Value Drift or Exploitation</h4>
              <p className="text-sm text-white mb-2">Risk: Participants could seek to game the system</p>
              <p className="text-sm text-white">Mitigation: Multi-layered verification with AI-assisted pattern recognition and peer reputation systems</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-white">Transition Shock</h4>
              <p className="text-sm text-white mb-2">Risk: Sudden restructuring could disrupt existing sectors</p>
              <p className="text-sm text-white">Mitigation: Pilot programs, localized trials, and phased rollouts</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-white">System Capture</h4>
              <p className="text-sm text-white mb-2">Risk: Power could re-concentrate in hidden forms</p>
              <p className="text-sm text-white">Mitigation: Open-source protocols, decentralized infrastructure, and regenerative checks-and-balances</p>
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
