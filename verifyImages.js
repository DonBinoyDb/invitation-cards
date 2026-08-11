import fs from 'fs';
import path from 'path';

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(filePath));
    } else {
      results.push(filePath.replace(/\\/g, '/').replace('public', ''));
    }
  });
  return results;
}

const allFiles = walkDir('public/images');
fs.writeFileSync('all_images.json', JSON.stringify(allFiles, null, 2));
console.log("Done. Wrote to all_images.json");
