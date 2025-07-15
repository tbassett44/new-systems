
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Brain, Users, Target, Shield, Eye, MessageSquare, CheckCircle, AlertTriangle } from "lucide-react";

const Sensemaking = () => {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-primary mb-2">Collective Sensemaking</h1>
        <h2 className="text-3xl font-semibold text-blue-600 mb-3">AI-Enhanced Participatory Intelligence</h2>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">Civic Intelligence</Badge>
        <Badge variant="secondary" className="bg-green-100 text-green-800">AI-Enhanced</Badge>
        <Badge variant="secondary" className="bg-purple-100 text-purple-800">Participatory</Badge>
      </div>

      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-700">
            <Target className="h-5 w-5" />
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

      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <AlertTriangle className="h-5 w-5" />
            The Problem: Fragmentation, Misinformation, and Decision Paralysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800 mb-2">Information Overload</h4>
              <p className="text-red-700">In a world flooded with content, it's increasingly difficult to discern what matters or what is true.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800 mb-2">Fragmented Worldviews</h4>
              <p className="text-red-700">Communities lack shared mental models and data about what others are experiencing or believing.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800 mb-2">Slow, Top-Down Governance</h4>
              <p className="text-red-700">Institutions struggle to respond to nuanced local realities, especially without timely input.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800 mb-2">Missing Feedback Loops</h4>
              <p className="text-red-700">There are few systems in place to gather deep, collective insights at scale—particularly from marginalized voices.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <Brain className="h-5 w-5" />
            The Solution: AI-Supported Collective Inquiry
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">We propose a new class of infrastructure that enables:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-green-800 mb-2">Strategic Questions</h4>
                <p className="text-green-700">Designed to surface felt experience, collective needs, and visionary insight.</p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-green-800 mb-2">Distributed Participation</h4>
                <p className="text-green-700">Individuals respond in their own words, providing a rich, qualitative dataset.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-green-800 mb-2">AI Pattern Recognition</h4>
                <p className="text-green-700">Large language models analyze this data to identify themes, contradictions, and emerging truths.</p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-green-800 mb-2">Human-Guided Synthesis</h4>
                <p className="text-green-700">Insights are reviewed, curated, and presented to decision-makers and communities.</p>
              </div>
            </div>
          </div>
          <div className="mt-4 border-l-4 border-green-400 pl-4">
            <h4 className="font-semibold text-green-800 mb-2">Feedback Integration</h4>
            <p className="text-green-700">Responses help shape policies, funding decisions, and cultural narratives.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700">
            <Users className="h-5 w-5" />
            Operational Model
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-purple-700">Inputs</h4>
              <ul className="space-y-2 text-sm">
                <li>• Prompted surveys or inquiry campaigns</li>
                <li>• Community-generated questions</li>
                <li>• Demographic or contextual tags for segmentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-700">Processing</h4>
              <ul className="space-y-2 text-sm">
                <li>• NLP clustering and thematic analysis</li>
                <li>• Sentiment mapping and signal detection</li>
                <li>• Visualization of convergent/divergent insights</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-700">Outputs</h4>
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

      <Card className="border-indigo-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-indigo-700">
            <MessageSquare className="h-5 w-5" />
            Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Participatory budgeting & civic planning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Climate adaptation strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Mental health and wellbeing trend tracking</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Cultural bridging and conflict resolution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Organizational strategy and foresight</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50">
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
                  <strong className="text-green-800">Stronger Governance:</strong>
                  <span className="text-green-700"> Real-time public insight guides decisions</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-green-800">Inclusive Participation:</strong>
                  <span className="text-green-700"> Voices previously unheard become central to dialogue</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-green-800">Improved Trust:</strong>
                  <span className="text-green-700"> Transparent, responsive systems rebuild confidence</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-green-800">Crisis Preparedness:</strong>
                  <span className="text-green-700"> Early detection of stressors or unmet needs</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-green-800">Empowered Communities:</strong>
                  <span className="text-green-700"> People see their ideas shaping the world around them</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-yellow-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-700">
            <Shield className="h-5 w-5" />
            Potential Unforeseen Harms and Mitigation Strategies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-6">
            While collective sensemaking is designed to foster inclusive intelligence and systemic adaptability, unintended harms could arise. To build responsibly, we must anticipate and mitigate risks through thoughtful design.
          </p>
          <div className="space-y-6">
            <Alert className="border-yellow-200 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-800">
                <strong>Misrepresentation or Bias in Data Synthesis</strong><br />
                <em>Risk:</em> AI models or human interpreters could distort the nuance of lived experiences.<br />
                <em>Mitigation:</em> Prioritize transparent synthesis protocols, human-in-the-loop review, and diverse interpretation teams.
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-800">
                <strong>Vulnerability Exploitation</strong><br />
                <em>Risk:</em> Individuals sharing personal stories could be exposed to reputational, emotional, or social risk.<br />
                <em>Mitigation:</em> Use robust consent frameworks, anonymization tools, and participant agency over visibility.
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-800">
                <strong>Data Weaponization or Co-optation</strong><br />
                <em>Risk:</em> Insights could be cherry-picked or misused to serve political or institutional agendas.<br />
                <em>Mitigation:</em> Create decentralized archiving, open access to full datasets (with consent), and public validation tools.
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-800">
                <strong>Emotional Overload and Burnout</strong><br />
                <em>Risk:</em> Facilitators or analysts may experience psychological fatigue from processing large volumes of struggle and grief.<br />
                <em>Mitigation:</em> Rotate roles, embed trauma-informed practices, and use AI as a supportive (not replacing) tool.
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-800">
                <strong>Loss of Narrative Authenticity</strong><br />
                <em>Risk:</em> Reducing stories to patterns could flatten emotional truth.<br />
                <em>Mitigation:</em> Balance pattern recognition with narrative preservation; feature full stories alongside summaries.
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-800">
                <strong>Overshadowing of Local Wisdom</strong><br />
                <em>Risk:</em> Global or aggregated insights could drown out localized, culturally-rooted knowledge.<br />
                <em>Mitigation:</em> Weight local context in data synthesis and maintain bioregional feedback loops.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Eye className="h-5 w-5" />
            Conclusion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            Collective sensemaking is not merely a tool—it is a cultural posture rooted in humility, curiosity, and respect. By building systems that honor the depth of human experience and reflect it back in meaningful ways, we begin to heal the fractured mirror of our shared reality. Done well, this infrastructure becomes a cornerstone for responsive governance, adaptive culture, and wiser civilization.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sensemaking;
