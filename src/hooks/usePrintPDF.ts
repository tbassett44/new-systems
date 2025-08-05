import html2pdf from 'html2pdf.js';
import { toast } from "sonner";

export const usePrintPDF = () => {
  const generatePDF = async () => {
    console.log("Generate PDF button clicked!");
    try {
      toast.info("Generating comprehensive PDF...", { description: "Including all exact content from the manifesto" });

      // Create comprehensive content using exact text from the pages
      const content = `
        <div style="font-family: Georgia, serif; line-height: 1.7; color: #000; max-width: 8in; margin: 0 auto; padding: 0.75in; background: white;">
          
          <!-- Title Page -->
          <div style="text-align: center; margin-bottom: 4rem; page-break-after: always;">
            <h1 style="font-size: 3.5rem; margin-bottom: 2rem; color: #000; font-weight: bold; letter-spacing: 3px;">ACTUALIZE EARTH</h1>
            <h2 style="font-size: 2.5rem; margin-bottom: 2rem; color: #000; font-weight: normal;">System Regeneration</h2>
            <p style="font-size: 1.5rem; margin: 3rem 0; color: #000; font-style: italic;">Supporting Better Feedback, Effective Governance, and Improved Wellbeing</p>
            <div style="margin: 3rem 0; font-size: 1.1rem; color: #000;">
              <p>By Juicy Life (juicy@actualize.earth)</p>
              <p>and Aether, an AI collaborator powered by GPT-4 by OpenAI</p>
            </div>
            <div style="margin-top: 4rem; padding: 2rem; border: 2px solid #000;">
              <p style="font-size: 1.1rem; color: #000; margin: 0;">This paper serves as a living blueprint for systems redesign—presenting a high-level overview and a series of linked proposals that address the core sectors of society.</p>
            </div>
          </div>

          <!-- About This Document -->
          <div style="page-break-after: always;">
            <h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: #000; border-bottom: 3px solid #000; padding-bottom: 1rem;">About This Document</h1>
            
            <p style="margin-bottom: 2rem; color: #000; font-size: 1.1rem; text-align: justify;">
              This paper serves as a living blueprint for systems redesign—presenting a high-level overview and a series of linked proposals that address the core sectors of society. Each proposal is designed to clearly articulate the central problems and offer grounded, implementable solutions. The language throughout is intentionally concise and accessible, offering a practical foundation for reflection, collaboration, and action. This collection is not exhaustive, but it is coherent—meant to spark dialogue, inspire experimentation, and guide systemic regeneration across scales.
            </p>

            <h2 style="font-size: 2rem; margin: 2rem 0 1rem 0; color: #000;">Purpose Statement</h2>
            
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">
              We are living in a pivotal evolutionary moment—one that mirrors the metamorphosis of a caterpillar into a butterfly. The social, ecological, and economic systems that once sustained us are now straining under the weight of outdated structures, inefficient feedback loops, and deeply inequitable resource distribution.
            </p>
            
            <p style="margin-bottom: 2rem; color: #000; text-align: justify;">
              This proposal is a call to conscious redesign. It offers a set of high-level, yet actionable systems change proposals that aims to support a more intelligent, responsive, and life-affirming civilization. By aligning our governance, infrastructure, and technological tools with the wellbeing of both people and planet, we can move beyond survival-based structures into a more regenerative and participatory era—one worthy of the potential humanity holds.
            </p>

            <h2 style="font-size: 2rem; margin: 2rem 0 1rem 0; color: #000;">Dignity: The Heart of Systems Regeneration</h2>
            
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">
              Dignity is the quiet foundation of a thriving society—the sense that each person's life has worth, that their voice matters, and that their basic needs are not contingent on performance, productivity, or conformity. It is not a luxury or a philosophical abstraction; it is a baseline condition for human wellbeing, healthy communities, and democratic participation.
            </p>
            
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">
              In today's dominant systems, dignity is routinely violated. People are forced to compete for survival, perform for healthcare, beg for housing, or submit to dehumanizing conditions to access the necessities of life. The poor are criminalized. The sick are bankrupted. The incarcerated are forgotten. In many sectors, systems are optimized for control, compliance, or extraction—not care.
            </p>
            
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">
              This proposal is, at its core, a call to restore dignity at every level of our shared existence—economically, ecologically, socially, and spiritually. Each proposal within it—whether guaranteed income, restorative justice, regenerative infrastructure, or collective sensemaking—aims to restructure power and flow in service of dignity.
            </p>
            
            <p style="margin-bottom: 2rem; color: #000; text-align: justify;">
              To recognize dignity is to acknowledge humanity not as a commodity, but as sacred—and to redesign our systems so that every individual is not merely tolerated or managed, but genuinely supported in their right to thrive.
            </p>
          </div>

          <!-- The Call for a Regenerative Election -->
          <div style="page-break-after: always;">
            <h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: #000; border-bottom: 3px solid #000; padding-bottom: 1rem;">The Call for a Regenerative Election</h1>
            
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">
              At the heart of this manifesto lies a singular, galvanizing aim: to catalyze a Regenerative Election—a new form of democratic engagement that invites the people of this nation to reimagine how we choose leadership, how we surface solutions, and how we steward our shared future. While the whitepapers that follow propose a wide array of structural innovations, they are not offered as the only answers. Rather, they are seeds—examples of what could emerge from a society grounded in dignity, equity, creativity, and care.
            </p>
            
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">
              The current electoral system is increasingly seen as unrepresentative, captured, and adversarial. Over 51% of Americans now identify as politically independent, signaling a deep hunger for approaches that transcend party lines and ideological binaries. A Regenerative Election is not merely a shift in political preference—it is a reweaving of the democratic fabric. It proposes a parallel, voluntary process where candidates are surfaced through transparent dialogue, collective sensemaking, and values-based debate—long before any ballots are cast.
            </p>
            
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">
              This initiative is not about creating a new political party. It is about creating a new civic experience—one that honors wisdom from across the political spectrum, uplifts marginalized voices, and gives rise to leadership that reflects the will and wellbeing of the whole. In doing so, it creates a legitimate and actionable pathway for any aligned candidate to earn trust, build momentum, and—through grassroots petition drives—secure official ballot access in states across the country.
            </p>
            
            <p style="margin-bottom: 2rem; color: #000; text-align: justify;">
              If nothing else is implemented from this manifesto, let it be this: an open invitation to co-create a Regenerative Election—a civic rite of passage into a more honest, intelligent, and life-affirming democracy. What follows in this document can serve as inspiration and scaffolding—but the real blueprint will be drawn by those who step forward to build it together.
            </p>
          </div>

          <!-- Systems Change Proposals Introduction -->
          <div style="page-break-after: always;">
            <h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: #000; border-bottom: 3px solid #000; padding-bottom: 1rem;">Systems Change Proposals</h1>
            <h2 style="font-size: 1.8rem; margin-bottom: 2rem; color: #666;">Based on Barbara Marx Hubbard's Wheel of Co-Creation</h2>
            
            <p style="margin-bottom: 2rem; color: #000; text-align: justify;">
              The systems change proposals outlined in this proposal are organized in relationship to Barbara Marx Hubbard's Wheel of Co-Creation—a visionary framework that maps the twelve key sectors of society as evolving expressions of our collective potential. Rather than treating these domains—such as education, economics, health, media, and justice—as isolated silos, the wheel reveals them as interdependent aspects of a living societal system. Each proposal presented here offers a regenerative blueprint for transforming a core sector, integrating values of feedback, participation, and wellbeing. Together, they form a cohesive foundation for a conscious civilization—one that is capable of evolving not through control or collapse, but through coherence, compassion, and creative redesign.
            </p>
          </div>

          <!-- Endo Economics -->
          <div style="page-break-after: always;">
            <h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: #000; border-bottom: 3px solid #000; padding-bottom: 1rem;">Toward a New Economic Model</h1>
            <h2 style="font-size: 2rem; margin-bottom: 1.5rem; color: #0066cc;">Redirecting GDP Flow for Collective Wellbeing</h2>
            <h3 style="font-size: 1.5rem; margin-bottom: 2rem; color: #009900;">Endo Economics</h3>
            
            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">Overview</h2>
            <p style="margin-bottom: 2rem; color: #000; text-align: justify;">
              This proposal is a call to reimagine the very architecture of our economy at a moment of deep systemic misalignment. While the U.S. GDP exceeds $30 trillion annually, a staggering portion of that value fails to translate into human wellbeing, ecological regeneration, or long-term resilience. This document illuminates the hidden flows beneath that number—wages, public spending, and capital—and proposes a practical, values-driven framework to distribute these resources in service of collective thriving. It offers not just critique, but blueprint: a vision for an economy that works for people and planet, and a roadmap to begin building it now.
            </p>

            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">Critique of the Current Economic System</h2>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">
              The current economic system, while vast and complex, is fundamentally misaligned with the wellbeing of the majority of people and the long-term health of the planet. It treats value creation primarily through the lens of capital accumulation and short-term profit, often at the expense of human dignity, ecological stability, and community cohesion.
            </p>
            
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">
              Wealth flows disproportionately toward those who already hold capital, while millions work full-time jobs that still fail to meet their basic needs. Entire sectors of labor—caregiving, education, ecological restoration—are undervalued or ignored by traditional market mechanisms, despite their vital contributions to society.
            </p>
            
            <div style="background: #fff0f0; padding: 1.5rem; margin: 2rem 0; border-left: 4px solid #cc0000;">
              <h4 style="font-weight: bold; margin-bottom: 1rem; color: #cc0000;">The Numbers Don't Lie</h4>
              <p style="color: #000;">
                As of 2024, the top 1% of Americans hold more wealth than the entire bottom 90% combined. The top 1% control over 30% of the nation's total wealth, while the bottom half holds less than 3%. CEOs now earn up to 400 times more than the average worker—a gap that has expanded dramatically since the 1970s, when the ratio was closer to 20-to-1.
              </p>
            </div>

            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">Endosymbiotic Evolution and the Roots of Endo Economics</h2>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">
              The inspiration behind "Endo Economics" arises from the evolutionary principle of endosymbiosis—a foundational process in biology through which distinct organisms merge to form a more complex, cooperative whole. This process gave rise to mitochondria and chloroplasts, essential cellular components that once existed as independent organisms. Evolution favored this integration not through domination, but through mutual benefit, shared function, and interdependence.
            </p>
            
            <p style="margin-bottom: 2rem; color: #000; text-align: justify;">
              In this spirit, Endo Economics proposes that our economic systems can evolve in the same way—by uniting previously siloed and competitive domains into cooperative ecosystems of shared value. When different parts of society (labor sectors, public systems, innovation hubs, ecological services) function in harmony toward the health of the whole, the result is greater stability, adaptability, and specialization. By embedding cooperation at the cellular level of economic architecture, we unlock the evolutionary advantage of systems designed not for domination, but for long-term flourishing. Endo Economics sees the economy not as a marketplace of isolated agents, but as a living system—dynamic, intelligent, and capable of co-evolving with humanity's deeper needs.
            </p>

            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">High Level Outcomes</h2>
            <ul style="margin: 1rem 0 2rem 2rem; color: #000;">
              <li style="margin-bottom: 1rem;"><strong>Guaranteed Basic Income & Dignified Livelihoods:</strong> Every person receives a baseline income that supports wellbeing, with the opportunity to grow through meaningful contribution.</li>
              <li style="margin-bottom: 1rem;"><strong>No More Personal Taxes or Business Taxes:</strong> Core services and social systems are funded through distributed value flows, eliminating the need for individual income taxation.</li>
              <li style="margin-bottom: 1rem;"><strong>Adaptive Economic Flow Architecture:</strong> The system flexes with changing human needs, ecological realities, and technological progress—redistributing resources in real time.</li>
              <li style="margin-bottom: 1rem;"><strong>Merit-Based Career Progression with Equity Floors:</strong> Compensation within each career adjusts dynamically based on values-aligned merit, while ensuring no one falls below a thriving threshold.</li>
              <li style="margin-bottom: 1rem;"><strong>Universal Access to Core Services:</strong> Healthcare, education, housing, and nourishment become universally available—not as charity, but as baseline infrastructure.</li>
              <li style="margin-bottom: 1rem;"><strong>Resilient to Future Shocks:</strong> By decentralizing and diversifying economic control, the model is designed to absorb and adapt to crises—climate, technological, or financial.</li>
            </ul>

            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">Current Economic Flow</h2>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">
              The Gross Domestic Product (GDP) of the United States is projected to be $30.34 trillion annually in 2025. To understand and redirect this flow, we isolate the two core components that represent value flowing into human lives and collective infrastructure:
            </p>
            
            <div style="background: #f0f8ff; padding: 2rem; margin: 2rem 0; border-radius: 8px;">
              <h4 style="font-weight: bold; margin-bottom: 1rem; color: #0066cc;">Wage Flow (Human Labor Economy)</h4>
              <p style="font-size: 1.5rem; font-weight: bold; color: #0066cc; margin-bottom: 0.5rem;">~$9.94 trillion</p>
              <p style="color: #000; margin-bottom: 1rem;">Total annual wages paid to the U.S. workforce</p>
              <p style="color: #000; font-size: 0.9rem;">
                This covers compensation for ~92% of the U.S. employed population, across 23 primary occupational sectors.
              </p>
            </div>
            
            <div style="background: #f0fff0; padding: 2rem; margin: 2rem 0; border-radius: 8px;">
              <h4 style="font-weight: bold; margin-bottom: 1rem; color: #009900;">Government Operations Flow (Public Service Economy)</h4>
              <p style="font-size: 1.5rem; font-weight: bold; color: #009900; margin-bottom: 0.5rem;">~$7.36 trillion</p>
              <p style="color: #000; margin-bottom: 1rem;">Total annual federal spending</p>
              <p style="color: #000; font-size: 0.9rem;">
                Includes Social Security, Medicare, Medicaid, SNAP, Unemployment Insurance, ACA subsidies, federal agency budgets, and interest on national debt.
              </p>
            </div>
            
            <div style="background: #f5f0ff; padding: 1.5rem; margin: 2rem 0; border-left: 4px solid #9900cc;">
              <p style="color: #000; font-weight: bold; font-size: 1.1rem;">
                Together, these components account for ~$22.3 trillion, or 74% of total U.S. GDP. This represents the most human-centric portion of the economy: what people are paid, and what is spent to serve and support them.
              </p>
            </div>

            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">The Vision</h2>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">
              The proposal is to use these two dominant flows as the foundation of a redesigned economic system that ensures access to essential needs, dignified livelihoods, and systemic wellbeing for all people. Rather than letting economic flows accumulate into extractive corporate profits or passive capital gains, we ask:
            </p>
            <ul style="margin: 1rem 0 1.5rem 2rem; color: #000;">
              <li style="margin-bottom: 0.5rem;">What if we restructured these flows to be values-aligned, regenerative, and participatory?</li>
              <li style="margin-bottom: 0.5rem;">What if wages reflected collective priorities, social benefit, and ecological restoration?</li>
              <li style="margin-bottom: 0.5rem;">What if public spending was participatory and transparent?</li>
            </ul>
            
            <div style="background: #e8f5e8; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
              <p style="color: #000; font-weight: bold;">
                This informs a fundamental organizing principle that the Economic Flow is part of the Commons, where we treat wages and public spending as the commons of collective value, to be stewarded in service of thriving people and ecosystems.
              </p>
            </div>
          </div>

          <!-- Digital Sovereignty -->
          <div style="page-break-after: always;">
            <h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: #000; border-bottom: 3px solid #000; padding-bottom: 1rem;">Digital Sovereignty and Decentralized Infrastructure</h1>
            <h2 style="font-size: 1.8rem; margin-bottom: 2rem; color: #666;">Foundations for Identity, Trust, and Participation</h2>
            
            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">Overview and Purpose</h2>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">
              This proposal explores the emerging foundation of decentralized digital infrastructure focused on self-sovereign identity (SSI), digital authentication, and data agency. As the internet becomes increasingly centralized, vulnerable to surveillance, censorship, and data exploitation, we need resilient alternatives that restore power and trust to individuals.
            </p>
            
            <p style="margin-bottom: 2rem; color: #000; text-align: justify;">
              The purpose of this document is to outline how decentralized identifiers (DIDs), verifiable credentials (VCs), and cryptographic proof structures can serve as the new digital backbone for a free and regenerative society—enabling individuals to move fluidly, securely, and privately across platforms and domains while retaining ownership of their identity and contributions.
            </p>

            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">The Problem: Centralized Control and Fragmented Identity</h2>
            <ul style="margin: 1rem 0 2rem 2rem; color: #000;">
              <li style="margin-bottom: 1rem;"><strong>Platform Lock-In:</strong> Users are trapped in siloed systems with no portable digital identity or history.</li>
              <li style="margin-bottom: 1rem;"><strong>Surveillance and Exploitation:</strong> Centralized platforms monetize personal data without meaningful consent.</li>
              <li style="margin-bottom: 1rem;"><strong>Lack of Trust Infrastructure:</strong> Verifying identity, reputation, or credentials requires reliance on centralized authorities.</li>
              <li style="margin-bottom: 1rem;"><strong>Exclusion and Vulnerability:</strong> Billions globally remain without formal identity, and digital systems often lack accessibility or resilience.</li>
            </ul>

            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">The Solution: Self-Sovereign Identity and Decentralized Infrastructure</h2>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">1. Self-Sovereign Identity (SSI):</h3>
            <ul style="margin: 1rem 0 1.5rem 2rem; color: #000;">
              <li style="margin-bottom: 0.5rem;">Users create and control their own digital identity wallet</li>
              <li style="margin-bottom: 0.5rem;">Identity is composed of decentralized identifiers (DIDs) and verifiable credentials (VCs)</li>
              <li style="margin-bottom: 0.5rem;">Credentials can represent anything: skills, roles, wellbeing metrics, certifications, or community trust</li>
              <li style="margin-bottom: 0.5rem;">Zero-knowledge proofs allow users to prove things about themselves without exposing sensitive data</li>
            </ul>

            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">2. Decentralized Trust Infrastructure:</h3>
            <ul style="margin: 1rem 0 1.5rem 2rem; color: #000;">
              <li style="margin-bottom: 0.5rem;">Open-source credential issuance and verification networks</li>
              <li style="margin-bottom: 0.5rem;">Cryptographically secure communication and authentication protocols</li>
              <li style="margin-bottom: 0.5rem;">Interoperable formats that allow identity to move between apps, services, and ecosystems</li>
              <li style="margin-bottom: 0.5rem;">Edge-first architecture (identity and keys held locally, not in the cloud)</li>
            </ul>

            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">3. Integration Across Domains:</h3>
            <p style="margin-bottom: 2rem; color: #000; text-align: justify;">
              Use in digital platforms, physical access control, financial systems, reputation graphs, and learning networks. Bridges to regenerative economic models, participatory systems, and resilient supply chains.
            </p>

            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">Core Principles of Digital Sovereignty</h2>
            
            <div style="border-left: 4px solid #0066cc; padding-left: 1rem; margin: 1.5rem 0;">
              <h4 style="font-weight: bold; margin-bottom: 0.5rem;">1. Self-Custody of Identity</h4>
              <p style="color: #000; font-size: 0.9rem;">Each individual controls the storage, access, and permissioning of their identity—just like they might control a physical passport or house key.</p>
            </div>
            
            <div style="border-left: 4px solid #009900; padding-left: 1rem; margin: 1.5rem 0;">
              <h4 style="font-weight: bold; margin-bottom: 0.5rem;">2. Edge-Based Ownership</h4>
              <p style="color: #000; font-size: 0.9rem;">Data is not stored in cloud silos owned by corporations, but in devices physically and legally owned by the individual.</p>
            </div>
            
            <div style="border-left: 4px solid #9900cc; padding-left: 1rem; margin: 1.5rem 0;">
              <h4 style="font-weight: bold; margin-bottom: 0.5rem;">3. Consent-First Interoperability</h4>
              <p style="color: #000; font-size: 0.9rem;">Other systems may request to verify your credentials, but cannot see or use your data unless explicitly granted time-bound, revocable permission.</p>
            </div>
            
            <div style="border-left: 4px solid #ff6600; padding-left: 1rem; margin: 1.5rem 0;">
              <h4 style="font-weight: bold; margin-bottom: 0.5rem;">4. Non-Seizability</h4>
              <p style="color: #000; font-size: 0.9rem;">Your identity, credentials, and access to participation cannot be suspended, revoked, or seized by governments or corporations—unless you violate transparent, peer-accountable community protocols.</p>
            </div>
            
            <div style="border-left: 4px solid #cc0000; padding-left: 1rem; margin: 1.5rem 0;">
              <h4 style="font-weight: bold; margin-bottom: 0.5rem;">5. Distributed Resilience</h4>
              <p style="color: #000; font-size: 0.9rem;">Critical components like key recovery, access approval, and audit trails are spread across trusted networks—not reliant on any single entity.</p>
            </div>
          </div>

          <!-- Waste Management -->
          <div style="page-break-after: always;">
            <h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: #000; border-bottom: 3px solid #000; padding-bottom: 1rem;">Toward a New Waste Management Model</h1>
            <h2 style="font-size: 1.8rem; margin-bottom: 2rem; color: #0066cc;">Transforming Waste Infrastructure: A Scalable Solution for National Wellbeing, Ecological Health, and Economic Resilience</h2>
            
            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">Overview and Purpose</h2>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">
              This proposal presents a strategic vision and operational framework for addressing the United States' waste crisis through scalable, high-efficiency waste processing infrastructure. Utilizing technology such as Eden Energy's advanced systems, we explore how a $200 billion investment could fully process the nation's waste while generating profound benefits for public health, ecological regeneration, economic efficiency, and systemic resilience.
            </p>
            
            <div style="background: #e6f3ff; padding: 1.5rem; margin: 2rem 0; border: 1px solid #0066cc; border-radius: 8px;">
              <p style="color: #000; font-weight: bold; font-size: 0.9rem;">
                The goal of this document is to demonstrate that comprehensive waste infrastructure is not only technologically feasible but also economically justifiable and socially imperative. By drawing on existing capabilities and clear data, we aim to catalyze national action and policy alignment around a regenerative waste strategy.
              </p>
            </div>

            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">The Problem: The Cost of Waste Mismanagement</h2>
            
            <p style="margin-bottom: 1.5rem; color: #000;"><strong>Volume:</strong> The average American generates 4.9 pounds of waste per day. With a population of approximately 350 million, the U.S. produces roughly 1 million tons of waste per day.</p>
            
            <p style="margin-bottom: 1.5rem; color: #000;"><strong>Health Impacts:</strong> Landfills and incinerators emit pollutants linked to respiratory illness, cancer, neurological damage, and endocrine disruption. Communities—especially low-income ones—near waste sites face disproportionate health risks.</p>
            
            <p style="margin-bottom: 1.5rem; color: #000;"><strong>Ecological Degradation:</strong> Mismanaged waste leads to soil, water, and air pollution; oceanic plastic gyres; and biodiversity loss. Methane emissions from landfills are a major contributor to climate change.</p>
            
            <p style="margin-bottom: 1.5rem; color: #000;"><strong>Economic Costs:</strong> The U.S. spends tens of billions annually on collection, landfill management, and environmental remediation. These costs are compounded by lost resource value from recyclable or compostable materials.</p>
            
            <p style="margin-bottom: 2rem; color: #000;"><strong>Feedback Failures:</strong> Our current waste systems lack feedback loops for accountability, citizen participation, and ecological metrics—further disconnecting people from the impacts of their consumption.</p>

            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">Operational Plan: A Scalable National System</h2>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">Technology Reference: Eden Energy Waste-to-Energy System</h3>
            
            <div style="display: flex; gap: 2rem; margin: 2rem 0;">
              <div style="background: #e6f3ff; padding: 1.5rem; border-radius: 8px; flex: 1;">
                <p style="color: #0066cc; font-weight: bold; margin-bottom: 0.5rem;">Daily processing capacity per facility:</p>
                <p style="font-size: 1.5rem; font-weight: bold; color: #0066cc;">5,000 tons</p>
              </div>
              <div style="background: #e8f5e8; padding: 1.5rem; border-radius: 8px; flex: 1;">
                <p style="color: #009900; font-weight: bold; margin-bottom: 0.5rem;">Facility cost:</p>
                <p style="font-size: 1.5rem; font-weight: bold; color: #009900;">$1 billion</p>
              </div>
            </div>
            
            <div style="background: #fff3e6; padding: 2rem; margin: 2rem 0; border: 1px solid #ff6600; border-radius: 8px;">
              <h4 style="font-weight: bold; margin-bottom: 1.5rem; color: #ff6600;">National Scaling Requirement</h4>
              <p style="margin-bottom: 1rem; color: #000;">Total U.S. daily waste: <strong>~1,000,000 tons</strong></p>
              <p style="margin-bottom: 1rem; color: #000;">Number of systems needed: <strong>1,000,000 / 5,000 = 200 systems</strong></p>
              <p style="margin-bottom: 0; color: #000; font-size: 1.2rem; font-weight: bold; border-top: 2px solid #ff6600; padding-top: 1rem;">Total infrastructure cost: 200 x $1B = $200 billion</p>
            </div>

            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">Implementation Notes</h3>
            <ul style="margin: 1rem 0 2rem 2rem; color: #000;">
              <li style="margin-bottom: 1rem;"><strong>Geographic distribution:</strong> Facilities can be distributed regionally to minimize transportation emissions and stimulate local economies.</li>
              <li style="margin-bottom: 1rem;"><strong>Modular deployment:</strong> Phased rollout over 5–10 years with priority to high-impact zones.</li>
              <li style="margin-bottom: 1rem;"><strong>Public-private partnership model:</strong> Government financing combined with industrial partnership and utility-grade oversight.</li>
              <li style="margin-bottom: 1rem;"><strong>Integration with circular economy:</strong> Systems should include material recovery, nutrient cycling (compost, biochar), and energy feedback into the grid.</li>
            </ul>

            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">Net Positive Outcomes</h2>
            <ul style="margin: 1rem 0 2rem 2rem; color: #000;">
              <li style="margin-bottom: 1rem;"><strong>Public Health Improvement:</strong> Drastic reduction in toxic emissions, especially in vulnerable communities</li>
              <li style="margin-bottom: 1rem;"><strong>Climate Action:</strong> Lower methane emissions and conversion of waste into renewable energy or inert byproducts</li>
              <li style="margin-bottom: 1rem;"><strong>Economic Efficiency:</strong> Long-term cost savings vs. landfill operations; energy and material recovery offsets</li>
              <li style="margin-bottom: 1rem;"><strong>Job Creation:</strong> Tens of thousands of high-quality jobs in construction, operations, and maintenance</li>
              <li style="margin-bottom: 1rem;"><strong>Ecological Regeneration:</strong> Cleaner water systems, soil remediation, and reduced plastic leakage</li>
              <li style="margin-bottom: 1rem;"><strong>Systemic Feedback:</strong> Real-time data on consumption and material flow informs better governance and citizen education</li>
              <li style="margin-bottom: 1rem;"><strong>National Security:</strong> Domestic resource recovery reduces reliance on global extraction and supply chains</li>
            </ul>

            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">Conclusion</h2>
            <p style="margin-bottom: 2rem; color: #000; text-align: justify;">
              The transformation of waste infrastructure represents one of the most direct, actionable pathways to improving national wellbeing, regenerating ecosystems, and unlocking economic resilience. A $200 billion investment—less than one year of military spending—could catalyze this transition and signal a new era of public infrastructure designed not only to manage waste, but to restore health and harmony between people and planet.
            </p>
            
            <div style="background: #e6f3ff; padding: 1.5rem; margin: 2rem 0; border: 1px solid #0066cc; border-radius: 8px;">
              <p style="color: #000; font-weight: bold; font-size: 0.9rem;">
                This proposal is intended to inspire alignment across policy makers, engineers, investors, and community leaders to prioritize this critical and attainable shift.
              </p>
            </div>
          </div>

          <!-- Regenerative Energy Infrastructure -->
          <div style="page-break-after: always;">
            <h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: #000; border-bottom: 3px solid #000; padding-bottom: 1rem;">Regenerative Energy Infrastructure</h1>
            <h2 style="font-size: 1.8rem; margin-bottom: 2rem; color: #666;">Powering a Thriving Civilization Beyond Carbon</h2>
            
            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">Overview and Purpose</h2>
            <p style="margin-bottom: 2rem; color: #000; text-align: justify;">
              This proposal outlines a pathway toward a clean, abundant, and regenerative energy future. Grounded in the principles of systemic wellbeing and long-term resilience, it highlights underfunded but promising technologies—such as thorium molten salt reactors and Tokamak fusion reactors—that offer scalable alternatives to fossil fuels. By redirecting investment flows through an Endo Economics lens, we can catalyze a global energy transition that prioritizes safety, decentralization, and planetary health.
            </p>

            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">The Problem: Fossil Dependency and Innovation Suppression</h2>
            <ul style="margin: 1rem 0 2rem 2rem; color: #000;">
              <li style="margin-bottom: 1rem;"><strong>Climate Crisis:</strong> Continued reliance on fossil fuels drives emissions, climate disruption, and ecological degradation.</li>
              <li style="margin-bottom: 1rem;"><strong>Centralized Control:</strong> Legacy energy systems concentrate power in the hands of a few corporations or governments.</li>
              <li style="margin-bottom: 1rem;"><strong>Suppressed Innovation:</strong> Breakthrough technologies like thorium reactors were shelved due to geopolitical and industrial inertia.</li>
              <li style="margin-bottom: 1rem;"><strong>Underinvestment:</strong> Fusion research has suffered from decades of underfunding relative to its long-term potential.</li>
            </ul>

            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">The Solution: Decentralized and Safe Next-Gen Energy Systems</h2>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">1. Thorium Molten Salt Reactors</h3>
            <ul style="margin: 1rem 0 1.5rem 2rem; color: #000;">
              <li style="margin-bottom: 0.5rem;">Safer than traditional uranium reactors (inherent safety, low pressure)</li>
              <li style="margin-bottom: 0.5rem;">Produce less long-lived radioactive waste</li>
              <li style="margin-bottom: 0.5rem;">Cannot melt down like conventional nuclear plants</li>
              <li style="margin-bottom: 0.5rem;">Abundant fuel supply (thorium is more common than uranium)</li>
              <li style="margin-bottom: 0.5rem;">Prototypes proven as early as the 1960s (Oak Ridge National Laboratory)</li>
            </ul>

            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">2. Tokamak Fusion Reactors</h3>
            <ul style="margin: 1rem 0 1.5rem 2rem; color: #000;">
              <li style="margin-bottom: 0.5rem;">Mimic the energy generation of the sun via nuclear fusion</li>
              <li style="margin-bottom: 0.5rem;">Produce massive energy output with zero carbon emissions</li>
              <li style="margin-bottom: 0.5rem;">Minimal radioactive waste and no risk of meltdown</li>
              <li style="margin-bottom: 0.5rem;">International collaboration already underway (e.g., ITER project)</li>
              <li style="margin-bottom: 0.5rem;">Once commercialized, could provide virtually limitless power</li>
            </ul>

            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">3. Regenerative Grid Architecture</h3>
            <ul style="margin: 1rem 0 1.5rem 2rem; color: #000;">
              <li style="margin-bottom: 0.5rem;">Distributed renewable energy systems (solar, wind, geothermal)</li>
              <li style="margin-bottom: 0.5rem;">Microgrids and community-scale storage</li>
              <li style="margin-bottom: 0.5rem;">AI-assisted energy flow optimization</li>
              <li style="margin-bottom: 0.5rem;">Open-source hardware and peer-managed infrastructure</li>
            </ul>

            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">4. Holistic Solar Integration</h3>
            <ul style="margin: 1rem 0 2rem 2rem; color: #000;">
              <li style="margin-bottom: 0.5rem;">Lifecycle accountability for photovoltaic panel production and disposal</li>
              <li style="margin-bottom: 0.5rem;">Integration into mixed energy systems rather than standalone deployment</li>
              <li style="margin-bottom: 0.5rem;">Robust recycling and material recovery programs</li>
              <li style="margin-bottom: 0.5rem;">Focus on community-scale installations with shared ownership models</li>
            </ul>

            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">Integration with Endo Economics</h2>
            <p style="margin-bottom: 2rem; color: #000; text-align: justify;">
              The Endo Economics model unlocks resource flow toward solutions that serve collective wellbeing. Instead of funding extraction, public wealth can be redirected toward energy systems that support long-term health and climate stability. Guaranteed income and transparent resource allocation give communities agency to co-own their energy future—aligning economic incentives with planetary needs.
            </p>

            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">Net Positive Outcomes</h2>
            <ul style="margin: 1rem 0 2rem 2rem; color: #000;">
              <li style="margin-bottom: 1rem;"><strong>Climate Mitigation:</strong> Major reduction in greenhouse gas emissions</li>
              <li style="margin-bottom: 1rem;"><strong>Energy Sovereignty:</strong> Local communities control their power</li>
              <li style="margin-bottom: 1rem;"><strong>Innovation Reignited:</strong> Funding flows toward long-neglected solutions</li>
              <li style="margin-bottom: 1rem;"><strong>Safety and Resilience:</strong> Decentralized systems minimize risk</li>
              <li style="margin-bottom: 1rem;"><strong>Generational Equity:</strong> Future generations inherit a stable, powered planet</li>
              <li style="margin-bottom: 1rem;"><strong>Economic Efficiency:</strong> Reduced long-term costs of climate impact and energy loss</li>
            </ul>

            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">Conclusion</h2>
            <p style="margin-bottom: 2rem; color: #000; text-align: justify;">
              A regenerative energy infrastructure is not only possible—it is essential. We must reclaim innovation, liberate funding, and prioritize the health of both people and planet. With technologies like thorium and fusion on the horizon, and distributed renewables already in hand, we stand at the threshold of an energy renaissance. This proposal is an invitation to step boldly into that future.
            </p>
          </div>

          <!-- Final Call to Action -->
          <div style="page-break-before: always;">
            <h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: #000; border-bottom: 3px solid #000; padding-bottom: 1rem;">Call to Action</h1>
            
            <p style="margin-bottom: 2rem; color: #000; text-align: justify; font-size: 1.2rem;">This manifesto represents a blueprint for systems regeneration that prioritizes dignity, ecological healing, and collective flourishing. The proposals outlined here are not theoretical exercises—they are practical pathways toward a more just and sustainable civilization.</p>
            
            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">How You Can Contribute</h2>
            
            <ul style="margin: 1rem 0 2rem 2rem; color: #000; font-size: 1.1rem;">
              <li style="margin-bottom: 1.5rem;"><strong>Explore and Engage:</strong> Visit the full interactive website at actualize.earth to dive deeper into each proposal, leave comments, and connect with other contributors.</li>
              <li style="margin-bottom: 1.5rem;"><strong>Share Your Expertise:</strong> Add your knowledge and experience to refine these proposals and develop new ones that address gaps or local needs.</li>
              <li style="margin-bottom: 1.5rem;"><strong>Build Networks:</strong> Connect with others in your community and field who share this vision for regenerative systems transformation.</li>
              <li style="margin-bottom: 1.5rem;"><strong>Implement Locally:</strong> Adapt these frameworks to your specific context and begin transformation where you are—in your workplace, community, or region.</li>
              <li style="margin-bottom: 1.5rem;"><strong>Scale Solutions:</strong> Help proven local innovations spread to other communities and contexts through documentation, mentorship, and resource sharing.</li>
              <li style="margin-bottom: 1.5rem;"><strong>Support the Regenerative Election:</strong> Participate in creating new forms of democratic engagement that transcend traditional political boundaries.</li>
            </ul>
            
            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">The Time is Now</h2>
            
            <p style="margin-bottom: 2rem; color: #000; text-align: justify;">We stand at a critical threshold in human history. The old systems are failing, and the window for voluntary transformation is narrowing. The choice before us is simple: evolve or collapse. This manifesto chooses evolution—conscious, dignified, and regenerative.</p>
            
            <p style="margin-bottom: 2rem; color: #000; text-align: justify;">The proposals here represent seeds of possibility. Whether they take root and flourish depends on the collective intelligence, care, and courage of people like you who choose to engage with systems change work. The future is not predetermined—it is a choice we make together, one decision at a time.</p>
            
            <div style="margin-top: 3rem; padding: 2rem; border: 2px solid #000; background: #f9f9f9; text-align: center;">
              <p style="font-size: 1.2rem; color: #000; margin: 0; font-style: italic;">
                "The greatest revolution of our generation is the discovery that human beings, by changing the inner attitudes of their minds, can change the outer aspects of their lives." - William James
              </p>
            </div>
            
            <p style="margin-top: 3rem; color: #000; text-align: center; font-size: 1.2rem; font-weight: bold;">
              For the complete interactive manifesto with detailed proposals, comments, and collaboration tools, visit:<br>
              <span style="font-size: 1.4rem; color: #0066cc;">actualize.earth</span>
            </p>
            
            <div style="margin-top: 4rem; text-align: center; padding: 2rem; background: #f0f0f0; border-radius: 8px;">
              <p style="color: #000; font-size: 1rem; margin: 0;">
                This document represents the collective intelligence of contributors working toward regenerative systems transformation.<br>
                Generated from actualize.earth on ${new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      `;

      // Generate PDF with optimized settings for comprehensive content
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: 'actualize-earth-complete-manifesto.pdf',
        image: { 
          type: 'jpeg', 
          quality: 0.85 
        },
        html2canvas: { 
          scale: 1.3,
          backgroundColor: '#ffffff',
          useCORS: true,
          letterRendering: true,
          logging: false
        },
        jsPDF: { 
          unit: 'in', 
          format: 'letter', 
          orientation: 'portrait'
        },
        pagebreak: { 
          mode: ['avoid-all', 'css', 'legacy']
        }
      };

      // Generate the PDF
      await html2pdf().from(content).set(opt).save();
      
      toast.success("Complete manifesto PDF generated successfully!");

    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error("Failed to generate PDF. Please try again.");
    }
  };

  return { generatePDF };
};