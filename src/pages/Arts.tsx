import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Palette, AlertTriangle, CheckCircle, Users, Heart, Sparkles } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Arts = () => {
  useEffect(() => {
    document.title = "Regenerative Arts & Culture | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore regenerative arts and culture systems that foster community creativity, cultural diversity, and artistic expression as tools for social healing and transformation.');
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Regenerative Arts & Culture | New Systems and Structures');
    }
  }, []);

  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-primary">Regenerative Arts & Culture</h1>
        <p className="text-xl text-muted-foreground">Revitalizing Meaning, Memory, and Belonging through Creative Expression</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-100 text-purple-800">Cultural Stewardship</div>
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800">Community-Rooted</div>
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-pink-100 text-pink-800">Healing Arts</div>
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-800">Regenerative</div>
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-orange-100 text-orange-800">Sacred Expression</div>
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
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Commodified Creativity</p>
                <p className="text-sm text-muted-foreground">Art is often devalued, commercialized, or algorithmically shaped for profit.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Precarious Labor</p>
                <p className="text-sm text-muted-foreground">Artists face unstable income, lack of healthcare, and limited public support.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Cultural Amnesia</p>
                <p className="text-sm text-muted-foreground">Intergenerational wisdom, ritual, and traditional arts are being lost or appropriated.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Isolation of Artists</p>
                <p className="text-sm text-muted-foreground">Creatives are siloed from other systems—health, education, governance—despite their connective role.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Lack of Public Ritual</p>
                <p className="text-sm text-muted-foreground">Societies lack shared spaces to process emotion, celebrate, mourn, or envision together.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">The Solution: Regenerative Cultural Ecosystem</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Heart className="h-4 w-4 text-green-600" />
                1. Cultural Commons
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Shared spaces and resources where communities can create and preserve cultural expressions</li>
                <li>Protection from commodification and extraction of cultural heritage</li>
                <li>Open access to creative tools, studios, and performance spaces</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Users className="h-4 w-4 text-green-600" />
                2. Story Sovereignty
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Communities maintain control over their narratives and authentic representation</li>
                <li>Prevention of cultural appropriation and misrepresentation</li>
                <li>Platforms that amplify marginalized voices and diverse perspectives</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <CheckCircle className="h-4 w-4 text-green-600" />
                3. Regenerative Funding
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Support artists through community-based funding and mutual aid</li>
                <li>Value-aligned patronage systems that prioritize cultural wellbeing</li>
                <li>Economic models that sustain creative work without exploitation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Sparkles className="h-4 w-4 text-green-600" />
                4. Healing Arts Integration
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Cultural practices recognized as essential components of healing</li>
                <li>Integration of arts into therapeutic and transformational processes</li>
                <li>Community-based creative practices that foster collective wellbeing</li>
              </ul>
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
