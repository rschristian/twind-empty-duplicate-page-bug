import { promises as fs } from 'node:fs';

let file = await fs.readFile('node_modules/@twind/wmr/prerender/prerender.js', 'utf-8');
file = file.replace(/await sheet.reset\(\)/, 'sheet.reset()')
await fs.writeFile('node_modules/@twind/wmr/prerender/prerender.js', file);
