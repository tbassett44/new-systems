
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Vote, AlertTriangle, CheckCircle, Users, Heart, Lightbulb } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Election = () => {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-primary mb-2">Regenerative Election</h1>
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Prototyping a New Model of Democratic Participation and Civic Imagination</h2>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">Democratic Renewal</Badge>
        <Badge variant="secondary" className="bg-green-100 text-green-800">Participatory</Badge>
        <Badge variant="secondary" className="bg-purple-100 text-purple-800">Values-Aligned</Badge>
        <Badge variant="secondary" className="bg-orange-100 text-orange-800">Co-Creation</Badge>
        <Badge variant="secondary" className="bg-pink-100 text-pink-800">Civic Imagination</Badge>
      </div>

      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="text-primary">Overview and Purpose</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed text-lg">
            This whitepaper introduces the concept of a Regenerative Election — a pre-ballot, participatory, values-driven electoral process designed to prototype the future of democracy before it enters the constraints of the legacy electoral system. It serves as a public experiment in democratic evolution, inviting civic imagination, fostering trust, and modeling a dignified, generative alternative to polarizing politics. The Regenerative Election is not about partisanship or power-seeking, but about demonstrating what governance can feel like when it is rooted in feedback, transparency, collective intelligence, and care.
          </p>
        </CardContent>
      </Card>

      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <AlertTriangle className="h-6 w-6" />
            The Problem: Crisis in Electoral Culture
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="leading-relaxed">
              The current electoral system faces deep structural challenges that undermine democratic participation and trust.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Disillusionment and Disengagement:</strong> The public feels alienated by binary choices, adversarial debates, and negative campaigning.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Institutional Mistrust:</strong> Corporate influence and opaque party systems erode belief in democratic integrity.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Absence of Feedback Loops:</strong> Citizens are not meaningfully involved in shaping platforms or policy vision.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Narrative Deficit:</strong> Politics lacks ceremony, soul, and the creative capacity to imagine new futures.
                </div>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="text-primary">The Solution: A Regenerative Election Framework</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Core Components:</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-primary/30 pl-4">
                <h5 className="font-medium text-primary">Values-Based Platform Development</h5>
                <p className="text-sm text-muted-foreground">
                  Grounded in regenerative principles. Public sensemaking sessions help shape priorities and illuminate collective values.
                </p>
              </div>
              <div className="border-l-4 border-blue-300 pl-4">
                <h5 className="font-medium text-blue-700">Multi-Candidate Cooperative Field</h5>
                <p className="text-sm text-muted-foreground">
                  Features multiple participants who share a commitment to regenerative ethics. Dialogues prioritize listening, nuance, and co-evolution over combative debate.
                </p>
              </div>
              <div className="border-l-4 border-green-300 pl-4">
                <h5 className="font-medium text-green-700">Participatory Public Engagement</h5>
                <p className="text-sm text-muted-foreground">
                  Citizens contribute to question design, assess platform clarity, and engage in reflection events. Interactive tools allow for distributed civic input across geographies.
                </p>
              </div>
              <div className="border-l-4 border-purple-300 pl-4">
                <h5 className="font-medium text-purple-700">Wellbeing-Informed Feedback Metrics</h5>
                <p className="text-sm text-muted-foreground">
                  Participants assess proposals not only on logic, but how they impact physical, emotional, and social wellbeing. Data is collected and synthesized to inform collective direction.
                </p>
              </div>
              <div className="border-l-4 border-orange-300 pl-4">
                <h5 className="font-medium text-orange-700">Decentralized Civic Media</h5>
                <p className="text-sm text-muted-foreground">
                  Media coverage is crowd-curated and trust-layered, moving beyond clickbait or soundbites. Storytelling and public media guide the election narrative from sensationalism to depth.
                </p>
              </div>
              <div className="border-l-4 border-teal-300 pl-4">
                <h5 className="font-medium text-teal-700">Ethical Transparency & Open Process Infrastructure</h5>
                <p className="text-sm text-muted-foreground">
                  All budget flows, communications, and strategic processes are shared openly. Voting, polling, and data systems are verifiable, auditable, and respectful of digital sovereignty.
                </p>
              </div>
              <div className="border-l-4 border-pink-300 pl-4">
                <h5 className="font-medium text-pink-700">Ritual, Art, and Public Gathering</h5>
                <p className="text-sm text-muted-foreground">
                  Civic ceremonies and artistic activations accompany key moments in the process. Debates are framed as shared explorations of vision, not zero-sum contests.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="text-primary">Operational Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Pre-Launch Phase</h4>
              <p className="text-sm">Convene design teams, clarify ethical frameworks, recruit candidates, and develop digital tools</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Platform Co-Design</h4>
              <p className="text-sm">Regional and virtual forums gather public priorities and reflect them into draft platforms</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Campaigning and Dialogue</h4>
              <p className="text-sm">Candidates share proposals, host listening sessions, and participate in moderated dialogues</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Cultural and Civic Events</h4>
              <p className="text-sm">Art, music, ceremony, and story shape the emotional landscape of the election</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Closing Assembly</h4>
              <p className="text-sm">Synthesized learnings, community votes, and a declaration for how to proceed toward ballot access or other forms of public engagement</p>
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
          <div className="grid gap-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Reimagined Democratic Process:</strong> A blueprint for elections as generative, participatory, and meaningful
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Civic Trust-Building:</strong> Transparency and integrity rebuild faith in leadership processes
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Shared Ownership:</strong> Citizens feel invited to co-create rather than passively consume
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Wisdom-Driven Platforms:</strong> Proposals emerge from dialogue, not top-down promises
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Movement Seeding:</strong> Sparks a distributed network of political and cultural regeneration
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="text-primary">Conclusion and Call to Action</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-lg mb-4">
            The Regenerative Election is not about electing a hero. It is about electing a new possibility: one where democracy becomes a living, learning, and healing process. By prototyping a new election outside the legacy timeline, we create space for trust to grow, imagination to flourish, and communities to align around values that nourish life.
          </p>
          <p className="leading-relaxed text-lg mb-4">
            This is not a rejection of civic responsibility. It is its expansion. Let us remember that voting is not the beginning or end of political participation. It is one moment in a much longer, sacred act of choosing who we become—together.
          </p>
          <Separator className="my-4" />
          <p className="leading-relaxed text-lg font-medium text-primary">
            Let us not campaign against a broken system. Let us prototype the one we would be proud to inherit.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Election;
