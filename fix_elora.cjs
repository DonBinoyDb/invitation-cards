const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, 'src/data/products.ts');
const content = fs.readFileSync(productsFilePath, 'utf8');

const match = content.match(/export const products: Product\[\] = (\[[\s\S]*\]);/);
if (match) {
  let products = eval(match[1]);
  for (const p of products) {
    if (p.id === 'elana-vows') {
      p.title = 'Elora Vows';
      p.image = '/images/ELORA VOWS/1.jpg';
      p.gallery = [
        '/images/ELORA VOWS/1.jpg',
        '/images/ELORA VOWS/2.jpg',
        '/images/ELORA VOWS/3.jpg',
        '/images/ELORA VOWS/4.jpg'
      ];
    }
  }
  const newArrayString = JSON.stringify(products, null, 2);
  const newContent = content.replace(match[1], newArrayString);
  fs.writeFileSync(productsFilePath, newContent);
  console.log("Updated elana-vows to Elora Vows");
}
