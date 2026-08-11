const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, 'src/data/products.ts');
const content = fs.readFileSync(productsFilePath, 'utf8');

const match = content.match(/export const products: Product\[\] = (\[[\s\S]*\]);/);
if (match) {
  let products = eval(match[1]);
  for (const p of products) {
    if (p.id === 'emerald-cream') {
      p.image = '/images/EMARALD AND CREAM/1.jpg';
      p.gallery = [
        '/images/EMARALD AND CREAM/1.jpg',
        '/images/EMARALD AND CREAM/2.jpg',
        '/images/EMARALD AND CREAM/3.jpg'
      ];
    }
  }
  const newArrayString = JSON.stringify(products, null, 2);
  const newContent = content.replace(match[1], newArrayString);
  fs.writeFileSync(productsFilePath, newContent);
  console.log("Updated emerald-cream");
}
