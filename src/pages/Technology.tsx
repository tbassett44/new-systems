import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle } from "lucide-react";

const Technology = () => {
  useEffect(() => {
    document.title = "Regenerative Technology & Digital Sovereignty | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore regenerative technology and digital sovereignty approaches that prioritize human agency, privacy, and life-serving innovation over surveillance and extraction.');
    }
  }, []);
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-primary">Regenerative Technology & Digital Sovereignty</h1>
        <p className="text-xl text-muted-foreground">Building Technology that Serves Life and Human Agency</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Digital Sovereignty</Badge>
        <Badge variant="secondary">Open Source</Badge>
        <Badge variant="secondary">Privacy-Enhancing</Badge>
        <Badge variant="secondary">Decentralized</Badge>
        <Badge variant="secondary">Human-Centered</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Overview and Purpose</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed">
            This whitepaper proposes a framework for regenerative technology—one that prioritizes human agency, ecological wellbeing, and systemic resilience. Moving beyond extractive, surveillance-based models, this vision calls for technology that empowers individuals, strengthens communities, and supports a thriving planet.
          </p>
          <p className="leading-relaxed">
            By embracing digital sovereignty, open-source principles, and privacy-enhancing design, we can build a technological landscape that serves life rather than undermining it. This framework invites technologists, policymakers, and citizens to co-create a future where technology amplifies our collective potential for regeneration.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            The Problem: Extractive and Centralized Technology
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Surveillance Capitalism:</strong> Data extraction and manipulation undermine privacy and autonomy.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Centralized Control:</strong> A handful of corporations control key infrastructure and platforms.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Algorithmic Bias:</strong> AI systems perpetuate and amplify existing social inequalities.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Ecological Impact:</strong> E-waste, energy consumption, and resource extraction degrade the environment.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Erosion of Trust:</strong> Misinformation, censorship, and security breaches erode public faith in technology.
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">The Solution: Regenerative Technology Ecosystem</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Core Components:</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-primary/30 pl-4">
                <h5 className="font-medium text-primary">Digital Sovereignty Infrastructure</h5>
                <p className="text-sm text-muted-foreground">
                  Tools and protocols that empower individuals to control their data, identity, and digital interactions.
                </p>
              </div>
              <div className="border-l-4 border-blue-300 pl-4">
                <h5 className="font-medium text-blue-700">Open Source and Collaborative Development</h5>
                <p className="text-sm text-muted-foreground">
                  Openly licensed software, hardware, and knowledge that can be freely used, modified, and shared.
                </p>
              </div>
              <div className="border-l-4 border-green-300 pl-4">
                <h5 className="font-medium text-green-700">Privacy-Enhancing Technologies</h5>
                <p className="text-sm text-muted-foreground">
                  Cryptographic tools, decentralized systems, and data minimization techniques that protect user privacy.
                </p>
              </div>
              <div className="border-l-4 border-purple-300 pl-4">
                <h5 className="font-medium text-purple-700">Decentralized and Distributed Systems</h5>
                <p className="text-sm text-muted-foreground">
                  Peer-to-peer networks, blockchain technologies, and edge computing that distribute power and control.
                </p>
              </div>
              <div className="border-l-4 border-orange-300 pl-4">
                <h5 className="font-medium text-orange-700">Human-Centered Design</h5>
                <p className="text-sm text-muted-foreground">
                  Design processes that prioritize human needs, values, and agency.
                </p>
              </div>
              <div className="border-l-4 border-teal-300 pl-4">
                <h5 className="font-medium text-teal-700">Regenerative Hardware and Manufacturing</h5>
                <p className="text-sm text-muted-foreground">
                  Sustainable materials, circular economy principles, and ethical supply chains.
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
              <h4 className="font-semibold mb-2">Infrastructure Layer</h4>
              <p className="text-sm">Decentralized networks, secure hardware, and open-source software</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Data Layer</h4>
              <p className="text-sm">Privacy-preserving protocols, encrypted storage, and user-controlled data</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Application Layer</h4>
              <p className="text-sm">Human-centered interfaces, accessible tools, and community-driven platforms</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Governance Layer</h4>
              <p className="text-sm">Open standards, community oversight, and ethical guidelines</p>
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
            In the Endo Economics model, technology is not an end in itself, but a tool for enhancing human and planetary wellbeing. Resources are directed toward technologies that promote resilience, equity, and ecological health.
          </p>
          <p className="leading-relaxed">
            This means prioritizing open-source solutions, supporting ethical hardware manufacturing, and investing in privacy-enhancing technologies. It also means fostering a culture of collaboration and knowledge-sharing, where technology is used to empower communities and regenerate ecosystems.
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
                <strong>Digital Sovereignty:</strong> Individuals control their data and digital identities
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Privacy and Security:</strong> User data is protected from surveillance and exploitation
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Community Empowerment:</strong> Technology strengthens local communities and fosters collaboration
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Ecological Regeneration:</strong> Sustainable hardware and responsible manufacturing practices
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Systemic Resilience:</strong> Decentralized systems are more resistant to disruption and censorship
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
            Technology is a powerful force that can be used to create a more just, equitable, and sustainable world. By embracing the principles of digital sovereignty, open-source development, and human-centered design, we can build a technological landscape that empowers individuals, strengthens communities, and regenerates ecosystems.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Technology;
