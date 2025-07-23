import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, CheckCircle, AlertTriangle, Users, Heart, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";
const Justice = () => {
  useEffect(() => {
    document.title = "Regenerative Justice | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore regenerative justice systems that focus on healing, restoration, and community accountability rather than punishment, creating safer and more equitable societies.');
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Regenerative Justice | New Systems and Structures');
    }
  }, []);

  return <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-primary">Regenerative Justice</h1>
        <p className="text-xl text-muted-foreground">Evolving the Legal System Through Dignity, Healing, and Community Accountability</p>
      </div>

      

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200">Restorative</Badge>
        <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-200">Transformative</Badge>
        <Badge className="bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200">Community-Centered</Badge>
        <Badge className="bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200">Healing-Based</Badge>
        <Badge className="bg-red-100 text-red-800 border-red-200 hover:bg-red-200">Dignity-Focused</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Overview and Purpose</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed">
            This proposal outlines a transformative framework for reimagining justice systems in alignment with human dignity, rehabilitation, and systemic coherence. Moving beyond punitive, carceral models rooted in isolation and punishment, this proposal invites a regenerative approach—where justice becomes a vehicle for personal transformation, communal healing, and societal learning.
          </p>
          <p className="leading-relaxed">
            Drawing inspiration from restorative and transformative justice traditions, as well as emerging technologies in AI and decentralized governance, this model supports a shift from retribution to restoration. By embedding feedback loops, relational accountability, and resourcing pathways into the justice process, individuals and communities can move from cycles of harm to cycles of growth.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <AlertTriangle className="h-5 w-5" />
            The Problem: Punitive Systems and Cycles of Harm
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Mass Incarceration:</strong> The U.S. incarcerates over 2 million people, often for nonviolent offenses, with high rates of recidivism.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Racial and Economic Injustice:</strong> Marginalized communities bear the brunt of systemic bias, over-policing, and under-resourcing.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Lack of Rehabilitation:</strong> Most prisons are not designed to support healing, education, or reintegration.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Disconnected Systems:</strong> Legal processes are slow, adversarial, and alienating for victims, offenders, and communities alike.
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">The Solution: Regenerative Justice Infrastructure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Users className="h-4 w-4 text-green-600" />
                1. Community Accountability Circles
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Local groups trained in restorative practices facilitate dialogues between affected parties</li>
                <li>Focus on acknowledgment of harm, repair, reintegration, and shared understanding</li>
                <li>Community-based mediation that prioritizes healing over punishment</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Heart className="h-4 w-4 text-green-600" />
                2. Regenerative Rehabilitation Centers
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Replace prisons with healing-based campuses offering education, vocational training, therapy, and rites of passage</li>
                <li>Residents are supported in trauma healing and skill-building</li>
                <li>Focus on personal transformation and reintegration into community</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Shield className="h-4 w-4 text-green-600" />
                3. Decentralized Legal Support Systems
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Open-source platforms offer access to legal aid, peer-to-peer mediation</li>
                <li>Reputation-informed conflict resolution with AI-supported equitable case analysis</li>
                <li>Community-based legal support networks that serve marginalized populations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Scale className="h-4 w-4 text-green-600" />
                4. Sentencing Transformation Framework
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Shift sentencing models from punitive timeframes to outcome-based regeneration</li>
                <li>Accountability tied to personal and social growth rather than time served</li>
                <li>Community involvement in determining appropriate responses to harm</li>
              </ul>
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
              <h4 className="font-semibold mb-2">Governance Layer</h4>
              <p className="text-sm">Participatory legal councils and restorative boards guide justice procedures</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Tech Layer</h4>
              <p className="text-sm">Platforms for decentralized mediation, legal access, and regenerative progress tracking</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Education Layer</h4>
              <p className="text-sm">Training in restorative justice, trauma healing, conflict transformation, and civic responsibility</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Monitoring Layer</h4>
              <p className="text-sm">Non-punitive feedback loops for measuring reintegration success, community impact, and healing outcomes</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Integration with Broader Systems</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            This justice model is designed to interface with other sectors of regenerative society:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>With Education:</strong> Justice-involved individuals are offered personalized learning journeys
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>With Wellbeing Systems:</strong> Psychological, emotional, and relational care are core to every stage of the process
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>With Endo Economics:</strong> Resources flow to systems that reduce harm, regenerate lives, and increase social coherence
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>With Digital Sovereignty:</strong> Individuals retain privacy and dignity through encrypted, self-sovereign records
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Estimated Project Costs (per 100 individuals served annually)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Community Accountability Circle Programs</h4>
              <p className="text-sm text-muted-foreground">$150,000–$250,000 including training, facilitation, and coordination</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Regenerative Rehabilitation Centers</h4>
              <p className="text-sm text-muted-foreground">$2M–$5M initial buildout + $35,000–$60,000 per resident annually</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Legal Access and Mediation Platforms</h4>
              <p className="text-sm text-muted-foreground">$500,000–$1.5M for initial development + $100,000/year for community deployment and support</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Restorative Training for Police and Legal Professionals</h4>
              <p className="text-sm text-muted-foreground">$5,000–$15,000 per cohort including curriculum and mentorship</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>Note:</strong> These costs are dramatically lower than traditional incarceration (average $45,000–$80,000/year per prisoner) and yield significantly higher social returns in reduced recidivism, increased public trust, and communal resilience.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <CheckCircle className="h-5 w-5" />
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Healing-Centered Systems:</strong> Justice processes that restore dignity and promote personal growth
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Reduced Recidivism:</strong> Empowered reintegration leads to lower rates of reoffense
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Community Resilience:</strong> Local accountability strengthens trust and cohesion
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Economic Savings:</strong> Lower long-term costs and greater ROI than incarceration
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Systemic Equity:</strong> Culturally responsive and bias-aware processes uplift marginalized voices
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Interoperability:</strong> Integration with education, wellbeing, and governance infrastructures
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            Justice is not merely the enforcement of rules—it is the embodiment of care, accountability, and evolution within a community. This regenerative justice framework offers a clear path forward: one that replaces punishment with healing, alienation with belonging, and rigidity with responsiveness.
          </p>
          <Separator className="my-4" />
          <p className="leading-relaxed font-medium">
            It reclaims the legal system as a vital organ of societal transformation, capable of not only addressing harm, but of midwifing a culture rooted in compassion, wisdom, and shared responsibility.
          </p>
        </CardContent>
      </Card>
    </div>;
};
export default Justice;