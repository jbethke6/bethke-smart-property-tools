import * as pdfjsLib from "pdfjs-dist";
import { BGF_PRICING, DIG_PRICING } from "@/lib/config";

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
  return 1;
}

export function calculateBgfPrice(totalFloors: number): number {
  if (totalFloors <= 0) return 0;
  return BGF_PRICING.basePrice + Math.max(0, totalFloors - 1) * BGF_PRICING.additionalFloor;
}

export function calculateDigPrice(totalFloors: number): number {
  if (totalFloors <= 0) return 0;
  return DIG_PRICING.basePrice + Math.max(0, totalFloors - 1) * DIG_PRICING.additionalFloor;
}

export function formatPrice(cents: number): string {
  return (cents / 100).toFixed(2).replace(".", ",") + " €";
}

const MAX_FILE_SIZE = 10 * 1024 * 1024;

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

export function sanitizeFileName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss")
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .replace(/_+/g, "_")
    .toLowerCase();
}
