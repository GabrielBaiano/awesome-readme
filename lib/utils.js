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

export function processFile(src, dest, modifier) {
  if (fs.existsSync(src)) {
    if (fs.existsSync(dest)) {
      console.log(colorize(`⚠️  ${path.basename(dest)} already exists. Skipping.`, 'yellow'));
    } else {
      const destDir = path.dirname(dest);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      let content = fs.readFileSync(src, 'utf8');
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

export function copyDir(src, dest) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        
        // Strip -template suffix from filename if present
        let destName = entry.name.replace(/-template(\.[^.]+)$/, '$1');
        const destPath = path.join(dest, destName);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            if (!fs.existsSync(destPath)) {
                fs.copyFileSync(srcPath, destPath);
                console.log(colorize(`✅ Created ${path.basename(destPath)}`, 'green'));
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

