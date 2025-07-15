import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Wellbeing = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Wellbeing Tracking</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Holistic health monitoring and community wellness optimization systems
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Abstract</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Traditional healthcare systems focus on treating illness rather than promoting 
            comprehensive wellbeing. This paper explores integrated approaches to tracking 
            and optimizing individual and community wellness through holistic monitoring 
            systems that address physical, mental, emotional, and social health dimensions.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            In an era defined by chronic stress, environmental toxins, and social isolation, the
            pursuit of wellbeing has become more critical than ever. This paper examines the
            limitations of conventional healthcare models and proposes innovative systems for
            proactively monitoring and enhancing individual and community wellness.
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
              <b>Holistic Health:</b> Recognizing the interconnectedness of physical, mental,
              emotional, and social dimensions of wellbeing.
            </li>
            <li>
              <b>Preventive Monitoring:</b> Utilizing data and technology to identify potential
              health risks before they manifest as illness.
            </li>
            <li>
              <b>Community Wellness:</b> Creating supportive environments and social structures
              that promote collective health and resilience.
            </li>
            <li>
              <b>Personalized Interventions:</b> Tailoring wellness strategies to meet the unique
              needs and preferences of each individual.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Strategies and Solutions</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ol>
            <li>
              <b>Integrated Health Tracking:</b> Implementing wearable sensors, mobile apps, and
              data analytics to monitor vital signs, sleep patterns, stress levels, and other
              key indicators of wellbeing.
            </li>
            <li>
              <b>Mental Health Support Systems:</b> Developing online platforms, peer support
              networks, and therapeutic interventions to address mental and emotional health
              challenges.
            </li>
            <li>
              <b>Social Connection Initiatives:</b> Creating community events, shared interest
              groups, and mentorship programs to foster social bonds and combat loneliness.
            </li>
            <li>
              <b>Environmental Wellness Programs:</b> Promoting access to green spaces, clean air
              and water, and healthy food options to support ecological wellbeing.
            </li>
            <li>
              <b>Education and Empowerment:</b> Providing individuals with the knowledge and
              resources they need to make informed decisions about their health and wellbeing.
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Challenges and Considerations</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <b>Data Privacy and Security:</b> Ensuring that personal health data is protected
              from unauthorized access and misuse.
            </li>
            <li>
              <b>Equity and Accessibility:</b> Addressing disparities in access to wellness
              resources and ensuring that all community members can benefit from these systems.
            </li>
            <li>
              <b>Behavioral Change:</b> Motivating individuals to adopt and maintain healthy
              habits and lifestyles.
            </li>
            <li>
              <b>Integration with Healthcare Systems:</b> Aligning wellness tracking systems with
              existing healthcare infrastructure to provide seamless and coordinated care.
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
            Wellbeing tracking systems offer a powerful means of promoting holistic health and
            community wellness. By integrating technology, social support, and personalized
            interventions, we can create regenerative communities where all members have the
            opportunity to thrive.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Wellbeing;
