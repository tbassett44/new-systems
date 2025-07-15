import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Wellbeing = () => {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-primary">AI-Supported Wellbeing Tracking</h1>
        <p className="text-xl text-muted-foreground">A Participatory Framework for Individual Flourishing and Systemic Alignment</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Participatory</Badge>
        <Badge variant="secondary">AI-Enhanced</Badge>
        <Badge variant="secondary">Holistic Wellbeing</Badge>
        <Badge variant="secondary">Personalized Support</Badge>
        <Badge variant="secondary">Systemic Feedback</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Overview and Purpose</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed">
            This whitepaper proposes a new paradigm for understanding and enhancing human wellbeing by combining participatory self-reflection with AI-driven insight and support. Through structured inquiry across eight core domains of wellbeing—physical, mental, emotional, spiritual, relational, occupational, financial, and environmental—we can generate rich qualitative data that forms a living map of individual and collective experience.
          </p>
          <p className="leading-relaxed">
            This data can not only reveal whether our systems are improving wellbeing, but also help route individuals to personalized resources, services, and practices that meet them where they are. The goal of this document is to demonstrate how a wellbeing-centered feedback system can serve both personal growth and societal evolution, creating a culture where feedback becomes nourishment and AI becomes a guide—not a gatekeeper.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            The Problem: Disconnection from Inner and Outer Support Systems
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Invisible Suffering:</strong> Many people struggle silently across multiple dimensions of wellbeing, lacking language, tools, or social permission to express their needs.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Fragmented Systems:</strong> Existing health, education, and support systems operate in silos, failing to address the interconnected nature of wellbeing.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Lack of Feedback:</strong> We lack clear, timely feedback on whether our institutions are enhancing or harming human flourishing.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Resource Mismatch:</strong> People are often unaware of what support is available—or which support would best meet their needs.
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">The Solution: Participatory Wellbeing Tracking and AI-Enhanced Support</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Core Design Elements:</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-primary/30 pl-4">
                <h5 className="font-medium text-primary">Reflective Prompts</h5>
                <p className="text-sm text-muted-foreground">
                  Individuals are invited to answer guided questions about how they are doing in each wellbeing domain, using both qualitative responses and scaled self-assessments.
                </p>
              </div>
              <div className="border-l-4 border-blue-300 pl-4">
                <h5 className="font-medium text-blue-700">AI Analysis</h5>
                <p className="text-sm text-muted-foreground">
                  Natural language processing models identify patterns, strengths, and areas of concern—while preserving user privacy.
                </p>
              </div>
              <div className="border-l-4 border-green-300 pl-4">
                <h5 className="font-medium text-green-700">Personalized Recommendations</h5>
                <p className="text-sm text-muted-foreground">
                  Based on reflections, individuals receive suggestions tailored to their current state—such as relevant trainings, therapists, coaches, community offerings, or micro-practices.
                </p>
              </div>
              <div className="border-l-4 border-purple-300 pl-4">
                <h5 className="font-medium text-purple-700">Collective Insight</h5>
                <p className="text-sm text-muted-foreground">
                  Anonymized data feeds into a shared wellbeing dashboard that helps communities, institutions, and policymakers understand what's working and where support is needed.
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
              <h4 className="font-semibold mb-2">Data Collection</h4>
              <p className="text-sm">Periodic check-ins (e.g., monthly or yearly) with a conversational AI or simple journaling interface</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Domains Tracked</h4>
              <p className="text-sm">Physical, Mental, Emotional, Spiritual, Relational, Occupational, Financial, Environmental</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Privacy & Consent</h4>
              <p className="text-sm">Data encrypted, anonymized, and owned by the user; contributions to collective datasets opt-in only</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Support Ecosystem</h4>
              <p className="text-sm">Curated network of resources that span both conventional and alternative modalities</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Feedback Loops</h4>
              <p className="text-sm">Real-time reflection not just to users, but also to system designers and policymakers</p>
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
                <strong>Improved Self-Awareness:</strong> People gain clearer understanding of their own needs, challenges, and progress
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Targeted Support:</strong> Individuals receive timely, relevant support, improving wellbeing outcomes
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Community-Level Insight:</strong> Shared patterns reveal where communities are thriving or struggling
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Systemic Feedback:</strong> Institutions gain real-time insight into whether their efforts are improving human flourishing
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Normalization of Reflection:</strong> Creates cultural permission to talk about wellbeing as a central part of life
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Data-Driven Evolution:</strong> Aligns resource allocation and system design with actual human experience
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
            Wellbeing is not a luxury—it is the foundation for a thriving, adaptive society. This proposal offers a way to make wellbeing measurable, actionable, and participatory at scale. By combining human reflection with machine insight, we can close the gap between need and support, between suffering and care.
          </p>
          <Separator className="my-4" />
          <p className="leading-relaxed font-medium">
            This is not about surveillance—it is about sovereignty, self-knowledge, and social coherence. It is an invitation to build the inner mirrors and outer structures that a conscious society needs to grow.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Wellbeing;
