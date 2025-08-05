import html2pdf from 'html2pdf.js';
import { toast } from "sonner";

// All the page routes and their titles
const pageData = [
  { path: '/', title: 'Welcome' },
  { path: '/papers/', title: 'Overview' },
  { path: '/papers/contribute', title: 'Contribute' },
  { path: '/papers/endo-economics', title: 'Endo Economics' },
  { path: '/papers/digital-sovereignty', title: 'Digital Sovereignty' },
  { path: '/papers/technology', title: 'Regenerative Technology' },
  { path: '/papers/waste-management', title: 'Waste Management' },
  { path: '/papers/energy', title: 'Energy Infrastructure' },
  { path: '/papers/sensemaking', title: 'Collective Sensemaking' },
  { path: '/papers/wellbeing', title: 'Wellbeing Tracking' },
  { path: '/papers/education', title: 'Education' },
  { path: '/papers/ecology', title: 'Ecological Regeneration' },
  { path: '/papers/justice', title: 'Justice' },
  { path: '/papers/conflict', title: 'Conflict Transformation' },
  { path: '/papers/media', title: 'Media' },
  { path: '/papers/science', title: 'Science' },
  { path: '/papers/arts', title: 'Arts and Culture' },
  { path: '/papers/spirituality', title: 'Spirituality' },
  { path: '/papers/death', title: 'Death and Dignity' },
  { path: '/papers/sexual-health', title: 'Sexual Health' },
  { path: '/papers/election', title: 'Regenerative Election' },
  { path: '/papers/housing', title: 'Housing' },
  { path: '/papers/finance', title: 'Finance' },
  { path: '/papers/glossary', title: 'Glossary' },
];

export const usePrintPDF = () => {
  const generatePDF = async () => {
    console.log("Generate PDF button clicked!");
    try {
      toast.info("Generating PDF...", { description: "Please wait while we collect all content" });

      // Create HTML structure for the PDF with print-friendly styles
      let htmlContent = `
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
            h4 {
              font-size: 1.25rem;
              margin-top: 1rem;
              margin-bottom: 0.5rem;
              font-weight: bold;
            }
            p {
              margin-bottom: 1rem;
              text-align: justify;
            }
            ul, ol {
              margin-bottom: 1rem;
              padding-left: 2rem;
            }
            li {
              margin-bottom: 0.25rem;
            }
            .page-break {
              page-break-before: always;
            }
            .badge {
              display: inline-block;
              padding: 0.25rem 0.5rem;
              border: 1px solid #000;
              border-radius: 0.25rem;
              font-size: 0.875rem;
              margin: 0.25rem;
            }
            .card, [class*="card"] {
              border: 1px solid #000;
              padding: 1.5rem;
              margin: 1rem 0;
              border-radius: 0.5rem;
            }
            .toc {
              margin-bottom: 3rem;
            }
            .toc ul {
              list-style: decimal;
              padding-left: 2rem;
            }
            .toc li {
              margin-bottom: 0.5rem;
            }
            button, .comment-highlight, [data-comment-id], svg, .tooltip {
              display: none !important;
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
      `;

      // Add table of contents
      htmlContent += `
        <div class="toc page-break">
          <h2>Table of Contents</h2>
          <ul>
      `;
      
      pageData.forEach((page, index) => {
        htmlContent += `<li>${page.title}</li>`;
      });
      
      htmlContent += `
          </ul>
        </div>
      `;

      // Create a hidden iframe to collect content from each page
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      for (const page of pageData) {
        try {
          // Create a promise to load the page
          await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => reject(new Error('Timeout')), 10000);
            
            iframe.onload = () => {
              clearTimeout(timeout);
              try {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
                if (iframeDoc) {
                  // Extract main content
                  const mainElement = iframeDoc.querySelector('main .container') || 
                                    iframeDoc.querySelector('main') || 
                                    iframeDoc.querySelector('.container');
                  
                  if (mainElement) {
                    // Clone and clean the content
                    const content = mainElement.cloneNode(true) as Element;
                    
                    // Remove unwanted elements
                    content.querySelectorAll('button, svg, .comment-highlight, [data-comment-id], nav, header, footer').forEach(el => el.remove());
                    
                    // Clean up class attributes and inline styles
                    content.querySelectorAll('*').forEach(el => {
                      el.removeAttribute('class');
                      el.removeAttribute('style');
                      el.removeAttribute('data-comment-id');
                    });

                    htmlContent += `
                      <div class="page-break">
                        <h1>${page.title}</h1>
                        ${content.innerHTML}
                      </div>
                    `;
                  }
                }
                resolve(true);
              } catch (error) {
                reject(error);
              }
            };
            
            iframe.onerror = () => {
              clearTimeout(timeout);
              reject(new Error('Failed to load'));
            };
            
            iframe.src = window.location.origin + page.path;
          });
          
        } catch (error) {
          console.warn(`Could not load content for ${page.title}:`, error);
          htmlContent += `
            <div class="page-break">
              <h1>${page.title}</h1>
              <p><em>Content could not be loaded for this section.</em></p>
            </div>
          `;
        }
      }

      // Clean up
      document.body.removeChild(iframe);

      htmlContent += `
        </body>
        </html>
      `;

      // Create a new window and generate PDF
      const printWindow = window.open('', '_blank', 'width=800,height=600');
      if (!printWindow) {
        throw new Error('Could not open print window');
      }

      printWindow.document.write(htmlContent);
      printWindow.document.close();

      // Wait for content to load, then generate PDF
      setTimeout(() => {
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

        html2pdf().set(opt).from(printWindow.document.body).save().then(() => {
          printWindow.close();
          toast.success("PDF generated successfully!");
        }).catch((error) => {
          console.error('PDF generation error:', error);
          printWindow.close();
          toast.error("Failed to generate PDF. Please try again.");
        });
      }, 3000);

    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error("Failed to generate PDF. Please try again.");
    }
  };

  return { generatePDF };
};