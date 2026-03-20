import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../quizzes/GE7_STS_Quiz.txt');
const outputPath = path.join(__dirname, '../src/data/sts.json');

const raw = fs.readFileSync(inputPath, 'utf8');

const questions = [];
let currentQ = null;

const lines = raw.split('\n');

for (let i = 0; i < lines.length; i++) {
  let line = lines[i].trim();
  if (!line) continue;
  
  // Try matching question start e.g. "1. Question text" or "1. [TRUE or FALSE] Question text"
  const qMatch = line.match(/^(\d+)\.\s+(.*)/);
  if (qMatch) {
    if (currentQ && currentQ.options.length > 0) {
      questions.push(currentQ);
    }
    
    let text = qMatch[2].trim();
    // Default to a regular question structure
    currentQ = {
      id: `sts-q${qMatch[1]}`,
      text: text,
      options: [],
      answer: 0,
      explanation: 'Refer to course materials.'
    };
  } else if (currentQ) {
    // If it's an option like "A) Option"
    const optMatch = line.match(/^([A-D])\)\s+(.*)/);
    if (optMatch) {
      currentQ.options.push(optMatch[2].trim());
    }
  }
}

// Push last
if (currentQ && currentQ.options.length > 0) {
  questions.push(currentQ);
}

// For True/False questions that might not have options listed
questions.forEach(q => {
  if (q.options.length === 0 && q.text.includes('[TRUE or FALSE]')) {
    q.options = ["True", "False"];
  }
});

fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2));
console.log(`Parsed ${questions.length} questions to sts.json!`);
