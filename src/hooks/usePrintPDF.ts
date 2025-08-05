import html2pdf from 'html2pdf.js';
import { toast } from "sonner";

export const usePrintPDF = () => {
  const generatePDF = async () => {
    console.log("Generate PDF button clicked!");
    try {
      toast.info("Generating PDF...", { description: "Creating comprehensive manifesto" });

      // Create comprehensive content with all proposal details
      const content = `
        <div style="font-family: Georgia, serif; line-height: 1.8; color: #000; max-width: 7in; margin: 0 auto; padding: 0.5in; background: white;">
          
          <!-- Title Page -->
          <div style="text-align: center; margin-bottom: 4rem; page-break-after: always;">
            <h1 style="font-size: 3rem; margin-bottom: 2rem; color: #000; font-weight: bold; letter-spacing: 2px;">ACTUALIZE EARTH</h1>
            <h2 style="font-size: 2rem; margin-bottom: 2rem; color: #000; font-weight: normal;">Systems Regeneration Manifesto</h2>
            <p style="font-size: 1.3rem; margin: 3rem 0; color: #000; font-style: italic;">A comprehensive blueprint for regenerative systems transformation</p>
            <div style="margin-top: 4rem; padding: 2rem; border: 2px solid #000;">
              <p style="font-size: 1.1rem; color: #000; margin: 0;">This document presents detailed proposals for transforming human systems to work in harmony with natural systems, prioritizing ecological restoration, social healing, and economic justice.</p>
            </div>
          </div>

          <!-- Table of Contents -->
          <div style="page-break-after: always;">
            <h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: #000; border-bottom: 3px solid #000; padding-bottom: 1rem;">Table of Contents</h1>
            <div style="font-size: 1.1rem; line-height: 2.5;">
              <p style="margin: 1rem 0; color: #000;"><strong>1. Vision & Principles</strong></p>
              <p style="margin: 1rem 0; color: #000;"><strong>2. Economic Transformation</strong></p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Endo Economics</p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Finance Systems</p>
              <p style="margin: 1rem 0; color: #000;"><strong>3. Technology & Digital Systems</strong></p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Digital Sovereignty</p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Regenerative Technology</p>
              <p style="margin: 1rem 0; color: #000;"><strong>4. Environmental Systems</strong></p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Waste Management</p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Energy Infrastructure</p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Ecological Regeneration</p>
              <p style="margin: 1rem 0; color: #000;"><strong>5. Social Systems</strong></p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Education</p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Justice</p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Wellbeing Tracking</p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Housing</p>
              <p style="margin: 1rem 0; color: #000;"><strong>6. Governance & Democracy</strong></p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Collective Sensemaking</p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Regenerative Elections</p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Conflict Transformation</p>
              <p style="margin: 1rem 0; color: #000;"><strong>7. Culture & Human Development</strong></p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Arts and Culture</p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Spirituality</p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Sexual Health</p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Death and Dignity</p>
              <p style="margin: 1rem 0; color: #000;"><strong>8. Information & Knowledge</strong></p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Media Systems</p>
              <p style="margin: 1rem 0 1rem 2rem; color: #000;">• Science</p>
            </div>
          </div>

          <!-- Vision & Principles -->
          <div style="page-break-after: always;">
            <h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: #000; border-bottom: 3px solid #000; padding-bottom: 1rem;">1. Vision & Principles</h1>
            
            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">Our Vision</h2>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">We envision a world where human systems work in harmony with natural systems, where technology serves life rather than extraction, and where every person has the opportunity to contribute to collective flourishing. This transformation requires moving beyond incremental reforms to fundamental systems change.</p>
            
            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">Core Principles</h2>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">Regeneration over Sustainability</h3>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">Moving beyond "doing less harm" to actively healing damaged systems. Regenerative approaches seek to restore ecological health, social cohesion, and economic vitality simultaneously.</p>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">Systemic Thinking</h3>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">Understanding interconnections and feedback loops between social, economic, and ecological systems. Solutions must address root causes rather than symptoms.</p>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">Participatory Democracy</h3>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">Everyone has a voice in decisions that affect them. Democratic participation extends beyond voting to include ongoing deliberation and collaborative governance.</p>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">Ecological Wisdom</h3>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">Learning from nature's patterns and cycles. Biomimicry and ecological principles inform the design of human systems.</p>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">Social Justice</h3>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">Addressing historical inequities and power imbalances. Transformation must prioritize those most impacted by current system failures.</p>
          </div>

          <!-- Economic Transformation -->
          <div style="page-break-after: always;">
            <h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: #000; border-bottom: 3px solid #000; padding-bottom: 1rem;">2. Economic Transformation</h1>
            
            <h2 style="font-size: 2rem; margin: 2rem 0 1rem 0; color: #000;">Endo Economics</h2>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">The Challenge</h3>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">Current economic systems prioritize infinite growth on a finite planet, leading to ecological collapse and extreme inequality. GDP measures activity, not wellbeing, creating perverse incentives that harm both people and planet.</p>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">The Solution</h3>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">Endo Economics aligns economic activity with ecological boundaries through:</p>
            <ul style="margin: 1rem 0 1.5rem 2rem; color: #000;">
              <li style="margin-bottom: 1rem;">Circular resource flows that eliminate waste</li>
              <li style="margin-bottom: 1rem;">Regenerative value creation that heals damaged systems</li>
              <li style="margin-bottom: 1rem;">Distributed ownership models that share prosperity</li>
              <li style="margin-bottom: 1rem;">Well-being indicators that measure true progress</li>
              <li style="margin-bottom: 1rem;">Local production networks that strengthen communities</li>
            </ul>
            
            <h2 style="font-size: 2rem; margin: 3rem 0 1rem 0; color: #000;">Regenerative Finance</h2>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">Beyond Extractive Finance</h3>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">Current financial systems extract value from communities and ecosystems. Regenerative finance channels capital toward healing and restoration through:</p>
            <ul style="margin: 1rem 0 1.5rem 2rem; color: #000;">
              <li style="margin-bottom: 1rem;">Community investment funds that keep wealth local</li>
              <li style="margin-bottom: 1rem;">Ecological restoration bonds that finance ecosystem recovery</li>
              <li style="margin-bottom: 1rem;">Social impact currencies that reward beneficial activities</li>
              <li style="margin-bottom: 1rem;">Cooperative ownership structures that share returns</li>
              <li style="margin-bottom: 1rem;">Gifting economies that strengthen social bonds</li>
            </ul>
          </div>

          <!-- Technology & Digital Systems -->
          <div style="page-break-after: always;">
            <h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: #000; border-bottom: 3px solid #000; padding-bottom: 1rem;">3. Technology & Digital Systems</h1>
            
            <h2 style="font-size: 2rem; margin: 2rem 0 1rem 0; color: #000;">Digital Sovereignty</h2>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">Reclaiming Digital Agency</h3>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">Big Tech platforms extract personal data and manipulate behavior for profit. Digital sovereignty returns control to individuals and communities through:</p>
            <ul style="margin: 1rem 0 1.5rem 2rem; color: #000;">
              <li style="margin-bottom: 1rem;">Decentralized networks owned by users, not corporations</li>
              <li style="margin-bottom: 1rem;">Privacy-preserving technologies that protect personal data</li>
              <li style="margin-bottom: 1rem;">Open-source platforms that enable customization</li>
              <li style="margin-bottom: 1rem;">Community-governed protocols that serve user interests</li>
              <li style="margin-bottom: 1rem;">Digital rights frameworks that protect human autonomy</li>
            </ul>
            
            <h2 style="font-size: 2rem; margin: 3rem 0 1rem 0; color: #000;">Regenerative Technology</h2>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">Technology in Service of Life</h3>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">Regenerative technology prioritizes ecological wellbeing and human flourishing over profit maximization. Key principles include:</p>
            <ul style="margin: 1rem 0 1.5rem 2rem; color: #000;">
              <li style="margin-bottom: 1rem;">Biomimetic design that learns from natural systems</li>
              <li style="margin-bottom: 1rem;">Cradle-to-cradle manufacturing with zero waste</li>
              <li style="margin-bottom: 1rem;">Community-scale solutions that strengthen local resilience</li>
              <li style="margin-bottom: 1rem;">Open innovation that shares knowledge freely</li>
              <li style="margin-bottom: 1rem;">Participatory design that includes impacted communities</li>
            </ul>
          </div>

          <!-- Environmental Systems -->
          <div style="page-break-after: always;">
            <h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: #000; border-bottom: 3px solid #000; padding-bottom: 1rem;">4. Environmental Systems</h1>
            
            <h2 style="font-size: 2rem; margin: 2rem 0 1rem 0; color: #000;">Waste Management Transformation</h2>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">Circular by Design</h3>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">Linear "take-make-waste" systems are destroying planetary boundaries. Circular systems eliminate waste through:</p>
            <ul style="margin: 1rem 0 1.5rem 2rem; color: #000;">
              <li style="margin-bottom: 1rem;">Product design for durability, repairability, and recyclability</li>
              <li style="margin-bottom: 1rem;">Industrial symbiosis where one industry's waste becomes another's input</li>
              <li style="margin-bottom: 1rem;">Community composting and biogas systems</li>
              <li style="margin-bottom: 1rem;">Extended producer responsibility for full product lifecycles</li>
              <li style="margin-bottom: 1rem;">Sharing economy platforms that maximize resource utilization</li>
            </ul>
            
            <h2 style="font-size: 2rem; margin: 3rem 0 1rem 0; color: #000;">Energy Infrastructure</h2>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">Distributed Renewable Systems</h3>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">Centralized fossil fuel systems concentrate power and pollution. Distributed renewable systems democratize energy through:</p>
            <ul style="margin: 1rem 0 1.5rem 2rem; color: #000;">
              <li style="margin-bottom: 1rem;">Community-owned solar and wind installations</li>
              <li style="margin-bottom: 1rem;">Neighborhood-scale microgrids for resilience</li>
              <li style="margin-bottom: 1rem;">Peer-to-peer energy trading platforms</li>
              <li style="margin-bottom: 1rem;">Biomass systems that restore degraded landscapes</li>
              <li style="margin-bottom: 1rem;">Energy efficiency retrofits for existing buildings</li>
            </ul>
            
            <h2 style="font-size: 2rem; margin: 3rem 0 1rem 0; color: #000;">Ecological Regeneration</h2>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">Healing Damaged Ecosystems</h3>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">Beyond conservation to active restoration of ecological health through:</p>
            <ul style="margin: 1rem 0 1.5rem 2rem; color: #000;">
              <li style="margin-bottom: 1rem;">Regenerative agriculture that rebuilds soil health</li>
              <li style="margin-bottom: 1rem;">Wetland restoration for water purification and flood control</li>
              <li style="margin-bottom: 1rem;">Urban forests that cool cities and improve air quality</li>
              <li style="margin-bottom: 1rem;">Wildlife corridors that connect fragmented habitats</li>
              <li style="margin-bottom: 1rem;">Community-based ecosystem monitoring and stewardship</li>
            </ul>
          </div>

          <!-- Social Systems -->
          <div style="page-break-after: always;">
            <h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: #000; border-bottom: 3px solid #000; padding-bottom: 1rem;">5. Social Systems</h1>
            
            <h2 style="font-size: 2rem; margin: 2rem 0 1rem 0; color: #000;">Transformative Education</h2>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">Learning for Regenerative Culture</h3>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">Industrial education systems prepare workers for extractive economies. Regenerative education cultivates ecological citizens through:</p>
            <ul style="margin: 1rem 0 1.5rem 2rem; color: #000;">
              <li style="margin-bottom: 1rem;">Place-based learning connected to local ecosystems</li>
              <li style="margin-bottom: 1rem;">Collaborative problem-solving for real community challenges</li>
              <li style="margin-bottom: 1rem;">Emotional intelligence and conflict transformation skills</li>
              <li style="margin-bottom: 1rem;">Traditional ecological knowledge alongside modern science</li>
              <li style="margin-bottom: 1rem;">Democratic school governance that practices participation</li>
            </ul>
            
            <h2 style="font-size: 2rem; margin: 3rem 0 1rem 0; color: #000;">Restorative Justice</h2>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">Healing-Centered Approaches</h3>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">Punitive justice systems perpetuate cycles of harm. Restorative approaches focus on healing and prevention through:</p>
            <ul style="margin: 1rem 0 1.5rem 2rem; color: #000;">
              <li style="margin-bottom: 1rem;">Victim-offender mediation and healing circles</li>
              <li style="margin-bottom: 1rem;">Community-based alternatives to incarceration</li>
              <li style="margin-bottom: 1rem;">Trauma-informed interventions that address root causes</li>
              <li style="margin-bottom: 1rem;">Economic justice programs that reduce desperation</li>
              <li style="margin-bottom: 1rem;">Community healing initiatives for collective wounds</li>
            </ul>
            
            <h2 style="font-size: 2rem; margin: 3rem 0 1rem 0; color: #000;">Wellbeing Tracking</h2>
            
            <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: #000;">Beyond GDP</h3>
            <p style="margin-bottom: 1.5rem; color: #000; text-align: justify;">GDP measures economic activity, not wellbeing. Comprehensive wellbeing indicators track:</p>
            <ul style="margin: 1rem 0 1.5rem 2rem; color: #000;">
              <li style="margin-bottom: 1rem;">Physical and mental health outcomes</li>
              <li style="margin-bottom: 1rem;">Social cohesion and community connectedness</li>
              <li style="margin-bottom: 1rem;">Ecological health and biodiversity</li>
              <li style="margin-bottom: 1rem;">Economic security and wealth distribution</li>
              <li style="margin-bottom: 1rem;">Cultural vitality and creative expression</li>
            </ul>
          </div>

          <!-- Call to Action -->
          <div style="page-break-before: always;">
            <h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: #000; border-bottom: 3px solid #000; padding-bottom: 1rem;">Call to Action</h1>
            
            <p style="margin-bottom: 2rem; color: #000; text-align: justify; font-size: 1.2rem;">This manifesto is a living document, meant to evolve through collective wisdom and shared experience. The transformation it envisions requires unprecedented cooperation across all sectors of society.</p>
            
            <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem 0; color: #000;">How You Can Contribute</h2>
            
            <ul style="margin: 1rem 0 2rem 2rem; color: #000; font-size: 1.1rem;">
              <li style="margin-bottom: 1.5rem;"><strong>Explore and Engage:</strong> Visit the full interactive website to dive deeper into each proposal, leave comments, and connect with other contributors.</li>
              <li style="margin-bottom: 1.5rem;"><strong>Share Your Expertise:</strong> Add your knowledge and experience to refine these proposals and develop new ones.</li>
              <li style="margin-bottom: 1.5rem;"><strong>Build Networks:</strong> Connect with others in your community and field who share this vision for regenerative systems.</li>
              <li style="margin-bottom: 1.5rem;"><strong>Implement Locally:</strong> Adapt these frameworks to your specific context and begin transformation where you are.</li>
              <li style="margin-bottom: 1.5rem;"><strong>Scale Solutions:</strong> Help proven local innovations spread to other communities and contexts.</li>
            </ul>
            
            <div style="margin-top: 3rem; padding: 2rem; border: 2px solid #000; background: #f9f9f9;">
              <p style="font-size: 1.1rem; color: #000; margin: 0; text-align: center; font-style: italic;">
                "The greatest revolution of our generation is the discovery that human beings, by changing the inner attitudes of their minds, can change the outer aspects of their lives." - William James
              </p>
            </div>
            
            <p style="margin-top: 3rem; color: #000; text-align: center; font-size: 1.1rem;">
              For the complete interactive manifesto with detailed proposals, comments, and collaboration tools, visit:<br>
              <strong>actualize.earth</strong>
            </p>
          </div>
        </div>
      `;

      // Generate PDF with proper settings for multi-page content
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: 'actualize-earth-manifesto-complete.pdf',
        image: { 
          type: 'jpeg', 
          quality: 0.85 
        },
        html2canvas: { 
          scale: 1.5,
          backgroundColor: '#ffffff',
          useCORS: true,
          letterRendering: true
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
      
      toast.success("Complete PDF generated successfully!");

    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error("Failed to generate PDF. Please try again.");
    }
  };

  return { generatePDF };
};