import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Heart, Users, Palette, Sparkles } from "lucide-react";

const Spirituality = () => {
  useEffect(() => {
    document.title = "Regenerative Spirituality | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover regenerative spirituality that integrates contemplative practices, earth-based wisdom, and community ritual to support personal and collective healing and transformation.');
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Regenerative Spirituality | New Systems and Structures');
    }
  }, []);
  return <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold">Regenerative Spirituality</h1>
        <p className="text-xl text-muted-foreground">Cultivating Sacred Infrastructure for Inner Development, Communal Ritual, and Planetary Coherence</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">Sacred Infrastructure</Badge>
        <Badge variant="secondary" className="bg-purple-100 text-purple-800">Pluralistic</Badge>
        <Badge variant="secondary" className="bg-green-100 text-green-800">Inner Development</Badge>
        <Badge variant="secondary" className="bg-orange-100 text-orange-800">Communal Ritual</Badge>
        <Badge variant="secondary" className="bg-pink-100 text-pink-800">Planetary Coherence</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview and Purpose</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            This proposal proposes a regenerative approach to spirituality as a vital societal function—one that nourishes inner development, honors the sacredness of life, and restores shared meaning across cultures and communities. Spirituality, often relegated to private belief or institutional religion, is reframed here as a collective capacity for coherence, reverence, and conscious evolution. In a time of ecological crisis, disconnection, and cultural fragmentation, spiritual infrastructure becomes essential: not as dogma, but as a wellspring of courage, healing, and imagination.
          </p>
          <p className="leading-relaxed">
            Rather than promoting a single belief system, this framework supports pluralistic pathways to the sacred—integrating contemplative practice, seasonal ritual, interfaith dialogue, and spiritual literacy into public life. When rooted in inclusivity, humility, and lived experience, regenerative spirituality becomes a stabilizing and activating force in the transformation of self and society.
          </p>
        </CardContent>
      </Card>

      <Card className="border-destructive/20">
        <CardHeader>
          <CardTitle className="text-destructive">
            The Problem: Disconnection from Meaning and Sacred Rhythm
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Spiritual Isolation</p>
                <p className="text-sm text-muted-foreground">Many lack a sense of connection to source, purpose, or sacred community.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Institutional Distrust</p>
                <p className="text-sm text-muted-foreground">Organized religions often fail to meet modern spiritual needs, while retaining moral and cultural authority.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Ritual Deficiency</p>
                <p className="text-sm text-muted-foreground">Societies lack shared ceremonies to process grief, mark transitions, or celebrate life meaningfully.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Cultural Appropriation</p>
                <p className="text-sm text-muted-foreground">Spiritual wisdom is often extracted and commodified without respect for its roots.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Neglect of Inner Life</p>
                <p className="text-sm text-muted-foreground">Fast-paced culture rarely supports stillness, reflection, or non-material growth.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">
            The Solution: Regenerative Spiritual Infrastructure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Heart className="h-4 w-4 text-green-600" />
                1. Sacred Commons
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Community-tended spaces for spiritual practice and contemplation</li>
                <li>Honor diverse traditions while fostering interfaith dialogue</li>
                <li>Accessible sacred spaces that serve all community members</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Users className="h-4 w-4 text-green-600" />
                2. Wisdom Keepers Networks
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Intergenerational networks preserving indigenous spiritual knowledge</li>
                <li>Traditional practices and emerging wisdom traditions shared openly</li>
                <li>Mentorship pathways connecting elders with emerging practitioners</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Palette className="h-4 w-4 text-green-600" />
                3. Embodied Spiritual Practice
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Integration of spiritual practice with daily life and ecological connection</li>
                <li>Community service as spiritual practice and embodied compassion</li>
                <li>Movement beyond institutional religion toward lived spirituality</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Sparkles className="h-4 w-4 text-green-600" />
                4. Healing and Transformation
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Spiritual practices supporting individual and collective healing</li>
                <li>Frameworks for healing trauma, disconnection, and cultural wounds</li>
                <li>Transformational processes that foster personal and community growth</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Operational Framework</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Practice Layer</h4>
              <p className="text-sm text-muted-foreground">Individuals engage with daily and seasonal spiritual practices in diverse forms.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Community Layer</h4>
              <p className="text-sm text-muted-foreground">Shared rituals and gatherings foster local coherence and sacred kinship.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Leadership Layer</h4>
              <p className="text-sm text-muted-foreground">Spiritual elders, facilitators, and lineage holders are supported as public guides.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Commons Layer</h4>
              <p className="text-sm text-muted-foreground">Digital and physical infrastructure supports open, ethical access to wisdom traditions.</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-semibold mb-2">Integration Layer</h4>
              <p className="text-sm text-muted-foreground">Spiritual development is recognized and woven into health, justice, governance, and education.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">
            Integration with Endo Economics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            In the Endo Economics model, inner transformation and spiritual coherence are seen as foundational to collective wellbeing. Spiritual labor—holding space, blessing transitions, transmitting wisdom—is honored as vital contribution, not invisible or unpaid emotional work. Rather than being monetized through commercial spiritual industries, regenerative spiritual infrastructure is supported through rebalanced resource flows, redirected from extractive systems.
          </p>
          <p className="leading-relaxed">
            Elders, ritualists, contemplative teachers, and sacred space stewards are resourced within the community economy, allowing them to serve without distortion or burnout. Ceremonial work, grief tending, and initiatory pathways are recognized as necessary infrastructure for resilient societies—equally as vital as healthcare, education, or governance.
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
                <strong className="text-foreground">Spiritual Inclusion:</strong>
                <span className="text-muted-foreground"> Diverse traditions and seekers are honored without hierarchy or coercion</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Meaning-Making:</strong>
                <span className="text-muted-foreground"> People reconnect to purpose, mystery, and sacred rhythm</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Community Cohesion:</strong>
                <span className="text-muted-foreground"> Ritual and shared spiritual practice strengthen social bonds</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Healing Pathways:</strong>
                <span className="text-muted-foreground"> Trauma, grief, and transition are held in sacred space</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Inner Resilience:</strong>
                <span className="text-muted-foreground"> Individuals cultivate practices to navigate complexity and deepen presence</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Ethical Rooting:</strong>
                <span className="text-muted-foreground"> Wisdom traditions offer moral guidance in turbulent times</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            Regenerative spirituality is not a return to religion—it is a reawakening of humanity's sacred intelligence. In a time of profound transformation, we must cultivate not only new systems and structures, but new myths, rituals, and inner capacities. This proposal invites a reclamation of the sacred—not as belief, but as belonging; not as doctrine, but as devotion to life. By weaving spiritual practice into the public and planetary sphere, we can meet the future not only with strategy, but with soul.
          </p>
        </CardContent>
      </Card>
    </div>;
};

export default Spirituality;
