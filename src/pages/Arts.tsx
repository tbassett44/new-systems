import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Arts = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Arts and Culture</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Creative expression as a catalyst for cultural transformation and community healing
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Abstract</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Arts and culture shape collective imagination and identity, influencing how communities 
            understand themselves and their possibilities. This paper explores how creative 
            expression can serve as a catalyst for cultural transformation, community healing, 
            and the emergence of regenerative ways of being that honor both tradition and innovation.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Art is not merely a reflection of society but a powerful force that shapes it. Throughout history, artistic movements have sparked social change, challenged norms, and inspired new ways of thinking and being. In the context of systems regeneration, arts and culture play a vital role in envisioning and embodying alternative futures, fostering empathy and connection, and mobilizing collective action.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>The Role of Arts in Systems Regeneration</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ol>
            <li>
              <b>Envisioning Alternative Futures:</b> Art can help us imagine and explore alternative futures that are more just, equitable, and sustainable. Through storytelling, visual arts, and performance, artists can create compelling visions of what is possible, inspiring hope and motivating action.
            </li>
            <li>
              <b>Fostering Empathy and Connection:</b> Art can bridge divides and foster empathy by allowing us to see the world through different perspectives. By engaging with diverse voices and experiences, we can develop a deeper understanding of ourselves and others, strengthening community bonds and promoting social cohesion.
            </li>
            <li>
              <b>Challenging Dominant Narratives:</b> Art can challenge dominant narratives and power structures by exposing injustice, questioning assumptions, and amplifying marginalized voices. Through satire, protest art, and other forms of creative expression, artists can disrupt the status quo and create space for alternative perspectives.
            </li>
            <li>
              <b>Mobilizing Collective Action:</b> Art can inspire and mobilize collective action by creating a sense of shared purpose and identity. Through participatory art projects, community murals, and other forms of collaborative expression, artists can bring people together to address pressing social and environmental issues.
            </li>
            <li>
              <b>Embodying Regenerative Values:</b> Art can embody regenerative values by celebrating beauty, diversity, and interconnectedness. By using sustainable materials, engaging with local communities, and promoting ecological awareness, artists can create works that are both aesthetically pleasing and ethically sound.
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Strategies for Integrating Arts and Culture into Systems Regeneration</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <b>Support artists and cultural organizations:</b> Provide funding, resources, and platforms for artists and cultural organizations that are working to promote systems regeneration.
            </li>
            <li>
              <b>Integrate arts into education:</b> Incorporate arts-based learning into schools and universities to cultivate creativity, critical thinking, and social-emotional intelligence.
            </li>
            <li>
              <b>Create public art spaces:</b> Develop public art spaces that showcase regenerative art and provide opportunities for community engagement.
            </li>
            <li>
              <b>Promote cultural exchange:</b> Facilitate cultural exchange programs that connect artists and communities from different backgrounds to share knowledge and build relationships.
            </li>
            <li>
              <b>Use art for advocacy:</b> Employ art as a tool for advocacy and social change, raising awareness about pressing issues and mobilizing collective action.
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
            Arts and culture are essential components of systems regeneration, providing the creative vision, emotional connection, and collective action needed to build a more just, equitable, and sustainable world. By supporting artists, integrating arts into education, and creating public art spaces, we can harness the transformative power of art to create a future where all life can thrive.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Arts;
