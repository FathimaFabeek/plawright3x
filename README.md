# Learning Playwright 3x

This repository contains JavaScript learning notes and practice files for core programming concepts, operators, identifiers, and basic examples.

## Contents

- JavaScript basics
- Literals and data types
- Operators and comparisons
- Statements (conditionals, grading system)
- Switch statements and grouping
- User input methods (stdin, prompt, readline, fs)
- Identifier rules and IQ notes
- Practice files for learning and revision

## Structure

| Directory | Description |
|---|---|
| `chapter_01_Basics/` | JavaScript fundamentals |
| `chapter_02_JS_concepts/` | Core JS concepts |
| `chapter_03_identifier/` | Identifier rules and notes |
| `04_chapter_Literal/` | Literals and data types |
| `05_chapter_operator/` | Operators and comparisons |
| `06_CHAPTER_STATEMENT/` | Conditional statements, grading system |
| `07_chapter_switch/` | Switch statement examples and grouping |
| `08_chapter_UserInputs/` | User input via stdin, prompt, readline, fs |
| `IQ_Notes/` | Interview question notes |

## Purpose

This workspace is intended for learning and practicing JavaScript fundamentals in a simple, organized way.

## Notes on running input examples

- Some example files in `08_chapter_UserInputs/` read from standard input using `fs.readFileSync(0, 'utf8')`.
- On Windows, after typing input you must send an EOF: press `Ctrl+Z` then `Enter` so Node.js can continue.
- As an alternative, run scripts with command-line arguments (e.g. `node script.js 123`) or use a prompt library like `readline` or `prompts` for interactive input.
