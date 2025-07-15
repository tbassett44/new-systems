import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { GraduationCap, Users, Key, Globe, CheckCircle, AlertTriangle, Brain, Network, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-foreground">Regenerative Education Through Digital Sovereignty</h1>
        <p className="text-xl text-muted-foreground mt-2">A Framework for Decentralized, Lifelong, and Learner-Led Learning</p>
      </div>

      <div className="text-center space-y-2 mb-8">
        <p className="text-lg font-medium text-foreground">By</p>
        <div className="space-y-1">
          <p className="text-lg text-foreground">
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
          <CardTitle className="flex items-center gap-2 text-foreground">
            <BookOpen className="h-5 w-5 text-primary" />
            Overview and Purpose
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4 text-foreground">
            This whitepaper proposes a new model for education grounded in the principles of digital sovereignty, self-custody, and decentralized identity. The traditional education system, characterized by centralized control, one-size-fits-all curricula, and locked-down credentials, no longer meets the needs of a rapidly evolving world.
          </p>
          <p className="leading-relaxed text-foreground">
            In contrast, this new framework envisions a regenerative, learner-centered ecosystem where education is lifelong, locally rooted, globally recognized, and holistically measured. By integrating decentralized infrastructure, self-sovereign identity, and verifiable credentials, we aim to empower individuals to design and own their learning journeys. This system honors informal, community-based, and interdisciplinary learning while ensuring privacy, security, and autonomy for every learner.
          </p>
        </CardContent>
      </Card>

      <Card className="border-destructive/20 bg-destructive/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            The Problem: Centralized, Rigid, and Siloed Education Systems
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-destructive/30 pl-4">
              <h4 className="font-semibold mb-2 text-destructive">Standardized Curricula</h4>
              <p className="text-destructive/80">Current systems prioritize uniformity over purpose-driven, diverse paths.</p>
            </div>
            <div className="border-l-4 border-destructive/30 pl-4">
              <h4 className="font-semibold mb-2 text-destructive">Credential Lock-In</h4>
              <p className="text-destructive/80">Diplomas and transcripts are controlled by institutions, inaccessible or unverifiable across systems.</p>
            </div>
            <div className="border-l-4 border-destructive/30 pl-4">
              <h4 className="font-semibold mb-2 text-destructive">Data Exploitation</h4>
              <p className="text-destructive/80">Edtech platforms increasingly monetize learner data without consent.</p>
            </div>
            <div className="border-l-4 border-destructive/30 pl-4">
              <h4 className="font-semibold mb-2 text-destructive">Fragmented Learning</h4>
              <p className="text-destructive/80">Informal, spiritual, or experiential learning is excluded or unrecognized.</p>
            </div>
            <div className="border-l-4 border-destructive/30 pl-4">
              <h4 className="font-semibold mb-2 text-destructive">Limited Agency</h4>
              <p className="text-destructive/80">Students are often passive recipients, rather than active co-creators, of their educational path.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Key className="h-5 w-5" />
            The Solution: Sovereign Learning Infrastructure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-l-4 border-primary/30 pl-4">
              <h4 className="font-semibold mb-3 text-foreground">1. Self-Sovereign Learner Profiles</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Each learner has a digital identity wallet containing their learning records, values, goals, and reflections</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Credentials are issued as verifiable credentials (VCs) and controlled by the learner—not institutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Credentials can represent knowledge, skills, experiences, contributions, and character traits</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-300 pl-4">
              <h4 className="font-semibold mb-3 text-foreground">2. Modular Learning Ecosystem</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Education happens across diverse nodes: schools, mentors, nature programs, online platforms, spiritual traditions, maker spaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">All nodes can issue credentials if aligned with community standards and interoperability protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Encourages learning in context—rooted in place, culture, and purpose</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-green-300 pl-4">
              <h4 className="font-semibold mb-3 text-foreground">3. Interoperable Credential Web</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Credentials can be verified anywhere, at any time, without needing centralized databases</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Learners can selectively disclose or prove qualifications using zero-knowledge proofs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Creates fluid pathways for employment, collaboration, and further learning</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-300 pl-4">
              <h4 className="font-semibold mb-3 text-foreground">4. AI and Mentor-Supported Learning Journeys</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Learners design personalized pathways with support from AI systems and human mentors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Learning recommendations align with purpose, context, and wellbeing—not just market demand</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Reflection and narrative become central to progress tracking</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-300 pl-4">
              <h4 className="font-semibold mb-3 text-foreground">5. Community-Based Validation and Reputation</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Peers, elders, and collectives endorse growth through verifiable acknowledgments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Learning becomes a social, relational process</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Networks of trust replace standardized testing</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Network className="h-5 w-5 text-primary" />
            Operational Framework
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-foreground">Infrastructure</h4>
              <p className="text-sm text-foreground">Edge-hosted identity and credential storage (e.g., Raspberry Pi or mobile device)</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-foreground">Recovery</h4>
              <p className="text-sm text-foreground">Key recovery via trusted network using secret sharing (e.g., Horcrux)</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-foreground">Protocols</h4>
              <p className="text-sm text-foreground">Based on W3C DIDs, VCs, and open-source decentralized identity libraries</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-foreground">Access</h4>
              <p className="text-sm text-foreground">Learners own and control access to their records</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-foreground">Governance</h4>
              <p className="text-sm text-foreground">Community-curated registries of recognized learning providers and credential standards</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200/50 bg-green-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Lifelong Learning:</strong>
                  <span className="text-foreground"> Education extends beyond formal schooling into every phase of life</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Empowered Learners:</strong>
                  <span className="text-foreground"> Individuals actively shape their paths, reflecting their values and callings</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Recognition of All Growth:</strong>
                  <span className="text-foreground"> Learning from lived experience, contribution, healing, and creativity is honored</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Privacy and Consent:</strong>
                  <span className="text-foreground"> Learners share only what they choose, on their terms</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Equity Across Borders:</strong>
                  <span className="text-foreground"> Portable credentials help migrants, refugees, and informal learners thrive globally</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Cultural Relevance and Regeneration:</strong>
                  <span className="text-foreground"> Education reflects and revitalizes local wisdom and community needs</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Globe className="h-5 w-5" />
            Conclusion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed text-foreground">
            Regenerative education is not just a shift in curriculum—it is a transformation of the very architecture through which learning is organized, tracked, and valued. By embedding digital sovereignty into the fabric of learning systems, we empower every individual to steward their growth with autonomy, dignity, and coherence. This framework invites a global transition from extractive schooling to generative learning—cultivating a civilization of creative, connected, and conscious learners prepared to navigate and shape the future.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;
