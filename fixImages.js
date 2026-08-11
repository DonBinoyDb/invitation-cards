import fs from 'fs';

const content = fs.readFileSync('src/data/products.ts', 'utf-8');
const allImages = JSON.parse(fs.readFileSync('all_images.json', 'utf-8'));

let fixedContent = content;

const regex = /"(\/images\/[^"]+)"/g;
const matches = [...content.matchAll(regex)];

let replacements = 0;

for (const match of matches) {
  const original = match[1];
  
  if (allImages.includes(original)) {
    continue; // Exactly correct
  }
  
  // Try case insensitive match
  let found = allImages.find(img => img.toLowerCase() === original.toLowerCase());
  
  // Try extension swap (jpg/jpeg/png)
  if (!found) {
     found = allImages.find(img => {
       const imgBase = img.toLowerCase().replace(/\.(jpeg|jpg|png)$/, '');
       const origBase = original.toLowerCase().replace(/\.(jpeg|jpg|png)$/, '');
       return imgBase === origBase;
     });
  }

  if (found) {
    console.log(`Fixing: ${original} -> ${found}`);
    fixedContent = fixedContent.replace(`"${original}"`, `"${found}"`);
    replacements++;
  } else {
    console.log(`Could not resolve: ${original}`);
  }
}

fs.writeFileSync('src/data/products.ts', fixedContent);
console.log(`Done. Fixed ${replacements} paths.`);
