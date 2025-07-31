import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Overview = () => {
  useEffect(() => {
    document.title = "System Regeneration | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A blueprint for a dignified civilization—reimagining governance, economy, and culture to support human and planetary flourishing.');
    }
  }, []);
  return <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">System Regeneration</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Supporting Better Feedback, Effective Governance, and Improved Wellbeing
        </p>
        <div className="text-sm text-muted-foreground mb-4">
          <p>By Juicy Life (juicy@actualize.earth)</p>
          <p>and Aether, an AI collaborator powered by GPT-4 by OpenAI</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary">Systems Design</Badge>
          <Badge variant="secondary">Regenerative</Badge>
          <Badge variant="secondary">Participatory</Badge>
          <Badge variant="secondary">Dignity-Centered</Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>ℹ️   About This Document</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            This paper serves as a living blueprint for systems redesign—presenting a high-level overview 
            and a series of linked proposals that address the core sectors of society. Each proposal is 
            designed to clearly articulate the central problems and offer grounded, implementable solutions.
            The language throughout is intentionally concise and accessible, offering a practical foundation 
            for reflection, collaboration, and action. This collection is not exhaustive, but it is coherent—meant 
            to spark dialogue, inspire experimentation, and guide systemic regeneration across scales.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>⚡️ Purpose Statement</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            We are living in a pivotal evolutionary moment—one that mirrors the metamorphosis of a caterpillar 
            into a butterfly. The social, ecological, and economic systems that once sustained us are now straining 
            under the weight of outdated structures, inefficient feedback loops, and deeply inequitable resource 
            distribution.
          </p>
          <p className="leading-relaxed">
            This proposal is a call to conscious redesign. It offers a set of high-level, yet actionable systems 
            change proposals that aims to support a more intelligent, responsive, and life-affirming civilization.
            By aligning our governance, infrastructure, and technological tools with the wellbeing of both people 
            and planet, we can move beyond survival-based structures into a more regenerative and participatory 
            era—one worthy of the potential humanity holds.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>❤️ Dignity: The Heart of Systems Regeneration</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            Dignity is the quiet foundation of a thriving society—the sense that each person's life has worth, 
            that their voice matters, and that their basic needs are not contingent on performance, productivity, 
            or conformity. It is not a luxury or a philosophical abstraction; it is a baseline condition for human 
            wellbeing, healthy communities, and democratic participation.
          </p>
          <p className="leading-relaxed mb-4">
            In today's dominant systems, dignity is routinely violated. People are forced to compete for survival, 
            perform for healthcare, beg for housing, or submit to dehumanizing conditions to access the necessities 
            of life. The poor are criminalized. The sick are bankrupted. The incarcerated are forgotten. In many 
            sectors, systems are optimized for control, compliance, or extraction—not care.
          </p>
          <p className="leading-relaxed mb-4">
            This proposal is, at its core, a call to restore dignity at every level of our shared existence—economically, 
            ecologically, socially, and spiritually. Each proposal within it—whether guaranteed income, restorative justice, 
            regenerative infrastructure, or collective sensemaking—aims to restructure power and flow in service of dignity.
          </p>
          <p className="leading-relaxed">
            To recognize dignity is to acknowledge humanity not as a commodity, but as sacred—and to redesign our systems 
            so that every individual is not merely tolerated or managed, but genuinely supported in their right to thrive.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>✨ The Call for a Regenerative Election</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            At the heart of this manifesto lies a singular, galvanizing aim: to catalyze a <NavLink to="/papers/election" className="text-primary hover:underline font-medium">Regenerative Election</NavLink>—a new form of democratic engagement that invites the people of this nation to reimagine how we choose leadership, how we surface solutions, and how we steward our shared future. While the whitepapers that follow propose a wide array of structural innovations, they are not offered as the only answers. Rather, they are seeds—examples of what could emerge from a society grounded in dignity, equity, creativity, and care.
          </p>
          <p className="leading-relaxed mb-4">
            The current electoral system is increasingly seen as unrepresentative, captured, and adversarial. Over 51% of Americans now identify as politically independent, signaling a deep hunger for approaches that transcend party lines and ideological binaries. A Regenerative Election is not merely a shift in political preference—it is a reweaving of the democratic fabric. It proposes a parallel, voluntary process where candidates are surfaced through transparent dialogue, collective sensemaking, and values-based debate—long before any ballots are cast.
          </p>
          <p className="leading-relaxed mb-4">
            This initiative is not about creating a new political party. It is about creating a new civic experience—one that honors wisdom from across the political spectrum, uplifts marginalized voices, and gives rise to leadership that reflects the will and wellbeing of the whole. In doing so, it creates a legitimate and actionable pathway for any aligned candidate to earn trust, build momentum, and—through grassroots petition drives—secure official ballot access in states across the country.
          </p>
          <p className="leading-relaxed">
            If nothing else is implemented from this manifesto, let it be this: an open invitation to co-create a Regenerative Election—a civic rite of passage into a more honest, intelligent, and life-affirming democracy. What follows in this document can serve as inspiration and scaffolding—but the real blueprint will be drawn by those who step forward to build it together.
          </p>
          <Button asChild variant="outline" size="sm" className="mt-4">
            <NavLink to="/papers/election">View the Regenerative Election Proposal</NavLink>
          </Button>
        </CardContent>
      </Card>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>🌀 Systems Change Proposals</CardTitle>
          <CardDescription>
            Based on Barbara Marx Hubbard's Wheel of Co-Creation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-6">
            The systems change proposals outlined in this proposal are organized in relationship to Barbara Marx 
            Hubbard's Wheel of Co-Creation—a visionary framework that maps the twelve key sectors of society as
            evolving expressions of our collective potential. Rather than treating these domains—such as education, 
            economics, health, media, and justice—as isolated silos, the wheel reveals them as interdependent aspects 
            of a living societal system. Each proposal presented here offers a regenerative blueprint for transforming 
            a core sector, integrating values of feedback, participation, and wellbeing. Together, they form a cohesive 
            foundation for a conscious civilization—one that is capable of evolving not through control or collapse, 
            but through coherence, compassion, and creative redesign.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">New Economic System - Endo Economics</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The Endo Economics proposal proposes a fundamental redesign of our economic system—one that shifts 
                from extraction to symbiosis, from scarcity-driven accumulation to regenerative value creation. Inspired
                by the biological principle of endosymbiosis, this model frames the economy as a living system where 
                each part contributes to the health of the whole. In contrast to current systems that concentrate wealth 
                and externalize harm, Endo Economics offers a framework for equitable distribution, adaptive feedback, 
                and circular flows of resources. By anchoring value in contribution, wellbeing, and relational integrity 
                rather than consumption and control, this model has the potential to liberate vast reservoirs of human 
                creativity, purpose, and collaboration that remain dormant under today's extractive norms.
              </p>
              <Button asChild variant="outline" size="sm">
                <NavLink to="/papers/endo-economics">View the Endo Economics Proposal</NavLink>
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Digital Sovereignty</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The digital sovereignty and decentralized infrastructure proposal outlines a foundational shift in how 
                identity, trust, and participation function in the digital age. At a time when centralized platforms 
                dominate access and control, this approach empowers individuals with self-owned digital identities that 
                are portable, verifiable, and privacy-preserving. By leveraging decentralized identifiers (DIDs), verifiable 
                credentials (VCs), and cryptographic protocols, we can create a trust layer for the internet that respects 
                autonomy while enabling secure, seamless interaction across platforms. This infrastructure not only protects 
                civil liberties and reduces systemic vulnerability, but also forms the connective tissue needed for regenerative 
                governance, economic participation, and wellbeing support—ensuring people are seen, trusted, and respected 
                wherever they go.
              </p>
              <Button asChild variant="outline" size="sm">
                <NavLink to="/papers/digital-sovereignty">View the Digital Sovereignty Proposal</NavLink>
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Waste Management</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The waste management proposal outlines a transformative approach to one of the most overlooked yet urgent 
                systemic failures in modern society. Rather than treating waste as an inevitable byproduct to be buried 
                or burned, this vision repositions it as a critical leverage point for ecological restoration, public 
                health, and economic renewal. By deploying high-capacity, regionally distributed waste-to-resource 
                facilities—such as the Eden Energy model—we could process the entirety of the nation's daily waste output 
                while generating clean energy, recovering materials, and eliminating toxic emissions. With a one-time capital 
                investment equivalent to a fraction of annual military spending, this system could replace harmful landfills 
                and incinerators, reduce disease burden, and regenerate ecosystems. It turns waste from a liability into 
                a cornerstone of a circular, regenerative infrastructure—unlocking massive environmental and social gains.
              </p>
              <Button asChild variant="outline" size="sm">
                <NavLink to="/papers/waste-management">View the Waste Management Proposal</NavLink>
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Regenerative Energy Infrastructure</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The future of civilization depends on how we generate, distribute, and govern energy. Despite having access 
                to cleaner, safer, and more efficient technologies—such as thorium molten salt reactors—political inertia 
                and entrenched fossil fuel interests have stalled their development. The story of thorium represents a broader 
                systemic failure to invest in long-term, life-affirming innovation. As other nations, like China, move forward 
                with next-generation energy systems, the opportunity remains for a bold, regenerative energy transition—one 
                that embraces distributed renewables, decentralized grids, and advanced nuclear solutions to power a thriving, 
                post-carbon world. This section explores how such a shift could be resourced, implemented, and aligned with 
                the principles of Endo Economics to ensure energy serves people and planet—not profit alone.
              </p>
              <Button asChild variant="outline" size="sm">
                <NavLink to="/papers/energy">View the Regenerative Energy Infrastructure Proposal</NavLink>
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Collective Sensemaking and Governance</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The collective sensemaking proposal introduces a new form of civic intelligence—one that harnesses AI to 
                surface the deeper patterns, needs, and perceptions emerging within society. In a time marked by fragmentation, 
                misinformation, and disconnection between people and institutions, this system enables communities to respond 
                not just to headlines or polls, but to the underlying stories shaping our collective reality. By asking strategic, 
                reflective questions and analyzing large-scale qualitative responses, we can build a living, participatory 
                dataset that reveals where attention, care, and resources are most needed. This approach restores the feedback 
                loops between people and the systems that serve them, enabling more adaptive governance, more equitable 
                decision-making, and a culture of shared insight. When guided with care, this model turns raw public input 
                into wisdom—illuminating pathways that no single perspective could see alone.
              </p>
              <Button asChild variant="outline" size="sm">
                <NavLink to="/papers/sensemaking">View the Collective Sensemaking Proposal</NavLink>
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Wellbeing Tracking</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The wellbeing tracking proposal envisions a participatory, AI-enhanced framework for understanding and 
                supporting human flourishing across all dimensions of life—physical, mental, emotional, spiritual, relational, 
                occupational, financial, and environmental. By leveraging the same collective sensemaking architecture, this 
                system invites individuals to reflect on their lived experience and share qualitative insights about what's 
                supporting or inhibiting their wellbeing. These rich data points form a real-time cultural pulse—allowing us 
                to assess whether our systems are truly serving people, while also enabling personalized support. AI can 
                recognize emerging needs, suggest tailored resources, and route individuals to relevant support—whether that's 
                a coach, a therapist, a community group, or nutritional guidance. Over time, this model helps individuals 
                track their growth, communities understand their collective needs, and institutions evolve based on what 
                truly supports human thriving.
              </p>
              <Button asChild variant="outline" size="sm">
                <NavLink to="/papers/wellbeing">View the Wellbeing Tracking Proposal</NavLink>
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Education</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The regenerative education proposal reimagines learning as a sovereign, lifelong, and learner-led process—unbound 
                by institutional silos or standardized metrics. By embedding self-custody, verifiable credentials, and decentralized 
                infrastructure into the heart of education, this model enables individuals to design and carry their own learning 
                journey across domains, cultures, and life stages. It honors not only academic knowledge but also lived experience, 
                creativity, contribution, and healing—expanding what we recognize as valuable growth. With AI-assisted mentorship, 
                community-based validation, and edge-stored learner profiles, education becomes a deeply personal and globally 
                interoperable process—restoring purpose, dignity, and adaptability to how we learn and grow.
              </p>
              <Button asChild variant="outline" size="sm">
                <NavLink to="/papers/education">View the Regenerative Education Proposal</NavLink>
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Ecological Regeneration Infrastructure</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The ecological regeneration proposal outlines a bioregionally anchored system to restore the health of 
                Earth's living systems through decentralized coordination, transparent funding, and verified impact. Grounded 
                in the principles of mutual thriving and aligned with the Endo Economics model, this framework enables 
                communities to steward their watersheds, forests, soils, and coastlines using a blend of traditional knowledge, 
                local governance, and digital tools. By funding projects that measurably regenerate ecosystems—such as wetland 
                restoration, rewilding, pollinator corridors, and coral reef rehabilitation—this system transforms ecological 
                repair into a core economic activity. It offers not only a climate resilience strategy but a cultural shift: 
                one that treats the Earth as a partner in our collective evolution.
              </p>
              <Button asChild variant="outline" size="sm">
                <NavLink to="/papers/ecology">View the Ecological Regeneration Proposal</NavLink>
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Justice</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The justice proposal reimagines law, accountability, and rehabilitation through the lens of dignity, healing, 
                and systemic coherence. Rather than relying on punitive incarceration models that isolate, dehumanize, and 
                often exacerbate harm, this framework advocates for a transition toward restorative, transformative, and 
                community-rooted justice systems. It includes decentralizing access to legal support, integrating AI for 
                equitable mediation, and replacing prisons with regenerative rehabilitation centers focused on education, 
                trauma healing, and social reintegration. By treating crime as a symptom of unmet needs or disconnection 
                from community, this approach shifts our collective response from punishment to restoration—allowing justice 
                to become a catalyst for personal transformation and societal evolution.
              </p>
              <Button asChild variant="outline" size="sm">
                <NavLink to="/papers/justice">View The Regenerative Justice Proposal</NavLink>
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Conflict Transformation & Restorative Processes</h3>
              <p className="text-sm text-muted-foreground mb-3">
                This proposal reimagines how individuals and communities engage with conflict—shifting from suppression or 
                punishment to proactive, relational repair. By embedding restorative tools in schools, neighborhoods, and 
                digital platforms, we empower people of all ages to name harm, take responsibility, and co-create healing. 
                From playground disputes to workplace tensions, the aim is to foster a culture where conflict becomes an 
                opportunity for growth rather than escalation. This infrastructure reduces reliance on punitive justice 
                systems, builds emotional literacy, and strengthens communal trust—laying the foundation for a more connected, 
                resilient society.
              </p>
              <Button asChild variant="outline" size="sm">
                <NavLink to="/papers/conflict">View the Conflict Transformation & Restorative Processes Proposal</NavLink>
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Media</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The media proposal reclaims narrative, attention, and trust as public goods by building a decentralized, 
                participatory, and regenerative media infrastructure. In contrast to the current landscape—dominated by 
                corporate ownership, algorithmic bias, and sensationalism—this framework supports locally-rooted storytelling, 
                distributed editorial networks, and feedback-integrated sensemaking systems. By aligning with the principles 
                of Endo Economics, resources liberated from excess and waste in the current economic model can be redirected 
                to support a healthy, truth-oriented media ecosystem that values integrity over engagement metrics. With the 
                U.S. media sector employing over 2 million people and spending an estimated $150 billion annually in salaries, 
                reconfiguring this sector through a regenerative lens creates space for cultural coherence, civic education, 
                and trust-building narratives that support the wellbeing of individuals, communities, and the collective imagination.
              </p>
              <Button asChild variant="outline" size="sm">
                <NavLink to="/papers/media">View the Regenerative Media Proposal</NavLink>
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Science</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The science proposal reclaims research and discovery as a collective, ethical, and regenerative pursuit—shifting 
                from institutionally gated knowledge production to an open, participatory science commons. In contrast to the 
                current model—where funding biases, siloed research, and corporate patents often steer inquiry—this framework 
                supports transparent, interdisciplinary, and locally relevant scientific exploration. Community laboratories, 
                citizen-science networks, and AI-augmented research tools enable people everywhere to participate in solving 
                real-world challenges, from ecosystem restoration to health innovation. Aligned with Endo Economics, this model 
                liberates scientific talent from market constraints and redirects it toward public benefit, resilience, and 
                the evolution of collective intelligence.
              </p>
              <Button asChild variant="outline" size="sm">
                <NavLink to="/papers/science">View the Regenerative Science Proposal</NavLink>
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Arts and Culture</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The arts and culture proposal reframes creativity as a public good and catalytic force for regeneration, 
                healing, and coherence. In contrast to a commodified culture industry that often extracts meaning for profit, 
                this framework envisions a thriving cultural ecosystem where artists, musicians, performers, storytellers, 
                and tradition-bearers are supported as core agents of societal evolution. By investing in ritual, symbolism, 
                myth-making, and beauty, communities can process grief, envision possibility, and reconnect with what it means 
                to be fully human. Aligned with Endo Economics, this model directs resources toward creative expression that 
                nourishes wellbeing, weaves belonging, and fosters intergenerational transmission of wisdom—ensuring that 
                culture becomes not just a reflection of change, but an active participant in shaping a more beautiful world.
              </p>
              <Button asChild variant="outline" size="sm">
                <NavLink to="/papers/arts">View the Regenerative Arts and Culture Proposal</NavLink>
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Spirituality</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The spirituality proposal restores the sacred as a core dimension of societal architecture—recognizing that 
                inner development, reverence for life, and connection to something greater than the self are essential to 
                human and planetary wellbeing. In a world shaped by fragmentation, burnout, and disillusionment, this framework 
                invites the integration of pluralistic spiritual practices, collective ritual, and contemplative tools into 
                the very fabric of culture. Rather than privileging a single tradition or institution, it honors the diverse 
                pathways through which people access meaning, awe, and coherence. By building public spiritual infrastructure—ritual 
                spaces, seasonal ceremonies, interfaith councils, and inner development programs—we foster a civilization rooted 
                not only in intelligence and innovation, but in humility, compassion, and the mystery that connects us all.
              </p>
              <Button asChild variant="outline" size="sm">
                <NavLink to="/papers/spirituality">View the Regenerative Spirituality Proposal</NavLink>
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Death and Dignity: Reclaiming a Conscious Relationship with Life's Final Passage</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Modern systems often treat death as a failure—something to be avoided, hidden, or medicalized into oblivion. 
                In doing so, we strip it of its sacredness, its potential for meaning, and the agency of those experiencing it. 
                A regenerative civilization must not only rethink how we live, but also how we die—with dignity, presence, and 
                choice. This section explores the cultural, legal, and spiritual reforms needed to support conscious dying, 
                including the right to self-assisted transition, end-of-life care that honors agency and consciousness, and 
                community-based rituals that re-integrate death as a teacher. At its heart, this is not about endorsing death—it's 
                about liberating life from fear and returning sovereignty to its final chapter.
              </p>
              <Button asChild variant="outline" size="sm">
                <NavLink to="/papers/death">View the Death and Dignity Proposal</NavLink>
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Sexual Health, Reproductive Choice, and Cultural Dignity</h3>
              <p className="text-sm text-muted-foreground mb-3">
                This proposal addresses the often-taboo yet deeply impactful domain of sexual and reproductive health—reframing 
                it through a lens of dignity, consent, and harm reduction. By expanding options for male contraception, increasing 
                access to early pregnancy detection, and making STI testing free, anonymous, and securely shareable through 
                sovereign digital identity systems, we reduce unwanted outcomes while upholding personal autonomy. Complementary 
                education on consent, trauma-informed care, and parental readiness resources further support individuals in making 
                empowered, values-aligned choices. Rather than treating sexual health as a reactive domain, this system proactively 
                cultivates a culture of informed responsibility, equitable access, and mutual respect.
              </p>
              <Button asChild variant="outline" size="sm">
                <NavLink to="/papers/sexual-health">View the Sexual Health, Reproductive Choice, and Cultural Dignity Proposal</NavLink>
              </Button>
            </div>

          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>⚠️ Unseen Consequences and Adaptive Awareness</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            Across all proposed systems and proposals, there exists a shared risk: that good intentions, if implemented 
            without humility or reflection, can create new forms of imbalance or harm. This section synthesizes the most 
            salient potential pitfalls identified throughout the proposals—offered not as reasons to halt progress, but 
            as reminders to design with care, adaptability, and reverence for complexity.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm">1. Oversimplification of Human Experience</h4>
              <p className="text-sm text-muted-foreground mb-1">
                <strong>Concern:</strong> AI-assisted tools, metrics, and data-driven governance may reduce complex human lives into reductive inputs.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Mitigation:</strong> Ensure qualitative nuance is preserved alongside quantitative analysis. Use human-in-the-loop practices and embed storytelling frameworks.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm">2. System Capture and Power Concentration</h4>
              <p className="text-sm text-muted-foreground mb-1">
                <strong>Concern:</strong> Even decentralized tools risk being co-opted by technocrats, platforms, or ideology.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Mitigation:</strong> Use open-source infrastructure, participatory governance, and rotating stewardship roles to maintain shared power.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm">3. Technocratic or Algorithmic Overreach</h4>
              <p className="text-sm text-muted-foreground mb-1">
                <strong>Concern:</strong> Over-reliance on algorithms could crowd out local wisdom, spiritual insight, or relational intelligence.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Mitigation:</strong> Blend digital systems with bioregional feedback loops and human facilitation.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm">4. Emotional and Psychological Fatigue</h4>
              <p className="text-sm text-muted-foreground mb-1">
                <strong>Concern:</strong> Facilitators, contributors, and participants may become overwhelmed by constant input, decision-making, or exposure to collective pain.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Mitigation:</strong> Embed trauma-informed practices, rest cycles, and role diversity into all engagement layers.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm">5. Transition Shock and Displacement</h4>
              <p className="text-sm text-muted-foreground mb-1">
                <strong>Concern:</strong> Sudden shifts in economy, education, justice, or healthcare could destabilize people who rely on existing systems.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Mitigation:</strong> Prioritize gradual, nested, and opt-in transitions. Pilot locally before scaling.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm">6. Cultural Resistance or Backlash</h4>
              <p className="text-sm text-muted-foreground mb-1">
                <strong>Concern:</strong> Deep systemic change may trigger resistance from groups with cultural, economic, or ideological stakes in the status quo.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Mitigation:</strong> Use storytelling, bridge-building, and broad coalitions to foster understanding and voluntary alignment.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm">7. Misuse of Wellbeing or Sensemaking Data</h4>
              <p className="text-sm text-muted-foreground mb-1">
                <strong>Concern:</strong> Rich qualitative data could be misinterpreted, used coercively, or mined for extractive agendas.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Mitigation:</strong> Respect sovereignty of data. Use consent-based systems and encryption to ensure trust.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm">8. Moral Hazards in Redistribution</h4>
              <p className="text-sm text-muted-foreground mb-1">
                <strong>Concern:</strong> Guaranteed income and flow-based redistribution may be gamed or discourage meaningful contribution.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Mitigation:</strong> Use layered value recognition—e.g. reputational, narrative, or service-based—beyond currency.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm">9. Loss of Sacredness and Mystery</h4>
              <p className="text-sm text-muted-foreground mb-1">
                <strong>Concern:</strong> In the rush to optimize systems, we may forget to leave room for the sacred, the ineffable, and the soul.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Mitigation:</strong> Integrate spiritual practice, art, silence, and ritual into public and institutional life.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>✨ Conclusion: Toward a Civilization Aligned with Life</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="leading-relaxed">
              We are living through a pivotal moment in human history—one that asks not merely for reform, but for 
              a profound redesign of the systems that govern how we live, create, and care. As ecological limits are 
              breached, institutions falter, and social fragmentation deepens, the call is not to patch the old, but 
              to imagine and enact the new. We are being invited into an evolutionary leap—one that mirrors the 
              transformation of the caterpillar into the butterfly, where the old dissolves to make way for the emergent.
            </p>
            <p className="leading-relaxed">
              This proposal offers a comprehensive framework for such a transformation. Inspired by Barbara Marx 
              Hubbard's Wheel of Co-Creation, it presents regenerative proposals across all twelve core sectors of 
              society: Health, Education, Economics, Governance, Justice, Media, Science, Spirituality, Arts & Culture, 
              Environment, Infrastructure, and Relations. Each proposal is a coherent system redesign, grounded in 
              regenerative principles and responsive to today's most pressing crises—yet together, they form an integrated 
              blueprint for a civilization rooted in wellbeing, coherence, and reverence for life.
            </p>
            <p className="leading-relaxed">
              What unifies these diverse systems is their orientation toward feedback, agency, and care. Instead of 
              top-down, command-and-control structures, we are designing systems that listen, adapt, and evolve—systems 
              that see human beings not as problems to manage, but as potential to be supported and liberated.
            </p>
            <p className="leading-relaxed">
              The Endo Economics model sits at the heart of this shift. Inspired by the biological principle of 
              endosymbiosis, it reframes economics as the circulation of nourishment within a living system. Rather 
              than rewarding extraction, it funds regeneration. Rather than concentrating resources, it distributes 
              capacity. Endo Economics allows us to align economic incentives with ecological integrity and human 
              dignity—unlocking the vast, untapped wealth of talent, time, and love that remains dormant in the current paradigm.
            </p>
            <p className="leading-relaxed">
              Across all sectors, this proposal proposes digital and decentralized infrastructure—from self-custodied 
              identity to distributed data sovereignty—to empower individuals and communities while preserving autonomy 
              and trust. Through collective sensemaking tools, AI-supported wellbeing tracking, and citizen science 
              platforms, we build the nervous system of a conscious civilization: one capable of seeing itself clearly, 
              adjusting course, and healing in real time.
            </p>
            <p className="leading-relaxed">
              Crucially, this vision is not abstract. It is place-based, embodied, and scalable. It supports elders 
              and youth, artists and technologists, land stewards and caregivers. It values story, ritual, data, and 
              design. It honors diverse ways of knowing and creates conditions for each bioregion, culture, and community 
              to flourish in its own expression of harmony.
            </p>
            <p className="leading-relaxed">
              This is not a eutopia in the imagined sense of perfection, but in the literal sense of a good place—a 
              viable, regenerative, and beautiful future that is worthy of our collective effort. It is not a fantasy. 
              It is a direction. A north star. A fractal possibility.
            </p>
            <p className="leading-relaxed">
              This document, then, is not the final word. It is a living compass. A conversation. A container for all 
              who are ready to step forward as co-creators of the future.
            </p>
            <p className="leading-relaxed">
              The chrysalis is thinning. The imaginal cells are multiplying. Let us weave the new with vision, humility, and joy.
            </p>
            <p className="leading-relaxed font-semibold">
              Let us build a civilization aligned with life.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="text-center">Epilogue: The Song Beneath the Systems</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-center italic text-muted-foreground">
            <p>Beneath the noise of breakdown,<br />there is a quieter rhythm,<br />the sound of something ancient remembering itself.</p>
            <p>It hums in mycelial webs and children's laughter,<br />in the drumbeat of hearts that still believe<br />in something more beautiful than survival.</p>
            <p>We are not just solving problems.<br />We are composing new music—<br />not for machines,<br />but for living systems that dance, breathe,<br />and know how to heal when given the chance.</p>
            <p>This is the time between stories,<br />the breath before the bloom.<br />And though the old maps are burning,<br />the constellations are still intact.</p>
            <p>Let us navigate by the stars of compassion,<br />govern by the tides of feedback,<br />and build as if the Earth were sacred—<br />because it is.</p>
            <p>Let our hands be covered in soil and code,<br />ritual and algorithm,<br />so that what we plant will be wise, wild,<br />and rooted in love.</p>
            <p>Let us not merely redesign systems.<br />Let us remember we are systems.</p>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default Overview;