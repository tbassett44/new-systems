import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skull, AlertTriangle, CheckCircle, Heart, Shield, Users, Brain } from "lucide-react";

const Death = () => {
  useEffect(() => {
    document.title = "Death and Dignity | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore conscious death and dignity frameworks that honor end-of-life as a sacred transition, supporting individuals and communities in healing-centered approaches to mortality and grief.');
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Death and Dignity | New Systems and Structures');
    }
  }, []);
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-primary mb-2">Death and Dignity</h1>
        <h2 className="text-3xl font-semibold text-blue-600 mb-3">Reclaiming a Conscious Relationship with Life's Final Passage</h2>
        <p className="text-xl text-muted-foreground">A holistic reframing of how society approaches death as a sacred and natural process</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">Conscious Dying</Badge>
        <Badge variant="secondary" className="bg-green-100 text-green-800">Dignity</Badge>
        <Badge variant="secondary" className="bg-purple-100 text-purple-800">Self-Sovereignty</Badge>
        <Badge variant="secondary" className="bg-orange-100 text-orange-800">Sacred Transition</Badge>
      </div>

      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="text-primary flex items-center gap-2">
            <Heart className="h-6 w-6 text-blue-600" />
            Overview and Purpose
          </CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed text-lg">
            This whitepaper proposes a holistic reframing of how society approaches death. Rather than treating it as a failure or medical emergency to be avoided at all costs, this framework acknowledges death as a sacred and natural process that, when consciously approached, can become a deeply meaningful and empowering transition. It seeks to restore dignity, autonomy, and presence to the final phase of life through cultural renewal, legal reform, and the integration of spiritual and community-based practices.
          </p>
          <p className="leading-relaxed text-lg">
            This document outlines pathways for supporting conscious dying, including legal rights to assisted transitions, expanded palliative care, the role of death doulas, and the reintegration of death into communal and spiritual life. It invites systems-level redesign around how we die—one that honors individual sovereignty, reduces suffering, and reclaims death as a vital dimension of a regenerative culture.
          </p>
        </CardContent>
      </Card>

      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <AlertTriangle className="h-6 w-6" />
            The Problem: Disempowered and Isolated Death
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            In modern systems, death is often overly medicalized, hidden behind hospital curtains, stripped of ritual and meaning. Many people face death without legal agency over their end-of-life decisions, including the right to consciously transition.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800 mb-2">Medicalization of Death</h4>
              <p className="text-sm text-red-700">Death is often overly medicalized, hidden behind hospital curtains, stripped of ritual and meaning</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800 mb-2">Lack of Autonomy</h4>
              <p className="text-sm text-red-700">Many people face death without legal agency over their end-of-life decisions, including the right to consciously transition</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800 mb-2">Fear and Avoidance</h4>
              <p className="text-sm text-red-700">Cultural taboos around death foster denial, spiritual disconnection, and unprocessed grief</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800 mb-2">Loneliness in Dying</h4>
              <p className="text-sm text-red-700">Individuals often die in isolation, without communal, emotional, or spiritual support</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <Heart className="h-6 w-6" />
            The Solution: Conscious Death as a Regenerative Practice
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="leading-relaxed">
            A holistic approach that acknowledges death as a sacred and natural process, restoring dignity, autonomy, and presence to the final phase of life through cultural renewal, legal reform, and spiritual integration.
          </p>
          
          <div className="grid gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Legal Recognition of End-of-Life Autonomy</h4>
              <p className="text-sm text-blue-700">Expand Death with Dignity laws to ensure the right to medically or spiritually supported self-assisted transition. Create protocols to safeguard informed consent, mental clarity, and ethical review.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Integration of Death Doulas and Spiritual Midwives</h4>
              <p className="text-sm text-green-700">Support training and certification programs for non-medical end-of-life companions. Incorporate spiritual, emotional, and ritual practices that honor each person's beliefs and lineage.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Community-Based Death Literacy</h4>
              <p className="text-sm text-purple-700">Develop public education programs that normalize conversations about mortality. Encourage communal rituals, storytelling, and grief-sharing as part of civic life.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Expanded Palliative and Hospice Care</h4>
              <p className="text-sm text-orange-700">Ensure accessible, high-quality end-of-life care that minimizes suffering. Include emotional and spiritual care alongside physical comfort.</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-2">Digital and Legal Infrastructure for End-of-Life Intentions</h4>
              <p className="text-sm text-teal-700">Create sovereign digital identity tools to document and share end-of-life wishes. Use decentralized platforms for trusted witnesses and legal validation.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-indigo-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-indigo-700">
            <Brain className="h-6 w-6" />
            Operational Framework
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            A multi-layered approach that integrates policy reform, healthcare expansion, community engagement, spiritual practices, and digital infrastructure to support conscious dying.
          </p>
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

      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <CheckCircle className="h-6 w-6" />
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Empowered Individuals</strong>
                <p className="text-sm text-muted-foreground">People face death with clarity, agency, and peace</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Reduced Suffering</strong>
                <p className="text-sm text-muted-foreground">Less traumatic or prolonged dying experiences</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Grief Integration</strong>
                <p className="text-sm text-muted-foreground">Healthier individual and communal grieving processes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Cultural Maturity</strong>
                <p className="text-sm text-muted-foreground">Reconnection to ancestral wisdom and mortality awareness</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary">Systemic Alignment</strong>
                <p className="text-sm text-muted-foreground">Medical, legal, and spiritual systems aligned in service of dignity</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-yellow-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-700">
            <Shield className="h-6 w-6" />
            Implementation Considerations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-yellow-800">Cultural Sensitivity</h4>
              <p className="text-sm text-yellow-700 mb-2">Risk: Different cultural and religious approaches to death may conflict</p>
              <p className="text-sm text-yellow-600">Mitigation: Multi-faith dialogue, culturally adaptive frameworks, and community-led implementation</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-yellow-800">Legal and Ethical Safeguards</h4>
              <p className="text-sm text-yellow-700 mb-2">Risk: Potential for abuse or coercion in end-of-life decisions</p>
              <p className="text-sm text-yellow-600">Mitigation: Robust consent processes, independent advocacy, and ethical oversight committees</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-yellow-800">System Resistance</h4>
              <p className="text-sm text-yellow-700 mb-2">Risk: Medical and legal institutions may resist changes to current practices</p>
              <p className="text-sm text-yellow-600">Mitigation: Gradual integration, pilot programs, and stakeholder education</p>
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
            A regenerative society does not avoid death—it honors it. Conscious dying is a doorway to deeper meaning, compassion, and presence in life. By embracing mortality as a sacred transition, we free ourselves from the fear that drives so much disconnection and dysfunction.
          </p>
          <p className="leading-relaxed text-lg mt-4 font-medium text-primary">
            This proposal calls for a cultural and structural evolution that restores sovereignty, beauty, and dignity to our final moments—and to those who remain.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Death;
