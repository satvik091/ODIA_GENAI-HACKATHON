import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, '../../tmp');

export const generateResumePDF = async (htmlContent) => {
  const timestamp = Date.now();
  const htmlPath = path.join(outputDir, `resume-${timestamp}.html`);
  const pdfPath = path.join(outputDir, `resume-${timestamp}.pdf`);

  await writeFile(htmlPath, htmlContent, 'utf-8');

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  await page.pdf({ path: pdfPath, format: 'A4' });
  await browser.close();
  await unlink(htmlPath);

  const publicUrl = `/static/resumes/resume-${timestamp}.pdf`;
  // In production you would upload to S3 and return signed URL
  return publicUrl;
};
