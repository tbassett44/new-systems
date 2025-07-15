import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Education</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Regenerative learning systems that cultivate wisdom, creativity, and ecological consciousness
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Abstract</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Traditional education systems prepare students for industrial-age careers while failing 
            to develop the wisdom, creativity, and ecological consciousness needed for regenerative 
            societies. This paper explores educational frameworks that cultivate whole-person 
            development, systems thinking, and deep connection with community and nature.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Education is the cornerstone of any thriving society, shaping the minds and hearts of future generations. However, traditional education systems often fall short of preparing students for the complex challenges of the 21st century. In this paper, we explore regenerative learning systems that go beyond rote memorization and standardized testing to cultivate wisdom, creativity, and ecological consciousness.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Regenerative Learning Principles</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ol>
            <li>
              <strong>Whole-Person Development:</strong> Emphasizing the holistic growth of students, including intellectual, emotional, social, and spiritual dimensions.
            </li>
            <li>
              <strong>Systems Thinking:</strong> Cultivating the ability to understand complex systems, identify patterns, and make informed decisions.
            </li>
            <li>
              <strong>Ecological Consciousness:</strong> Fostering a deep connection with nature and an understanding of ecological principles.
            </li>
            <li>
              <strong>Creativity and Innovation:</strong> Encouraging students to think creatively, solve problems, and develop innovative solutions.
            </li>
            <li>
              <strong>Community Engagement:</strong> Connecting students with their communities and providing opportunities for service learning and civic engagement.
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Regenerative Education Frameworks</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <strong>Montessori Education:</strong> A child-centered approach that emphasizes self-directed learning, hands-on activities, and collaboration.
            </li>
            <li>
              <strong>Waldorf Education:</strong> An arts-integrated approach that cultivates creativity, imagination, and a love of learning.
            </li>
            <li>
              <strong>Permaculture Education:</strong> An ecological approach that teaches students how to design and create sustainable systems.
            </li>
            <li>
              <strong>Indigenous Education:</strong> An approach that honors traditional knowledge, cultural practices, and a deep connection with nature.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cultivating Wisdom and Critical Thinking</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Regenerative education emphasizes the cultivation of wisdom and critical thinking skills. This involves teaching students how to analyze information, evaluate arguments, and make informed decisions. It also involves fostering a love of learning and a desire to understand the world around them.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fostering Creativity and Innovation</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Creativity and innovation are essential skills for the 21st century. Regenerative education fosters these skills by providing students with opportunities to explore their interests, experiment with new ideas, and develop innovative solutions to complex problems.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Promoting Ecological Consciousness</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Ecological consciousness is a deep understanding of the interconnectedness of all living things and the importance of protecting the environment. Regenerative education promotes ecological consciousness by connecting students with nature, teaching them about ecological principles, and providing them with opportunities to engage in environmental stewardship.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conclusion</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Regenerative education offers a powerful vision for the future of learning. By cultivating wisdom, creativity, and ecological consciousness, regenerative education prepares students to be active, engaged citizens who can create a more just and sustainable world.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;
