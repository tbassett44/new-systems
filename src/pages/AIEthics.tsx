import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AIEthics = () => {
  useEffect(() => {
    document.title = "AI Ethics | Systems Regeneration";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A framework for ethical AI development that prioritizes human dignity, transparency, accountability, and the long-term flourishing of humanity and the planet.');
    }
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">AI Ethics</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Ensuring Artificial Intelligence Serves Human Flourishing
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary">AI Safety</Badge>
          <Badge variant="secondary">Human-Centered</Badge>
          <Badge variant="secondary">Transparency</Badge>
          <Badge variant="secondary">Accountability</Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
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
          <CardTitle>Core Ethical Principles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Human Dignity and Agency</h3>
            <p className="text-sm text-muted-foreground">
              AI systems must be designed to enhance rather than diminish human dignity and agency. This means 
              ensuring that humans remain in meaningful control of consequential decisions, that AI augments human 
              capabilities rather than replacing human judgment in domains where human values and wisdom are essential, 
              and that individuals have the right to understand and contest AI-driven decisions that affect their lives.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Transparency and Explainability</h3>
            <p className="text-sm text-muted-foreground">
              AI systems should be transparent in their operation and explainable in their decision-making processes. 
              This includes clear disclosure when AI is being used, understandable explanations of how AI systems 
              reach their conclusions, and open documentation of training data, methodologies, and known limitations.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Fairness and Non-Discrimination</h3>
            <p className="text-sm text-muted-foreground">
              AI systems must actively work to prevent and mitigate bias and discrimination. This requires diverse 
              and representative training data, ongoing auditing for discriminatory outcomes, and mechanisms for 
              affected communities to participate in the design and oversight of AI systems that impact them.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Accountability and Governance</h3>
            <p className="text-sm text-muted-foreground">
              Clear lines of accountability must be established for AI systems, including legal frameworks that 
              assign responsibility for AI-caused harms, independent oversight bodies with technical expertise and 
              enforcement authority, and mechanisms for redress when AI systems cause damage or injustice.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>The Problem: Unaligned AI Development</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            Current AI development faces several critical challenges that threaten its potential to serve humanity:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
            <li>
              <strong>Concentration of Power:</strong> AI development is dominated by a handful of large corporations 
              with massive computational resources, creating power asymmetries that undermine democratic oversight.
            </li>
            <li>
              <strong>Misaligned Incentives:</strong> Market pressures prioritize speed-to-market and competitive 
              advantage over safety, ethics, and long-term societal impact.
            </li>
            <li>
              <strong>Opacity and Proprietary Secrecy:</strong> Many AI systems operate as "black boxes," with 
              their inner workings hidden from public scrutiny and independent evaluation.
            </li>
            <li>
              <strong>Amplification of Bias:</strong> AI systems trained on historical data often perpetuate and 
              amplify existing social biases and inequalities.
            </li>
            <li>
              <strong>Erosion of Privacy:</strong> AI-powered surveillance and data collection threaten individual 
              privacy and enable new forms of social control.
            </li>
            <li>
              <strong>Labor Displacement:</strong> Rapid automation threatens to displace workers faster than new 
              economic opportunities can be created, without adequate social safety nets.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>The Solution: Regenerative AI Governance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            A regenerative approach to AI ethics requires systemic changes across multiple dimensions:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Democratic AI Governance</h3>
              <p className="text-sm text-muted-foreground">
                Establish participatory governance structures that give affected communities meaningful voice in 
                AI development and deployment decisions. This includes citizen assemblies on AI policy, community 
                impact assessments, and mechanisms for ongoing public deliberation about AI's role in society.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Open and Collaborative Development</h3>
              <p className="text-sm text-muted-foreground">
                Promote open-source AI development and collaborative research that distributes the benefits of AI 
                more broadly and enables independent safety research and auditing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Proactive Safety Research</h3>
              <p className="text-sm text-muted-foreground">
                Invest substantially in AI safety research, including alignment research to ensure AI systems 
                pursue human-beneficial goals, robustness research to prevent AI failures, and interpretability 
                research to understand AI decision-making.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Ethical Impact Assessment</h3>
              <p className="text-sm text-muted-foreground">
                Require comprehensive ethical impact assessments before deploying AI systems in high-stakes domains, 
                including healthcare, criminal justice, education, and employment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Integration with Endo Economics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            AI ethics cannot be separated from broader economic structures. Within the Endo Economics framework, 
            AI development would be guided by principles of symbiosis rather than extraction:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
            <li>
              AI productivity gains would be shared broadly through mechanisms like universal basic income and 
              reduced working hours, rather than concentrated among capital owners.
            </li>
            <li>
              AI development would be funded through regenerative investment structures that prioritize long-term 
              social benefit over short-term profit maximization.
            </li>
            <li>
              Workers displaced by AI would receive comprehensive transition support, including retraining, income 
              support, and opportunities to contribute to society in new ways.
            </li>
            <li>
              The environmental costs of AI computation would be fully internalized, driving development toward 
              more efficient and sustainable approaches.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Net Positive Outcomes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            When AI development is guided by regenerative ethics, it has the potential to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
            <li>Democratize access to expertise and capabilities previously available only to the privileged few</li>
            <li>Accelerate scientific discovery and technological innovation for human benefit</li>
            <li>Enhance human creativity and expression rather than replacing it</li>
            <li>Support more informed and participatory democratic processes</li>
            <li>Enable personalized education and healthcare at scale</li>
            <li>Help coordinate collective action on complex challenges like climate change</li>
            <li>Free humans from tedious and dangerous work to pursue more meaningful activities</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conclusion</CardTitle>
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
