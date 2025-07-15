import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EndoEconomics = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Endo Economics</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transforming economic systems to align with regenerative principles and community wellbeing
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Abstract</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Traditional economic models prioritize external growth and extraction, often at the expense of 
            community wellbeing and ecological health. Endo Economics represents a paradigm shift toward 
            internally-focused, regenerative economic systems that prioritize circulation, regeneration, 
            and community resilience over endless growth.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            The current global economic system is predicated on the idea of infinite growth on a finite planet. 
            This model inevitably leads to ecological degradation, resource depletion, and social inequality. 
            Endo Economics offers an alternative vision: an economic system that is regenerative, circular, 
            and focused on enhancing the wellbeing of all members of the community.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Principles of Endo Economics</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ol>
            <li>
              <strong>Regeneration:</strong> Prioritizing the restoration and enhancement of natural and social 
              capital.
            </li>
            <li>
              <strong>Circularity:</strong> Designing systems that minimize waste and maximize resource utilization 
              through closed-loop processes.
            </li>
            <li>
              <strong>Community Wellbeing:</strong> Measuring success not just in terms of GDP, but in terms of 
              the health, happiness, and resilience of the community.
            </li>
            <li>
              <strong>Localization:</strong> Strengthening local economies and reducing dependence on global supply 
              chains.
            </li>
            <li>
              <strong>Equity:</strong> Ensuring fair distribution of resources and opportunities for all members of 
              the community.
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Strategies for Implementing Endo Economics</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <strong>Community Currencies:</strong> Creating local currencies that incentivize local spending and 
              build community wealth.
            </li>
            <li>
              <strong>Cooperatives:</strong> Supporting worker-owned and community-owned businesses that prioritize 
              social and environmental goals.
            </li>
            <li>
              <strong>Land Trusts:</strong> Protecting land from development and ensuring access to affordable housing 
              and sustainable agriculture.
            </li>
            <li>
              <strong>Participatory Budgeting:</strong> Empowering community members to decide how public funds are 
              spent.
            </li>
            <li>
              <strong>Impact Investing:</strong> Directing capital toward businesses and projects that generate positive 
              social and environmental impact.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conclusion</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Endo Economics offers a pathway toward a more just, sustainable, and resilient future. By shifting 
            our focus from external growth to internal regeneration, we can create economic systems that 
            enhance community wellbeing and ecological health for generations to come.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EndoEconomics;
