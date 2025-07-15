import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Media = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Media</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Community-centered media systems that foster authentic connection and shared understanding
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Abstract</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Corporate media systems often prioritize engagement and profit over truth and community 
            wellbeing, contributing to polarization and misinformation. This paper explores 
            community-centered media frameworks that foster authentic connection, shared understanding, 
            and the circulation of wisdom that supports collective flourishing.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            The media landscape profoundly shapes our perceptions, beliefs, and behaviors. 
            Dominant media systems often prioritize sensationalism, political agendas, and 
            commercial interests over the wellbeing of communities. This paper explores 
            alternative media models that prioritize authentic connection, shared understanding, 
            and the circulation of wisdom that supports collective flourishing.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Challenges of Current Media Systems</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <b>Misinformation and Disinformation:</b> The rapid spread of false or misleading 
              information erodes trust and undermines informed decision-making.
            </li>
            <li>
              <b>Polarization and Division:</b> Media narratives often amplify divisions and 
              create echo chambers that reinforce existing biases.
            </li>
            <li>
              <b>Commercialization and Sensationalism:</b> The pursuit of profit often leads to 
              sensationalized content that distracts from important issues.
            </li>
            <li>
              <b>Lack of Diversity:</b> Dominant media systems often lack diverse voices and 
              perspectives, perpetuating systemic inequalities.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Principles of Regenerative Media</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <b>Authenticity and Transparency:</b> Prioritizing truth, accuracy, and transparency 
              in reporting and content creation.
            </li>
            <li>
              <b>Community-Centeredness:</b> Focusing on the needs and interests of local communities 
              and fostering meaningful connections.
            </li>
            <li>
              <b>Inclusivity and Diversity:</b> Amplifying diverse voices and perspectives and 
              creating spaces for dialogue and understanding.
            </li>
            <li>
              <b>Wisdom and Insight:</b> Circulating knowledge, insights, and stories that support 
              personal and collective growth.
            </li>
            <li>
              <b>Ethical Storytelling:</b> Telling stories in ways that honor the dignity and 
              complexity of all individuals and communities.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Strategies for Building Regenerative Media Systems</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <b>Community-Owned Media Outlets:</b> Supporting the creation of local news sources, 
              radio stations, and online platforms that are owned and operated by community members.
            </li>
            <li>
              <b>Participatory Journalism:</b> Engaging community members in the reporting and 
              creation of news and stories.
            </li>
            <li>
              <b>Media Literacy Education:</b> Empowering individuals to critically evaluate media 
              content and identify misinformation.
            </li>
            <li>
              <b>Decentralized Social Media Platforms:</b> Exploring alternative social media platforms 
              that prioritize privacy, data sovereignty, and community governance.
            </li>
            <li>
              <b>Collaborative Storytelling Initiatives:</b> Creating collaborative projects that 
              bring together diverse voices and perspectives to tell stories that promote understanding 
              and healing.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Examples of Regenerative Media in Action</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <b>Local News Cooperatives:</b> Community-owned news organizations that prioritize 
              local issues and community engagement.
            </li>
            <li>
              <b>Citizen Journalism Platforms:</b> Online platforms that empower citizens to report 
              on local events and issues.
            </li>
            <li>
              <b>Restorative Narrative Projects:</b> Initiatives that use storytelling to promote 
              healing and reconciliation in communities affected by conflict or trauma.
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
            Regenerative media systems are essential for fostering authentic connection, shared 
            understanding, and the circulation of wisdom that supports collective flourishing. 
            By prioritizing community-centeredness, inclusivity, and ethical storytelling, we 
            can create media landscapes that empower communities to thrive and build a more 
            regenerative world.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Media;
