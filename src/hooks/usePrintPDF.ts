import html2pdf from 'html2pdf.js';
import { toast } from "sonner";

export const usePrintPDF = () => {
  const generatePDF = async () => {
    console.log("Generate PDF button clicked!");
    try {
      toast.info("Generating PDF...", { description: "Creating a simple overview document" });

      // Create a simple HTML document with key information
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>ACTUALIZE EARTH - Systems Regeneration Manifesto</title>
          <meta charset="utf-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #000 !important;
              background: #fff !important;
              max-width: 800px;
              margin: 0 auto;
              padding: 2rem;
            }
            * {
              color: #000 !important;
              background: transparent !important;
            }
            h1 {
              font-size: 2.5rem;
              margin-bottom: 1rem;
              page-break-before: always;
              border-bottom: 2px solid #000;
              padding-bottom: 0.5rem;
            }
            h1:first-child {
              page-break-before: avoid;
            }
            h2 {
              font-size: 2rem;
              margin-top: 2rem;
              margin-bottom: 1rem;
            }
            h3 {
              font-size: 1.5rem;
              margin-top: 1.5rem;
              margin-bottom: 0.75rem;
            }
            p {
              margin-bottom: 1rem;
              text-align: justify;
            }
            ul {
              margin-bottom: 1rem;
              padding-left: 2rem;
            }
            li {
              margin-bottom: 0.5rem;
            }
            .page-break {
              page-break-before: always;
            }
            .toc ul {
              list-style: decimal;
              padding-left: 2rem;
            }
            @media print {
              body { print-color-adjust: exact; }
              .page-break { page-break-before: always; }
            }
          </style>
        </head>
        <body>
          <div style="text-align: center; margin-bottom: 3rem;">
            <h1 style="page-break-before: avoid; border-bottom: none;">ACTUALIZE EARTH</h1>
            <h2>Systems Regeneration Manifesto</h2>
            <p style="font-size: 1.2rem; margin-top: 2rem;">A comprehensive blueprint for regenerative systems transformation</p>
          </div>

          <div class="toc">
            <h2>Overview</h2>
            <p>This manifesto presents a vision for regenerative systems that prioritize ecological restoration, social healing, and economic justice. The full interactive version with detailed proposals is available at your current website.</p>
            
            <h2>Core Proposals</h2>
            <ul>
              <li><strong>Endo Economics</strong> - Economic systems aligned with ecological boundaries</li>
              <li><strong>Digital Sovereignty</strong> - Technology that serves human agency and privacy</li>
              <li><strong>Regenerative Technology</strong> - Tech prioritizing ecological wellbeing</li>
              <li><strong>Waste Management</strong> - Circular systems eliminating waste</li>
              <li><strong>Energy Infrastructure</strong> - Clean, distributed energy systems</li>
              <li><strong>Collective Sensemaking</strong> - Tools for democratic decision-making</li>
              <li><strong>Wellbeing Tracking</strong> - Holistic measures beyond GDP</li>
              <li><strong>Education</strong> - Learning systems for regenerative culture</li>
              <li><strong>Ecological Regeneration</strong> - Restoring natural ecosystems</li>
              <li><strong>Justice</strong> - Fair and restorative legal systems</li>
              <li><strong>Conflict Transformation</strong> - Peaceful resolution mechanisms</li>
              <li><strong>Media</strong> - Truth-oriented information systems</li>
              <li><strong>Science</strong> - Open, collaborative research</li>
              <li><strong>Arts and Culture</strong> - Creative expression for social change</li>
              <li><strong>Spirituality</strong> - Meaning-making and connection</li>
              <li><strong>Death and Dignity</strong> - Humane end-of-life care</li>
              <li><strong>Sexual Health</strong> - Comprehensive reproductive wellness</li>
              <li><strong>Regenerative Election</strong> - Democratic participation systems</li>
              <li><strong>Housing</strong> - Sustainable shelter for all</li>
              <li><strong>Finance</strong> - Regenerative financial systems</li>
            </ul>
          </div>

          <div class="page-break">
            <h1>The Vision</h1>
            <p>We envision a world where human systems work in harmony with natural systems, where technology serves life rather than extraction, and where every person has the opportunity to contribute to collective flourishing.</p>
            
            <h2>Principles</h2>
            <ul>
              <li><strong>Regeneration over Sustainability</strong> - Moving beyond "doing less harm" to actively healing</li>
              <li><strong>Systemic Thinking</strong> - Understanding interconnections and feedback loops</li>
              <li><strong>Participatory Democracy</strong> - Everyone has a voice in decisions that affect them</li>
              <li><strong>Ecological Wisdom</strong> - Learning from nature's patterns and cycles</li>
              <li><strong>Social Justice</strong> - Addressing historical inequities and power imbalances</li>
              <li><strong>Cultural Evolution</strong> - Adapting our values and practices for a thriving future</li>
            </ul>
          </div>

          <div class="page-break">
            <h1>Call to Action</h1>
            <p>This manifesto is a living document, meant to evolve through collective wisdom and shared experience. We invite you to:</p>
            
            <ul>
              <li>Explore the detailed proposals on the website</li>
              <li>Contribute your insights and expertise</li>
              <li>Connect with others working toward regenerative systems</li>
              <li>Implement these ideas in your communities and organizations</li>
              <li>Share this vision with others who care about our collective future</li>
            </ul>

            <p style="margin-top: 2rem; font-style: italic;">For the complete interactive manifesto with detailed proposals, comments, and collaboration tools, visit the full website where you downloaded this PDF.</p>
          </div>
        </body>
        </html>
      `;

      // Generate PDF directly from the HTML content
      const opt = {
        margin: [0.75, 0.75, 0.75, 0.75],
        filename: 'actualize-earth-manifesto.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 1.5, 
          useCORS: true,
          backgroundColor: '#ffffff',
          logging: false
        },
        jsPDF: { 
          unit: 'in', 
          format: 'letter', 
          orientation: 'portrait',
          putOnlyUsedFonts: true
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      // Create a temporary element to render the HTML
      const element = document.createElement('div');
      element.innerHTML = htmlContent;
      element.style.display = 'none';
      document.body.appendChild(element);

      await html2pdf().set(opt).from(element).save();
      
      // Clean up
      document.body.removeChild(element);
      
      toast.success("PDF generated successfully!");

    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error("Failed to generate PDF. Please try again.");
    }
  };

  return { generatePDF };
};