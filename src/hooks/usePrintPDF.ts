import html2pdf from 'html2pdf.js';
import { toast } from "sonner";

export const usePrintPDF = () => {
  const generatePDF = async () => {
    console.log("Generate PDF button clicked!");
    try {
      toast.info("Generating PDF...", { description: "Creating manifesto overview" });

      // Create the content directly as a string that html2pdf can process
      const content = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #000; max-width: 800px; margin: 0 auto; padding: 2rem;">
          
          <div style="text-align: center; margin-bottom: 3rem;">
            <h1 style="font-size: 2.5rem; margin-bottom: 1rem; color: #000; border-bottom: 2px solid #000; padding-bottom: 0.5rem;">ACTUALIZE EARTH</h1>
            <h2 style="font-size: 2rem; margin-bottom: 1rem; color: #000;">Systems Regeneration Manifesto</h2>
            <p style="font-size: 1.2rem; margin-top: 2rem; color: #000;">A comprehensive blueprint for regenerative systems transformation</p>
          </div>

          <div style="margin-bottom: 3rem;">
            <h2 style="font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem; color: #000;">Overview</h2>
            <p style="margin-bottom: 1rem; color: #000;">This manifesto presents a vision for regenerative systems that prioritize ecological restoration, social healing, and economic justice. The full interactive version with detailed proposals is available at your current website.</p>
            
            <h2 style="font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem; color: #000;">Core Proposals</h2>
            <ul style="margin-bottom: 1rem; padding-left: 2rem; color: #000;">
              <li style="margin-bottom: 0.5rem;"><strong>Endo Economics</strong> - Economic systems aligned with ecological boundaries</li>
              <li style="margin-bottom: 0.5rem;"><strong>Digital Sovereignty</strong> - Technology that serves human agency and privacy</li>
              <li style="margin-bottom: 0.5rem;"><strong>Regenerative Technology</strong> - Tech prioritizing ecological wellbeing</li>
              <li style="margin-bottom: 0.5rem;"><strong>Waste Management</strong> - Circular systems eliminating waste</li>
              <li style="margin-bottom: 0.5rem;"><strong>Energy Infrastructure</strong> - Clean, distributed energy systems</li>
              <li style="margin-bottom: 0.5rem;"><strong>Collective Sensemaking</strong> - Tools for democratic decision-making</li>
              <li style="margin-bottom: 0.5rem;"><strong>Wellbeing Tracking</strong> - Holistic measures beyond GDP</li>
              <li style="margin-bottom: 0.5rem;"><strong>Education</strong> - Learning systems for regenerative culture</li>
              <li style="margin-bottom: 0.5rem;"><strong>Ecological Regeneration</strong> - Restoring natural ecosystems</li>
              <li style="margin-bottom: 0.5rem;"><strong>Justice</strong> - Fair and restorative legal systems</li>
              <li style="margin-bottom: 0.5rem;"><strong>Conflict Transformation</strong> - Peaceful resolution mechanisms</li>
              <li style="margin-bottom: 0.5rem;"><strong>Media</strong> - Truth-oriented information systems</li>
              <li style="margin-bottom: 0.5rem;"><strong>Science</strong> - Open, collaborative research</li>
              <li style="margin-bottom: 0.5rem;"><strong>Arts and Culture</strong> - Creative expression for social change</li>
              <li style="margin-bottom: 0.5rem;"><strong>Spirituality</strong> - Meaning-making and connection</li>
              <li style="margin-bottom: 0.5rem;"><strong>Death and Dignity</strong> - Humane end-of-life care</li>
              <li style="margin-bottom: 0.5rem;"><strong>Sexual Health</strong> - Comprehensive reproductive wellness</li>
              <li style="margin-bottom: 0.5rem;"><strong>Regenerative Election</strong> - Democratic participation systems</li>
              <li style="margin-bottom: 0.5rem;"><strong>Housing</strong> - Sustainable shelter for all</li>
              <li style="margin-bottom: 0.5rem;"><strong>Finance</strong> - Regenerative financial systems</li>
            </ul>
          </div>

          <div style="page-break-before: always; margin-top: 3rem;">
            <h1 style="font-size: 2.5rem; margin-bottom: 1rem; color: #000; border-bottom: 2px solid #000; padding-bottom: 0.5rem;">The Vision</h1>
            <p style="margin-bottom: 1rem; color: #000;">We envision a world where human systems work in harmony with natural systems, where technology serves life rather than extraction, and where every person has the opportunity to contribute to collective flourishing.</p>
            
            <h2 style="font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem; color: #000;">Principles</h2>
            <ul style="margin-bottom: 1rem; padding-left: 2rem; color: #000;">
              <li style="margin-bottom: 0.5rem;"><strong>Regeneration over Sustainability</strong> - Moving beyond "doing less harm" to actively healing</li>
              <li style="margin-bottom: 0.5rem;"><strong>Systemic Thinking</strong> - Understanding interconnections and feedback loops</li>
              <li style="margin-bottom: 0.5rem;"><strong>Participatory Democracy</strong> - Everyone has a voice in decisions that affect them</li>
              <li style="margin-bottom: 0.5rem;"><strong>Ecological Wisdom</strong> - Learning from nature's patterns and cycles</li>
              <li style="margin-bottom: 0.5rem;"><strong>Social Justice</strong> - Addressing historical inequities and power imbalances</li>
              <li style="margin-bottom: 0.5rem;"><strong>Cultural Evolution</strong> - Adapting our values and practices for a thriving future</li>
            </ul>
          </div>

          <div style="page-break-before: always; margin-top: 3rem;">
            <h1 style="font-size: 2.5rem; margin-bottom: 1rem; color: #000; border-bottom: 2px solid #000; padding-bottom: 0.5rem;">Call to Action</h1>
            <p style="margin-bottom: 1rem; color: #000;">This manifesto is a living document, meant to evolve through collective wisdom and shared experience. We invite you to:</p>
            
            <ul style="margin-bottom: 1rem; padding-left: 2rem; color: #000;">
              <li style="margin-bottom: 0.5rem;">Explore the detailed proposals on the website</li>
              <li style="margin-bottom: 0.5rem;">Contribute your insights and expertise</li>
              <li style="margin-bottom: 0.5rem;">Connect with others working toward regenerative systems</li>
              <li style="margin-bottom: 0.5rem;">Implement these ideas in your communities and organizations</li>
              <li style="margin-bottom: 0.5rem;">Share this vision with others who care about our collective future</li>
            </ul>

            <p style="margin-top: 2rem; font-style: italic; color: #000;">For the complete interactive manifesto with detailed proposals, comments, and collaboration tools, visit the full website where you downloaded this PDF.</p>
          </div>
        </div>
      `;

      // Generate PDF with more conservative options
      const opt = {
        margin: 1,
        filename: 'actualize-earth-manifesto.pdf',
        image: { type: 'jpeg', quality: 0.8 },
        html2canvas: { 
          scale: 2,
          backgroundColor: '#ffffff'
        },
        jsPDF: { 
          unit: 'in', 
          format: 'letter', 
          orientation: 'portrait'
        }
      };

      // Use html2pdf more directly
      await html2pdf().from(content).set(opt).save();
      
      toast.success("PDF generated successfully!");

    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error("Failed to generate PDF. Please try again.");
    }
  };

  return { generatePDF };
};