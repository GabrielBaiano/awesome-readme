#!/usr/bin/env node

import readline from 'readline';
import { colorize } from '../lib/utils.js';
import { config } from '../lib/config.js';
import { runInteractiveMode, runAutomatedMode, showFlagsHelp, renderMenu } from '../lib/ui.js';

// --- Main Execution ---

async function main() {
  const args = process.argv.slice(2);

  // Automated Setup (Flags)
  if (args.length > 0) {
    await runAutomatedMode(args);
    return;
  }

  // Interactive Modes
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    const langEnv = (process.env.LC_ALL || process.env.LANG || '').toLowerCase();
    const defaultLang = langEnv.startsWith('pt') ? 'pt' : (langEnv.startsWith('es') ? 'es' : 'en');
    const welcomeText = config.uiMessages[defaultLang]?.welcome || config.uiMessages.en.welcome;
    console.log(colorize(welcomeText, 'cyan'));
    console.log(colorize('=====================================\n', 'cyan'));
    
    // Config-driven Main Menu
    const action = await renderMenu(rl, config.menus.main);

    switch (action) {
      case 'runInteractiveMode':
        await runInteractiveMode(rl);
        break;
      case 'showFlagsHelp':
        showFlagsHelp();
        break;
      default:
        console.log(colorize('❌ Invalid choice.', 'red'));
    }

  } catch (error) {
    console.error(colorize(`\n❌ Error: ${error.message}`, 'red'));
  } finally {
    rl.close();
  }
}

main();
