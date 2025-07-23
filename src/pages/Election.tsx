
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Vote, AlertTriangle, CheckCircle, Users, Heart, Lightbulb } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Election = () => {
  useEffect(() => {
    document.title = "Regenerative Election | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore regenerative election systems that prototype new models of democratic participation and civic imagination through participatory governance and collective decision-making.');
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Regenerative Election | New Systems and Structures');
    }
  }, []);
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
            This proposal introduces the concept of a Regenerative Election — a pre-ballot, participatory, values-driven electoral process designed to prototype the future of democracy before it enters the constraints of the legacy electoral system. It serves as a public experiment in democratic evolution, inviting civic imagination, fostering trust, and modeling a dignified, generative alternative to polarizing politics. The Regenerative Election is not about partisanship or power-seeking, but about demonstrating what governance can feel like when it is rooted in feedback, transparency, collective intelligence, and care.
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
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Users className="h-4 w-4 text-green-600" />
                1. Participatory Candidate Development
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Communities identify and cultivate candidates through deliberative processes</li>
                <li>Mentorship programs and skills development initiatives</li>
                <li>Community-driven selection rather than self-selection or party nomination</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Vote className="h-4 w-4 text-green-600" />
                2. Transparent Campaign Infrastructure
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Open-source platforms provide equal access to voters</li>
                <li>Transparent funding mechanisms and collaborative policy development</li>
                <li>Community input integrated at every stage of the campaign process</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Lightbulb className="h-4 w-4 text-green-600" />
                3. Regenerative Governance Mechanisms
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Electoral processes prioritizing ecological restoration and social healing</li>
                <li>Economic justice and community wellbeing as core governance principles</li>
                <li>Accountability structures ensuring officials remain connected to community needs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <CheckCircle className="h-4 w-4 text-green-600" />
                4. Continuous Feedback Systems
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Real-time mechanisms for community input on policy decisions</li>
                <li>Regular check-ins with constituents and adaptive governance structures</li>
                <li>Evolution based on community needs and changing circumstances</li>
              </ul>
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
