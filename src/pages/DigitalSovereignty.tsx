import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Key, Users, Lock, Zap, Globe, CheckCircle, Server } from "lucide-react";

const DigitalSovereignty = () => {
  useEffect(() => {
    document.title = "Digital Sovereignty and Decentralized Infrastructure | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A blueprint for a dignified civilization—reimagining governance, economy, and culture to support human and planetary flourishing.');
    }
  }, []);
  return <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        
        <div>
          <h1 className="text-4xl font-bold">Digital Sovereignty and Decentralized Infrastructure</h1>
          <p className="text-xl text-muted-foreground">Foundations for Identity, Trust, and Participation</p>
        </div>
      </div>

      

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">Self-Sovereignty</Badge>
        <Badge variant="secondary" className="bg-purple-100 text-purple-800">Decentralized</Badge>
        <Badge variant="secondary" className="bg-green-100 text-green-800">Privacy</Badge>
        <Badge variant="secondary" className="bg-orange-100 text-orange-800">Verifiable Credentials</Badge>
        <Badge variant="secondary" className="bg-pink-100 text-pink-800">Zero-Knowledge</Badge>
        <Badge variant="secondary" className="bg-teal-100 text-teal-800">Edge Computing</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Overview and Purpose
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            This whitepaper explores the emerging foundation of decentralized digital infrastructure focused on 
            self-sovereign identity (SSI), digital authentication, and data agency. As the internet becomes increasingly 
            centralized, vulnerable to surveillance, censorship, and data exploitation, we need resilient alternatives 
            that restore power and trust to individuals.
          </p>
          <p className="leading-relaxed">
            The purpose of this document is to outline how decentralized identifiers (DIDs), verifiable credentials (VCs), 
            and cryptographic proof structures can serve as the new digital backbone for a free and regenerative society—enabling 
            individuals to move fluidly, securely, and privately across platforms and domains while retaining ownership 
            of their identity and contributions.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <Lock className="h-5 w-5" />
            The Problem: Centralized Control and Fragmented Identity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Platform Lock-In</p>
                <p className="text-sm text-muted-foreground">Users are trapped in siloed systems with no portable digital identity or history.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Surveillance and Exploitation</p>
                <p className="text-sm text-muted-foreground">Centralized platforms monetize personal data without meaningful consent.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Lack of Trust Infrastructure</p>
                <p className="text-sm text-muted-foreground">Verifying identity, reputation, or credentials requires reliance on centralized authorities.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Exclusion and Vulnerability</p>
                <p className="text-sm text-muted-foreground">Billions globally remain without formal identity, and digital systems often lack accessibility or resilience.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <Key className="h-5 w-5" />
            The Solution: Self-Sovereign Identity and Decentralized Infrastructure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-3">1. Self-Sovereign Identity (SSI):</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Users create and control their own digital identity wallet
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Identity is composed of decentralized identifiers (DIDs) and verifiable credentials (VCs)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Credentials can represent anything: skills, roles, wellbeing metrics, certifications, or community trust
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Zero-knowledge proofs allow users to prove things about themselves without exposing sensitive data
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">2. Decentralized Trust Infrastructure:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Open-source credential issuance and verification networks
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Cryptographically secure communication and authentication protocols
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Interoperable formats that allow identity to move between apps, services, and ecosystems
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Edge-first architecture (identity and keys held locally, not in the cloud)
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">3. Integration Across Domains:</h4>
              <p className="text-sm text-muted-foreground">
                Use in digital platforms, physical access control, financial systems, reputation graphs, and learning networks. 
                Bridges to regenerative economic models, participatory systems, and resilient supply chains.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-orange-500" />
            Operational Framework
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">User Onboarding</h4>
              <p className="text-sm text-muted-foreground">Individuals receive a secure identity wallet (browser, mobile, or hardware key-based)</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Credential Issuance</h4>
              <p className="text-sm text-muted-foreground">Communities, institutions, or peers issue verifiable credentials to users</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Verification Layer</h4>
              <p className="text-sm text-muted-foreground">Any service can verify claims without holding personal data</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">User Control</h4>
              <p className="text-sm text-muted-foreground">Identity and data are never stored centrally—always under the control of the individual</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            Core Principles of Digital Sovereignty
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">1. Self-Custody of Identity</h4>
              <p className="text-sm text-muted-foreground">Each individual controls the storage, access, and permissioning of their identity—just like they might control a physical passport or house key.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">2. Edge-Based Ownership</h4>
              <p className="text-sm text-muted-foreground">Data is not stored in cloud silos owned by corporations, but in devices physically and legally owned by the individual.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">3. Consent-First Interoperability</h4>
              <p className="text-sm text-muted-foreground">Other systems may request to verify your credentials, but cannot see or use your data unless explicitly granted time-bound, revocable permission.</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold">4. Non-Seizability</h4>
              <p className="text-sm text-muted-foreground">Your identity, credentials, and access to participation cannot be suspended, revoked, or seized by governments or corporations—unless you violate transparent, peer-accountable community protocols.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold">5. Distributed Resilience</h4>
              <p className="text-sm text-muted-foreground">Critical components like key recovery, access approval, and audit trails are spread across trusted networks—not reliant on any single entity.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="h-5 w-5 text-purple-500" />
            🛠️ Implementation Stack
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🧩 1. Physical Edge Node</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><strong>Device:</strong> Raspberry Pi or purpose-built identity server</li>
                <li><strong>Purpose:</strong> Hosts your personal identity server, encrypted data, and credential manager</li>
                <li><strong>Power:</strong> Always-on, low-energy, solar-compatible</li>
                <li><strong>Ownership:</strong> You physically possess and legally own this hardware</li>
              </ul>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🔐 2. Key Sharding with Trusted Network</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><strong>Library:</strong> Horcrux</li>
                <li><strong>Method:</strong> Shard your private key into 5–7 pieces using Shamir's Secret Sharing</li>
                <li><strong>Distribution:</strong> Trusted friends, family, community members each hold one shard</li>
                <li><strong>Recovery:</strong> A quorum (e.g., 3 of 5) must collaborate to reconstruct the key if lost</li>
              </ul>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🪪 3. Self-Sovereign Identity Layer</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><strong>Protocols:</strong> Decentralized Identifiers (DIDs), Verifiable Credentials (VCs)</li>
                <li><strong>Stack:</strong> Standards like W3C DID + Hyperledger Indy/Aries, Ceramic Network, or Spruce</li>
                <li><strong>Features:</strong> Claim credentials, share selectively</li>
                <li><strong>Consent UX:</strong> Each use requires opt-in with fine-grained scope and time limits</li>
              </ul>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🌐 4. Interoperable Verification Layer</h4>
              <p className="text-sm text-muted-foreground">
                Apps or institutions request proof, you approve sending a proof (not the data itself), 
                and trust networks use cryptographic signatures to verify the credential without phoning home.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-indigo-500" />
            🧠 Philosophical Implication
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">This architecture restores what modern digital life has eroded:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Ritual</h4>
              <p className="text-sm text-muted-foreground">You become the steward of your own name, keys, and network</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Responsibility</h4>
              <p className="text-sm text-muted-foreground">Identity isn't something handed down by a government—it's something you tend</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Community</h4>
              <p className="text-sm text-muted-foreground">Recovery becomes communal, reflecting Indigenous and ancestral models of trust</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Security through Relationships</h4>
              <p className="text-sm text-muted-foreground">Trust is distributed through your social fabric, not through opaque server farms</p>
            </div>
          </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Data Sovereignty</p>
                <p className="text-sm text-muted-foreground">People control their digital footprint and share only what's necessary</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Universal Access</p>
                <p className="text-sm text-muted-foreground">Identity that can be used across borders and platforms, regardless of formal status</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Privacy by Design</p>
                <p className="text-sm text-muted-foreground">Built-in encryption and consent models protect user data</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Trust and Interoperability</p>
                <p className="text-sm text-muted-foreground">Institutions can rely on transparent, decentralized credential verification</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Reduced Fraud and Friction</p>
                <p className="text-sm text-muted-foreground">Streamlined identity processes for everything from onboarding to community participation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Resilient Infrastructure</p>
                <p className="text-sm text-muted-foreground">Removes single points of failure and enables continuity under adverse conditions</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Conclusion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            Digital sovereignty is the cornerstone of a truly free and participatory future. By establishing decentralized 
            identity and authentication systems as public infrastructure, we can protect autonomy, build trust, and enable 
            fluid movement between digital and physical spaces. These technologies are not simply upgrades to legacy systems—they 
            are the beginning of an entirely new paradigm for how individuals relate to institutions, to one another, and to 
            the digital world at large.
          </p>
        </CardContent>
      </Card>
    </div>;
};
export default DigitalSovereignty;
