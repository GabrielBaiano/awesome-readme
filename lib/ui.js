import { config, licenses, templates, readmeStyles, templateStyles } from './config.js';
import { colorize, parseArgs } from './utils.js';
import { performInstallation } from './installer.js';

/**
 * Generic function to render a menu from config
 * @param {Object} rl - Readline interface
 * @param {Object} menuConfig - Configuration for the menu (header, options)
 * @returns {Promise<string>} - The action key selected
 */
export async function renderMenu(rl, menuConfig) {
  console.log(colorize('\n' + menuConfig.header, 'cyan'));
  
  menuConfig.options.forEach(opt => {
    console.log(`${opt.value}. ${opt.label}`);
  });

  const choice = await askQuestion(rl, '\nEnter choice: ');
  const selectedOption = menuConfig.options.find(o => o.value === choice.trim());
  
  return selectedOption ? selectedOption.action : null;
}



/**
 * Recursively prompts for template selection, handling groups
 * @param {Object} rl 
 * @param {Array} items - List of templates or groups
 * @param {boolean} isSubMenu - If true, adds a "Back" option (handled by caller context mostly)
 */
async function promptTemplateSelection(rl, items) {
  items.forEach((item, i) => {
    const prefix = item.type === 'group' ? '📂 ' : '';
    console.log(`${i + 1}. ${prefix}${item.name}`);
  });
  console.log('0. Done / All of the above (if simplified)');
  console.log('Enter comma-separated numbers.');

  const input = await askQuestion(rl, 'Choices: ');
  const selected = [];
  
  if (input.trim() === '0') return selected; // Or handle "All" if that's the desired behavior

  const indices = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
  
  for (const i of indices) {
    const item = items[i - 1];
    if (!item) continue;

    if (item.type === 'group') {
      // Prompt for group handling
      console.log(colorize(`\n📂 You selected group: ${item.name}`, 'cyan'));
      console.log('1. Install Everything in this group');
      console.log('2. Select Specific items');
      const groupChoice = await askQuestion(rl, 'Choice (1-2): ');
      
      if (groupChoice.trim() === '1') {
        selected.push(...item.children); // Flatten children
      } else {
        const childrenSelected = await promptTemplateSelection(rl, item.children);
        selected.push(...childrenSelected);
      }
    } else {
      selected.push(item);
    }
  }

  return selected;
}

/**
 * Interactive Mode - Drill down approach
 */
export async function runInteractiveMode(rl) {
  console.log(colorize('\n🧩 Interactive Template Selection', 'blue'));
  
  // 1. Language Selection
  console.log(colorize('\n🌐 Select Target Language:', 'yellow'));
  const availableLangs = Object.keys(config.languages);
  availableLangs.forEach((l, i) => console.log(`${i + 1}. ${config.languages[l].name} (${l})`));
  const langChoice = await askQuestion(rl, `Choice (1-${availableLangs.length}): `);
  const selectedLang = availableLangs[parseInt(langChoice) - 1] || 'en';

  const isMain = await askQuestion(rl, `Is ${selectedLang} the main language of the project? (y/n): `);
  const isMainBool = isMain.toLowerCase().startsWith('y');

  // Shopping cart of selected extras
  const cart = [];
  const selectedStyles = {};

  const inCart = (id) => cart.some(item => item.id === id);

  // 2. Navigation Loop
  let currentContext = templates;
  let history = []; // Stack to keep track of previous menus

  while (true) {
    console.log(colorize('\n📦 Available Templates:', 'yellow'));
    if (history.length > 0) console.log('0. ⬅️  Back');
    
    currentContext.forEach((e, i) => {
        const prefix = e.type === 'group' ? '📂 ' : '📄 ';
        const suffix = inCart(e.id) ? colorize(' [ADDED]', 'green') : '';
        console.log(`${i + 1}. ${prefix}${e.name}${suffix}`);
    });

    if (cart.length > 0) {
        console.log(colorize(`\n🛒 Cart contains ${cart.length} item(s):`, 'green'));
        cart.forEach(item => console.log(`  - ${item.name}`));
        console.log('99. 🚀 Proceed to Installation');
    }

    const choice = await askQuestion(rl, 'Enter selection number: ');
    const index = parseInt(choice.trim());

    if (index === 99 && cart.length > 0) {
        break;
    }

    if (index === 0 && history.length > 0) {
        currentContext = history.pop();
        continue;
    }

    const selectedItem = currentContext[index - 1];
    if (!selectedItem) {
        console.log(colorize('❌ Invalid selection.', 'red'));
        continue;
    }

    if (selectedItem.type === 'group') {
        history.push(currentContext);
        currentContext = selectedItem.children;
    } else {
        if (inCart(selectedItem.id)) {
            console.log(colorize(`⚠️  "${selectedItem.name}" is already in your cart.`, 'yellow'));
            const remove = await askQuestion(rl, 'Remove it? (y/n): ');
            if (remove.toLowerCase().startsWith('y')) {
                const cartIndex = cart.findIndex(item => item.id === selectedItem.id);
                cart.splice(cartIndex, 1);
                delete selectedStyles[selectedItem.id];
                console.log(colorize(`🗑️  Removed "${selectedItem.name}" from cart.`, 'magenta'));
            }
        } else {
            cart.push(selectedItem);
            console.log(colorize(`🛒 Added "${selectedItem.name}" to cart.`, 'green'));

            // Ask for style if the template has styles (like CONTRIBUTING, CHANGELOG)
            const templateType = selectedItem.id;
            const availableStyles = templateStyles[templateType];
            if (availableStyles) {
                 console.log(colorize(`\n🎨 Select ${selectedItem.name} Style:`, 'yellow'));
                 availableStyles.forEach((s, i) => console.log(`${i + 1}. ${s.name}`));
                 const styleChoice = await askQuestion(rl, `Choice (1-${availableStyles.length}): `);
                 const style = availableStyles[parseInt(styleChoice) - 1] || availableStyles[0];
                 selectedStyles[selectedItem.id] = style;
            }
        }

        const more = await askQuestion(rl, '\nSelect more templates? (y/n): ');
        if (!more.toLowerCase().startsWith('y')) break;
    }
  }

  // Ask for README
  const wantReadme = await askQuestion(rl, '\nDo you want to install a README.md file? (y/n): ');
  const skipReadme = !wantReadme.toLowerCase().startsWith('y');
  if (!skipReadme) {
      console.log(colorize('\n🎨 Select README Style:', 'yellow'));
      readmeStyles.forEach((s, i) => console.log(`${i + 1}. ${s.name}`));
      const styleChoice = await askQuestion(rl, `Choice (1-${readmeStyles.length}): `);
      const readmeStyleObj = readmeStyles[parseInt(styleChoice) - 1] || readmeStyles[0];
      selectedStyles['readme'] = readmeStyleObj;
  }

  if (cart.length === 0 && skipReadme) {
      console.log(colorize('\n❌ No templates selected. Exiting.', 'red'));
      return;
  }

  // Ask for LICENSE
  let selectedLicense = null;
  const wantLicense = await askQuestion(rl, '\nDo you want to add a LICENSE file? (y/n): ');
  if (wantLicense.toLowerCase().startsWith('y')) {
      console.log(colorize('\n📄 Select LICENSE Template:', 'yellow'));
      licenses.forEach((l, i) => console.log(`${i + 1}. ${l.name}`));
      const licChoice = await askQuestion(rl, `Choice (1-${licenses.length}): `);
      selectedLicense = licenses[parseInt(licChoice) - 1] || licenses[0];
  }

  // Collect metadata ONCE at the end
  const metadata = await collectProjectMetadata(rl);

  // Perform the comprehensive installation
  await performInstallation(
      isMainBool ? selectedLang : 'ignore', 
      isMainBool ? [] : [selectedLang], 
      selectedLicense, 
      cart, 
      skipReadme, 
      metadata,
      selectedStyles
  );
}

/**
 * Collects project metadata from the user
 */
export async function collectProjectMetadata(rl) {
    console.log(colorize('\n📝 Project Information (Press Enter to skip)', 'blue'));
    
    const name = await askQuestion(rl, 'Project Name: ');
    const description = await askQuestion(rl, 'Project Description: ');
    const tagline = await askQuestion(rl, 'Project Tagline (short): ');
    const author = await askQuestion(rl, 'Author Name: ');
    const github = await askQuestion(rl, 'GitHub Username: ');
    const twitter = await askQuestion(rl, 'Twitter/X Username: ');
    const email = await askQuestion(rl, 'Contact Email: ');
    const pkgName = await askQuestion(rl, 'NPM Package Name: ');
    const projectUrl = await askQuestion(rl, 'Project URL (e.g. Website): ');
    const demoUrl = await askQuestion(rl, 'Demo URL: ');
    const docsUrl = await askQuestion(rl, 'Documentation URL: ');

    return {
        PROJECT_NAME: name || '[PROJECT_NAME]',
        PROJECT_DESCRIPTION: description || '[PROJECT_DESCRIPTION]',
        PROJECT_TAGLINE: tagline || '[PROJECT_TAGLINE]',
        AUTHOR_NAME: author || '[AUTHOR_NAME]',
        GITHUB_USERNAME: github || '[GITHUB_USERNAME]',
        GITHUB_PROFILE_URL: github ? `https://github.com/${github}` : '[GITHUB_PROFILE_URL]',
        TWITTER_HANDLE: twitter || '[TWITTER_HANDLE]',
        TWITTER_URL: twitter ? `https://twitter.com/${twitter}` : '[TWITTER_URL]',
        CONTACT_EMAIL: email || '[CONTACT_EMAIL]',
        PACKAGE_NAME: pkgName || '[PACKAGE_NAME]',
        PROJECT_URL: projectUrl || '[PROJECT_URL]',
        DEMO_URL: demoUrl || '[DEMO_URL]',
        DOCS_URL: docsUrl || '[DOCS_URL]',
        BUYMEACOFFEE_USERNAME: github || '[BUYMEACOFFEE_USERNAME]',
        YEAR: new Date().getFullYear()
    };
}

export async function runAutomatedMode(args) {
  const flags = parseArgs(args);
  
  if (flags.help) {
    showFlagsHelp();
    return;
  }

  const mainLang = flags['main-lang'] || flags.lang || 'en'; // Simple fallback
  let additionalLangs = [];
  
  if (flags.langs) {
    additionalLangs = flags.langs.split(',').map(l => l.trim().toLowerCase());
  }

  // License
  let selectedLicense = null;
  if (flags.license) {
    selectedLicense = licenses.find(l => l.name.toLowerCase().includes(flags.license.toLowerCase())) || licenses[0];
  }

  // Templates
  const selectedTemplates = [];
  // Use a recursive helper to find templates by ID including in groups
  const findTemplateById = (id, list) => {
      for (const item of list) {
          if (item.id === id) return item;
          if (item.type === 'group') {
              const found = findTemplateById(id, item.children);
              if (found) return found;
          }
      }
      return null;
  };

  const flattenTemplates = (list) => {
      let flat = [];
      list.forEach(item => {
          if (item.type === 'group') flat.push(...flattenTemplates(item.children));
          else flat.push(item);
      });
      return flat;
  };

  if (flags.all) {
    selectedTemplates.push(...flattenTemplates(templates));
  } else {
    // Check for specific flags matching template IDs
    // We need to iterate over all possible templates to check if their flag is present
    const allTemplates = flattenTemplates(templates);
    allTemplates.forEach(t => {
        if (flags[t.id] || flags['with-' + t.id]) {
            selectedTemplates.push(t);
        }
    });

    // Also check for group IDs to install whole group
    templates.forEach(t => {
        if (t.type === 'group' && (flags[t.id] || flags['with-' + t.id])) {
            selectedTemplates.push(...flattenTemplates(t.children));
        }
    });
  }

  await performInstallation(mainLang, additionalLangs, selectedLicense, selectedTemplates);
}

export function showFlagsHelp() {
  console.log(colorize('\n🤖 Automated Setup Flags:', 'cyan'));
  console.log('  --main-lang <code>       Set main language (root) (default: en)');
  console.log('  --langs <code,code>      Set additional languages (e.g., pt,fr)');
  console.log('  --license <name>         Select license (e.g., mit, apache)');
  console.log('  --all                    Install all templates');
  console.log('  --with-<template_id>     Install specific template (e.g., --with-roadmap)');
  console.log('  --with-<group_id>        Install specific group (e.g., --with-github)');
  console.log('\nSupported Languages: ' + Object.keys(config.languages).join(', '));
}

export function askQuestion(rl, question) {
  return new Promise(resolve => rl.question(question, resolve));
}

