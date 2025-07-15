import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const Spirituality = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Regenerative Spirituality</h1>
          <p className="text-xl text-muted-foreground">Cultivating Sacred Infrastructure for Inner Development, Communal Ritual, and Planetary Coherence</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Sacred Infrastructure</Badge>
        <Badge variant="secondary">Pluralistic</Badge>
        <Badge variant="secondary">Inner Development</Badge>
        <Badge variant="secondary">Communal Ritual</Badge>
        <Badge variant="secondary">Planetary Coherence</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">By Juicy Life & Aether</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            juicy@actualize.earth | An AI collaborator powered by GPT-4 by OpenAI
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Overview and Purpose</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            This whitepaper proposes a regenerative approach to spirituality as a vital societal function—one that nourishes inner development, honors the sacredness of life, and restores shared meaning across cultures and communities. Spirituality, often relegated to private belief or institutional religion, is reframed here as a collective capacity for coherence, reverence, and conscious evolution. In a time of ecological crisis, disconnection, and cultural fragmentation, spiritual infrastructure becomes essential: not as dogma, but as a wellspring of courage, healing, and imagination.
          </p>
          <p className="leading-relaxed">
            Rather than promoting a single belief system, this framework supports pluralistic pathways to the sacred—integrating contemplative practice, seasonal ritual, interfaith dialogue, and spiritual literacy into public life. When rooted in inclusivity, humility, and lived experience, regenerative spirituality becomes a stabilizing and activating force in the transformation of self and society.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            The Problem: Disconnection from Meaning and Sacred Rhythm
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li><strong>Spiritual Isolation:</strong> Many lack a sense of connection to source, purpose, or sacred community.</li>
            <li><strong>Institutional Distrust:</strong> Organized religions often fail to meet modern spiritual needs, while retaining moral and cultural authority.</li>
            <li><strong>Ritual Deficiency:</strong> Societies lack shared ceremonies to process grief, mark transitions, or celebrate life meaningfully.</li>
            <li><strong>Cultural Appropriation:</strong> Spiritual wisdom is often extracted and commodified without respect for its roots.</li>
            <li><strong>Neglect of Inner Life:</strong> Fast-paced culture rarely supports stillness, reflection, or non-material growth.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            The Solution: Regenerative Spiritual Infrastructure
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">1. Public Ritual and Sacred Spaces</h4>
            <ul className="space-y-2 ml-4">
              <li>• Community-accessible spaces for seasonal celebrations, rites of passage, and ceremonial gatherings.</li>
              <li>• Designated sacred spaces in urban, rural, and natural environments for reflection, meditation, and remembrance.</li>
              <li>• Ritual design education supports local stewards in creating inclusive, resonant practices.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">2. Interfaith and Interspiritual Councils</h4>
            <ul className="space-y-2 ml-4">
              <li>• Pluralistic networks of elders, spiritual leaders, and mystics from diverse paths.</li>
              <li>• Forums for dialogue, mutual learning, and collaborative blessing of major civic moments.</li>
              <li>• Guidance on ethical spiritual practice, lineage respect, and cultural transmission.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">3. Inner Development Frameworks</h4>
            <ul className="space-y-2 ml-4">
              <li>• Programs to cultivate presence, compassion, awareness, resilience, and forgiveness.</li>
              <li>• Accessible contemplative tools: meditation, breathwork, prayer, silence, embodiment.</li>
              <li>• Integration into schools, healthcare, workplaces, and justice systems.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">4. Spiritual Literacy and Commons</h4>
            <ul className="space-y-2 ml-4">
              <li>• Open-access libraries of global spiritual practices, cosmologies, and wisdom teachings.</li>
              <li>• Storytelling projects that preserve and share ancestral spiritual knowledge.</li>
              <li>• AI-assisted tools to help individuals find aligned practices and paths.</li>
            </ul>
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
          <CardTitle className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
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
          <CardTitle className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="flex items-center gap-2">
              <span className="text-green-600">✅</span>
              <span><strong>Spiritual Inclusion:</strong> Diverse traditions and seekers are honored without hierarchy or coercion</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✅</span>
              <span><strong>Meaning-Making:</strong> People reconnect to purpose, mystery, and sacred rhythm</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✅</span>
              <span><strong>Community Cohesion:</strong> Ritual and shared spiritual practice strengthen social bonds</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✅</span>
              <span><strong>Healing Pathways:</strong> Trauma, grief, and transition are held in sacred space</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✅</span>
              <span><strong>Inner Resilience:</strong> Individuals cultivate practices to navigate complexity and deepen presence</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✅</span>
              <span><strong>Ethical Rooting:</strong> Wisdom traditions offer moral guidance in turbulent times</span>
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
    </div>
  );
};

export default Spirituality;
