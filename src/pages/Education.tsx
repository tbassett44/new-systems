import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { GraduationCap, Users, Key, Globe, CheckCircle, AlertTriangle, Brain, Network, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold">Regenerative Education Through Digital Sovereignty</h1>
        <p className="text-xl text-muted-foreground mt-2">A Framework for Decentralized, Lifelong, and Learner-Led Learning</p>
      </div>

      <div className="text-center space-y-2 mb-8">
        <p className="text-lg font-medium">By</p>
        <div className="space-y-1">
          <p className="text-lg">
            <strong>Juicy Life</strong> - <a href="mailto:juicy@actualize.earth" className="text-primary hover:underline">juicy@actualize.earth</a>
          </p>
          <p className="text-muted-foreground">
            and <strong>Aether</strong>, an AI collaborator powered by GPT-4 by OpenAI
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Learner-Led</Badge>
        <Badge variant="secondary">Digital Sovereignty</Badge>
        <Badge variant="secondary">Lifelong Learning</Badge>
        <Badge variant="secondary">Self-Custody</Badge>
        <Badge variant="secondary">Verifiable Credentials</Badge>
        <Badge variant="secondary">Decentralized</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Overview and Purpose
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            This whitepaper proposes a new model for education grounded in the principles of digital sovereignty, self-custody, and decentralized identity. The traditional education system, characterized by centralized control, one-size-fits-all curricula, and locked-down credentials, no longer meets the needs of a rapidly evolving world.
          </p>
          <p className="leading-relaxed">
            In contrast, this new framework envisions a regenerative, learner-centered ecosystem where education is lifelong, locally rooted, globally recognized, and holistically measured. By integrating decentralized infrastructure, self-sovereign identity, and verifiable credentials, we aim to empower individuals to design and own their learning journeys. This system honors informal, community-based, and interdisciplinary learning while ensuring privacy, security, and autonomy for every learner.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            The Problem: Centralized, Rigid, and Siloed Education Systems
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-destructive/30 pl-4">
              <h4 className="font-semibold mb-2">Standardized Curricula</h4>
              <p className="text-muted-foreground">Current systems prioritize uniformity over purpose-driven, diverse paths.</p>
            </div>
            <div className="border-l-4 border-destructive/30 pl-4">
              <h4 className="font-semibold mb-2">Credential Lock-In</h4>
              <p className="text-muted-foreground">Diplomas and transcripts are controlled by institutions, inaccessible or unverifiable across systems.</p>
            </div>
            <div className="border-l-4 border-destructive/30 pl-4">
              <h4 className="font-semibold mb-2">Data Exploitation</h4>
              <p className="text-muted-foreground">Edtech platforms increasingly monetize learner data without consent.</p>
            </div>
            <div className="border-l-4 border-destructive/30 pl-4">
              <h4 className="font-semibold mb-2">Fragmented Learning</h4>
              <p className="text-muted-foreground">Informal, spiritual, or experiential learning is excluded or unrecognized.</p>
            </div>
            <div className="border-l-4 border-destructive/30 pl-4">
              <h4 className="font-semibold mb-2">Limited Agency</h4>
              <p className="text-muted-foreground">Students are often passive recipients, rather than active co-creators, of their educational path.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5 text-primary" />
            The Solution: Sovereign Learning Infrastructure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-l-4 border-primary/30 pl-4">
              <h4 className="font-semibold mb-3">1. Self-Sovereign Learner Profiles</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  Each learner has a digital identity wallet containing their learning records, values, goals, and reflections
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  Credentials are issued as verifiable credentials (VCs) and controlled by the learner—not institutions
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  Credentials can represent knowledge, skills, experiences, contributions, and character traits
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-300 pl-4">
              <h4 className="font-semibold mb-3 text-blue-700">2. Modular Learning Ecosystem</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  Education happens across diverse nodes: schools, mentors, nature programs, online platforms, spiritual traditions, maker spaces
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  All nodes can issue credentials if aligned with community standards and interoperability protocols
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  Encourages learning in context—rooted in place, culture, and purpose
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-green-300 pl-4">
              <h4 className="font-semibold mb-3 text-green-700">3. Interoperable Credential Web</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Credentials can be verified anywhere, at any time, without needing centralized databases
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Learners can selectively disclose or prove qualifications using zero-knowledge proofs
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Creates fluid pathways for employment, collaboration, and further learning
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-300 pl-4">
              <h4 className="font-semibold mb-3 text-purple-700">4. AI and Mentor-Supported Learning Journeys</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  Learners design personalized pathways with support from AI systems and human mentors
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  Learning recommendations align with purpose, context, and wellbeing—not just market demand
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  Reflection and narrative become central to progress tracking
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-300 pl-4">
              <h4 className="font-semibold mb-3 text-orange-700">5. Community-Based Validation and Reputation</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  Peers, elders, and collectives endorse growth through verifiable acknowledgments
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  Learning becomes a social, relational process
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  Networks of trust replace standardized testing
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="h-5 w-5 text-primary" />
            Operational Framework
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Infrastructure</h4>
              <p className="text-sm">Edge-hosted identity and credential storage (e.g., Raspberry Pi or mobile device)</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Recovery</h4>
              <p className="text-sm">Key recovery via trusted network using secret sharing (e.g., Horcrux)</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Protocols</h4>
              <p className="text-sm">Based on W3C DIDs, VCs, and open-source decentralized identity libraries</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Access</h4>
              <p className="text-sm">Learners own and control access to their records</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Governance</h4>
              <p className="text-sm">Community-curated registries of recognized learning providers and credential standards</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-green-50 to-primary/5 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <CheckCircle className="h-5 w-5" />
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Lifelong Learning:</strong> Education extends beyond formal schooling into every phase of life
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Empowered Learners:</strong> Individuals actively shape their paths, reflecting their values and callings
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Recognition of All Growth:</strong> Learning from lived experience, contribution, healing, and creativity is honored
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Privacy and Consent:</strong> Learners share only what they choose, on their terms
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Equity Across Borders:</strong> Portable credentials help migrants, refugees, and informal learners thrive globally
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Cultural Relevance and Regeneration:</strong> Education reflects and revitalizes local wisdom and community needs
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Conclusion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            Regenerative education is not just a shift in curriculum—it is a transformation of the very architecture through which learning is organized, tracked, and valued. By embedding digital sovereignty into the fabric of learning systems, we empower every individual to steward their growth with autonomy, dignity, and coherence. This framework invites a global transition from extractive schooling to generative learning—cultivating a civilization of creative, connected, and conscious learners prepared to navigate and shape the future.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;
