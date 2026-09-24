import fs from 'fs';
import path from 'path';

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m'
};

export function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`;
}

export function sanitizeMarkdown(content, metadata) {
  if (!content) return content;

  // 1. If metadata is provided, replace placeholders
  if (metadata) {
    Object.keys(metadata).forEach(key => {
      const value = metadata[key];
      if (value !== undefined && value !== null) {
        const regex = new RegExp(`\\[${key}\\]`, 'g');
        content = content.replace(regex, value);
      }
    });
  }

  // 2. Clean up unprovided optional badges and links
  if (!metadata?.BUYMEACOFFEE_USERNAME || metadata.BUYMEACOFFEE_USERNAME === '[BUYMEACOFFEE_USERNAME]') {
    content = content.replace(/<a\s+href="https:\/\/buymeacoffee\.com\/[^"]*"[^>]*>[\s\S]*?<\/a>\s*/gi, '');
  }

  if (!metadata?.PACKAGE_NAME || metadata.PACKAGE_NAME === '[PACKAGE_NAME]') {
    content = content.replace(/<a\s+href="https:\/\/www\.npmjs\.com\/package\/\[PACKAGE_NAME\]"[^>]*>[\s\S]*?<\/a>\s*/gi, '');
  }

  if (!metadata?.DEMO_URL || metadata.DEMO_URL === '[DEMO_URL]') {
    content = content.replace(/<a\s+href="\[DEMO_URL\]"[^>]*>[\s\S]*?<\/a>\s*/gi, '');
  }

  if (!metadata?.DOCS_URL || metadata.DOCS_URL === '[DOCS_URL]') {
    content = content.replace(/<a\s+href="\[DOCS_URL\]"[^>]*>[\s\S]*?<\/a>\s*/gi, '');
  }

  if (!metadata?.PROJECT_URL || metadata.PROJECT_URL === '[PROJECT_URL]') {
    content = content.replace(/<a\s+href="\[PROJECT_URL\]"[^>]*>[\s\S]*?<\/a>\s*/gi, '');
  }

  if (!metadata?.TWITTER_URL || metadata.TWITTER_URL === '[TWITTER_URL]') {
    content = content.replace(/\[!\[Twitter\]\([^)]+\)\]\(\[TWITTER_URL\]\)/gi, '');
  }

  // 3. Clean up empty placeholder image blocks
  content = content.replace(/<p\s+align="center">\s*<img\s+src="\[LOGO_PATH\]"[^>]*\/?>\s*<\/p>/gi, '');
  content = content.replace(/<p\s+align="center">\s*<img\s+src="\[LOGO_URL\]"[^>]*\/?>\s*<\/p>/gi, '');
  content = content.replace(/<p\s+align="center">\s*<img\s+src="\[SHOWCASE_IMAGE_URL\]"[^>]*\/?>\s*<\/p>/gi, '');

  // 4. Normalize excessive newlines
  content = content.replace(/\n{3,}/g, '\n\n');

  return content;
}

export function processFile(src, dest, modifier, options) {
  if (fs.existsSync(src)) {
    if (fs.existsSync(dest)) {
      console.log(colorize(`⚠️  ${path.basename(dest)} already exists. Skipping.`, 'yellow'));
    } else {
      const destDir = path.dirname(dest);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      let content = fs.readFileSync(src, 'utf8');
      
      // Perform variable replacement and sanitization
      content = sanitizeMarkdown(content, options?.metadata);

      if (modifier) {
        content = modifier(content);
      }
      
      fs.writeFileSync(dest, content);
      console.log(colorize(`✅ Created ${path.basename(dest)}`, 'green'));
    }
  } else {
    console.log(colorize(`⚠️  Source ${path.basename(src)} not found.`, 'red'));
  }
}

export function copyDir(src, dest, options) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        
        // Strip -template suffix from filename if present
        let destName = entry.name.replace(/-template(\.[^.]+)$/, '$1');
        const destPath = path.join(dest, destName);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath, options);
        } else {
            if (!fs.existsSync(destPath)) {
                processFile(srcPath, destPath, null, options);
            }
        }
    }
}

export function parseArgs(args) {
  const flags = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const parts = arg.substring(2).split('=');
      const key = parts[0];
      let value = parts[1];

      if (!value) {
        // Check if next arg is a value (not starting with --)
        if (i + 1 < args.length && !args[i + 1].startsWith('--')) {
          value = args[i + 1];
          i++; // Skip next arg
        } else {
          value = true;
        }
      }
      flags[key] = value;
    }
  }
  return flags;
}

