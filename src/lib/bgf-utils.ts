import * as pdfjsLib from "pdfjs-dist";

// Use CDN worker for pdf.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

export interface FileWithPages {
  file: File;
  pages: number;
}

export async function countPages(file: File): Promise<number> {
  if (file.type === "application/pdf") {
    const buffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
    return pdf.numPages;
  }
  // Images = 1 page/floor each
  return 1;
}

export function calculatePrice(totalFloors: number): number {
  if (totalFloors <= 0) return 0;
  // 29€ base (1st floor) + 15€ per additional floor, in cents
  return 2900 + Math.max(0, totalFloors - 1) * 1500;
}

export function formatPrice(cents: number): string {
  return (cents / 100).toFixed(2).replace(".", ",") + " €";
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

export function validateFile(file: File): string | null {
  if (file.size > MAX_FILE_SIZE) {
    return `${file.name} ist größer als 10 MB.`;
  }
  const allowed = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
  if (!allowed.includes(file.type)) {
    return `${file.name}: Nur JPG, PNG, WebP oder PDF erlaubt.`;
  }
  return null;
}
