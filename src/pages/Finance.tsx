import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { PiggyBank, AlertOctagon, Coins } from "lucide-react";

const Finance = () => {
  useEffect(() => {
    document.title = "Regenerative Finance & Economic Systems | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover regenerative finance and economic systems that prioritize community wealth, ecological health, and values-based investment over extractive financial models.');
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Regenerative Finance & Economic Systems | New Systems and Structures');
    }
  }, []);
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-primary">Regenerative Finance & Economic Systems</h1>
        <p className="text-xl text-muted-foreground">Building Financial Infrastructure that Supports Life and Community</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Endo Finance</Badge>
        <Badge variant="secondary">Community Wealth</Badge>
        <Badge variant="secondary">Regenerative</Badge>
        <Badge variant="secondary">Equitable</Badge>
        <Badge variant="secondary">Resilient</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Overview and Purpose</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed">
            This proposal proposes a shift from extractive, speculative financial systems to regenerative models that prioritize community wealth, ecological stewardship, and long-term resilience. It envisions a world where finance serves as a tool for healing, connection, and shared prosperity—not as an end in itself.
          </p>
          <p className="leading-relaxed">
            By integrating decentralized technologies, community-led governance, and values-based investment strategies, this framework outlines pathways for building financial ecosystems that are more equitable, transparent, and aligned with the needs of a thriving planet.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <AlertTriangle className="h-5 w-5" />
            The Problem: Extractive and Unstable Financial Systems
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Wealth Inequality</p>
                <p className="text-sm text-muted-foreground">Extreme concentration of wealth in the hands of a few, leading to social and economic instability.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Speculative Markets</p>
                <p className="text-sm text-muted-foreground">Financial speculation divorced from real-world value creation, leading to boom-and-bust cycles.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Ecological Destruction</p>
                <p className="text-sm text-muted-foreground">Financial incentives that prioritize short-term profits over long-term ecological health.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Lack of Transparency</p>
                <p className="text-sm text-muted-foreground">Opaque financial systems that enable corruption, tax evasion, and illicit activities.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">The Solution: Regenerative Finance Infrastructure</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Core Components:</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-primary/30 pl-4">
                <h5 className="font-medium text-primary">Community-Owned Banks and Credit Unions</h5>
                <p className="text-sm text-muted-foreground">
                  Financial institutions that are governed by and accountable to the communities they serve, prioritizing local investment and equitable access to capital.
                </p>
              </div>
              <div className="border-l-4 border-blue-300 pl-4">
                <h5 className="font-medium text-blue-700">Decentralized Finance (DeFi) for Public Goods</h5>
                <p className="text-sm text-muted-foreground">
                  Using blockchain technology to create transparent, accessible, and community-governed financial tools that support public goods, such as renewable energy, affordable housing, and local food systems.
                </p>
              </div>
              <div className="border-l-4 border-green-300 pl-4">
                <h5 className="font-medium text-green-700">Values-Based Investment Funds</h5>
                <p className="text-sm text-muted-foreground">
                  Investment funds that prioritize social and environmental impact alongside financial returns, supporting businesses and projects that align with regenerative principles.
                </p>
              </div>
              <div className="border-l-4 border-purple-300 pl-4">
                <h5 className="font-medium text-purple-700">Local Currencies and Mutual Credit Systems</h5>
                <p className="text-sm text-muted-foreground">
                  Alternative currencies and credit systems that promote local exchange, build community resilience, and reduce reliance on traditional financial institutions.
                </p>
              </div>
              <div className="border-l-4 border-orange-300 pl-4">
                <h5 className="font-medium text-orange-700">Participatory Budgeting and Public Finance</h5>
                <p className="text-sm text-muted-foreground">
                  Engaging citizens in the decision-making process for public spending, ensuring that resources are allocated in a way that reflects community priorities and values.
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
              <h4 className="font-semibold mb-2">Community Layer</h4>
              <p className="text-sm">Community-owned banks, credit unions, and investment funds</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Technology Layer</h4>
              <p className="text-sm">Decentralized finance (DeFi) platforms and blockchain-based tools</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Governance Layer</h4>
              <p className="text-sm">Participatory budgeting and community-led decision-making processes</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Investment Layer</h4>
              <p className="text-sm">Values-based investment funds and impact investing strategies</p>
            </div>
          </div>
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
                <strong>Increased Community Wealth:</strong> More equitable distribution of wealth and resources within communities
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Greater Financial Stability:</strong> More resilient and stable financial systems that are less prone to crises
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Ecological Regeneration:</strong> Financial incentives that support ecological restoration and sustainable practices
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Enhanced Transparency and Accountability:</strong> More transparent and accountable financial systems that are less susceptible to corruption and abuse
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
            Regenerative finance is not just about creating a more equitable and sustainable financial system—it's about building a world where finance serves as a tool for healing, connection, and shared prosperity. By embracing decentralized technologies, community-led governance, and values-based investment strategies, we can create financial ecosystems that are more aligned with the needs of a thriving planet.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Finance;