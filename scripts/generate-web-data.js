import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { config, templates, licenses } from '../lib/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(__dirname, '..', 'website', 'data.json');
const webPublicDir = path.dirname(outputPath);

if (!fs.existsSync(webPublicDir)) {
    fs.mkdirSync(webPublicDir, { recursive: true });
}

// Flatten and Enrich Templates for the Frontend
function processTemplates(list) {
    return list.map(item => {
        if (item.type === 'group') {
            return {
                ...item,
                children: processTemplates(item.children)
            };
        }
        
        // Read content for all configured languages
        const contentMap = {};
        
        // iterate over config.languages keys
        Object.keys(config.languages).forEach(lang => {
             // Only try to read if we have a specific file. 
             // Folders (type: 'folder') use 'src' and we can't easily preview them here yet.
             if (item.file) {
                 // Logic from installer: templates/<lang>-template/<file>
                 let src = path.join(__dirname, '..', 'templates', `${lang}-template`, item.file);
                 
                 if (fs.existsSync(src)) {
                     contentMap[lang] = fs.readFileSync(src, 'utf8');
                 } else {
                     contentMap[lang] = null; 
                 }
             } else {
                 contentMap[lang] = null;
             }
        });

        return {
            ...item,
            content: contentMap // Now an object: { en: "...", pt: "..." }
        };
    });
}

const data = {
    languages: config.languages,
    licenses: licenses,
    templates: processTemplates(templates),
    readme: {} // New field for README content
};

// Explicitly fetch README-template.md for all languages
Object.keys(config.languages).forEach(lang => {
    // Logic: templates/<lang>-template/README-template.md
    const readmePath = path.join(__dirname, '..', 'templates', `${lang}-template`, 'README-template.md');
    if (fs.existsSync(readmePath)) {
        data.readme[lang] = fs.readFileSync(readmePath, 'utf8');
    } else {
        data.readme[lang] = null;
    }
});

fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
console.log(`✅ Web data generated at ${outputPath}`);
