import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sensemaking = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Collective Sensemaking</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Distributed intelligence systems for community wisdom and decision-making
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Abstract</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            In an age of information overload and complex challenges, communities need robust 
            systems for collective intelligence and shared understanding. This paper outlines 
            frameworks for distributed sensemaking that harness collective wisdom, support 
            informed decision-making, and create coherent narratives that guide community action.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Keywords</CardTitle>
        </CardHeader>
        <CardContent>
          Collective Intelligence, Sensemaking, Distributed Cognition, Community Wisdom, Decision-Making,
          Narrative Coherence, Information Ecology, Knowledge Management, Social Learning, Participatory
          Processes.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Guiding Questions</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ol>
            <li>
              How can we create systems that effectively synthesize diverse perspectives and sources of
              information?
            </li>
            <li>
              What are the key principles for designing distributed sensemaking processes that promote
              collective understanding?
            </li>
            <li>
              How can we leverage technology to enhance collective intelligence and support informed
              decision-making in communities?
            </li>
            <li>
              What role does narrative play in shaping collective understanding and guiding community
              action?
            </li>
            <li>
              How can we foster a culture of open inquiry, critical thinking, and constructive dialogue
              within communities?
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sensemaking;
