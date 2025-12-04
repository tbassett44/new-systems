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

      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            High-Level Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            Endo Economics is designed to support a set of tangible, lived outcomes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Guaranteed Basic Wage & Dignified Livelihoods</p>
                <p className="text-sm text-muted-foreground">Every person receives a baseline income that supports wellbeing, with the opportunity to grow through meaningful contribution. No one falls below a thriving threshold.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">No More Personal or Business Income Taxes</p>
                <p className="text-sm text-muted-foreground">Core services and social systems are funded through distributed value flows within the Commons, dramatically simplifying financial life while increasing transparency.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Adaptive Economic Flow Architecture</p>
                <p className="text-sm text-muted-foreground">The system flexes with changing human needs, ecological realities, and technological progress—redistributing resources in real time rather than locking into rigid budget cycles.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Merit-Based Career Progression with Equity Floors</p>
                <p className="text-sm text-muted-foreground">Compensation within each career adjusts dynamically based on values-aligned merit, while ensuring no one falls below a thriving baseline.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Universal Access to Core Services</p>
                <p className="text-sm text-muted-foreground">Healthcare, education, housing, and nourishment become universally available—not as charity, but as baseline infrastructure.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Resilience to Future Shocks</p>
                <p className="text-sm text-muted-foreground">By decentralizing and diversifying economic control, the model is designed to absorb and adapt to crises—whether climate, technological, or financial.</p>
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
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
              <p className="text-blue-800">
                <span className="font-bold text-xl">~$10T</span> flows annually through the Human Labor Economy. <span className="text-sm">[See <a href="#data-1" className="underline font-medium">Data 1</a>]</span>
              </p>
            </div>
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
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
              <p className="text-green-800">
                <span className="font-bold text-xl">~$10T</span> flows annually through the Public Service Economy. <span className="text-sm">[See <a href="#data-2" className="underline font-medium">Data 2</a>]</span>
              </p>
            </div>
            <p className="leading-relaxed mb-3">
              The existing public flows are routed through the Commons into:
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
            To ensure equity across geographic regions, the economic model incorporates adjustments based on local cost of living. A thriving wage in one area may not meet basic needs in another. Several methods can be combined or tested:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
              <h4 className="font-semibold text-emerald-800 mb-2">Regional COL Index Modifier</h4>
              <p className="text-emerald-700">Salaries are adjusted using a multiplier based on local living cost indices, similar to federal per diem or COLA models.</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
              <h4 className="font-semibold text-emerald-800 mb-2">Living Wage Anchoring</h4>
              <p className="text-emerald-700">The minimum wage for any career category is tied to the local living wage, ensuring a dignified baseline for all.</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
              <h4 className="font-semibold text-emerald-800 mb-2">Geo-Clustering</h4>
              <p className="text-emerald-700">Locations are grouped into cost-of-living bands (e.g., high, medium, low), each with its own standardized calibration.</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
              <h4 className="font-semibold text-emerald-800 mb-2">Hybrid Factor Weighting</h4>
              <p className="text-emerald-700">COL becomes one component (e.g., 15%) in a weighted formula that also includes merit, education, and experience.</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-lg border border-emerald-200">
            <p className="text-emerald-800 font-medium text-center">
              These adjustments ensure that the same role offers equivalent quality of life across diverse geographies, and that the model maintains both equity and adaptability over time.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-teal-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-teal-700">
            <Leaf className="h-6 w-6" />
            Reclaiming Capital for Collective Evolution
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="leading-relaxed">
            The <span className="font-semibold text-teal-700">Production & Capital Flow</span>—roughly the remaining third of GDP—represents:
          </p>
          <ul className="grid md:grid-cols-2 gap-2 ml-4">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              <span>capital income,</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              <span>business profits,</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              <span>investment returns,</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              <span>private equity,</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              <span>corporate R&D,</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              <span>non-wage production outputs.</span>
            </li>
          </ul>
          <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
            <p className="text-teal-800 font-medium">
              If reimagined through a values-aligned lens, this becomes a powerful fund for evolutionary public benefit.
            </p>
          </div>

          <h4 className="font-bold text-teal-800 text-xl pt-4">Domains of Evolutionary Investment</h4>
          
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-3 text-lg">🌱 1. Regenerative Infrastructure</h4>
              <p className="text-green-700 mb-4">Allocate capital toward systems that heal rather than extract:</p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-green-800">Regenerative Agriculture:</p>
                  <p className="text-green-700">rebuild topsoil, biodiversity, and carbon sinks</p>
                </div>
                <div>
                  <p className="font-medium text-green-800">Circular Manufacturing:</p>
                  <p className="text-green-700">decentralized, low-waste, regionally appropriate production</p>
                </div>
                <div>
                  <p className="font-medium text-green-800">Decarbonized Energy:</p>
                  <p className="text-green-700">solar, wind, geothermal, community-owned systems</p>
                </div>
                <div>
                  <p className="font-medium text-green-800">Ecological Restoration:</p>
                  <p className="text-green-700">watersheds, rewilding, wetlands, urban greening</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 mb-3 text-lg">🧠 2. Human Development Systems</h4>
              <p className="text-blue-700 mb-4">Fund long-term human thriving:</p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-blue-800">Universal Preventive Healthcare:</p>
                  <p className="text-blue-700">physical, mental, and integrative services</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">Lifelong Learning Ecosystems:</p>
                  <p className="text-blue-700">open-access education hubs, mentorship networks, skill libraries</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">Wellbeing Technology R&D:</p>
                  <p className="text-blue-700">tools for emotional, cognitive, and social coherence</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">Art & Cultural Stewardship:</p>
                  <p className="text-blue-700">sustaining creators, historians, and visionaries as essential workers</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-3 text-lg">🛠️ 3. Evolutionary Governance & Infrastructure</h4>
              <p className="text-purple-700 mb-4">Support participatory and adaptive social architecture:</p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-purple-800">Open Civic Tech:</p>
                  <p className="text-purple-700">decentralized platforms for governance, voting, and community insight</p>
                </div>
                <div>
                  <p className="font-medium text-purple-800">Public Innovation Funds:</p>
                  <p className="text-purple-700">localized co-op VC models supporting citizen-led solutions</p>
                </div>
                <div>
                  <p className="font-medium text-purple-800">Global Collaboration Portals:</p>
                  <p className="text-purple-700">coordinated planetary research and mutual aid networks</p>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-800 mb-3 text-lg">🫱 4. Redistributed Private Capital</h4>
              <p className="text-orange-700 mb-4">Rather than eliminate private profit entirely, transform it:</p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-orange-800">Stakeholder Dividends:</p>
                  <p className="text-orange-700">redirect corporate profits into citizen dividends or co-op shares</p>
                </div>
                <div>
                  <p className="font-medium text-orange-800">Commons Equity Pools:</p>
                  <p className="text-orange-700">turn extractive gains (e.g., from land speculation or data) into social wealth funds</p>
                </div>
                <div>
                  <p className="font-medium text-orange-800">Time-Bound Ownership Models:</p>
                  <p className="text-orange-700">corporate equity returns to the Commons after a fixed time unless democratically extended</p>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <h4 className="font-semibold text-amber-800 mb-3 text-lg">💡 5. Resilience & Transformation Buffer</h4>
              <p className="text-amber-700 mb-4">Keep a percentage for flexible, future-facing initiatives:</p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-amber-800">Crisis Response Fund:</p>
                  <p className="text-amber-700">earthquakes, floods, pandemics, etc.</p>
                </div>
                <div>
                  <p className="font-medium text-amber-800">Innovation Sandbox:</p>
                  <p className="text-amber-700">paradigm-breaking tech, science, collective intelligence labs</p>
                </div>
                <div>
                  <p className="font-medium text-amber-800">Planetary Scale Initiatives:</p>
                  <p className="text-amber-700">ocean cleanup, global literacy, interspecies communication, etc.</p>
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
          <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
            <p className="text-indigo-800 font-semibold text-lg">
              One of the most transformative impacts of the Endo Economics model is its capacity to de-risk integrity.
            </p>
          </div>
          
          <p className="leading-relaxed">
            In the current economy, many individuals—especially those from marginalized or precarious backgrounds—are forced to compromise their values to meet basic needs. Jobs that perpetuate harm, extractive systems, or cultural dissonance are often the only viable options for survival.
          </p>
          
          <p className="leading-relaxed">
            By providing a guaranteed baseline of income and resource access, Endo Economics creates the conditions for <span className="font-semibold text-indigo-700">ethical clarity and vocational freedom</span>. People are no longer compelled to tolerate:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              <span>toxic workplaces,</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              <span>unethical industries, or</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              <span>meaningless labor.</span>
            </li>
          </ul>
          
          <p className="leading-relaxed">
            Instead, they gain the flexibility to self-organize around projects, communities, and efforts that align with their deeper sense of purpose and positive social or ecological impact.
          </p>
          
          <p className="leading-relaxed font-semibold text-indigo-700">
            This shift is not just humane—it is structurally intelligent.
          </p>
          
          <p className="leading-relaxed">
            When work becomes a field of self-organizing desire, rather than coercion, it naturally optimizes for:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span>motivation,</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span>creativity,</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span>cooperation, and</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span>resilience.</span>
            </li>
          </ul>
          
          <p className="leading-relaxed">
            The result is a <span className="font-medium">distributed intelligence network</span> of people doing what they are intrinsically called to do, rather than merely what they are economically forced to do.
          </p>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-200">
            <p className="text-indigo-800 font-medium text-center">
              In this sense, Endo Economics is not just an economic redesign—it is a <span className="font-bold">liberation engine</span> for cultural renewal, ethical agency, and authentic contribution.
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
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            No systemic redesign is risk-free. Endo Economics explicitly considers potential harms and offers guiding mitigation strategies.
          </p>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 text-lg mb-2">Value Drift or Exploitation</h4>
              <p className="text-yellow-700 mb-3">
                <span className="font-medium">Risk:</span> Participants could seek to game the system or exploit transparency gaps.
              </p>
              <p className="text-yellow-800 font-medium mb-2">Mitigation:</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-center gap-2 text-yellow-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                  <span>Multi-layered verification,</span>
                </li>
                <li className="flex items-center gap-2 text-yellow-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                  <span>AI-assisted pattern recognition,</span>
                </li>
                <li className="flex items-center gap-2 text-yellow-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                  <span>Peer reputation systems,</span>
                </li>
                <li className="flex items-center gap-2 text-yellow-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                  <span>Transparent governance,</span>
                </li>
                <li className="flex items-center gap-2 text-yellow-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                  <span>Adaptive policy updates.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-800 text-lg mb-2">Transition Shock</h4>
              <p className="text-orange-700 mb-3">
                <span className="font-medium">Risk:</span> Sudden restructuring could disrupt existing sectors and livelihoods.
              </p>
              <p className="text-orange-800 font-medium mb-2">Mitigation:</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-center gap-2 text-orange-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                  <span>Pilot programs,</span>
                </li>
                <li className="flex items-center gap-2 text-orange-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                  <span>Localized trials,</span>
                </li>
                <li className="flex items-center gap-2 text-orange-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                  <span>Phased rollouts,</span>
                </li>
                <li className="flex items-center gap-2 text-orange-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                  <span>Safety nets and transition funds,</span>
                </li>
                <li className="flex items-center gap-2 text-orange-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                  <span>Participatory design with affected communities.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-400">
              <h4 className="font-semibold text-red-800 text-lg mb-2">System Capture</h4>
              <p className="text-red-700 mb-3">
                <span className="font-medium">Risk:</span> Power could re-concentrate in hidden forms—digital oligarchies, governance cartels, or data monopolies.
              </p>
              <p className="text-red-800 font-medium mb-2">Mitigation:</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-center gap-2 text-red-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                  <span>Open-source protocols,</span>
                </li>
                <li className="flex items-center gap-2 text-red-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                  <span>Decentralized infrastructure,</span>
                </li>
                <li className="flex items-center gap-2 text-red-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                  <span>Regenerative checks-and-balances,</span>
                </li>
                <li className="flex items-center gap-2 text-red-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                  <span>Term limits and rotation for key roles,</span>
                </li>
                <li className="flex items-center gap-2 text-red-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                  <span>Strong cultural norms around anti-capture.</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary bg-gradient-to-br from-primary/5 to-blue-50">
        <CardHeader>
          <CardTitle className="text-primary text-2xl">Conclusion</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed text-lg font-semibold text-primary">
            A new economic architecture is not only possible—it is necessary.
          </p>
          <p className="leading-relaxed text-lg">
            By identifying and redirecting the three dominant flows of GDP—<span className="font-medium text-blue-600">labor</span>, <span className="font-medium text-green-600">public services</span>, and <span className="font-medium text-purple-600">production/capital</span>—through the Commons, we can begin constructing an economy that supports wholeness, equity, and regenerative flourishing for all.
          </p>
          <p className="leading-relaxed">Endo Economics offers:</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span>a clear diagnosis of systemic misalignment,</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span>a structurally coherent design for rerouting flows, and</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span>a living blueprint for communities, cities, and nations to begin experimenting with new forms of economic life.</span>
            </li>
          </ul>
          <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 mt-6">
            <p className="leading-relaxed text-lg font-medium text-primary text-center">
              This document is drafted with the intent to spark dialogue, iteration, and collaboration toward collective economic transformation.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-white">References</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div id="data-1">
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

          <div id="data-2">
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

          <div id="data-3">
            <h3 className="text-lg font-semibold text-white mb-4">[Data 3]</h3>
            <p className="text-sm text-white mb-4">
              Business / Production & Capital Layer — derivation of the ~$10T estimate.
            </p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-left text-white">Metric / Component</TableHead>
                    <TableHead className="text-right text-white">Value / % of GDP</TableHead>
                    <TableHead className="text-left text-white">Source</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-white">U.S. nominal GDP (2025)</TableCell>
                    <TableCell className="text-right text-white">≈ $30 trillion</TableCell>
                    <TableCell className="text-white">
                      <a href="https://www.bea.gov/data/gdp/gross-domestic-product" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Bureau of Economic Analysis</a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Corporate profits (after-tax, IVA/CCAdj)</TableCell>
                    <TableCell className="text-right text-white">~9.2% of GDP</TableCell>
                    <TableCell className="text-white">
                      <a href="https://fred.stlouisfed.org/series/W273RE1A156NBEA" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">FRED</a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Corporate profits (alternate series)</TableCell>
                    <TableCell className="text-right text-white">~11.0% of GDP in 2025</TableCell>
                    <TableCell className="text-white">
                      <a href="https://ycharts.com/indicators/corporate_profits_usgdp" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">YCharts</a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Private business sector (value-added share of GDP)</TableCell>
                    <TableCell className="text-right text-white">Historically up to ~78% of GDP</TableCell>
                    <TableCell className="text-white">
                      <a href="https://fred.stlouisfed.org/release/tables" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">FRED</a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">Implied business value-added in dollars (if 78%)</TableCell>
                    <TableCell className="text-right text-white">~$23–24 T (on $30T GDP)</TableCell>
                    <TableCell className="text-white">Derived</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">After subtracting wages & public flow (~$20T)</TableCell>
                    <TableCell className="text-right text-white">≈ $10–11 T</TableCell>
                    <TableCell className="text-white">Residual for business operations & surplus</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="mt-4 p-3 bg-white/10 rounded-lg">
              <p className="text-sm text-white italic">
                <strong>Conclusion:</strong> Based on public data, a $10–11 trillion annual Business / Production & Capital layer is a defensible and structurally grounded approximation — not as a precise accounting outcome, but as a robust design assumption for the Commons-based model.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>;
};

export default EndoEconomics;
