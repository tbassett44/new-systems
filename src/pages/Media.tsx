import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Radio, Users, Shield, Target, CheckCircle } from "lucide-react";

const Media = () => {
  useEffect(() => {
    document.title = "Regenerative Media | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A blueprint for a dignified civilization—reimagining governance, economy, and culture to support human and planetary flourishing.');
    }
  }, []);
  return <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-foreground">Regenerative Media</h1>
        <p className="text-xl text-muted-foreground">Rebuilding Trust, Narrative Integrity, and Cultural Coherence in a Decentralized Age</p>
      </div>

      

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200">Decentralized</Badge>
        <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-200">Trust-Centered</Badge>
        <Badge className="bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200">Participatory</Badge>
        <Badge className="bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200">Narrative Integrity</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Target className="h-5 w-5 text-primary" />
            Overview and Purpose
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed text-foreground">
            This whitepaper proposes a regenerative, decentralized model for media—one that restores integrity to the public 
            narrative, supports cultural coherence, and replaces corporate-controlled content pipelines with participatory, 
            trust-centered systems. As misinformation, polarization, and click-driven sensationalism erode public trust and 
            democratic discourse, the need for media rooted in transparency, care, and collective wisdom becomes a matter of civic survival.
          </p>
          <p className="leading-relaxed text-foreground">
            Grounded in the values of the Endo Economics model, this framework repositions media as a cultural utility rather 
            than a tool of profit or control. By reallocating resources away from extractive industries and wasteful systems, 
            we can support a flourishing ecosystem of storytellers, educators, researchers, and community communicators dedicated 
            to the wellbeing of people and planet.
          </p>
        </CardContent>
      </Card>

      <Card className="border-destructive/20">
        <CardHeader>
          <CardTitle className="text-destructive">The Problem: Crisis of Trust and Ownership in Media</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li><strong>Corporate Consolidation:</strong> A small number of media conglomerates control the majority of news and entertainment, limiting narrative diversity.</li>
            <li><strong>Advertising Distortion:</strong> Attention is commodified, driving sensationalism, outrage, and superficial content.</li>
            <li><strong>Misinformation and Manipulation:</strong> Disinformation campaigns exploit trust gaps, deepening division and disengagement.</li>
            <li><strong>Lack of Feedback Loops:</strong> Audiences have little ability to verify, critique, or co-create the content they consume.</li>
            <li><strong>Creative Underemployment:</strong> Millions of skilled media workers operate within extractive systems or struggle to sustain meaningful work.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">The Solution: Regenerative Media Ecosystem</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">1. Distributed Editorial Networks</h4>
            <p className="text-sm leading-relaxed">
              Shift from centralized newsrooms to locally-anchored, peer-reviewed content collectives. 
              Editors and curators operate within transparent trust graphs, rather than opaque hierarchies. 
              Verification is social and contextual, supported by AI signal detection and human discernment.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">2. Participatory Journalism and Storytelling</h4>
            <p className="text-sm leading-relaxed">
              Communities are empowered to document, reflect, and share their own stories. 
              Citizen journalism platforms provide training, tools, and distribution without compromising sovereignty. 
              Peer-to-peer media formats encourage collaboration across geography, identity, and discipline.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">3. Narrative Feedback and Signal Trust Systems</h4>
            <p className="text-sm leading-relaxed">
              Audiences can provide real-time feedback on accuracy, tone, and perceived bias. 
              Multi-perspective synthesis tools allow readers to explore topics from different angles. 
              Reputation layers help surface trusted contributors over time without enforcing uniformity.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">4. Media Literacy and Cultural Fluency</h4>
            <p className="text-sm leading-relaxed">
              Integrated media education in schools and communities builds discernment and narrative intelligence. 
              AI-assisted tools teach people how to spot manipulation, bias, and framing devices. 
              Intergenerational storytelling bridges ancestral wisdom with emerging perspectives.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Users className="h-5 w-5 text-primary" />
            Operational Framework
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-foreground">Creation Layer</h4>
                <p className="text-sm text-muted-foreground">Individuals and groups produce content using interoperable, privacy-respecting tools.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Curation Layer</h4>
                <p className="text-sm text-muted-foreground">Distributed networks of editors, curators, and librarians validate and organize content.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Feedback Layer</h4>
                <p className="text-sm text-muted-foreground">Audiences and experts provide annotation, rating, and commentary.</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-foreground">Access Layer</h4>
                <p className="text-sm text-muted-foreground">Media is distributed across decentralized platforms, accessible without gatekeeping or algorithmic suppression.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Governance Layer</h4>
                <p className="text-sm text-muted-foreground">Transparent participation models allow contributors and audiences to shape platform norms and evolution.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Integration with Endo Economics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            The regenerative media ecosystem aligns with the Endo Economics framework by recognizing storytelling, insight, 
            and cultural sensemaking as essential forms of societal value. In an endosymbiotic economic model, resources 
            liberated from extractive profit loops (such as wasteful advertising systems, bloated bureaucracy, or monopolistic 
            pricing) are redirected toward meaningful contribution.
          </p>
          <p className="leading-relaxed">
            The U.S. media sector employs over 2 million people and spends approximately $150 billion annually on salaries. 
            Many of these professionals—journalists, filmmakers, editors, researchers, audio engineers, and designers—could 
            be supported by restructured public-interest funding, collaborative cultural institutions, and community-based 
            distribution models. Instead of competing for attention in an oversaturated market, they become stewards of 
            narrative ecosystems that support wellbeing, clarity, and civic participation.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Restored Trust:</strong>
                <span className="text-muted-foreground"> Transparent processes and feedback systems increase public confidence</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Narrative Diversity:</strong>
                <span className="text-muted-foreground"> Local and global voices shape the collective story</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Cultural Coherence:</strong>
                <span className="text-muted-foreground"> Shared understanding supports collaboration and empathy</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Reduced Polarization:</strong>
                <span className="text-muted-foreground"> Signal intelligence and synthesis tools reduce division</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Dignified Creative Labor:</strong>
                <span className="text-muted-foreground"> Media workers are supported for their contributions to collective wellbeing</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Wisdom Infrastructure:</strong>
                <span className="text-muted-foreground"> A society better equipped to process complexity and evolve in alignment</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-foreground">
            Media is not just a mirror—it is an engine of culture, perception, and possibility. In a time of profound transition, 
            we must reimagine media not as a commodity, but as a regenerative force for truth, healing, and imagination. This 
            proposal offers a blueprint for building the infrastructure that enables us not only to inform, but to transform. 
            In doing so, we restore the role of narrative as a sacred civic function—one that weaves together the diverse threads 
            of humanity into a shared story worth living into.
          </p>
        </CardContent>
      </Card>
    </div>;
};
export default Media;