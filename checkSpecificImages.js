import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const content = fs.readFileSync('src/data/products.ts', 'utf-8');

const targetTitles = [
  "Pure Elegance",
  "Rustic Reverie",
  "Sacred Petals",
  "Sacred Petals - Matt Finish",
  "Sacred Petals - Textured",
  "Sacred Steps",
  "Sacred Vows"
];

const regex = /"title":\s*"([^"]+)"(?:[^}]*?)"image":\s*"([^"]+)"(?:[^}]*?)"gallery":\s*(\[[^\]]+\])/g;
const matches = [...content.matchAll(regex)];

for (const match of matches) {
  const title = match[1];
  if (targetTitles.includes(title)) {
    console.log(`\nChecking product: ${title}`);
    const imgPath = match[2];
    const fullPath = path.join('public', imgPath);
    console.log(`Expected path: ${imgPath}`);
    
    if (fs.existsSync(fullPath)) {
      console.log(`Path exists!`);
    } else {
      console.log(`Path DOES NOT exist.`);
      const dir = path.dirname(fullPath);
      if (fs.existsSync(dir)) {
        console.log(`Directory exists. Contents:`);
        console.log(fs.readdirSync(dir));
      } else {
        console.log(`Directory ${dir} DOES NOT exist.`);
        // let's try to find a similar directory in public/images
        const parentDir = 'public/images';
        if (fs.existsSync(parentDir)) {
          const subdirs = fs.readdirSync(parentDir);
          const expectedDirName = path.basename(dir).toLowerCase();
          const found = subdirs.find(s => s.toLowerCase() === expectedDirName);
          if (found) {
            console.log(`Found similar directory: ${found}`);
            console.log(`Contents:`, fs.readdirSync(path.join(parentDir, found)));
          }
        }
      }
    }
  }
}
