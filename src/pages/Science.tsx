import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Science = () => {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-foreground">Regenerative Science</h1>
        <p className="text-xl text-muted-foreground">Unlocking Open Discovery, Collective Intelligence, and Ethical Innovation for the Benefit of All Life</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200">Open Science</Badge>
        <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-200">Participatory</Badge>
        <Badge className="bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200">Interdisciplinary</Badge>
        <Badge className="bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200">Community-Focused</Badge>
        <Badge className="bg-red-100 text-red-800 border-red-200 hover:bg-red-200">Ethics-Rooted</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Overview and Purpose</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed text-foreground">
            This whitepaper proposes a regenerative science infrastructure that shifts research, discovery, and technological development from isolated, competitive, and profit-driven silos to open, participatory, and life-aligned ecosystems. Science, as the disciplined pursuit of understanding, holds transformative power—but in its current institutional form, it is often constrained by corporate interests, inaccessible knowledge systems, and narrow metrics of success.
          </p>
          <p className="leading-relaxed text-foreground">
            In this regenerative model, science becomes a collaborative, decentralized, and ethics-rooted process that serves both the planet and humanity. It invites a rebalancing of traditional inquiry with intuitive insight, ancestral knowledge, and planetary feedback. Aligned with the Endo Economics framework, scientific talent and research energy are redirected toward collective wellbeing, resilience, and the evolution of our shared understanding.
          </p>
        </CardContent>
      </Card>

      <Card className="border-destructive/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            The Problem: Gated Knowledge and Profit-Driven Research
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Centralized Gatekeeping:</strong> Access to research, funding, and publication is limited by elite institutions and paywalls.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Corporate Influence:</strong> Scientific agendas are often dictated by funders whose interests may not align with public or planetary health.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Disconnection from Place:</strong> Research is often abstracted from the real-world ecosystems, communities, and cultures it affects.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Lack of Interdisciplinarity:</strong> Siloed disciplines limit holistic insight and systems thinking.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Underutilized Potential:</strong> Countless citizen scientists, independent researchers, and Indigenous knowledge holders remain marginalized.
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">The Solution: Regenerative Science Ecosystem</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary">Core Components:</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-primary/30 pl-4">
                <h5 className="font-medium text-primary">Open Science Commons</h5>
                <p className="text-sm text-muted-foreground">
                  All publicly funded research is accessible through open platforms. Data, tools, and methodologies are shared under creative commons or copyleft licenses. AI-assisted curation and cross-disciplinary synthesis make vast knowledge navigable.
                </p>
              </div>
              <div className="border-l-4 border-blue-300 pl-4">
                <h5 className="font-medium text-blue-700">Citizen Science and Local Research Networks</h5>
                <p className="text-sm text-muted-foreground">
                  Community labs, schools, and bioregional councils support hands-on experimentation and applied research. Citizen observers contribute to biodiversity tracking, climate sensing, air/water quality monitoring, and more.
                </p>
              </div>
              <div className="border-l-4 border-green-300 pl-4">
                <h5 className="font-medium text-green-700">Ethical Innovation Frameworks</h5>
                <p className="text-sm text-muted-foreground">
                  All research is guided by life-affirming ethics that account for ecological, social, and intergenerational impact. Participatory review boards include non-scientists, elders, youth, and ecological stewards.
                </p>
              </div>
              <div className="border-l-4 border-purple-300 pl-4">
                <h5 className="font-medium text-purple-700">Integrative Knowledge Systems</h5>
                <p className="text-sm text-muted-foreground">
                  Scientific inquiry is enriched by Indigenous wisdom, spiritual cosmologies, systems theory, and biointelligence. Labs and universities become hubs for cultural exchange and multidisciplinary dialogue.
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
              <h4 className="font-semibold mb-2">Infrastructure Layer</h4>
              <p className="text-sm">Open-access research repositories, decentralized peer review protocols, and interoperable lab tools</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Participation Layer</h4>
              <p className="text-sm">Scientists, citizens, artists, healers, and technologists collaborate through shared platforms and networks</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Feedback Layer</h4>
              <p className="text-sm">Ongoing public dialogue, reflective practice, and iterative redesign of hypotheses and priorities</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Education Layer</h4>
              <p className="text-sm">Regenerative science is integrated into early and adult education through place-based learning and experimentation</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Governance Layer</h4>
              <p className="text-sm">Research agendas shaped by communities, ecological indicators, and distributed consensus</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Integration with Endo Economics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            In the Endo Economics model, research and discovery are seen not as cost centers or patent portfolios but as generative forces within the societal body. Funding is directed toward knowledge that increases resilience, reveals patterns of cooperation, and empowers local solutions. Scientists and contributors are recognized and compensated for their service to the commons—not through competitive grants or venture capital, but through transparent systems that reflect collective priorities.
          </p>
          <p className="leading-relaxed">
            Rather than isolating innovation in IP vaults or pharmaceutical monopolies, discoveries flow openly into regenerative infrastructure—supporting health, ecology, education, and culture. This approach redefines progress as coherence, wisdom, and applicability—not just novelty or speed.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Liberated Knowledge:</strong>
                <span className="text-muted-foreground"> Open, accessible science accelerates discovery and reduces duplication</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Participatory Insight:</strong>
                <span className="text-muted-foreground"> Broader inclusion of communities, cultures, and disciplines enriches inquiry</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Ethical Innovation:</strong>
                <span className="text-muted-foreground"> Research serves life, not markets, and is governed by living systems values</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Resilient Infrastructure:</strong>
                <span className="text-muted-foreground"> Decentralized science networks persist through institutional collapse or disruption</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Civic Engagement:</strong>
                <span className="text-muted-foreground"> People rediscover a relationship to discovery and the mysteries of life</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Holistic Evolution:</strong>
                <span className="text-muted-foreground"> Science re-integrated with spirit, story, and systems consciousness</span>
              </div>
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
            Science is one of humanity's most sacred practices: the shared art of making the unknown knowable. To serve life in this age of transformation, it must shed its extractive scaffolding and become a regenerative, community-rooted, and open-ended process.
          </p>
          <Separator className="my-4" />
          <p className="leading-relaxed font-medium text-foreground">
            This proposal invites a new epoch of inquiry—one where the lab is in the forest, the classroom is the river, and the spirit of discovery flows back into the heart of the world.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Science;
