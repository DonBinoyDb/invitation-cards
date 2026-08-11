const fs = require('fs');
const content = fs.readFileSync('src/data/products.ts', 'utf8');
const lines = content.split('\n');

const emptyProducts = [];
let currentProduct = null;

for (const line of lines) {
  if (line.includes('{')) {
    currentProduct = { id: '', title: '', image: '' };
  }
  if (line.includes('"id":')) {
    const match = line.match(/"id":\s*"(.*?)"/);
    if (match) currentProduct.id = match[1];
  }
  if (line.includes('"title":')) {
    const match = line.match(/"title":\s*"(.*?)"/);
    if (match) currentProduct.title = match[1];
  }
  if (line.includes('"image":')) {
    const match = line.match(/"image":\s*"(.*?)"/);
    if (match) currentProduct.image = match[1];
  }
  if (line.includes('}')) {
    if (currentProduct && currentProduct.id) {
      if (currentProduct.title === "" && currentProduct.image === "") {
        emptyProducts.push(currentProduct);
      }
    }
    // Note: this is a simple parser, might not handle nested objects perfectly
  }
}

console.log("Empty products:", emptyProducts.length);
emptyProducts.forEach(p => console.log(p.id));
