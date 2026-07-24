# JavaScript Keywords — Complete Reference with Comparisons

> **Reference:** All reserved words and built-in identifiers in JavaScript (ES2024+)

---

## 1. Variable Declaration Keywords

| Keyword | Scope | Hoisted? | Reassignable? | Redeclarable? | Temporal Dead Zone? |
|---------|-------|:--------:|:-------------:|:-------------:|:-------------------:|
| `var` | Function-scoped | ✅ (initialized as `undefined`) | ✅ Yes | ✅ Yes | ❌ No |
| `let` | Block-scoped `{}` | ✅ (uninitialized — TDZ) | ✅ Yes | ❌ No | ✅ Yes |
| `const` | Block-scoped `{}` | ✅ (uninitialized — TDZ) | ❌ No | ❌ No | ✅ Yes |

```js
// var — function scoped, can be redeclared
var a = 10;
var a = 20;      // ✅ No error
console.log(a);   // 20

// let — block scoped, cannot be redeclared in same scope
let b = 10;
b = 20;           // ✅ Reassignment allowed
// let b = 30;    // ❌ SyntaxError: Identifier 'b' already declared

// const — block scoped, must be initialized, cannot reassign
const c = 10;
// c = 20;        // ❌ TypeError: Assignment to constant variable
// const d;       // ❌ SyntaxError: Missing initializer in const declaration
```

| Aspect | `var` | `let` | `const` |
|--------|:----:|:-----:|:-------:|
| Introduced in | ES1 (1997) | ES6 (2015) | ES6 (2015) |
| Modern usage | ❌ Avoid (legacy only) | ✅ Use for mutable variables | ✅ Use for constants / references |
| Object mutation | — | — | 🔍 `const o = {}; o.x = 1;` ✅ allowed (reference is constant, not the value) |

---

## 2. `null` vs `undefined` vs `NaN`

| Keyword / Value | Type | Meaning | When it appears |
|-----------------|:----:|---------|----------------|
| `null` | `object` (typeof bug) | Intentional absence of value | You set it: `let x = null;` |
| `undefined` | `undefined` | Variable declared but no value assigned | Default: `let x;` → `x` is `undefined` |
| `NaN` | `number` | "Not a valid number" | Failed math: `parseInt("hello")` → `NaN` |

```js
console.log(typeof null);       // "object" — historical JS bug, kept forever
console.log(typeof undefined);  // "undefined"
console.log(typeof NaN);        // "number"

console.log(null == undefined);  // true  (loose equality)
console.log(null === undefined); // false (strict equality)
```

---

## 3. Function Keywords

| Keyword | Purpose |
|---------|---------|
| `function` | Declare a function |
| `return` | Exit a function and optionally send a value back |
| `async` | Mark a function as asynchronous (returns a Promise) |
| `await` | Pause execution until a Promise settles (only inside `async`) |
| `yield` | Pause/resume a generator function |
| `function*` | Declare a generator function |

### `function` Declaration vs Expression vs Arrow

| Aspect | Function Declaration | Function Expression | Arrow Function |
|--------|:-------------------:|:-------------------:|:--------------:|
| **Syntax** | `function f() {}` | `const f = function() {}` | `const f = () => {}` |
| **Hoisted?** | ✅ Full hoisting | ❌ Becomes `let`-like | ❌ Becomes `let`-like |
| **Own `this`?** | ✅ Yes | ✅ Yes | ❌ No (inherits from enclosing scope) |
| **`arguments` object?** | ✅ Yes | ✅ Yes | ❌ No (use rest params `...args`) |
| **Can be used as constructor?** | ✅ Yes (`new f()`) | ✅ Yes (`new f()`) | ❌ No |
| **Arrow implicit return** | ❌ | ❌ | ✅ `const f = () => 42` (no `{}`) |

```js
// Declaration — hoisted, can call before definition
sayHi();                // ✅ "Hi"
function sayHi() { return "Hi"; }

// Arrow — no own 'this', great for callbacks
const obj = {
  name: "Alice",
  greet: function() {
    setTimeout(() => {
      console.log(this.name); // ✅ "Alice" — arrow inherits 'this'
    }, 100);
  }
};
```

---

## 4. Loop & Iteration Keywords

| Keyword | What it does | Use Case |
|---------|-------------|----------|
| `for` | Classic loop with init/condition/increment | Any indexed iteration |
| `while` | Loop while condition is true | Unknown iteration count |
| `do` / `while` | Execute body at least once, then loop | Menu-driven prompts |
| `for...in` | Iterates over **keys** (enumerable property names) | Objects |
| `for...of` | Iterates over **values** (of iterable objects) | Arrays, Strings, Maps, Sets |
| `break` | Exit the loop immediately | Breaking out early |
| `continue` | Skip the rest of current iteration, move to next | Skipping values |

### `for...in` vs `for...of`

```js
const arr = [10, 20, 30];

for (let key in arr)     console.log(key);   // "0", "1", "2"  (indexes as strings)
for (let val of arr)     console.log(val);    // 10, 20, 30     (actual values)

const obj = { a: 1, b: 2 };
for (let key in obj)     console.log(key);    // "a", "b"       (object keys)
// for (let val of obj)  // ❌ TypeError: obj is not iterable
```

| | `for...in` | `for...of` |
|---|:----------:|:----------:|
| Iterates over | Keys / property names | Values |
| Works on | Objects (and arrays — but not recommended) | Arrays, Strings, Maps, Sets, NodeLists, etc. |
| Uses | Enumerating object properties | All other iteration |
| Can iterate a plain object? | ✅ Yes | ❌ No (not iterable by default) |

---

## 5. Conditionals & Branching

| Keyword | Purpose |
|---------|---------|
| `if` | Execute block if condition is truthy |
| `else` | Execute block if `if` condition was falsy |
| `else if` | Chain multiple conditions |
| `switch` | Select one of many code blocks to execute |
| `case` | A specific value to match inside `switch` |
| `default` | Fallback case when no `case` matches |
| `break` | Exit `switch` block (prevents fall-through) |
| `? :` (ternary) | Inline conditional expression |

### `if...else` vs `switch` vs Ternary

```js
// if...else — flexible, complex conditions
let score = 85;
if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else grade = "C";

// switch — exact match, many cases
switch (day) {
  case "Monday":     task = "Meeting";    break;
  case "Friday":     task = "Review";     break;
  default:           task = "Code";
}

// ternary — single condition, inline
let status = age >= 18 ? "Adult" : "Minor";
```

| Aspect | `if...else` | `switch` | Ternary `? :` |
|--------|:-----------:|:--------:|:-------------:|
| Best for | Complex/logical conditions (`>`, `<`, `&&`, `\|\|`) | Exact value matches (===) | Simple yes/no assignment |
| Readability | Good for 1-2 conditions | Good for 3+ exact matches | Best for one-liners |
| Fall-through | ❌ Not possible | ✅ Possible (omit `break`) | ❌ N/A |

---

## 6. Error Handling Keywords

| Keyword | Purpose |
|---------|---------|
| `try` | Wrap code that might throw an error |
| `catch` | Handle the error if one occurs |
| `finally` | Always execute, regardless of error or not |
| `throw` | Manually throw/cause an error |

```js
try {
  let result = riskyOperation();
  if (result === null) throw new Error("Operation failed");
} catch (err) {
  console.error("Caught:", err.message);
} finally {
  cleanup();  // Always runs
}
```

---

## 7. Object-Oriented Keywords

| Keyword | Purpose |
|---------|---------|
| `class` | Define a class (syntactic sugar over prototypes) |
| `constructor` | Special method for initializing new instances |
| `new` | Create an instance from a class / constructor |
| `this` | Reference to the current execution context |
| `super` | Call parent class constructor or methods |
| `extends` | Inherit from another class |
| `static` | Define a method/property on the class itself, not instances |
| `get` | Define a getter (access like a property) |
| `set` | Define a setter |
| `instanceof` | Check if an object is an instance of a class |

```js
class Animal {
  constructor(name) { this.name = name; }
  speak()           { return `${this.name} makes a sound`; }
  static classify() { return "Animalia"; }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);                  // Call parent constructor
    this.breed = breed;
  }
  speak() {                       // Override
    return `${this.name} barks!`;
  }
}

const rex = new Dog("Rex", "German Shepherd");
console.log(rex.speak());           // "Rex barks!"
console.log(Dog.classify());        // "Animalia"
console.log(rex instanceof Dog);    // true
console.log(rex instanceof Animal); // true
```

---

## 8. Module Keywords (ES Modules)

| Keyword | Purpose |
|---------|---------|
| `import` | Bring functions/objects from another module |
| `export` | Expose functions/objects to other modules |
| `from` | Specify the module path |
| `as` | Rename during import/export |
| `default` | Export/import the default export |

### Named vs Default Export

| Aspect | Named Export | Default Export |
|--------|:------------:|:--------------:|
| **Syntax** | `export const x = ...` | `export default ...` |
| **Import syntax** | `import { x } from "./mod"` | `import x from "./mod"` |
| **Can have multiples?** | ✅ Yes | ❌ No (one per module) |
| **Import renaming** | `import { x as y }` | `import { default as y }` or just `import y` |
| **Tree-shakeable?** | ✅ Yes | ✅ Yes |

```js
// ===== math.js =====
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export default function multiply(a, b) { return a * b; }

// ===== app.js =====
import multiply, { PI, add as sum } from "./math.js";
console.log(sum(2, 3));      // 5
console.log(multiply(2, 3)); // 6
```

---

## 9. Operators That Look Like Keywords

| Operator | Type | What it does |
|----------|:----:|-------------|
| `typeof` | Unary | Returns type as a string: `typeof 42` → `"number"` |
| `instanceof` | Binary | Checks prototype chain: `[] instanceof Array` → `true` |
| `delete` | Unary | Removes a property from an object: `delete obj.prop` |
| `void` | Unary | Evaluates expression and returns `undefined`: `void(0)` → `undefined` |
| `in` | Binary | Checks if property exists in object: `"key" in obj` |

```js
console.log(typeof "hello");    // "string"
console.log(typeof function(){}); // "function"
console.log(delete obj.x);      // true (removes property)
console.log(void(0));           // undefined
console.log("toString" in {});  // true (inherited property)
```

---

## 10. Literal / Value Keywords

| Keyword | Type | Meaning |
|---------|:----:|---------|
| `true` | `boolean` | Logical true |
| `false` | `boolean` | Logical false |
| `null` | `object` | No value (intentional) |
| `undefined` | `undefined` | Uninitialized / missing |
| `Infinity` | `number` | Math infinity: `1 / 0` |
| `NaN` | `number` | Not a valid number: `parseInt("abc")` |

---

## 11. Miscellaneous Keywords

| Keyword | Purpose |
|---------|---------|
| `debugger` | Pauses execution at that line (if devtools open) |
| `with` | Extends scope chain (❌ deprecated, avoid) |
| `arguments` | Array-like object of function args (❌ avoid in modern code) |
| `new.target` | Detects if a function was called with `new` |

---

## Quick Reference: Reserved Words

**Cannot use as variable names:**
```
await  break  case  catch  class  const  continue  debugger  default
delete  do  else  export  extends  false  finally  for  function  if
import  in  instanceof  let  new  null  return  static  super  switch
this  throw  true  try  typeof  undefined  var  void  while  with  yield
```

**Future reserved (strict mode):**
```
implements  interface  package  private  protected  public
```

---

## Summary Table — When to Use What

| You want to... | Use this keyword |
|---------------|-----------------|
| Declare a constant reference | `const` |
| Declare a mutable variable | `let` |
| Declare a legacy variable | `var` (avoid) |
| Write a function | `function` |
| Write a short callback | `=>` (arrow) |
| Handle async code | `async` / `await` |
| Create an object blueprint | `class` / `new` |
| Handle errors | `try` / `catch` / `finally` |
| Export code to other files | `export` |
| Import code from other files | `import` |
| Loop over array values | `for...of` |
| Loop over object keys | `for...in` |
| Check a property exists | `in` |
| Check an object's type | `typeof` |
| Check prototype chain | `instanceof` |
