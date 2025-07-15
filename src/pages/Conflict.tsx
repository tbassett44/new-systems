import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Conflict = () => {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-foreground">Conflict Transformation & Restorative Processes</h1>
        <p className="text-xl text-muted-foreground">A Culture of Repair, Not Retribution</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Restorative</Badge>
        <Badge variant="secondary">Proactive</Badge>
        <Badge variant="secondary">Community-Based</Badge>
        <Badge variant="secondary">Growth-Oriented</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Overview and Purpose</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed text-foreground">
            This whitepaper proposes a shift from reactive, punitive models of conflict resolution to a proactive, regenerative culture of repair. It recognizes conflict as a natural part of human relationships and communities—one that, when skillfully engaged, can lead to deeper understanding, stronger bonds, and collective growth. Rather than waiting for harm to escalate into criminal justice involvement, this framework introduces tools and systems that foster early intervention, relational accountability, and long-term healing.
          </p>
        </CardContent>
      </Card>

      <Card className="border-destructive/20 bg-destructive/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            The Problem: Escalation, Disconnection, and Harm Without Repair
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div className="text-destructive/90">
                Most communities lack accessible, trusted processes to address interpersonal harm or tension before it escalates.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div className="text-destructive/90">
                Punitive systems prioritize blame and punishment over understanding, restitution, or healing.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div className="text-destructive/90">
                Schools, workplaces, and neighborhoods often suppress conflict or outsource it to external authorities.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div className="text-destructive/90">
                Many people lack the skills or models to engage in honest dialogue or reconciliation.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div className="text-destructive/90">
                Early experiences of unresolved conflict (e.g., on playgrounds or in families) shape lifelong beliefs about safety, trust, and justice.
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-primary">The Solution: Regenerative Conflict Transformation Infrastructure</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary">Core Components:</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-primary/30 pl-4">
                <h5 className="font-medium text-primary">Community-Based Restorative Hubs</h5>
                <p className="text-sm text-primary/80">
                  Localized spaces—integrated into schools, neighborhoods, and workplaces—where trained facilitators guide individuals and groups through nonviolent communication, conflict mapping, and restorative dialogue. Accessible to all ages, with youth-specific and elder-guided pathways.
                </p>
              </div>
              <div className="border-l-4 border-blue-300 pl-4">
                <h5 className="font-medium text-blue-700">Early Intervention in Youth Spaces</h5>
                <p className="text-sm text-blue-700/80">
                  Embed conflict transformation into education systems: playground peer mediation, classroom talking circles, and restorative response teams. Teach children to name feelings, take responsibility, and co-create repair.
                </p>
              </div>
              <div className="border-l-4 border-green-300 pl-4">
                <h5 className="font-medium text-green-700">Culturally Adaptable Mediation and Circle Processes</h5>
                <p className="text-sm text-green-700/80">
                  Offer a menu of conflict engagement tools (restorative justice circles, mediation, deep listening councils) tailored to cultural context. Include elders, spiritual leaders, and conflict-trained peers in facilitation.
                </p>
              </div>
              <div className="border-l-4 border-purple-300 pl-4">
                <h5 className="font-medium text-purple-700">Integrating Conflict Education into Life Skills Training</h5>
                <p className="text-sm text-purple-700/80">
                  Teach relational intelligence, accountability, and rupture-repair as core competencies alongside reading and math. Utilize gamified or narrative-based platforms to practice real-world scenarios.
                </p>
              </div>
              <div className="border-l-4 border-orange-300 pl-4">
                <h5 className="font-medium text-orange-700">Digital Conflict Resolution Tools</h5>
                <p className="text-sm text-orange-700/80">
                  Create privacy-respecting platforms for structured dialogue, facilitated check-ins, and reflective journaling. Integrate with sovereign identity and wellbeing systems.
                </p>
              </div>
              <div className="border-l-4 border-teal-300 pl-4">
                <h5 className="font-medium text-teal-700">Bridging to Justice System Alternatives</h5>
                <p className="text-sm text-teal-700/80">
                  Use community-based agreements, restitution processes, and healing circles to divert cases from formal systems when appropriate. Train law enforcement and legal actors in trauma-informed, restorative approaches.
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
              <h4 className="font-semibold mb-2">Prevention Layer</h4>
              <p className="text-sm">Conflict literacy education in early childhood and adolescence</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Engagement Layer</h4>
              <p className="text-sm">Hubs and facilitators available for in-person or digital support</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Accountability Layer</h4>
              <p className="text-sm">Community-crafted agreements and reparative outcomes</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Integration Layer</h4>
              <p className="text-sm">Sync with wellbeing tracking, school systems, housing, and justice alternatives</p>
            </div>
          </div>
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
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-green-800">Reduction in School Suspensions and Youth Arrests:</strong>
                <span className="text-green-700"> Early intervention reduces escalation to punitive systems</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-green-800">Increased Capacity for Emotional Regulation:</strong>
                <span className="text-green-700"> Communities develop skills for healthy expression and conflict navigation</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-green-800">Stronger Trust and Cohesion:</strong>
                <span className="text-green-700"> Restorative processes rebuild relationships and social fabric</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-green-800">Empowered Individual Responsibility:</strong>
                <span className="text-green-700"> People gain skills to take accountability and repair harm</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-green-800">Decreased Reliance on Punitive Systems:</strong>
                <span className="text-green-700"> Communities handle conflicts locally and restoratively</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-green-800">Culturally Inclusive Pathways:</strong>
                <span className="text-green-700"> Healing and dialogue processes honor diverse traditions and approaches</span>
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
            A society's resilience is measured not by its ability to avoid conflict, but by its capacity to transform it. By investing in restorative infrastructure—emotional, educational, and institutional—we reweave the social fabric and lay the foundation for a justice system that truly honors dignity, repair, and relationship.
          </p>
          <Separator className="my-4" />
          <p className="leading-relaxed font-medium text-foreground">
            This proposal complements and reinforces broader transformations in the justice, education, and wellbeing sectors, ensuring that the seeds of conflict become compost for collective evolution.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Conflict;
