
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Home, Users, Heart, Trees } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Housing = () => {
  useEffect(() => {
    document.title = "Regenerative Housing & Communities | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about regenerative housing and community systems that create affordable, ecological, and socially connected living environments that support human and planetary well-being.');
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Regenerative Housing & Communities | New Systems and Structures');
    }
  }, []);
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-primary">Regenerative Housing & Communities</h1>
        <p className="text-xl text-muted-foreground">Creating Affordable, Ecological, and Community-Centered Living Systems</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Affordable</Badge>
        <Badge variant="secondary">Ecological</Badge>
        <Badge variant="secondary">Community-Centered</Badge>
        <Badge variant="secondary">Resilient</Badge>
        <Badge variant="secondary">Bioregional</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Overview and Purpose</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed">
            This whitepaper proposes a regenerative approach to housing and community development—one that prioritizes affordability, ecological harmony, and social connection. Rather than treating housing as a commodity or isolated structure, this framework envisions homes as integrated components of living systems: embedded in local ecologies, economies, and cultures.
          </p>
          <p className="leading-relaxed">
            The regenerative housing model supports the creation of diverse, resilient communities that meet human needs while enhancing the health of the planet. By integrating permaculture design, natural building techniques, community land trusts, and decentralized finance, this model enables the flourishing of both people and place.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            The Problem: Housing Crisis and Disconnected Development
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Affordability Crisis:</strong> Housing costs are rising faster than wages, pushing millions into precarity.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Ecological Impact:</strong> Conventional construction contributes to deforestation, pollution, and climate change.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Social Isolation:</strong> Sprawling suburbs and disconnected developments erode community bonds.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Displacement and Gentrification:</strong> Development often displaces long-term residents and destroys cultural heritage.
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">The Solution: Regenerative Housing Ecosystem</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Core Components:</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-primary/30 pl-4">
                <h5 className="font-medium text-primary">Community Land Trusts</h5>
                <p className="text-sm text-muted-foreground">
                  Land is held in trust by the community, ensuring permanent affordability and preventing speculation. Residents have long-term leases and participate in governance.
                </p>
              </div>
              <div className="border-l-4 border-blue-300 pl-4">
                <h5 className="font-medium text-blue-700">Natural Building Techniques</h5>
                <p className="text-sm text-muted-foreground">
                  Use of local, renewable materials like straw bale, cob, timber, and bamboo. Designs that minimize energy use and integrate with the surrounding ecosystem.
                </p>
              </div>
              <div className="border-l-4 border-green-300 pl-4">
                <h5 className="font-medium text-green-700">Permaculture Design</h5>
                <p className="text-sm text-muted-foreground">
                  Integration of food production, water harvesting, and waste recycling into the built environment. Creation of edible landscapes and wildlife habitats.
                </p>
              </div>
              <div className="border-l-4 border-purple-300 pl-4">
                <h5 className="font-medium text-purple-700">Co-housing and Shared Resources</h5>
                <p className="text-sm text-muted-foreground">
                  Homes clustered around shared amenities like kitchens, gardens, and workshops. Fosters community connection and resource sharing.
                </p>
              </div>
              <div className="border-l-4 border-orange-300 pl-4">
                <h5 className="font-medium text-orange-700">Decentralized Finance</h5>
                <p className="text-sm text-muted-foreground">
                  Community investment platforms, crowdfunding, and local currencies support regenerative housing projects. Residents have ownership and participate in value creation.
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
              <h4 className="font-semibold mb-2">Land Stewardship Layer</h4>
              <p className="text-sm">Community land trusts and conservation easements ensure long-term affordability and ecological protection</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Design and Construction Layer</h4>
              <p className="text-sm">Permaculture principles, natural building techniques, and local materials minimize environmental impact</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Community Building Layer</h4>
              <p className="text-sm">Co-housing models, shared amenities, and participatory governance foster social connection</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Economic Layer</h4>
              <p className="text-sm">Decentralized finance, local currencies, and community investment platforms support project development</p>
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
            In the Endo Economics model, housing is not a commodity to be speculated upon, but a basic human right and essential component of community wellbeing. Resources are directed toward projects that enhance ecological health, social equity, and long-term resilience.
          </p>
          <p className="leading-relaxed">
            Community land trusts, natural building initiatives, and co-housing projects become nodes of value creation, generating not just shelter but also food, energy, water, and social capital. Residents are not just consumers but active participants in the creation of a thriving local economy.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <CheckCircle className="h-5 w-5" />
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Affordable Housing:</strong> Permanent affordability through community land trusts and innovative financing
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Ecological Regeneration:</strong> Reduced environmental impact through natural building and permaculture design
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Community Resilience:</strong> Stronger social connections through co-housing and shared resources
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Economic Empowerment:</strong> Resident ownership and participation in value creation
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Cultural Preservation:</strong> Protection of local heritage and prevention of displacement
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
            Regenerative housing is not just about building homes—it's about creating living systems that support the wellbeing of people and planet. This proposal invites us to reimagine housing as a vehicle for ecological restoration, social connection, and economic empowerment. By embracing community land trusts, natural building techniques, and decentralized finance, we can create affordable, resilient communities that thrive in harmony with the natural world.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Housing;
