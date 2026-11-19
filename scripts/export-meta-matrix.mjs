#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pagesEn } from '../content/pages-en.js';
import { pagesAr } from '../content/pages-ar.js';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const rows = ['locale,path,title,description'];

for (const p of pagesEn) {
  const urlPath = p.slug ? `/en/${p.slug}/` : '/';
  rows.push(`en,"${urlPath}","${p.title.replace(/"/g, '""')}","${p.description.replace(/"/g, '""')}"`);
}
for (const p of pagesAr) {
  const urlPath = p.slug ? `/ar/${p.slug}/` : '/ar/';
  rows.push(`ar,"${urlPath}","${p.title.replace(/"/g, '""')}","${p.description.replace(/"/g, '""')}"`);
}

fs.writeFileSync(path.join(root, 'docs/meta-matrix.csv'), rows.join('\n') + '\n');
console.log('Wrote docs/meta-matrix.csv');
