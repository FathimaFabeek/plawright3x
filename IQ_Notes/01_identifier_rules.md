# JavaScript Identifier Rules

## What is an Identifier?
An identifier is a name given to variables, functions, classes, objects, or labels in JavaScript.

## Rules for Naming Identifiers

### 1. **Allowed Characters**
- Letters (A-Z, a-z)
- Digits (0-9)
- Underscore (`_`)
- Dollar sign (`$`)

### 2. **Cannot Start with a Digit**
```javascript
let 1name;    // ❌ SyntaxError
let name1;    // ✅ Valid
```

### 3. **Case-Sensitive**
```javascript
let name = "Alice";
let Name = "Bob";
// name and Name are two different variables
```

### 4. **Reserved Keywords Cannot Be Used**
```javascript
let let;      // ❌ SyntaxError
let if;       // ❌ SyntaxError
let return;   // ❌ SyntaxError
```

**List of reserved keywords:**
- `await`, `break`, `case`, `catch`, `class`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `function`, `if`, `import`, `in`, `instanceof`, `let`, `new`, `of`, `return`, `static`, `super`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with`, `yield`

### 5. **Unicode Support**
JavaScript allows Unicode characters in identifiers (ES6+), including emojis.
```javascript
let 名字 = "小明";    // ✅ Valid (Chinese)
let $money = 100;     // ✅ Valid
let _privateVar = 42; // ✅ Valid
let π = 3.14159;      // ✅ Valid (Greek letter)
```

## Naming Conventions (Not Rules, but Best Practices)

| Convention | Example | When to Use |
|---|---|---|
| **camelCase** | `firstName`, `getUserData` | Variables, functions |
| **PascalCase** | `UserProfile`, `HttpClient` | Classes, constructors |
| **UPPER_SNAKE_CASE** | `MAX_LIMIT`, `API_KEY` | Constants (true constants) |
| **_prefix** | `_privateVar` | Private/internal (convention only) |
| **$prefix** | `$element` | DOM references, jQuery |

## Examples

```javascript
// ✅ Valid identifiers
let userName = "John";
const MAX_ATTEMPTS = 3;
function calculateTotal() {}
class EmployeeRecord {}
let _tempValue;
let $button = document.getElementById("btn");

// ❌ Invalid identifiers
let 123abc;      // Starts with digit
let my-var;      // Hyphen not allowed
let void;        // Reserved keyword
let user name;   // Space not allowed
let @data;       // Special character not allowed
```

## Summary
> Identifiers are used to name variables, functions, classes, etc. They must start with a letter, `_`, or `$`, can contain letters, digits, `_`, and `$`, are case-sensitive, and cannot be reserved keywords.
