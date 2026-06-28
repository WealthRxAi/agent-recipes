#!/usr/bin/env node
'use strict';

/**
 * Validates recipes.json. Used in CI (.github/workflows/validate.yml).
 * Exits 1 on any problem so the build fails loudly.
 *
 * Every recipe must have non-empty: id, title, category, agent, use_case,
 * prompt, safety_notes, expected_output. IDs must be unique and kebab-case.
 * Category must be one of the allowed categories.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DB_PATH = path.join(ROOT, 'recipes.json');

const REQUIRED_FIELDS = [
  'id',
  'title',
  'category',
  'agent',
  'use_case',
  'prompt',
  'safety_notes',
  'expected_output',
];

const ALLOWED_CATEGORIES = [
  'build-a-saas',
  'fix-bugs',
  'refactor-code',
  'design-ui',
  'write-tests',
  'ship-mvp',
  'create-content',
  'automate-business',
  'analyze-repo',
  'launch-product',
];

function fail(msg) {
  console.error(`[31m✗ ${msg}[0m`);
  process.exitCode = 1;
}

function main() {
  if (!fs.existsSync(DB_PATH)) {
    fail('recipes.json not found. Run `npm run build` first.');
    process.exit(1);
  }

  let recipes;
  try {
    recipes = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
  } catch (err) {
    fail(`recipes.json is not valid JSON: ${err.message}`);
    process.exit(1);
  }

  if (!Array.isArray(recipes)) {
    fail('recipes.json must be a JSON array.');
    process.exit(1);
  }

  if (recipes.length === 0) {
    fail('recipes.json contains zero recipes.');
    process.exit(1);
  }

  const seenIds = new Set();
  let errors = 0;

  recipes.forEach((r, i) => {
    const label = r && r.id ? `recipe "${r.id}"` : `recipe #${i + 1}`;

    if (typeof r !== 'object' || r === null) {
      fail(`${label} is not an object.`);
      errors++;
      return;
    }

    for (const field of REQUIRED_FIELDS) {
      if (!(field in r)) {
        fail(`${label} is missing required field "${field}".`);
        errors++;
      } else if (typeof r[field] !== 'string' || r[field].trim() === '') {
        fail(`${label} has empty or non-string "${field}".`);
        errors++;
      }
    }

    if (r.id) {
      if (seenIds.has(r.id)) {
        fail(`Duplicate id "${r.id}".`);
        errors++;
      }
      seenIds.add(r.id);
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(r.id)) {
        fail(`${label} id is not kebab-case.`);
        errors++;
      }
    }

    if (r.category && !ALLOWED_CATEGORIES.includes(r.category)) {
      fail(
        `${label} has unknown category "${r.category}". Allowed: ${ALLOWED_CATEGORIES.join(', ')}`
      );
      errors++;
    }
  });

  if (errors > 0) {
    console.error(`\n[31mValidation failed with ${errors} error(s).[0m`);
    process.exit(1);
  }

  console.log(
    `[32m✓ ${recipes.length} recipes valid across ${new Set(
      recipes.map((r) => r.category)
    ).size} categories.[0m`
  );
}

main();
