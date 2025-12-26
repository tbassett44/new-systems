import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all pages to export in order
const pages = [
  { path: '/papers', name: '00-overview' },
  { path: '/papers/election', name: '01-election' },
  { path: '/papers/endo-economics', name: '02-endo-economics' },
  { path: '/papers/digital-sovereignty', name: '03-digital-sovereignty' },
  { path: '/papers/ai-ethics', name: '04-ai-ethics' },
  { path: '/papers/waste-management', name: '05-waste-management' },
  { path: '/papers/energy', name: '06-energy' },
  { path: '/papers/sensemaking', name: '07-sensemaking' },
  { path: '/papers/wellbeing', name: '08-wellbeing' },
  { path: '/papers/education', name: '09-education' },
  { path: '/papers/ecology', name: '10-ecology' },
  { path: '/papers/justice', name: '11-justice' },
  { path: '/papers/conflict', name: '12-conflict' },
  { path: '/papers/media', name: '13-media' },
  { path: '/papers/science', name: '14-science' },
  { path: '/papers/arts', name: '15-arts' },
  { path: '/papers/spirituality', name: '16-spirituality' },
  { path: '/papers/death', name: '17-death' },
  { path: '/papers/sexual-health', name: '18-sexual-health' },
  { path: '/papers/glossary', name: '19-glossary' },
  { path: '/papers/aether-ai', name: '20-aether-ai' },
  { path: '/papers/contribute', name: '21-contribute' },
];

const PORT = 4173;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;
const OUTPUT_DIR = path.join(__dirname, '..', 'pdf-output');

// Wait for server to be ready
function waitForServer(url, maxAttempts = 30) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const check = () => {
      attempts++;
      http.get(url, (res) => {
        if (res.statusCode === 200) {
          resolve();
        } else if (attempts < maxAttempts) {
          setTimeout(check, 1000);
        } else {
          reject(new Error(`Server not ready after ${maxAttempts} attempts`));
        }
      }).on('error', () => {
        if (attempts < maxAttempts) {
          setTimeout(check, 1000);
        } else {
          reject(new Error(`Server not ready after ${maxAttempts} attempts`));
        }
      });
    };
    check();
  });
}

// Start preview server
function startServer() {
  return new Promise((resolve, reject) => {
    const server = spawn('npx', ['vite', 'preview', '--port', PORT.toString()], {
      cwd: path.join(__dirname, '..'),
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    server.stdout.on('data', (data) => {
      console.log(`Server: ${data}`);
    });

    server.stderr.on('data', (data) => {
      console.error(`Server error: ${data}`);
    });

    server.on('error', reject);

    // Give server a moment to start
    setTimeout(() => resolve(server), 2000);
  });
}

async function exportToPDF() {
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Start the preview server
  console.log('Starting preview server...');
  const server = await startServer();

  try {
    // Wait for server to be ready
    console.log('Waiting for server to be ready...');
    await waitForServer(BASE_URL);
    console.log('Server is ready!');

    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const pdfPaths = [];

    try {
      for (const pageInfo of pages) {
      const page = await browser.newPage();
      const url = `${BASE_URL}${pageInfo.path}`;
      console.log(`Exporting: ${pageInfo.name} (${url})`);

      // Force light mode via browser's color scheme preference
      // This works with next-themes when enableSystem={true}
      await page.emulateMediaFeatures([
        { name: 'prefers-color-scheme', value: 'light' }
      ]);

      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 60000
      });

      // Wait for content to render
      await page.waitForSelector('main', { timeout: 10000 }).catch(() => {
        console.log(`  Warning: main element not found for ${pageInfo.name}`);
      });

      // Add some delay for any animations and theme to apply
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Hide UI elements and process links for cleaner PDF
      await page.evaluate(() => {

        // Hide sidebar navigation
        const sidebar = document.querySelector('aside');
        if (sidebar) sidebar.style.display = 'none';

        // Expand main content
        const main = document.querySelector('main');
        if (main) {
          main.style.marginLeft = '0';
          main.style.maxWidth = '100%';
        }

        // Hide comment system buttons (bottom right)
        document.querySelectorAll('.fixed.bottom-4.right-4').forEach(el => {
          el.style.display = 'none';
        });

        // Hide mobile nav button (bottom left)
        document.querySelectorAll('.fixed.bottom-4.left-4, .fixed.bottom-4.left-72').forEach(el => {
          el.style.display = 'none';
        });

        // Hide any other fixed bottom elements that might be UI controls
        document.querySelectorAll('[class*="fixed"][class*="bottom-"]').forEach(el => {
          // Check if it's a UI control (has buttons or is small)
          if (el.querySelector('button') || el.classList.contains('z-40') || el.classList.contains('z-50')) {
            el.style.display = 'none';
          }
        });

        // Process links - hide internal, keep external
        const currentHost = window.location.host;
        document.querySelectorAll('a').forEach(link => {
          const href = link.getAttribute('href');
          if (!href) return;

          // Check if it's an internal link
          const isInternal =
            href.startsWith('/') ||
            href.startsWith('#') ||
            href.startsWith('./') ||
            href.startsWith('../') ||
            (href.startsWith('http') && new URL(href).host === currentHost);

          if (isInternal) {
            // Replace the link with its text content (unwrap the anchor)
            const span = document.createElement('span');
            span.innerHTML = link.innerHTML;
            span.style.cssText = link.style.cssText;
            // Copy relevant classes but remove link styling
            link.parentNode.replaceChild(span, link);
          }
        });
      });

      // Small delay to let theme changes apply
      await new Promise(resolve => setTimeout(resolve, 500));

      const pdfPath = path.join(OUTPUT_DIR, `${pageInfo.name}.pdf`);
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' },
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<div></div>',
        footerTemplate: `
          <div style="width: 100%; font-size: 10px; padding: 10px 20px; text-align: center; color: #666;">
            <span class="pageNumber"></span> / <span class="totalPages"></span>
          </div>
        `,
      });

      pdfPaths.push(pdfPath);
      console.log(`  ✓ Saved: ${pdfPath}`);
      await page.close();
    }

      // Merge all PDFs into one
      console.log('\nMerging PDFs...');
      const mergedPdf = await PDFDocument.create();

      for (const pdfPath of pdfPaths) {
        const pdfBytes = fs.readFileSync(pdfPath);
        const pdf = await PDFDocument.load(pdfBytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedPath = path.join(OUTPUT_DIR, 'new-systems-complete.pdf');
      const mergedPdfBytes = await mergedPdf.save();
      fs.writeFileSync(mergedPath, mergedPdfBytes);
      console.log(`\n✓ Complete PDF saved: ${mergedPath}`);

      // Optionally clean up individual PDFs
      // pdfPaths.forEach(p => fs.unlinkSync(p));

    } catch (error) {
      console.error('Error during PDF export:', error);
      throw error;
    } finally {
      await browser.close();
    }
  } finally {
    // Kill the server
    console.log('Stopping server...');
    server.kill();
  }
}

exportToPDF().catch(console.error);

