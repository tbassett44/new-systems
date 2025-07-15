import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Science = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Science</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Participatory research frameworks that democratize knowledge creation and support community needs
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Abstract</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Traditional scientific institutions often operate in isolation from communities, 
            creating knowledge that serves institutional interests rather than collective wellbeing. 
            This paper outlines participatory research frameworks that democratize scientific 
            inquiry, honor diverse ways of knowing, and generate knowledge that directly serves 
            community needs and regenerative goals.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Science plays a critical role in shaping our understanding of the world and informing
            our actions. However, traditional scientific institutions often operate in silos,
            disconnected from the needs and priorities of communities. This paper explores
            participatory research frameworks that democratize knowledge creation, empower
            communities to engage in scientific inquiry, and generate knowledge that directly
            addresses local challenges and regenerative goals.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Concepts</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <strong>Participatory Research:</strong> Research approaches that actively involve
              community members in all stages of the research process, from defining research
              questions to collecting and analyzing data to disseminating findings.
            </li>
            <li>
              <strong>Democratization of Knowledge:</strong> Making scientific knowledge and
              research tools accessible to a wider range of people, regardless of their
              institutional affiliation or educational background.
            </li>
            <li>
              <strong>Community-Based Research:</strong> Research that is driven by the needs and
              priorities of communities, and that aims to generate knowledge that is directly
              relevant to local challenges and opportunities.
            </li>
            <li>
              <strong>Indigenous Knowledge:</strong> Recognizing and valuing the traditional
              knowledge systems of Indigenous peoples, and integrating these knowledge systems
              into scientific research and decision-making.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Strategies for Participatory Research</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <strong>Community Needs Assessment:</strong> Conducting thorough assessments of
              community needs and priorities to identify research questions that are relevant
              and meaningful to local stakeholders.
            </li>
            <li>
              <strong>Collaborative Research Design:</strong> Involving community members in the
              design of research projects, ensuring that research methods are culturally
              appropriate and ethically sound.
            </li>
            <li>
              <strong>Data Collection and Analysis:</strong> Training community members to
              collect and analyze data, empowering them to become active participants in the
              research process.
            </li>
            <li>
              <strong>Knowledge Sharing and Dissemination:</strong> Sharing research findings
              with communities in accessible and culturally appropriate formats, and using
              research to inform local decision-making and action.
            </li>
            <li>
              <strong>Capacity Building:</strong> Providing training and resources to support
              community members in developing their research skills and knowledge.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Examples of Participatory Research</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <strong>Community-Based Environmental Monitoring:</strong> Involving community
              members in monitoring air and water quality, tracking changes in local ecosystems,
              and identifying environmental hazards.
            </li>
            <li>
              <strong>Participatory Health Research:</strong> Engaging community members in
              research on health disparities, access to healthcare, and the effectiveness of
              health interventions.
            </li>
            <li>
              <strong>Community-Based Social Research:</strong> Involving community members in
              research on social issues such as poverty, inequality, and crime, and using
              research to inform community development initiatives.
            </li>
            <li>
              <strong>Indigenous Knowledge Research:</strong> Collaborating with Indigenous
              communities to document and preserve traditional knowledge systems, and to
              integrate these knowledge systems into scientific research and decision-making.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Challenges and Opportunities</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Participatory research offers many opportunities for democratizing knowledge
            creation and supporting community needs. However, it also presents several
            challenges, including:
          </p>
          <ul>
            <li>
              <strong>Building Trust:</strong> Establishing trust between researchers and
              community members can be challenging, particularly in communities that have
              historically been marginalized or exploited by scientific institutions.
            </li>
            <li>
              <strong>Resource Constraints:</strong> Participatory research can be resource
              intensive, requiring significant investments in training, capacity building, and
              community engagement.
            </li>
            <li>
              <strong>Power Dynamics:</strong> Addressing power dynamics between researchers and
              community members is essential to ensure that research is truly participatory and
              equitable.
            </li>
            <li>
              <strong>Institutional Barriers:</strong> Overcoming institutional barriers to
              participatory research, such as funding requirements and ethical review processes,
              can be challenging.
            </li>
          </ul>
          <p>
            Despite these challenges, participatory research offers a powerful approach to
            democratizing knowledge creation and supporting community needs. By actively
            involving community members in all stages of the research process, we can generate
            knowledge that is more relevant, more useful, and more likely to lead to positive
            change.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conclusion</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Participatory research frameworks offer a powerful approach to democratizing
            knowledge creation and supporting community needs. By actively involving community
            members in all stages of the research process, we can generate knowledge that is
            more relevant, more useful, and more likely to lead to positive change. As we
            move forward, it is essential to continue to develop and refine participatory
            research methods, to address the challenges that arise, and to ensure that
            scientific inquiry serves the needs of communities and the goals of ecological and
            social regeneration.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Science;
