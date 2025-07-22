
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Heart, Users } from "lucide-react";

const SexualHealth = () => {
  useEffect(() => {
    document.title = "Sexual Health, Reproductive Choice, and Cultural Dignity | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore sexual health, reproductive choice, and cultural dignity through regenerative approaches to harm reduction, empowered consent, and comprehensive wellbeing.');
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Sexual Health, Reproductive Choice, and Cultural Dignity | New Systems and Structures');
    }
  }, []);
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
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <AlertTriangle className="h-4 w-4 text-green-600" />
                1. Comprehensive Education
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Age-appropriate, culturally sensitive education covering anatomy, consent, and pleasure</li>
                <li>Relationships and diversity across the full spectrum of human sexuality</li>
                <li>Community-led educational programs that honor diverse perspectives</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Heart className="h-4 w-4 text-green-600" />
                2. Accessible Healthcare
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Universal access to reproductive healthcare and STI prevention</li>
                <li>Contraception and gender-affirming care without barriers</li>
                <li>Community-based health services that prioritize dignity and autonomy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <CheckCircle className="h-4 w-4 text-green-600" />
                3. Trauma-Informed Care
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Healthcare systems that recognize the impact of sexual trauma</li>
                <li>Healing-centered approaches to recovery and empowerment</li>
                <li>Survivor-led support programs and advocacy initiatives</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Users className="h-4 w-4 text-green-600" />
                4. Community Support Networks
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-6 text-foreground">
                <li>Peer support groups and mentorship programs</li>
                <li>Safe spaces for sexual expression and identity exploration</li>
                <li>Community resources and mutual aid networks</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-yellow-200">
        <CardHeader>
          <CardTitle className="text-primary">💰 Economic Impact of STI Testing as a Public Service</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed mb-6">
            Preventative sexual health services are not only a matter of dignity and public wellbeing—they're a smart investment. As of 2024, the U.S. spent approximately $2.8 billion annually on STI testing and detection. While this may seem like a significant figure, it's modest in comparison to the $16 billion per year the healthcare system spends treating new STI cases alone. These costs include chronic conditions such as HIV, HPV-related cancers, pelvic inflammatory disease, infertility, and other long-term complications resulting from untreated infections.
          </p>
          <p className="leading-relaxed mb-6">
            By providing free, anonymous, and widely accessible STI testing as a public health service, we could dramatically reduce transmission rates, especially when paired with sovereign identity systems that allow for private yet verifiable STI status sharing between partners. Early detection reduces downstream health impacts, cuts treatment costs, and lowers the burden on emergency care and Medicaid systems.
          </p>
          <p className="leading-relaxed">
            In short, the financial argument is clear: Investing in public STI screening infrastructure yields outsized returns, both in terms of dollars saved and human suffering averted. When integrated with digital tools for privacy, notification, and counseling, this becomes a cornerstone policy for a healthier, more dignified society.
          </p>
        </CardContent>
      </Card>

      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle className="text-primary">🧬 Advancing Male Contraception: A Phased Approach to Innovation</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed mb-6">
            Despite decades of effort toward reproductive equity, the majority of contraceptive responsibility still falls on those who can become pregnant. Yet a promising innovation is on the horizon: a non-hormonal male contraceptive injection into the vas deferens that has shown up to 99% effectiveness in clinical trials. This polymer-based method (such as Vasalgel or RISUG) blocks the transport of sperm, is minimally invasive, and is potentially reversible.
          </p>
          <p className="leading-relaxed mb-6">
            However, given the long-term nature of its effects and the current stage of global research, a cautious, data-driven rollout is essential. This proposal outlines a phased national strategy for implementation:
          </p>
          <div className="grid gap-4 mb-6">
            <div className="border border-purple-300 rounded-lg p-4 bg-purple-900/10 dark:bg-purple-900/20">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center">
                <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                Phase 1 – Opt-In Pilot for Adults (25+)
              </h4>
              <p className="leading-relaxed text-sm text-white">
                Voluntary access for men over 25 who declare no intent to reproduce in the next decade. Participants receive regular follow-up assessments of sperm count, health markers, and reversibility response.
              </p>
            </div>
            
            <div className="border border-purple-300 rounded-lg p-4 bg-purple-900/10 dark:bg-purple-900/20">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center">
                <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                Phase 2 – Expansion to Younger Adults (18–24)
              </h4>
              <p className="leading-relaxed text-sm text-white">
                Pending long-term effectiveness and safety data, expand eligibility to younger adults with clear educational guidance on potential risks and reversibility uncertainties.
              </p>
            </div>
            
            <div className="border border-purple-300 rounded-lg p-4 bg-purple-900/10 dark:bg-purple-900/20">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center">
                <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                Phase 3 – Full Public Access and Adolescent Inclusion
              </h4>
              <p className="leading-relaxed text-sm text-white mb-3">
                Upon successful demonstration of long-term efficacy, reversibility, and minimal adverse health effects, integrate the male contraceptive injection into standard public healthcare offerings—available to adults as a safe, reliable option for reproductive responsibility.
              </p>
              <p className="leading-relaxed text-sm text-white">
                With additional ethical review, parental guidance frameworks, and community consent protocols, expand access to adolescents aged 12–18. This inclusion would be strictly opt-in, designed for youth who are sexually active and seeking non-permanent, non-hormonal protection. As with vaccines and other age-sensitive interventions, decision-making would require informed consent, maturity assessments, and clinical oversight. Access would be paired with comprehensive sexual education and counseling that centers bodily autonomy, reversibility timelines, and long-term health.
              </p>
            </div>
          </div>
          <p className="leading-relaxed">
            This broader integration into public health recognizes that adolescents are often underserved by current reproductive systems—yet frequently bear the burden of unintended pregnancy. Empowering them with choices grounded in reversibility, safety, and dignity supports both individual freedom and public health goals.
          </p>
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
