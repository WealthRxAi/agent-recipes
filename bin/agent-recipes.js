#!/usr/bin/env node
'use strict';

/**
 * agent-recipes — tiny, zero-dependency CLI.
 *
 *   node bin/agent-recipes.js list
 *   node bin/agent-recipes.js list --category fix-bugs
 *   node bin/agent-recipes.js search "landing page"
 *   node bin/agent-recipes.js show ui-landing-from-notes
 *
 * No network. No dependencies. Reads recipes.json from the repo root.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DB_PATH = path.join(ROOT, 'recipes.json');

const useColor = process.stdout.isTTY && !process.env.NO_COLOR;
const c = (code, s) => (useColor ? `[${code}m${s}[0m` : s);
const bold = (s) => c('1', s);
const dim = (s) => c('2', s);
const cyan = (s) => c('36', s);
const green = (s) => c('32', s);
const yellow = (s) => c('33', s);

function loadRecipes() {
  if (!fs.existsSync(DB_PATH)) {
    console.error(
      'recipes.json not found. Run `npm run build` to generate it from data/part-*.json.'
    );
    process.exit(1);
  }
  try {
    const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
    return Array.isArray(data) ? data : data.recipes || [];
  } catch (err) {
    console.error('Could not parse recipes.json:', err.message);
    process.exit(1);
  }
}

function printRecipeLine(r) {
  console.log(
    `${green(r.id.padEnd(28))} ${dim(r.category.padEnd(18))} ${r.title}`
  );
}

function cmdList(args) {
  const recipes = loadRecipes();
  const catIdx = args.indexOf('--category');
  let filtered = recipes;
  if (catIdx !== -1 && args[catIdx + 1]) {
    const cat = args[catIdx + 1];
    filtered = recipes.filter((r) => r.category === cat);
  }
  if (!filtered.length) {
    console.log(yellow('No recipes found.'));
    return;
  }
  console.log(bold(`\n${filtered.length} recipes\n`));
  filtered.forEach(printRecipeLine);
  console.log(
    dim(`\nShow one with:  agent-recipes show <id>\n`)
  );
}

function cmdSearch(args) {
  const query = args.join(' ').trim().toLowerCase();
  if (!query) {
    console.error('Usage: agent-recipes search "<query>"');
    process.exit(1);
  }
  const recipes = loadRecipes();
  const hay = (r) =>
    [r.id, r.title, r.category, r.agent, r.use_case, r.prompt]
      .join(' ')
      .toLowerCase();
  const matches = recipes.filter((r) => hay(r).includes(query));
  if (!matches.length) {
    console.log(yellow(`No recipes match "${query}".`));
    return;
  }
  console.log(bold(`\n${matches.length} match(es) for "${query}"\n`));
  matches.forEach(printRecipeLine);
  console.log('');
}

function cmdShow(args) {
  const id = args[0];
  if (!id) {
    console.error('Usage: agent-recipes show <recipe-id>');
    process.exit(1);
  }
  const recipes = loadRecipes();
  const r =
    recipes.find((x) => x.id === id) ||
    recipes.find((x) => x.id.toLowerCase() === id.toLowerCase());
  if (!r) {
    console.error(yellow(`No recipe with id "${id}".`));
    console.error(dim('Try:  agent-recipes search "' + id + '"'));
    process.exit(1);
  }
  const line = '-'.repeat(60);
  console.log('');
  console.log(bold(cyan(r.title)));
  console.log(dim(`${r.id}  |  ${r.category}  |  best with: ${r.agent}`));
  console.log(line);
  console.log(bold('USE CASE'));
  console.log(r.use_case);
  console.log('\n' + bold('PROMPT  ') + dim('(copy everything below)'));
  console.log(line);
  console.log(r.prompt);
  console.log(line);
  console.log('\n' + bold('SAFETY NOTES'));
  console.log(r.safety_notes);
  console.log('\n' + bold('EXPECTED OUTPUT'));
  console.log(r.expected_output);
  console.log('');
}

function cmdHelp() {
  console.log(`
${bold('agent-recipes')} — copy-paste recipes for AI coding agents

${bold('Usage')}
  agent-recipes list                       List all recipes
  agent-recipes list --category fix-bugs   List one category
  agent-recipes search "<query>"           Full-text search
  agent-recipes show <recipe-id>           Print a full recipe

${bold('Examples')}
  node bin/agent-recipes.js list
  node bin/agent-recipes.js search "landing page"
  node bin/agent-recipes.js show ui-landing-from-notes
`);
}

function main() {
  const [, , cmd, ...rest] = process.argv;
  switch (cmd) {
    case 'list':
      return cmdList(rest);
    case 'search':
      return cmdSearch(rest);
    case 'show':
      return cmdShow(rest);
    case 'help':
    case '--help':
    case '-h':
    case undefined:
      return cmdHelp();
    default:
      console.error(yellow(`Unknown command: ${cmd}`));
      cmdHelp();
      process.exit(1);
  }
}

main();
