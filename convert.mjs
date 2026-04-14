import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const inputPath = path.join(__dirname, 'src/assets/profile-photo.jpg');
const outputPath = path.join(__dirname, 'src/assets/profile-photo.png');

await sharp(inputPath)
  .png()
  .toFile(outputPath);

console.log('Converted to PNG:', outputPath);