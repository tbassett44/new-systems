import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Lock, Key, CheckCircle, Scale, Users, Zap, Globe, Shield } from "lucide-react";

const AIEthics = () => {
  useEffect(() => {
    document.title = "AI Ethics | Systems Regeneration";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A framework for ethical AI development that prioritizes human dignity, transparency, accountability, and the long-term flourishing of humanity and the planet.');
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'AI Ethics | Systems Regeneration');
    }
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold">AI Ethics</h1>
          <p className="text-xl text-muted-foreground">Ensuring Artificial Intelligence Serves Human Flourishing</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-800">AI Safety</div>
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-100 text-purple-800">Human-Centered</div>
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800">Transparency</div>
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-orange-100 text-orange-800">Accountability</div>
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-pink-100 text-pink-800">Democratic Governance</div>
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-teal-100 text-teal-800">Open Source</div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Overview and Purpose
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            As artificial intelligence becomes increasingly integrated into every aspect of society—from healthcare 
            and education to governance and economic systems—the ethical frameworks guiding its development and 
            deployment become critical to human flourishing. This proposal outlines a regenerative approach to AI 
            ethics that moves beyond reactive regulation toward proactive design principles rooted in dignity, 
            transparency, and collective wellbeing.
          </p>
          <p className="leading-relaxed">
            The current trajectory of AI development is largely driven by competitive market pressures and 
            concentrated corporate interests, often prioritizing efficiency and profit over human values. Without 
            intentional intervention, AI systems risk amplifying existing inequalities, eroding privacy, undermining 
            democratic processes, and concentrating power in ways that could fundamentally reshape human agency and 
            autonomy.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <Lock className="h-5 w-5" />
            The Problem: Unaligned AI Development
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Concentration of Power</p>
                <p className="text-sm text-muted-foreground">AI development is dominated by a handful of large corporations with massive computational resources, creating power asymmetries that undermine democratic oversight.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Misaligned Incentives</p>
                <p className="text-sm text-muted-foreground">Market pressures prioritize speed-to-market and competitive advantage over safety, ethics, and long-term societal impact.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Opacity and Proprietary Secrecy</p>
                <p className="text-sm text-muted-foreground">Many AI systems operate as "black boxes," with their inner workings hidden from public scrutiny and independent evaluation.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Amplification of Bias</p>
                <p className="text-sm text-muted-foreground">AI systems trained on historical data often perpetuate and amplify existing social biases and inequalities.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Erosion of Privacy</p>
                <p className="text-sm text-muted-foreground">AI-powered surveillance and data collection threaten individual privacy and enable new forms of social control.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Labor Displacement</p>
                <p className="text-sm text-muted-foreground">Rapid automation threatens to displace workers faster than new economic opportunities can be created, without adequate social safety nets.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <Key className="h-5 w-5" />
            The Solution: Regenerative AI Governance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-3">1. Democratic AI Governance:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Establish participatory governance structures that give affected communities meaningful voice
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Citizen assemblies on AI policy to deliberate on high-stakes decisions
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Community impact assessments before AI deployment in sensitive domains
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Mechanisms for ongoing public deliberation about AI's role in society
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">2. Open and Collaborative Development:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Promote open-source AI development that distributes benefits broadly
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Enable independent safety research and auditing of AI systems
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Collaborative research networks to share safety findings and best practices
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">3. Proactive Safety Research:</h4>
              <p className="text-sm text-muted-foreground">
                Invest substantially in AI safety research, including alignment research to ensure AI systems 
                pursue human-beneficial goals, robustness research to prevent AI failures, and interpretability 
                research to understand AI decision-making.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            Core Ethical Principles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">1. Human Dignity and Agency</h4>
              <p className="text-sm text-muted-foreground">AI systems must enhance rather than diminish human dignity. Humans remain in meaningful control of consequential decisions, and individuals have the right to understand and contest AI-driven decisions that affect their lives.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">2. Transparency and Explainability</h4>
              <p className="text-sm text-muted-foreground">AI systems should be transparent in operation and explainable in decision-making. This includes clear disclosure when AI is being used, understandable explanations, and open documentation of training data and limitations.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">3. Fairness and Non-Discrimination</h4>
              <p className="text-sm text-muted-foreground">AI systems must actively prevent and mitigate bias. This requires diverse training data, ongoing auditing for discriminatory outcomes, and mechanisms for affected communities to participate in oversight.</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold">4. Accountability and Governance</h4>
              <p className="text-sm text-muted-foreground">Clear lines of accountability including legal frameworks for AI-caused harms, independent oversight bodies with enforcement authority, and mechanisms for redress when AI systems cause damage.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold">5. Environmental Sustainability</h4>
              <p className="text-sm text-muted-foreground">AI development must account for and minimize its environmental footprint, including the energy costs of training and running large models, driving development toward more efficient approaches.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-orange-500" />
            Operational Framework
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Ethical Impact Assessment</h4>
              <p className="text-sm text-muted-foreground">Comprehensive assessments before deploying AI in high-stakes domains like healthcare, justice, education, and employment</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Ongoing Monitoring</h4>
              <p className="text-sm text-muted-foreground">Continuous evaluation of AI systems for bias, errors, and unintended consequences with mechanisms for rapid correction</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Public Oversight Bodies</h4>
              <p className="text-sm text-muted-foreground">Independent institutions with technical expertise and enforcement authority to audit and regulate AI systems</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Worker Transition Support</h4>
              <p className="text-sm text-muted-foreground">Comprehensive support for workers displaced by AI including retraining, income support, and new opportunity creation</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-purple-500" />
            Integration with Endo Economics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">AI ethics cannot be separated from broader economic structures. Within the Endo Economics framework, AI development would be guided by principles of symbiosis rather than extraction:</p>
          <div className="space-y-6">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🤝 Shared Productivity Gains</h4>
              <p className="text-sm text-muted-foreground">
                AI productivity gains would be shared broadly through mechanisms like universal basic income and 
                reduced working hours, rather than concentrated among capital owners.
              </p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🌱 Regenerative Investment</h4>
              <p className="text-sm text-muted-foreground">
                AI development funded through investment structures that prioritize long-term 
                social benefit over short-term profit maximization.
              </p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🔄 Worker Transition</h4>
              <p className="text-sm text-muted-foreground">
                Workers displaced by AI receive comprehensive transition support, including retraining, income 
                support, and opportunities to contribute to society in new ways.
              </p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🌍 Environmental Accountability</h4>
              <p className="text-sm text-muted-foreground">
                The environmental costs of AI computation fully internalized, driving development toward 
                more efficient and sustainable approaches.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-indigo-500" />
            Philosophical Foundation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">This framework rests on fundamental principles about the relationship between humanity and technology:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Technology as Tool</h4>
              <p className="text-sm text-muted-foreground">AI should augment human capabilities, not replace human judgment in domains where human values are essential</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Collective Stewardship</h4>
              <p className="text-sm text-muted-foreground">AI development is a civilizational choice that should be made democratically, not by a small number of corporations</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Precautionary Wisdom</h4>
              <p className="text-sm text-muted-foreground">Given the potential for irreversible harm, AI development should proceed with appropriate caution and foresight</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Inclusive Flourishing</h4>
              <p className="text-sm text-muted-foreground">The benefits and risks of AI must be distributed fairly across all of humanity, not concentrated among the few</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Democratized Expertise</p>
                <p className="text-sm text-muted-foreground">Access to capabilities previously available only to the privileged few</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Accelerated Discovery</p>
                <p className="text-sm text-muted-foreground">Scientific discovery and technological innovation for human benefit</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Enhanced Creativity</p>
                <p className="text-sm text-muted-foreground">AI that augments human creativity and expression rather than replacing it</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Informed Democracy</p>
                <p className="text-sm text-muted-foreground">Support for more informed and participatory democratic processes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Personalized Services</p>
                <p className="text-sm text-muted-foreground">Education and healthcare tailored to individual needs at scale</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Collective Action</p>
                <p className="text-sm text-muted-foreground">Coordination on complex challenges like climate change</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Meaningful Work</p>
                <p className="text-sm text-muted-foreground">Freedom from tedious and dangerous work to pursue more meaningful activities</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Protected Rights</p>
                <p className="text-sm text-muted-foreground">AI systems that respect and protect fundamental human rights and dignity</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            Conclusion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            The ethical development of artificial intelligence is not merely a technical challenge—it is a 
            civilizational choice about the kind of future we want to create. By grounding AI development in 
            principles of human dignity, transparency, fairness, and accountability, and by embedding it within 
            regenerative economic and governance structures, we can ensure that AI becomes a powerful tool for 
            human flourishing rather than a threat to it. The time to make this choice is now, while the 
            trajectory of AI development can still be meaningfully shaped.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIEthics;
