import fs from 'fs';
const path = 'c:/Users/yunus/Desktop/Uygulama/src/data/b1b2-seed-words.ts';
let content = fs.readFileSync(path, 'utf8');
let lines = content.split('\n');
let fixedLines = [];
let count = 0;
lines.forEach(line => {
    // Basic duplication check: don't add if the NEXT line already has it
    fixedLines.push(line);
    if (line.includes('"turkishMeaning":')) {
        let indent = line.match(/^\s*/)[0];
        fixedLines.push(`${indent}"turkishDefinition": "",`);
        count++;
    }
});
fs.writeFileSync(path, fixedLines.join('\n'));
console.log(`Added ${count} turkishDefinition fields.`);
