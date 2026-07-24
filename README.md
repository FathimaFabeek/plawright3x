# JavaScript Fundamentals — Learning & Practice

This repository contains **JavaScript language fundamentals** — variables, data types, operators, control flow, switch statements, user input methods, identifier rules, and interview question notes. *(Despite the repo name, this is not Playwright test automation code.)*

## Contents

- JavaScript basics and `let` concepts
- Literals and data types (number, string, boolean, null, undefined, BigInt)
- Operators (arithmetic, assignment, comparison, logical, ternary, nullish coalescing, increment/decrement)
- Conditional statements (if-else, grading systems)
- Switch statements (break, fall-through, grouping, strict comparison)
- User input methods (stdin, readline, prompt-sync, fs)
- Identifier rules and naming conventions
- Interview question notes and reference material

## Structure

| Directory | Description |
|---|---|
| `chapter_01_Basics/` | JavaScript fundamentals — Hello World, `let` and loops |
| `chapter_02_JS_concepts/` | *(empty / placeholder)* |
| `chapter_03_identifier/` | Identifier rules, naming conventions (camelCase, PascalCase, etc.) |
| `04_chapter_Literal/` | Literals, null vs undefined, numeric separators, Infinity/NaN, BigInt |
| `05_chapter_operator/` | Operators — 17 files covering arithmetic through nullish coalescing |
| `06_CHAPTER_STATEMENT/` | Conditional statements, grading systems, number-to-word switch |
| `07_chapter_switch/` | Switch statement examples — fall-through, grouping, strict comparison |
| `08_chapter_UserInputs/` | User input via stdin, readline, prompt-sync, and fs |
| `IQ_Notes/` | Interview question notes — identifier rules, keyword reference, VS Code shortcuts, source code pipeline |

## Topic Progression

Basics → Identifiers → Literals → Operators → Statements → Switch → User Inputs → Reference Notes

## Notes on running input examples

- Some example files in `08_chapter_UserInputs/` read from standard input using `fs.readFileSync(0, 'utf8')`.
- On Windows, after typing input you must send an EOF: press `Ctrl+Z` then `Enter` so Node.js can continue.
- As an alternative, run scripts with command-line arguments (e.g. `node script.js 123`) or use a prompt library like `readline` or `prompts` for interactive input.
