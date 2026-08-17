import fs from 'fs';
import path from 'path';

const targetTitles = [
  "Pure Elegance",
  "Rustic Reverie",
  "Sacred Petals",
  "Sacred Petals - Matt Finish",
  "Sacred Petals - Textured",
  "Sacred Steps",
  "Sacred Vows"
];

const parentDir = 'public/images';
if (fs.existsSync(parentDir)) {
  const subdirs = fs.readdirSync(parentDir);
  for (const title of targetTitles) {
    const expectedDirName = title.toLowerCase();
    const found = subdirs.find(s => s.toLowerCase() === expectedDirName || s.toLowerCase().includes(expectedDirName) || expectedDirName.includes(s.toLowerCase()));
    console.log(`\nChecking for: ${title}`);
    if (found) {
      console.log(`Found matching folder: ${found}`);
      console.log(`Contents:`, fs.readdirSync(path.join(parentDir, found)));
    } else {
      console.log(`No matching folder found.`);
    }
  }
}
