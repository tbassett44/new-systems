import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Election = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Regenerative Election</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Democratic processes that embody regenerative principles and foster collective wisdom
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Abstract</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Traditional electoral systems often polarize communities and favor short-term thinking 
            over long-term wellbeing. This paper explores regenerative approaches to democratic 
            participation that foster collective wisdom, honor diverse perspectives, and create 
            governance systems aligned with ecological and social regeneration.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Keywords</CardTitle>
        </CardHeader>
        <CardContent>
          Regenerative Election, Democracy, Governance, Collective Wisdom, Social Regeneration, Ecological Regeneration
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Guiding Questions</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ol>
            <li>How can electoral systems be designed to promote long-term thinking and ecological wellbeing?</li>
            <li>What processes can foster collective wisdom and ensure diverse perspectives are heard in decision-making?</li>
            <li>How can governance systems be aligned with regenerative principles to support social and ecological health?</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default Election;
