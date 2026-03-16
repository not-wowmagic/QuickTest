import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src', 'data');
const quizzesDir = path.join(__dirname, 'quizzes');

function parseEthics(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let mapped = [];
  let idCounter = 1;

  for (const week of data.weeks || []) {
    for (const q of week.questions || []) {
      if (q.type === 'multiple_choice') {
        const letters = ['A', 'B', 'C', 'D'];
        const options = letters.map(l => q.choices[l] || `Option ${l}`);
        const answerIdx = letters.indexOf(q.answer);
        mapped.push({
          id: `ethics-q${idCounter++}`,
          text: q.question,
          options,
          answer: answerIdx >= 0 ? answerIdx : 0,
          explanation: `Correct answer is ${q.answer}`
        });
      } else if (q.type === 'true_or_false') {
        const options = ['True', 'False'];
        const answerIdx = q.answer.toLowerCase() === 'true' ? 0 : 1;
        mapped.push({
          id: `ethics-q${idCounter++}`,
          text: q.question,
          options,
          answer: answerIdx,
          explanation: `Correct answer is ${q.answer}`
        });
      }
    }
  }
  return mapped;
}

function parseSelf(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let mapped = [];
  let idCounter = 1;

  for (const part of data.parts || []) {
    for (const q of part.questions || []) {
      if (part.part.includes('Multiple Choice')) {
        const letters = ['A', 'B', 'C', 'D'];
        const options = letters.map(l => q.choices[l] || (l === 'A' ? 'True' : 'False')); 
        const answerIdx = letters.indexOf(q.answer);
        mapped.push({
          id: `self-q${idCounter++}`,
          text: q.question,
          options,
          answer: answerIdx >= 0 ? answerIdx : 0,
          explanation: `Correct answer: ${q.answer}`
        });
      } else {
        const options = ['TRUE', 'FALSE'];
        const isTrue = q.answer.toUpperCase() === 'TRUE';
        mapped.push({
          id: `self-q${idCounter++}`,
          text: q.question,
          options,
          answer: isTrue ? 0 : 1,
          explanation: `The correct answer is ${q.answer}`
        });
      }
    }
  }
  return mapped;
}

function parseWorld(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let mapped = [];
  let idCounter = 1;

  for (const q of data) {
    const letters = ['A', 'B', 'C', 'D'];
    const options = q.choices || letters.map(l => l);
    // Find the index of the correct answer string in the choices array
    const answerIdx = options.findIndex(opt => opt === q.correct);
    
    mapped.push({
      id: `world-q${idCounter++}`,
      text: q.question,
      options,
      answer: answerIdx >= 0 ? answerIdx : 0,
      explanation: `Correct answer: ${q.correct}`
    });
  }
  return mapped;
}

function parseSTS(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  let mapped = [];
  let idCounter = 1;
  
  let currentQ = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const match = line.match(/^(\d+)\.\s+(.*)/);
    if (match) {
      if (currentQ) {
         if (currentQ.options.length === 0) {
            currentQ.options = ['TRUE', 'FALSE'];
         }
         mapped.push(currentQ);
      }
      currentQ = {
        id: `sts-q${idCounter++}`,
        text: match[2],
        options: [],
        answer: 0,
        explanation: 'Answers are recorded in the answer key.'
      };
      
      if (line.includes('[TRUE or FALSE]')) {
         currentQ.options = ['TRUE', 'FALSE'];
      }
    } else if (currentQ && /^[A-D]\)/.test(line)) {
      currentQ.options.push(line.substring(3).trim());
    } else if (line.startsWith('====================================================') && lines[i+1] && lines[i+1].includes('ANSWER KEY')) {
       if (currentQ) {
          if (currentQ.options.length === 0) currentQ.options = ['TRUE', 'FALSE'];
          mapped.push(currentQ);
          currentQ = null;
       }
       
       i += 2;
       while (i < lines.length && !lines[i].includes('=======')) {
          const l = lines[i].trim();
          if (l) {
             const parts = l.split(/\s{2,}/);
             for (const p of parts) {
                const kv = p.split('.');
                if (kv.length >= 2) {
                   const qNum = parseInt(kv[0].trim());
                   const ans = kv[1].trim();
                   if (qNum > 0 && qNum <= mapped.length) {
                      const qObj = mapped[qNum - 1];
                      if (ans === 'TRUE') qObj.answer = 0;
                      else if (ans === 'FALSE') qObj.answer = 1;
                      else if (ans === 'A') qObj.answer = 0;
                      else if (ans === 'B') qObj.answer = 1;
                      else if (ans === 'C') qObj.answer = 2;
                      else if (ans === 'D') qObj.answer = 3;
                      
                      const letterList = ['A','B','C','D'];
                      if (ans === 'TRUE') qObj.explanation = `Correct answer is TRUE`;
                      else if (ans === 'FALSE') qObj.explanation = `Correct answer is FALSE`;
                      else qObj.explanation = `Correct answer: ${letterList[qObj.answer]}) ${qObj.options[qObj.answer]}`;
                   }
                }
             }
          }
          i++;
       }
    }
  }
  if (currentQ) mapped.push(currentQ);
  return mapped;
}

const parseAll = () => {
   const ethicsData = parseEthics(path.join(quizzesDir, 'Ethics_Quiz_100items.json'));
   const selfData = parseSelf(path.join(quizzesDir, 'GE1_UTS_Self_Quiz.json'));
   const worldData = parseWorld(path.join(quizzesDir, 'GE3_TCW_Week78_Quiz.json'));
   const stsData = parseSTS(path.join(quizzesDir, 'GE7_STS_Quiz.txt'));
   
   console.log('Ethics parsed:', ethicsData.length);
   console.log('Self parsed:', selfData.length);
   console.log('World parsed:', worldData.length);
   console.log('STS parsed:', stsData.length);
   
   const template = `// src/data/seedQuestions.js

export const SUBJECTS = {
  ethics: {
    id: 'ethics',
    title: 'Ethics',
    description: 'Explore moral principles and what makes actions right or wrong.',
    icon: '⚖️',
    tags: ['Philosophy', 'Morality'],
    questions: ${JSON.stringify(ethicsData, null, 2)}
  },
  self: {
    id: 'self',
    title: 'Understanding the Self',
    description: 'Examine personal identity, psychology, and cognitive development.',
    icon: '🧠',
    tags: ['Psychology', 'Identity'],
    questions: ${JSON.stringify(selfData, null, 2)}
  },
  world: {
    id: 'world',
    title: 'The Contemporary World',
    description: 'Analyze globalization, global economies, and modern societies.',
    icon: '🌍',
    tags: ['Global Studies', 'Modernity'],
    questions: ${JSON.stringify(worldData, null, 2)}
  },
  sts: {
    id: 'sts',
    title: 'Science, Technology & Society',
    description: 'Examine the connections between scientific knowledge, technological innovations, and society.',
    icon: '🧬',
    tags: ['Science', 'Technology', 'Society'],
    questions: ${JSON.stringify(stsData, null, 2)}
  }
};
`;

   fs.writeFileSync(path.join(srcDir, 'seedQuestions.js'), template);
   console.log('Done generating seedQuestions.js!');
};

parseAll();
