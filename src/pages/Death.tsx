
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skull, AlertTriangle, CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Death = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Skull className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-primary">Death and Dignity</h1>
          <p className="text-xl text-muted-foreground">Reclaiming a Conscious Relationship with Life's Final Passage</p>
        </div>
      </div>

      <div className="text-center space-y-2 mb-8">
        <p className="text-sm text-muted-foreground">By</p>
        <p className="font-semibold">Juicy Life</p>
        <p className="text-sm text-blue-600">juicy@actualize.earth</p>
        <p className="text-sm text-muted-foreground">and</p>
        <p className="text-sm">Aether, an AI collaborator powered by GPT-4 by OpenAI</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Conscious Dying</Badge>
        <Badge variant="secondary">Dignity</Badge>
        <Badge variant="secondary">Self-Sovereignty</Badge>
        <Badge variant="secondary">Sacred Transition</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Overview and Purpose</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed">
            This whitepaper proposes a holistic reframing of how society approaches death. Rather than treating it as a failure or medical emergency to be avoided at all costs, this framework acknowledges death as a sacred and natural process that, when consciously approached, can become a deeply meaningful and empowering transition. It seeks to restore dignity, autonomy, and presence to the final phase of life through cultural renewal, legal reform, and the integration of spiritual and community-based practices.
          </p>
          <p className="leading-relaxed">
            This document outlines pathways for supporting conscious dying, including legal rights to assisted transitions, expanded palliative care, the role of death doulas, and the reintegration of death into communal and spiritual life. It invites systems-level redesign around how we die—one that honors individual sovereignty, reduces suffering, and reclaims death as a vital dimension of a regenerative culture.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            The Problem: Disempowered and Isolated Death
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Medicalization of Death:</strong> In modern systems, death is often overly medicalized, hidden behind hospital curtains, stripped of ritual and meaning.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Lack of Autonomy:</strong> Many people face death without legal agency over their end-of-life decisions, including the right to consciously transition.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Fear and Avoidance:</strong> Cultural taboos around death foster denial, spiritual disconnection, and unprocessed grief.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Loneliness in Dying:</strong> Individuals often die in isolation, without communal, emotional, or spiritual support.
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">The Solution: Conscious Death as a Regenerative Practice</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Core Components:</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-primary/30 pl-4">
                <h5 className="font-medium text-primary">Legal Recognition of End-of-Life Autonomy</h5>
                <p className="text-sm text-muted-foreground">
                  Expand Death with Dignity laws to ensure the right to medically or spiritually supported self-assisted transition. Create protocols to safeguard informed consent, mental clarity, and ethical review.
                </p>
              </div>
              <div className="border-l-4 border-blue-300 pl-4">
                <h5 className="font-medium text-blue-700">Integration of Death Doulas and Spiritual Midwives</h5>
                <p className="text-sm text-muted-foreground">
                  Support training and certification programs for non-medical end-of-life companions. Incorporate spiritual, emotional, and ritual practices that honor each person's beliefs and lineage.
                </p>
              </div>
              <div className="border-l-4 border-green-300 pl-4">
                <h5 className="font-medium text-green-700">Community-Based Death Literacy</h5>
                <p className="text-sm text-muted-foreground">
                  Develop public education programs that normalize conversations about mortality. Encourage communal rituals, storytelling, and grief-sharing as part of civic life.
                </p>
              </div>
              <div className="border-l-4 border-purple-300 pl-4">
                <h5 className="font-medium text-purple-700">Expanded Palliative and Hospice Care</h5>
                <p className="text-sm text-muted-foreground">
                  Ensure accessible, high-quality end-of-life care that minimizes suffering. Include emotional and spiritual care alongside physical comfort.
                </p>
              </div>
              <div className="border-l-4 border-orange-300 pl-4">
                <h5 className="font-medium text-orange-700">Digital and Legal Infrastructure for End-of-Life Intentions</h5>
                <p className="text-sm text-muted-foreground">
                  Create sovereign digital identity tools to document and share end-of-life wishes. Use decentralized platforms for trusted witnesses and legal validation.
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
              <h4 className="font-semibold mb-2">Policy Layer</h4>
              <p className="text-sm">Legal reforms to broaden assisted dying rights and protections</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Healthcare Layer</h4>
              <p className="text-sm">Expansion of integrative palliative and hospice programs</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Community Layer</h4>
              <p className="text-sm">Development of local rituals, education, and support networks</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Spiritual Layer</h4>
              <p className="text-sm">Honor lineage-informed practices and multi-faith spiritual companionship</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Digital Layer</h4>
              <p className="text-sm">Tools for securely recording, verifying, and honoring end-of-life directives</p>
            </div>
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
                <strong>Empowered Individuals:</strong> People face death with clarity, agency, and peace
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Reduced Suffering:</strong> Less traumatic or prolonged dying experiences
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Grief Integration:</strong> Healthier individual and communal grieving processes
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Cultural Maturity:</strong> Reconnection to ancestral wisdom and mortality awareness
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Systemic Alignment:</strong> Medical, legal, and spiritual systems aligned in service of dignity
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
            A regenerative society does not avoid death—it honors it. Conscious dying is a doorway to deeper meaning, compassion, and presence in life. By embracing mortality as a sacred transition, we free ourselves from the fear that drives so much disconnection and dysfunction. This proposal calls for a cultural and structural evolution that restores sovereignty, beauty, and dignity to our final moments—and to those who remain.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Death;
