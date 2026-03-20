import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../quizzes/GE7_STS_Quiz.txt');
const outputPath = path.join(__dirname, '../src/data/sts.json');

const raw = fs.readFileSync(inputPath, 'utf8');
const lines = raw.split(/\r?\n/);

const questions = [];
const answerKey = new Map();

let inQuestionBlock = true;
let inAnswerKey = false;
let currentQ = null;

function pushCurrentQuestion() {
  if (!currentQ) return;

  const isTrueFalse = /\[\s*TRUE\s+or\s+FALSE\s*\]/i.test(currentQ.text);
  if (isTrueFalse && currentQ.options.length === 0) {
    currentQ.options = ['True', 'False'];
  }

  if (currentQ.options.length >= 2) {
    questions.push(currentQ);
  }

  currentQ = null;
}

function normalizeAnswerToken(token) {
  const upper = String(token || '').trim().toUpperCase();
  if (['A', 'B', 'C', 'D', 'TRUE', 'FALSE'].includes(upper)) return upper;
  return null;
}

function answerTokenToIndex(token) {
  const t = normalizeAnswerToken(token);
  if (!t) return null;
  if (t === 'TRUE') return 0;
  if (t === 'FALSE') return 1;
  return ['A', 'B', 'C', 'D'].indexOf(t);
}

for (const rawLine of lines) {
  const line = rawLine.trim();
  if (!line) continue;

  if (/^ANSWER KEY$/i.test(line)) {
    inQuestionBlock = false;
    inAnswerKey = true;
    pushCurrentQuestion();
    continue;
  }

  if (/^NOTES$/i.test(line)) {
    inAnswerKey = false;
    continue;
  }

  if (inQuestionBlock) {
    if (/^={3,}$/.test(line) || /^-{3,}$/.test(line)) continue;
    if (/^GE7\s+SCIENCE/i.test(line)) continue;
    if (/^Directions:/i.test(line)) continue;
    if (/^UNIT\s+\d+/i.test(line)) continue;

    const qMatch = line.match(/^(\d+)\.\s+(.+)/);
    if (qMatch) {
      pushCurrentQuestion();
      const number = Number(qMatch[1]);
      const text = qMatch[2].trim();
      currentQ = {
        id: `sts-q${number}`,
        text,
        options: [],
        answer: 0,
        explanation: 'Refer to course materials.'
      };
      continue;
    }

    if (!currentQ) continue;

    const optMatch = line.match(/^([A-D])\)\s+(.+)/);
    if (optMatch) {
      currentQ.options.push(optMatch[2].trim());
      continue;
    }

    if (/^(?:\(?TRUE\)?|\(?FALSE\)?)$/i.test(line)) continue;

    // Question text continuation lines are appended.
    currentQ.text = `${currentQ.text} ${line}`.replace(/\s+/g, ' ').trim();
    continue;
  }

  if (inAnswerKey) {
    const matches = [...line.matchAll(/(\d+)\.\s*(A|B|C|D|TRUE|FALSE)\b/gi)];
    for (const match of matches) {
      const qNum = Number(match[1]);
      const token = normalizeAnswerToken(match[2]);
      if (token) {
        answerKey.set(qNum, token);
      }
    }
  }
}

pushCurrentQuestion();

for (const q of questions) {
  const qNum = Number(q.id.replace('sts-q', ''));
  const token = answerKey.get(qNum);
  const idx = answerTokenToIndex(token);

  if (idx === null) {
    q.answer = 0;
    continue;
  }

  // Normalize options for True/False items.
  if (token === 'TRUE' || token === 'FALSE') {
    q.options = ['True', 'False'];
  }

  q.answer = Math.max(0, Math.min(idx, q.options.length - 1));
  q.explanation = `Correct answer: ${token}`;
}

questions.sort((a, b) => {
  const aNum = Number(a.id.replace('sts-q', ''));
  const bNum = Number(b.id.replace('sts-q', ''));
  return aNum - bNum;
});

fs.writeFileSync(outputPath, `${JSON.stringify(questions, null, 2)}\n`, 'utf8');
console.log(`Parsed ${questions.length} STS questions with ${answerKey.size} answer key entries.`);
