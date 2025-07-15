import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Brain, Shield, Activity, Target, CheckCircle, AlertTriangle, Smartphone, BarChart, Lock } from "lucide-react";

const Wellbeing = () => {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-primary mb-2">Wellbeing Tracking</h1>
        <h2 className="text-3xl font-semibold text-blue-600 mb-3">Privacy-First Mental Health & Community Resilience</h2>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">Mental Health</Badge>
        <Badge variant="secondary" className="bg-green-100 text-green-800">Privacy-First</Badge>
        <Badge variant="secondary" className="bg-purple-100 text-purple-800">Community Resilience</Badge>
        <Badge variant="secondary" className="bg-orange-100 text-orange-800">Self-Sovereign Data</Badge>
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
            This whitepaper outlines a framework for distributed, privacy-first wellbeing tracking that empowers individuals and communities to monitor, understand, and improve mental health outcomes while maintaining complete data sovereignty. The system combines personal wellbeing metrics with community-level insights to create a comprehensive picture of collective mental health.
          </p>
          <p className="leading-relaxed">
            The goal is to create early warning systems for mental health crises, identify effective interventions, and build resilient communities—all while ensuring that personal data remains under individual control and is never exploited by external parties.
          </p>
        </CardContent>
      </Card>

      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <AlertTriangle className="h-5 w-5" />
            The Problem: Mental Health Crisis and Data Exploitation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800 mb-2">Rising Mental Health Challenges</h4>
              <p className="text-red-700">Depression, anxiety, and suicide rates continue to climb, especially among young people and marginalized communities.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800 mb-2">Lack of Early Detection</h4>
              <p className="text-red-700">Current systems are reactive rather than preventive, often identifying mental health issues only after crisis points.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800 mb-2">Data Privacy Violations</h4>
              <p className="text-red-700">Existing mental health apps and platforms often monetize sensitive personal data without meaningful consent.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800 mb-2">Fragmented Support Systems</h4>
              <p className="text-red-700">Mental health resources are siloed, expensive, and often inaccessible to those who need them most.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <Heart className="h-5 w-5" />
            The Solution: Self-Sovereign Wellbeing Networks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">We propose a new model of wellbeing tracking that combines:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-green-800 mb-2">Personal Metrics</h4>
                <p className="text-green-700">Mood tracking, sleep patterns, social connection, stress levels, and other self-reported indicators.</p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-green-800 mb-2">Community Aggregation</h4>
                <p className="text-green-700">Anonymous, encrypted sharing that reveals population-level trends without compromising individual privacy.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-green-800 mb-2">Early Warning Systems</h4>
                <p className="text-green-700">AI-powered pattern recognition that identifies emerging mental health risks at individual and community levels.</p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-green-800 mb-2">Intervention Networks</h4>
                <p className="text-green-700">Connected support systems that can respond quickly and appropriately to emerging needs.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700">
            <Smartphone className="h-5 w-5" />
            Technical Architecture
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-purple-700">Edge-Based Data</h4>
              <ul className="space-y-2 text-sm">
                <li>• Personal devices store all raw data</li>
                <li>• No centralized data collection</li>
                <li>• User controls all sharing permissions</li>
                <li>• Encrypted local storage</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-700">Federated Analytics</h4>
              <ul className="space-y-2 text-sm">
                <li>• Pattern analysis without data transfer</li>
                <li>• Differential privacy protocols</li>
                <li>• Community insights via aggregation</li>
                <li>• Zero-knowledge proof systems</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-700">Response Networks</h4>
              <ul className="space-y-2 text-sm">
                <li>• Peer-to-peer support systems</li>
                <li>• Professional intervention protocols</li>
                <li>• Resource recommendation engines</li>
                <li>• Crisis response automation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-indigo-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-indigo-700">
            <BarChart className="h-5 w-5" />
            Metrics and Indicators
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-indigo-700">Individual Tracking</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Daily mood and energy levels</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Sleep quality and duration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Social connection frequency</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Stress and anxiety indicators</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Physical activity and movement</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-indigo-700">Community Insights</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Population wellbeing trends</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Seasonal mental health patterns</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Crisis event correlation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Intervention effectiveness</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Resource allocation optimization</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-700">
            <Users className="h-5 w-5" />
            Use Cases and Applications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">🏫 Educational Institutions</h4>
                <p className="text-sm text-amber-700">Track student wellbeing trends, identify at-risk populations, and deploy targeted mental health resources.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">🏢 Workplace Wellness</h4>
                <p className="text-sm text-blue-700">Monitor employee mental health, prevent burnout, and create healthier work environments.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">🏘️ Community Health</h4>
                <p className="text-sm text-green-700">Enable neighborhoods to understand and address collective mental health needs.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">🏥 Healthcare Integration</h4>
                <p className="text-sm text-purple-700">Provide healthcare providers with longitudinal mental health data for better treatment outcomes.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200">
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
                  <strong className="text-green-800">Early Intervention:</strong>
                  <span className="text-green-700"> Identify mental health issues before they become crises</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-green-800">Data Sovereignty:</strong>
                  <span className="text-green-700"> Individuals maintain complete control over their personal data</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-green-800">Community Resilience:</strong>
                  <span className="text-green-700"> Build stronger support networks and collective wellbeing</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-green-800">Personalized Care:</strong>
                  <span className="text-green-700"> Tailored interventions based on individual patterns and needs</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-green-800">Resource Optimization:</strong>
                  <span className="text-green-700"> Direct mental health resources where they're needed most</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-green-800">Stigma Reduction:</strong>
                  <span className="text-green-700"> Normalize mental health discussions through community participation</span>
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
            Privacy and Ethical Considerations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Consent and Agency</h4>
              <p className="text-yellow-700">All data sharing must be explicit, informed, and revocable. Users maintain granular control over what data is shared and with whom.</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Anonymization and Security</h4>
              <p className="text-yellow-700">Advanced cryptographic techniques ensure that community insights cannot be traced back to individuals.</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Algorithmic Transparency</h4>
              <p className="text-yellow-700">All AI models and analysis methods must be open-source and auditable by the community.</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Crisis Response Protocols</h4>
              <p className="text-yellow-700">Clear guidelines for when and how the system can override privacy settings in genuine emergency situations.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Brain className="h-5 w-5" />
            Conclusion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            Privacy-first wellbeing tracking represents a fundamental shift from extractive mental health data collection to empowering, community-centered approaches. By giving individuals control over their data while enabling collective insights, we can build more resilient, supportive communities that proactively address mental health challenges. This system has the potential to transform how we understand, prevent, and respond to mental health crises while respecting human dignity and autonomy.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Wellbeing;
