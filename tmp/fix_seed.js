const fs = require('fs');
const path = 'c:/Users/yunus/Desktop/Uygulama/src/data/b1b2-seed-words.ts';
let lines = fs.readFileSync(path, 'utf8').split('\n');
let fixedLines = [];
lines.forEach(line => {
  fixedLines.push(line);
  if (line.includes('"turkishMeaning":')) {
    const indent = line.substring(0, line.indexOf('"'));
    fixedLines.push(`${indent}"turkishDefinition": "",`);
  }
});
fs.writeFileSync(path, fixedLines.join('\n'));
console.log('Fixed ', fixedLines.length, ' lines');
