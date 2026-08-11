const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, 'src/data/products.ts');
const content = fs.readFileSync(productsFilePath, 'utf8');

const match = content.match(/export const products: Product\[\] = (\[[\s\S]*\]);/);
if (!match) {
  process.exit(1);
}

let products = eval(match[1]);

const imagesDir = path.join(__dirname, 'public/images');
const items = fs.existsSync(imagesDir) ? fs.readdirSync(imagesDir) : [];
const folders = items.filter(f => fs.statSync(path.join(imagesDir, f)).isDirectory());
const looseFiles = items.filter(f => fs.statSync(path.join(imagesDir, f)).isFile());

function clean(str) {
  return (str || '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '');
}

function findFolder(title, id) {
  const normTitle = clean(title);
  const normId = clean(id);
  
  for (const folder of folders) {
    const normFolder = clean(folder);
    if (normTitle && normFolder === normTitle) return folder;
    if (normId && normFolder === normId) return folder;
  }
  return null;
}

function findLooseFiles(title, id) {
  const normTitle = clean(title);
  const normId = clean(id);
  
  const matched = [];
  for (const file of looseFiles) {
    const parsed = path.parse(file);
    const name = clean(parsed.name);
    const nameNoNum = name.replace(/[0-9]+$/, '');
    
    if (
      (normTitle && (name === normTitle || nameNoNum === normTitle)) ||
      (normId && (name === normId || nameNoNum === normId))
    ) {
      matched.push(file);
    }
  }
  return matched;
}

const stillMissing = [];
let updatedCount = 0;

for (const p of products) {
  // Always try to find a mapping to ensure we have the latest paths
  const folder = findFolder(p.title, p.id);
  
  if (folder) {
    const folderPath = path.join(imagesDir, folder);
    const files = fs.readdirSync(folderPath).filter(f => !f.startsWith('.'));
    if (files.length > 0) {
      files.sort((a, b) => a.localeCompare(b, undefined, {numeric: true}));
      p.image = `/images/${folder}/${files[0]}`;
      p.gallery = files.map(f => `/images/${folder}/${f}`);
      updatedCount++;
    } else {
      if (!p.image || p.image.includes('picsum.photos') || p.image.includes('placeholder')) {
        stillMissing.push(p);
      }
    }
  } else {
    const lFiles = findLooseFiles(p.title, p.id);
    if (lFiles.length > 0) {
      lFiles.sort((a, b) => a.localeCompare(b, undefined, {numeric: true}));
      p.image = `/images/${lFiles[0]}`;
      p.gallery = lFiles.map(f => `/images/${f}`);
      updatedCount++;
    } else {
      // Manual overrides for known typos that we did before
      if (p.id === 'kraft-n-texture' || p.id === 'l-k' || p.id === 'emerald-cream' || p.id === 'elana-vows' || p.id.startsWith('blush-garden')) {
         // Keep existing valid paths for manually mapped ones if they don't have picsum
         if (!p.image || p.image.includes('picsum.photos') || p.image.includes('placeholder')) {
             stillMissing.push(p);
         }
      } else if (!p.image || p.image.includes('picsum.photos') || p.image.includes('placeholder')) {
        stillMissing.push(p);
      }
    }
  }
}

const newArrayString = JSON.stringify(products, null, 2);
const newContent = content.replace(match[1], newArrayString);

fs.writeFileSync(productsFilePath, newContent);

console.log("Updated products count:", updatedCount);
console.log("Still missing count:", stillMissing.length);

const missingList = stillMissing.map(p => `- **${p.title}** (ID: \`${p.id}\`)`);
const mdContent = `# Products Still Missing Images\n\nThe following products still do not have a corresponding local image folder or file:\n\n${missingList.join('\n')}\n`;
fs.writeFileSync(path.join(__dirname, 'missing_images.md'), mdContent);
