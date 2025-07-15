import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Brain, Users, Target, Shield, Eye, MessageSquare, CheckCircle, AlertTriangle } from "lucide-react";
const Sensemaking = () => {
  return <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Brain className="h-6 w-6 text-primary" />
        </div>
        
      </div>

      

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Civic Intelligence</Badge>
        <Badge variant="secondary">AI-Enhanced</Badge>
        <Badge variant="secondary">Participatory</Badge>
        
        <Badge variant="secondary">Pattern Recognition</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Purpose and Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            This section outlines a framework for distributed, AI-supported collective sensemaking—a process that allows communities, organizations, and even entire societies to surface deeper patterns of need, perception, and possibility. Through structured inquiry, qualitative data gathering, and pattern analysis, collective sensemaking can enhance governance, guide resource allocation, and support participatory cultural evolution.
          </p>
          <p className="leading-relaxed">
            The goal is to restore feedback loops between the people and the systems that serve them by transforming scattered opinions into coherent insight—allowing us to better respond to emerging challenges and opportunities.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            The Problem: Fragmentation, Misinformation, and Decision Paralysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-destructive/30 pl-4">
              <h4 className="font-semibold mb-2">Information Overload</h4>
              <p className="text-muted-foreground">In a world flooded with content, it's increasingly difficult to discern what matters or what is true.</p>
            </div>
            <div className="border-l-4 border-destructive/30 pl-4">
              <h4 className="font-semibold mb-2">Fragmented Worldviews</h4>
              <p className="text-muted-foreground">Communities lack shared mental models and data about what others are experiencing or believing.</p>
            </div>
            <div className="border-l-4 border-destructive/30 pl-4">
              <h4 className="font-semibold mb-2">Slow, Top-Down Governance</h4>
              <p className="text-muted-foreground">Institutions struggle to respond to nuanced local realities, especially without timely input.</p>
            </div>
            <div className="border-l-4 border-destructive/30 pl-4">
              <h4 className="font-semibold mb-2">Missing Feedback Loops</h4>
              <p className="text-muted-foreground">There are few systems in place to gather deep, collective insights at scale—particularly from marginalized voices.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            The Solution: AI-Supported Collective Inquiry
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">We propose a new class of infrastructure that enables:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="border-l-4 border-primary/30 pl-4">
                <h4 className="font-semibold mb-2">Strategic Questions</h4>
                <p className="text-muted-foreground">Designed to surface felt experience, collective needs, and visionary insight.</p>
              </div>
              <div className="border-l-4 border-primary/30 pl-4">
                <h4 className="font-semibold mb-2">Distributed Participation</h4>
                <p className="text-muted-foreground">Individuals respond in their own words, providing a rich, qualitative dataset.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-primary/30 pl-4">
                <h4 className="font-semibold mb-2">AI Pattern Recognition</h4>
                <p className="text-muted-foreground">Large language models analyze this data to identify themes, contradictions, and emerging truths.</p>
              </div>
              <div className="border-l-4 border-primary/30 pl-4">
                <h4 className="font-semibold mb-2">Human-Guided Synthesis</h4>
                <p className="text-muted-foreground">Insights are reviewed, curated, and presented to decision-makers and communities.</p>
              </div>
            </div>
          </div>
          <div className="mt-4 border-l-4 border-primary/30 pl-4">
            <h4 className="font-semibold mb-2">Feedback Integration</h4>
            <p className="text-muted-foreground">Responses help shape policies, funding decisions, and cultural narratives.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Operational Model
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-primary">Inputs</h4>
              <ul className="space-y-2 text-sm">
                <li>• Prompted surveys or inquiry campaigns</li>
                <li>• Community-generated questions</li>
                <li>• Demographic or contextual tags for segmentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">Processing</h4>
              <ul className="space-y-2 text-sm">
                <li>• NLP clustering and thematic analysis</li>
                <li>• Sentiment mapping and signal detection</li>
                <li>• Visualization of convergent/divergent insights</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">Outputs</h4>
              <ul className="space-y-2 text-sm">
                <li>• Public dashboards of synthesized themes</li>
                <li>• Reports for local governments, NGOs, or civic bodies</li>
                <li>• Searchable, living knowledge repositories</li>
                <li>• Integration into governance feedback systems</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Participatory budgeting & civic planning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Climate adaptation strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Mental health and wellbeing trend tracking</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Cultural bridging and conflict resolution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Organizational strategy and foresight</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Stronger Governance:</strong> Real-time public insight guides decisions
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Inclusive Participation:</strong> Voices previously unheard become central to dialogue
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Improved Trust:</strong> Transparent, responsive systems rebuild confidence
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Crisis Preparedness:</strong> Early detection of stressors or unmet needs
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Empowered Communities:</strong> People see their ideas shaping the world around them
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-destructive" />
            Potential Unforeseen Harms and Mitigation Strategies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-6">
            While collective sensemaking is designed to foster inclusive intelligence and systemic adaptability, unintended harms could arise. To build responsibly, we must anticipate and mitigate risks through thoughtful design.
          </p>
          <div className="space-y-6">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Misrepresentation or Bias in Data Synthesis</strong><br />
                <em>Risk:</em> AI models or human interpreters could distort the nuance of lived experiences.<br />
                <em>Mitigation:</em> Prioritize transparent synthesis protocols, human-in-the-loop review, and diverse interpretation teams.
              </AlertDescription>
            </Alert>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Vulnerability Exploitation</strong><br />
                <em>Risk:</em> Individuals sharing personal stories could be exposed to reputational, emotional, or social risk.<br />
                <em>Mitigation:</em> Use robust consent frameworks, anonymization tools, and participant agency over visibility.
              </AlertDescription>
            </Alert>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Data Weaponization or Co-optation</strong><br />
                <em>Risk:</em> Insights could be cherry-picked or misused to serve political or institutional agendas.<br />
                <em>Mitigation:</em> Create decentralized archiving, open access to full datasets (with consent), and public validation tools.
              </AlertDescription>
            </Alert>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Emotional Overload and Burnout</strong><br />
                <em>Risk:</em> Facilitators or analysts may experience psychological fatigue from processing large volumes of struggle and grief.<br />
                <em>Mitigation:</em> Rotate roles, embed trauma-informed practices, and use AI as a supportive (not replacing) tool.
              </AlertDescription>
            </Alert>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Loss of Narrative Authenticity</strong><br />
                <em>Risk:</em> Reducing stories to patterns could flatten emotional truth.<br />
                <em>Mitigation:</em> Balance pattern recognition with narrative preservation; feature full stories alongside summaries.
              </AlertDescription>
            </Alert>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Overshadowing of Local Wisdom</strong><br />
                <em>Risk:</em> Global or aggregated insights could drown out localized, culturally-rooted knowledge.<br />
                <em>Mitigation:</em> Weight local context in data synthesis and maintain bioregional feedback loops.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            Conclusion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            Collective sensemaking is not merely a tool—it is a cultural posture rooted in humility, curiosity, and respect. By building systems that honor the depth of human experience and reflect it back in meaningful ways, we begin to heal the fractured mirror of our shared reality. Done well, this infrastructure becomes a cornerstone for responsive governance, adaptive culture, and wiser civilization.
          </p>
        </CardContent>
      </Card>
    </div>;
};
export default Sensemaking;