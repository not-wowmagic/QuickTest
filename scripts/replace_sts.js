import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../src/data/seedQuestions.js');

let content = fs.readFileSync(filePath, 'utf8');
content = content.replace(/questions: \[\s*\{\s*"id": "sts-q1"[\s\S]*?\]\n  \}/g, 'questions: stsData\n  }');
fs.writeFileSync(filePath, content);
console.log('Replaced STS questions with stsData in seedQuestions.js');
