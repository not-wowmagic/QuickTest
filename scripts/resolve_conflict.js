import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../src/data/seedQuestions.js');

let content = fs.readFileSync(filePath, 'utf8');

// Resolve the conflict by taking the "Stashed changes" side
// markers are <<<<<<< Updated upstream ... ======= ... >>>>>>> Stashed changes
const regex = /<<<<<<< Updated upstream[\s\S]*?=======([\s\S]*?)>>>>>>> Stashed changes/g;
content = content.replace(regex, '$1');

fs.writeFileSync(filePath, content);
console.log('Conflict resolved in seedQuestions.js');
