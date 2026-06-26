import sharp from 'sharp';
import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'public/doctor-profile.png';
const OUT_DIR = 'public/doctor';
const SIZES = [
  { width: 480, suffix: '480' },
  { width: 768, suffix: '768' },
  { width: 1200, suffix: '1200' },
];

await mkdir(OUT_DIR, { recursive: true });

const srcSize = (await stat(SRC)).size;
const meta = await sharp(SRC).metadata();
console.log(`Source: ${path.basename(SRC)} ${meta.width}x${meta.height} (${(srcSize / 1024).toFixed(1)} KB)`);

const results = [];

for (const { width, suffix } of SIZES) {
  const webpPath = path.join(OUT_DIR, `doctor-${suffix}.webp`);
  const avifPath = path.join(OUT_DIR, `doctor-${suffix}.avif`);

  await sharp(SRC)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(webpPath);

  await sharp(SRC)
    .resize({ width, withoutEnlargement: true })
    .avif({ quality: 60, effort: 6 })
    .toFile(avifPath);

  results.push({ format: 'webp', size: width, file: webpPath });
  results.push({ format: 'avif', size: width, file: avifPath });
}

for (const r of results) {
  const size = (await stat(r.file)).size;
  console.log(`  ${r.file}  ${(size / 1024).toFixed(1)} KB`);
}

console.log('\nDone.');
