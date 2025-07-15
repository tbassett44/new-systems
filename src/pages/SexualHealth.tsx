import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SexualHealth = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Sexual Health</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Holistic approaches to sexuality, intimacy, and reproductive health within regenerative communities
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Abstract</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Sexual health encompasses far more than reproductive biology, including emotional 
            intimacy, consent, pleasure, and the role of sexuality in personal and community 
            wellbeing. This paper explores holistic approaches to sexual health that honor 
            diverse expressions of sexuality while promoting healthy relationships and 
            regenerative approaches to reproduction and family formation.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            In many societies, sexuality is often stigmatized, repressed, or reduced to purely biological functions. This narrow view overlooks the profound impact of sexuality on individual and community wellbeing. A regenerative approach to sexual health recognizes sexuality as a vital force for connection, creativity, and personal growth.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Considerations</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li><strong>Holistic Education:</strong> Comprehensive sexuality education that goes beyond biology to include emotional intelligence, consent, communication skills, and healthy relationship dynamics.</li>
            <li><strong>Consent Culture:</strong> Creating a culture of enthusiastic consent where all individuals feel empowered to express their boundaries and desires freely.</li>
            <li><strong>Pleasure-Positive Approaches:</strong> Recognizing pleasure as a vital aspect of sexual health and wellbeing, promoting exploration, and destigmatizing conversations around pleasure.</li>
            <li><strong>Reproductive Justice:</strong> Ensuring access to comprehensive reproductive healthcare services, including contraception, abortion, and prenatal care, while honoring individual autonomy and choice.</li>
            <li><strong>Inclusivity and Diversity:</strong> Recognizing and celebrating the diversity of sexual orientations, gender identities, and relationship styles, creating spaces where all individuals feel seen, valued, and respected.</li>
            <li><strong>Trauma-Informed Care:</strong> Providing support and resources for individuals who have experienced sexual trauma, creating healing-centered approaches that prioritize safety, empowerment, and agency.</li>
            <li><strong>Community Support:</strong> Building community networks that provide education, resources, and support for individuals navigating questions of sexuality, intimacy, and relationships.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Regenerative Practices</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li><strong>Mindful Sexuality:</strong> Cultivating awareness and presence during sexual experiences, fostering deeper connection with oneself and one's partner(s).</li>
            <li><strong>Ethical Non-Monogamy:</strong> Exploring alternative relationship structures based on honesty, communication, and mutual consent, challenging traditional norms around monogamy.</li>
            <li><strong>Sacred Sexuality:</strong> Integrating spiritual practices into sexual expression, recognizing sexuality as a pathway to transcendence, healing, and connection with the divine.</li>
            <li><strong>Body Positivity:</strong> Challenging societal standards of beauty and promoting self-acceptance, fostering a positive relationship with one's body and sexuality.</li>
            <li><strong>Intergenerational Dialogue:</strong> Creating spaces for open and honest conversations between generations about sexuality, intimacy, and relationships, bridging divides and sharing wisdom.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conclusion</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            A regenerative approach to sexual health recognizes sexuality as a vital force for personal and community wellbeing. By embracing holistic education, consent culture, pleasure-positive approaches, and inclusivity, we can create communities where all individuals feel empowered to explore their sexuality in healthy, fulfilling, and regenerative ways.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SexualHealth;
