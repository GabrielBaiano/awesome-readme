import { processFile } from '../lib/utils.js';
import fs from 'fs';
import path from 'path';

const testFile = path.join(process.cwd(), 'scratch', 'test-readme.md');
const templateFile = path.join(process.cwd(), 'scratch', 'template.md');

// Create template
fs.writeFileSync(templateFile, 'Project: [PROJECT_NAME]\nAuthor: [AUTHOR_NAME]');

const metadata = {
    PROJECT_NAME: 'Test Project',
    AUTHOR_NAME: 'Antigravity'
};

processFile(templateFile, testFile, null, { metadata });

const output = fs.readFileSync(testFile, 'utf8');
console.log('--- OUTPUT ---');
console.log(output);
console.log('--------------');

if (output.includes('Test Project') && output.includes('Antigravity')) {
    console.log('✅ Replacement test passed!');
} else {
    console.log('❌ Replacement test failed!');
}
