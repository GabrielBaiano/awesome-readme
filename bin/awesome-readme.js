#!/usr/bin/env node

import readline from 'readline';
import { colorize } from '../lib/utils.js';
import { config } from '../lib/config.js';
import { runWizardMode, runAddSpecificMode, runAutomatedMode, showFlagsHelp, askQuestion, renderMenu } from '../lib/ui.js';

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
    console.log(colorize('\n🎉 Welcome to Awesome README Templates!', 'cyan'));
    console.log(colorize('=====================================\n', 'cyan'));
    
    // Config-driven Main Menu
    const action = await renderMenu(rl, config.menus.main);

    switch (action) {
      case 'runWizardMode':
        await runWizardMode(rl);
        break;
      case 'runAddSpecificMode':
        await runAddSpecificMode(rl);
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
