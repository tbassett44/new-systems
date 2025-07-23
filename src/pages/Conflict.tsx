import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { CheckCircle, AlertTriangle, Heart, Shield, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Conflict = () => {
  useEffect(() => {
    document.title = "Conflict Transformation & Restorative Processes | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about conflict transformation and restorative processes that create a culture of repair, not retribution, through healing-centered approaches to interpersonal and community conflict.');
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Conflict Transformation & Restorative Processes | New Systems and Structures');
    }
  }, []);
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-foreground">Conflict Transformation & Restorative Processes</h1>
        <p className="text-xl text-muted-foreground">A Culture of Repair, Not Retribution</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800">Restorative</div>
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-800">Proactive</div>
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-100 text-purple-800">Community-Based</div>
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-orange-100 text-orange-800">Growth-Oriented</div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Overview and Purpose</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed text-foreground">
            This proposal proposes a shift from reactive, punitive models of conflict resolution to a proactive, regenerative culture of repair. It recognizes conflict as a natural part of human relationships and communities—one that, when skillfully engaged, can lead to deeper understanding, stronger bonds, and collective growth. Rather than waiting for harm to escalate into criminal justice involvement, this framework introduces tools and systems that foster early intervention, relational accountability, and long-term healing.
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
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Lack of Accessible Processes</p>
                <p className="text-sm text-muted-foreground">Most communities lack accessible, trusted processes to address interpersonal harm or tension before it escalates.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Punitive Approaches</p>
                <p className="text-sm text-muted-foreground">Punitive systems prioritize blame and punishment over understanding, restitution, or healing.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Outsourced Conflict Resolution</p>
                <p className="text-sm text-muted-foreground">Schools, workplaces, and neighborhoods often suppress conflict or outsource it to external authorities.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Skills Gap</p>
                <p className="text-sm text-muted-foreground">Many people lack the skills or models to engage in honest dialogue or reconciliation.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Formative Experiences</p>
                <p className="text-sm text-muted-foreground">Early experiences of unresolved conflict (e.g., on playgrounds or in families) shape lifelong beliefs about safety, trust, and justice.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-primary">The Solution: Regenerative Conflict Transformation Infrastructure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Heart className="h-4 w-4 text-green-600" />
                1. Restorative Justice Systems
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Community-led processes that prioritize healing over punishment</li>
                <li>Focus on accountability, repair, and restoration of relationships</li>
                <li>Inclusive decision-making that involves all affected parties</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Shield className="h-4 w-4 text-green-600" />
                2. Conflict Prevention Networks
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Early warning systems and proactive community support</li>
                <li>Address root causes before conflicts escalate</li>
                <li>Community-based mediation and intervention programs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Users className="h-4 w-4 text-green-600" />
                3. Healing-Centered Responses
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Trauma-informed approaches that recognize interconnectedness of healing</li>
                <li>Individual and collective healing processes integrated together</li>
                <li>Cultural and spiritual practices that support transformation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <CheckCircle className="h-4 w-4 text-green-600" />
                4. Cultural Bridge-Building
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Programs that foster understanding across difference</li>
                <li>Build capacity for healthy dialogue and relationship</li>
                <li>Cross-cultural exchange and collaborative problem-solving</li>
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
                <strong className="text-foreground">Reduction in School Suspensions and Youth Arrests:</strong>
                <span className="text-muted-foreground"> Early intervention reduces escalation to punitive systems</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Increased Capacity for Emotional Regulation:</strong>
                <span className="text-muted-foreground"> Communities develop skills for healthy expression and conflict navigation</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Stronger Trust and Cohesion:</strong>
                <span className="text-muted-foreground"> Restorative processes rebuild relationships and social fabric</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Empowered Individual Responsibility:</strong>
                <span className="text-muted-foreground"> People gain skills to take accountability and repair harm</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Decreased Reliance on Punitive Systems:</strong>
                <span className="text-muted-foreground"> Communities handle conflicts locally and restoratively</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Culturally Inclusive Pathways:</strong>
                <span className="text-muted-foreground"> Healing and dialogue processes honor diverse traditions and approaches</span>
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