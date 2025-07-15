
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle } from "lucide-react";

const SexualHealth = () => {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-primary mb-2">Sexual Health, Reproductive Choice, and Cultural Dignity</h1>
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">A Regenerative Approach to Harm Reduction and Empowered Consent</h2>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">Dignity-Centered</Badge>
        <Badge variant="secondary" className="bg-green-100 text-green-800">Consent-Based</Badge>
        <Badge variant="secondary" className="bg-purple-100 text-purple-800">Harm Reduction</Badge>
        <Badge variant="secondary" className="bg-orange-100 text-orange-800">Equitable Access</Badge>
        <Badge variant="secondary" className="bg-pink-100 text-pink-800">Reproductive Justice</Badge>
      </div>

      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="text-primary">Overview and Purpose</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed text-lg">
            This whitepaper proposes a regenerative framework for sexual and reproductive health—one that honors bodily autonomy, fosters consent culture, and reduces harm through education, technology, and universal access to care. It moves beyond polarized political debates and instead seeks to create systems that empower individuals to make informed, sovereign decisions about their bodies, relationships, and futures.
          </p>
        </CardContent>
      </Card>

      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <AlertTriangle className="h-6 w-6" />
            The Problem: Fragmented Access, Shame-Based Culture, and Preventable Harm
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="leading-relaxed">
              Current sexual and reproductive health systems are fragmented, stigmatized, and often fail to serve the people who need them most.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  Unwanted pregnancies and STIs continue to occur at high rates, often due to lack of access to early detection, affordable contraception, or clear information.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  Reproductive responsibility disproportionately falls on women, with limited male contraceptive options and social stigma around sexual health.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  Consent education is inconsistent or absent, leading to relational confusion and harm.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  Cultural taboos and shame create barriers to honest dialogue, trauma recovery, and seeking care.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  Informed choice around abortion is often entangled in political and moral warfare, rather than rooted in early access, accurate data, and compassionate care.
                </div>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="text-primary">The Solution: A Regenerative Sexual Health System</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Core Components:</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-primary/30 pl-4">
                <h5 className="font-medium text-primary">Male Contraceptive Innovation</h5>
                <p className="text-sm text-muted-foreground">
                  Advance research and public funding for vas deferens gel injections (e.g. RISUG/Vasalgel), offering long-term reversible contraception for men. Create voluntary programs for men who do not want children to test effectiveness and reversibility. Normalize male participation in reproductive responsibility.
                </p>
              </div>
              <div className="border-l-4 border-blue-300 pl-4">
                <h5 className="font-medium text-blue-700">Early Pregnancy Detection Access</h5>
                <p className="text-sm text-muted-foreground">
                  Massively increase access to pregnancy tests in schools, clinics, and community hubs. Pair early detection with digital or in-person counseling and support. Combine with ethical, consensus-driven timelines for abortion access informed by fetal development data.
                </p>
              </div>
              <div className="border-l-4 border-green-300 pl-4">
                <h5 className="font-medium text-green-700">Free, Anonymous STI Testing + Digital Sovereignty</h5>
                <p className="text-sm text-muted-foreground">
                  Provide universal access to free, anonymous STI testing. Use decentralized identity and zero-knowledge proof systems to allow individuals to prove their STI status to a partner without sharing sensitive data. Build this into a sovereign health data system owned by the individual.
                </p>
              </div>
              <div className="border-l-4 border-purple-300 pl-4">
                <h5 className="font-medium text-purple-700">Consent Education and Cultural Renewal</h5>
                <p className="text-sm text-muted-foreground">
                  Implement comprehensive consent and emotional literacy programs starting in adolescence. Address relational intelligence, communication, boundary setting, and digital sexuality.
                </p>
              </div>
              <div className="border-l-4 border-orange-300 pl-4">
                <h5 className="font-medium text-orange-700">Community-Based Sexual Health Hubs</h5>
                <p className="text-sm text-muted-foreground">
                  Decentralized, locally run centers offering STI testing, contraception, counseling, and reproductive services. Inclusive of LGBTQ+ needs, rural populations, and trauma recovery support.
                </p>
              </div>
              <div className="border-l-4 border-teal-300 pl-4">
                <h5 className="font-medium text-teal-700">Mental Health and Trauma Support</h5>
                <p className="text-sm text-muted-foreground">
                  Embed reproductive and sexual trauma care into the wellbeing ecosystem. Offer anonymous, subsidized access to therapy, mentorship, and peer support.
                </p>
              </div>
              <div className="border-l-4 border-indigo-300 pl-4">
                <h5 className="font-medium text-indigo-700">Parenthood and Readiness Support</h5>
                <p className="text-sm text-muted-foreground">
                  Offer wraparound services for new or expectant parents including housing, child care, nutrition, and mentorship. Reduce abortions driven by financial or emotional unpreparedness.
                </p>
              </div>
              <div className="border-l-4 border-pink-300 pl-4">
                <h5 className="font-medium text-pink-700">Emergency Contraception Access</h5>
                <p className="text-sm text-muted-foreground">
                  Public funding and free distribution of morning-after pills in schools, pharmacies, and health hubs.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="text-primary">Operational Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Education Layer</h4>
              <p className="text-sm">Nationwide consent and relational intelligence curriculum</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Testing Layer</h4>
              <p className="text-sm">Anonymous STI and pregnancy testing infrastructure</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Technology Layer</h4>
              <p className="text-sm">Digital identity, encrypted health records, zero-knowledge status proofs</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Infrastructure Layer</h4>
              <p className="text-sm">Community health hubs offering access and education</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Support Layer</h4>
              <p className="text-sm">Trauma-informed mental health care and parenthood services</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <CheckCircle className="h-6 w-6" />
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Reduced rates of unwanted pregnancies and STIs</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Shared reproductive responsibility between genders</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Stronger culture of mutual respect and consent</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Increased autonomy through early detection and safe access to abortion</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Destigmatized access to care and accurate sexual health education</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Improved mental and emotional wellbeing around sexuality and reproductive life stages</strong>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="text-primary">Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-lg">
            By shifting the foundation of sexual and reproductive systems from shame and control to dignity and informed choice, we can create a future of safer, more respectful human relationships. With accessible tools, regenerative education, and sovereign technologies, we empower individuals to steward their health and sexuality with clarity, care, and integrity.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SexualHealth;
