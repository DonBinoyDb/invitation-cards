const fs = require('fs');
const content = fs.readFileSync('src/data/products.ts', 'utf8');

const match = content.match(/export const products: Product\[\] = (\[[\s\S]*\]);/);
if (match) {
  try {
    const productsArray = eval(match[1]);
    const potentialNoNameAndNoImage = productsArray.filter(p => p.image.includes('picsum.photos'));
    potentialNoNameAndNoImage.forEach(p => console.log(p.id, '|', p.title, '|', p.image));
  } catch (e) {
    console.log("Failed", e.message);
  }
}
