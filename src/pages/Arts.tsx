import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, AlertTriangle, CheckCircle, Users, Heart, Sparkles } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Arts = () => {
  useEffect(() => {
    document.title = "Regenerative Arts & Culture | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A blueprint for a dignified civilization—reimagining governance, economy, and culture to support human and planetary flourishing.');
    }
  }, []);

  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-primary">Regenerative Arts & Culture</h1>
        <p className="text-xl text-muted-foreground">Revitalizing Meaning, Memory, and Belonging through Creative Expression</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary" className="bg-purple-100 text-purple-800">Cultural Stewardship</Badge>
        <Badge variant="secondary" className="bg-green-100 text-green-800">Community-Rooted</Badge>
        <Badge variant="secondary" className="bg-pink-100 text-pink-800">Healing Arts</Badge>
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">Regenerative</Badge>
        <Badge variant="secondary" className="bg-orange-100 text-orange-800">Sacred Expression</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Overview and Purpose</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed">
            This whitepaper proposes a regenerative infrastructure for arts and culture—one that positions creative expression not as luxury or entertainment, but as essential societal infrastructure. In a time of ecological crisis, social fragmentation, and cultural commodification, we must restore the sacred role of art: to reveal truth, transmit wisdom, and reweave connection across time, space, and identity.
          </p>
          <p className="leading-relaxed">
            The regenerative arts and culture framework supports artists, tradition-bearers, and culture-makers as central stewards of imagination and coherence. Through public support, decentralized creation, and integration with healing and education systems, this model enables the flourishing of beauty, meaning, and community memory. When aligned with Endo Economics, cultural labor becomes not extractive or precarious, but reciprocal and honored—nourishing the soul of society.
          </p>
        </CardContent>
      </Card>

      <Card className="border-destructive/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            The Problem: Cultural Erosion and Extractive Entertainment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Commodified Creativity:</strong> Art is often devalued, commercialized, or algorithmically shaped for profit.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Precarious Labor:</strong> Artists face unstable income, lack of healthcare, and limited public support.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Cultural Amnesia:</strong> Intergenerational wisdom, ritual, and traditional arts are being lost or appropriated.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Isolation of Artists:</strong> Creatives are siloed from other systems—health, education, governance—despite their connective role.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Lack of Public Ritual:</strong> Societies lack shared spaces to process emotion, celebrate, mourn, or envision together.
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">The Solution: Regenerative Cultural Ecosystem</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Core Components:</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-primary/30 pl-4">
                <h5 className="font-medium text-primary">Cultural Stewardship Networks</h5>
                <p className="text-sm text-muted-foreground">
                  Local and bioregional artist cooperatives, councils, and mentorship guilds. Elders, tradition keepers, and storytellers are compensated for intergenerational sharing.
                </p>
              </div>
              <div className="border-l-4 border-blue-300 pl-4">
                <h5 className="font-medium text-blue-700">Public Creative Infrastructure</h5>
                <p className="text-sm text-muted-foreground">
                  Cultural centers, open-air theaters, and studios accessible to all. Public murals, participatory art installations, and ritual performance spaces. Mobile art labs and traveling exhibitions reach underserved regions.
                </p>
              </div>
              <div className="border-l-4 border-green-300 pl-4">
                <h5 className="font-medium text-green-700">Decentralized Patronage and Distribution</h5>
                <p className="text-sm text-muted-foreground">
                  Platforms for direct supporter-artist connection (non-commercial). Shared ownership of cultural works through creative commons and co-licensing. Local currencies and gift economies for cultural exchange.
                </p>
              </div>
              <div className="border-l-4 border-purple-300 pl-4">
                <h5 className="font-medium text-purple-700">Art as Healing and Civic Practice</h5>
                <p className="text-sm text-muted-foreground">
                  Integration of expressive arts into wellbeing and trauma recovery programs. Ritual design for life transitions, community healing, and environmental grief. Artist residencies in schools, hospitals, councils, and ecological projects.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Operational Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Creation Layer</h4>
              <p className="text-sm">Individuals and collectives produce visual, musical, narrative, movement-based, and ritual-based works</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Support Layer</h4>
              <p className="text-sm">Communities, organizations, and aligned governance structures provide funding, space, and recognition</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Transmission Layer</h4>
              <p className="text-sm">Digital archives, oral histories, traveling exhibitions, and ceremony share culture across generations</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Feedback Layer</h4>
              <p className="text-sm">Audiences reflect, participate, and shape evolving narratives</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Integration Layer</h4>
              <p className="text-sm">Cultural practice is embedded in education, health, justice, governance, and ecology</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Integration with Endo Economics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            In the Endo Economics model, value is redefined as what nourishes life. Artistic expression—especially when relational, place-based, and healing—becomes a core form of reciprocal contribution. Instead of relying on profit from ticket sales or attention economies, artists are resourced as community members whose work supports belonging, transformation, and resilience.
          </p>
          <p className="leading-relaxed">
            Cultural creation is not siloed from society but integrated: a dancer helping restore land memory, a musician tending intergroup harmony, a ritual designer helping a community grieve. With millions of creatives currently under-supported or under-employed, redirecting even a fraction of existing economic waste or inequitable surpluses could seed a renaissance of meaningful, regenerative culture.
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
                <strong className="text-foreground">Cultural Coherence:</strong>
                <span className="text-muted-foreground"> Shared meaning-making supports resilience and belonging</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Artist Dignity:</strong>
                <span className="text-muted-foreground"> Creatives are valued and resourced as cultural stewards</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Healing Pathways:</strong>
                <span className="text-muted-foreground"> Art becomes integrated in trauma work, wellbeing, and emotional literacy</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Intergenerational Memory:</strong>
                <span className="text-muted-foreground"> Wisdom, story, and tradition are passed forward and evolved</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Civic Engagement:</strong>
                <span className="text-muted-foreground"> Art invites participation in shaping society, not just observing it</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Beauty as Infrastructure:</strong>
                <span className="text-muted-foreground"> Creative design is central to thriving spaces and systems</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            Arts and culture are not peripheral—they are the pulse, breath, and memory of a living society. This proposal invites us to restore creativity to its rightful role as the connective tissue of regeneration. When artists are trusted as visionaries and healers, and when culture is treated not as commodity but as communion, we activate one of the most powerful forces for planetary transformation: the imagination of a people remembering who they are.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Arts;
