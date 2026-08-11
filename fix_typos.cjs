const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, 'src/data/products.ts');
let content = fs.readFileSync(productsFilePath, 'utf8');

const match = content.match(/export const products: Product\[\] = (\[[\s\S]*\]);/);
if (match) {
  let products = eval(match[1]);

  const mapFolder = (id, folderName) => {
    const p = products.find(x => x.id === id);
    if (p) {
      const folderPath = path.join(__dirname, 'public/images', folderName);
      if (fs.existsSync(folderPath)) {
        const files = fs.readdirSync(folderPath).filter(f => !f.startsWith('.'));
        files.sort((a, b) => a.localeCompare(b, undefined, {numeric: true}));
        if (files.length > 0) {
          p.image = `/images/${folderName}/${files[0]}`;
          p.gallery = files.map(f => `/images/${folderName}/${f}`);
        }
      }
    }
  };

  mapFolder('kraft-n-texture', 'KRAKT n TEXTURE');
  mapFolder('l-k', 'L&R');

  const newArrayString = JSON.stringify(products, null, 2);
  content = content.replace(match[1], newArrayString);
  fs.writeFileSync(productsFilePath, content);
  console.log("Updated typos");
}
