
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Key, Users, Lock, Zap, Globe, CheckCircle, Server } from "lucide-react";

const DigitalSovereignty = () => {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-primary mb-2">Digital Sovereignty and Decentralized Infrastructure</h1>
        <h2 className="text-3xl font-semibold text-blue-600 mb-3">Foundations for Identity, Trust, and Participation</h2>
      </div>

      <div className="text-center space-y-2 mb-8">
        <p className="text-lg font-medium">By <span className="text-primary">Juicy Life</span></p>
        <p className="text-sm text-muted-foreground">juicy@actualize.earth</p>
        <p className="text-sm text-muted-foreground">and Aether, an AI collaborator powered by GPT-4 by OpenAI</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">Self-Sovereignty</Badge>
        <Badge variant="secondary" className="bg-green-100 text-green-800">Decentralized</Badge>
        <Badge variant="secondary" className="bg-purple-100 text-purple-800">Privacy</Badge>
        <Badge variant="secondary" className="bg-orange-100 text-orange-800">Verifiable Credentials</Badge>
        <Badge variant="secondary" className="bg-red-100 text-red-800">Zero-Knowledge</Badge>
        <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">Edge Computing</Badge>
      </div>

      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-700">
            <Globe className="h-5 w-5" />
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

      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <Lock className="h-5 w-5" />
            The Problem: Centralized Control and Fragmented Identity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800 mb-2">Platform Lock-In</h4>
              <p className="text-red-700">Users are trapped in siloed systems with no portable digital identity or history.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800 mb-2">Surveillance and Exploitation</h4>
              <p className="text-red-700">Centralized platforms monetize personal data without meaningful consent.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800 mb-2">Lack of Trust Infrastructure</h4>
              <p className="text-red-700">Verifying identity, reputation, or credentials requires reliance on centralized authorities.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800 mb-2">Exclusion and Vulnerability</h4>
              <p className="text-red-700">Billions globally remain without formal identity, and digital systems often lack accessibility or resilience.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <Key className="h-5 w-5" />
            The Solution: Self-Sovereign Identity and Decentralized Infrastructure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-green-800">1. Self-Sovereign Identity (SSI):</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-green-700">Users create and control their own digital identity wallet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-green-700">Identity is composed of decentralized identifiers (DIDs) and verifiable credentials (VCs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-green-700">Credentials can represent anything: skills, roles, wellbeing metrics, certifications, or community trust</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-green-700">Zero-knowledge proofs allow users to prove things about themselves without exposing sensitive data</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 text-green-800">2. Decentralized Trust Infrastructure:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-green-700">Open-source credential issuance and verification networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-green-700">Cryptographically secure communication and authentication protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-green-700">Interoperable formats that allow identity to move between apps, services, and ecosystems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-green-700">Edge-first architecture (identity and keys held locally, not in the cloud)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 text-green-800">3. Integration Across Domains:</h4>
              <p className="text-green-700">
                Use in digital platforms, physical access control, financial systems, reputation graphs, and learning networks. 
                Bridges to regenerative economic models, participatory systems, and resilient supply chains.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-700">
            <Zap className="h-5 w-5" />
            Operational Framework
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">User Onboarding</h4>
              <p className="text-sm text-orange-700">Individuals receive a secure identity wallet (browser, mobile, or hardware key-based)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Credential Issuance</h4>
              <p className="text-sm text-blue-700">Communities, institutions, or peers issue verifiable credentials to users</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Verification Layer</h4>
              <p className="text-sm text-green-700">Any service can verify claims without holding personal data</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">User Control</h4>
              <p className="text-sm text-purple-700">Identity and data are never stored centrally—always under the control of the individual</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-indigo-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-indigo-700">
            <Shield className="h-5 w-5" />
            Core Principles of Digital Sovereignty
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-400 pl-4">
              <h4 className="font-semibold text-blue-800 mb-2">1. Self-Custody of Identity</h4>
              <p className="text-blue-700">Each individual controls the storage, access, and permissioning of their identity—just like they might control a physical passport or house key.</p>
            </div>
            <div className="border-l-4 border-green-400 pl-4">
              <h4 className="font-semibold text-green-800 mb-2">2. Edge-Based Ownership</h4>
              <p className="text-green-700">Data is not stored in cloud silos owned by corporations, but in devices physically and legally owned by the individual.</p>
            </div>
            <div className="border-l-4 border-purple-400 pl-4">
              <h4 className="font-semibold text-purple-800 mb-2">3. Consent-First Interoperability</h4>
              <p className="text-purple-700">Other systems may request to verify your credentials, but cannot see or use your data unless explicitly granted time-bound, revocable permission.</p>
            </div>
            <div className="border-l-4 border-orange-400 pl-4">
              <h4 className="font-semibold text-orange-800 mb-2">4. Non-Seizability</h4>
              <p className="text-orange-700">Your identity, credentials, and access to participation cannot be suspended, revoked, or seized by governments or corporations—unless you violate transparent, peer-accountable community protocols.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800 mb-2">5. Distributed Resilience</h4>
              <p className="text-red-700">Critical components like key recovery, access approval, and audit trails are spread across trusted networks—not reliant on any single entity.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700">
            <Server className="h-5 w-5" />
            🛠️ Implementation Stack
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">🧩 1. Physical Edge Node</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                <li><strong>Device:</strong> Raspberry Pi or purpose-built identity server</li>
                <li><strong>Purpose:</strong> Hosts your personal identity server, encrypted data, and credential manager</li>
                <li><strong>Power:</strong> Always-on, low-energy, solar-compatible</li>
                <li><strong>Ownership:</strong> You physically possess and legally own this hardware</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">🔐 2. Key Sharding with Trusted Network</h4>
              <ul className="text-sm space-y-1 text-blue-700">
                <li><strong>Library:</strong> Horcrux</li>
                <li><strong>Method:</strong> Shard your private key into 5–7 pieces using Shamir's Secret Sharing</li>
                <li><strong>Distribution:</strong> Trusted friends, family, community members each hold one shard</li>
                <li><strong>Recovery:</strong> A quorum (e.g., 3 of 5) must collaborate to reconstruct the key if lost</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">🪪 3. Self-Sovereign Identity Layer</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li><strong>Protocols:</strong> Decentralized Identifiers (DIDs), Verifiable Credentials (VCs)</li>
                <li><strong>Stack:</strong> Standards like W3C DID + Hyperledger Indy/Aries, Ceramic Network, or Spruce</li>
                <li><strong>Features:</strong> Claim credentials, share selectively</li>
                <li><strong>Consent UX:</strong> Each use requires opt-in with fine-grained scope and time limits</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">🌐 4. Interoperable Verification Layer</h4>
              <p className="text-sm text-amber-700">
                Apps or institutions request proof, you approve sending a proof (not the data itself), 
                and trust networks use cryptographic signatures to verify the credential without phoning home.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-teal-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-teal-700">
            <Users className="h-5 w-5" />
            🧠 Philosophical Implication
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">This architecture restores what modern digital life has eroded:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-teal-50 p-4 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-2">Ritual</h4>
              <p className="text-sm text-teal-700">You become the steward of your own name, keys, and network</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-800 mb-2">Responsibility</h4>
              <p className="text-sm text-indigo-700">Identity isn't something handed down by a government—it's something you tend</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-2">Community</h4>
              <p className="text-sm text-emerald-700">Recovery becomes communal, reflecting Indigenous and ancestral models of trust</p>
            </div>
            <div className="bg-rose-50 p-4 rounded-lg">
              <h4 className="font-semibold text-rose-800 mb-2">Security through Relationships</h4>
              <p className="text-sm text-rose-700">Trust is distributed through your social fabric, not through opaque server farms</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <CheckCircle className="h-5 w-5" />
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-green-800">Data Sovereignty:</strong>
                  <span className="text-green-700"> People control their digital footprint and share only what's necessary</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-green-800">Universal Access:</strong>
                  <span className="text-green-700"> Identity that can be used across borders and platforms, regardless of formal status</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-green-800">Privacy by Design:</strong>
                  <span className="text-green-700"> Built-in encryption and consent models protect user data</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-green-800">Trust and Interoperability:</strong>
                  <span className="text-green-700"> Institutions can rely on transparent, decentralized credential verification</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-green-800">Reduced Fraud and Friction:</strong>
                  <span className="text-green-700"> Streamlined identity processes for everything from onboarding to community participation</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-green-800">Resilient Infrastructure:</strong>
                  <span className="text-green-700"> Removes single points of failure and enables continuity under adverse conditions</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Shield className="h-5 w-5" />
            Conclusion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-lg">
            Digital sovereignty is the cornerstone of a truly free and participatory future. By establishing decentralized 
            identity and authentication systems as public infrastructure, we can protect autonomy, build trust, and enable 
            fluid movement between digital and physical spaces. These technologies are not simply upgrades to legacy systems—they 
            are the beginning of an entirely new paradigm for how individuals relate to institutions, to one another, and to 
            the digital world at large.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DigitalSovereignty;
