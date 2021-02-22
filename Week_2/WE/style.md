# airbnb style 

Notable pieces of info:

### Assignment
* When you access a complex type you work on a reference to it's value (non-primitives are reference values)
* no var (duh)
* no new Object() or new Array();
* `''` for strings
* template strings are more readable than concatenation
* never use eval()
* escape characters only when necesary

### Arrays
* no direct assignment to arrays, push whenever possible.
* use array spreads to copy arrays:
```javscript
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```
* use array spreads to convert an *iterable-object to an array us spreads `...` instead of Array.from
* use ARray.from for converting an array-like object to an array
* use ARray.from instead of spread for mapping over iterables.
```javascript

    4.6 Use Array.from instead of spread ... for mapping over iterables, because it avoids creating an intermediate array.

    // bad
    const baz = [...foo].map(bar);

    // good
    const baz = Array.from(foo, bar);
```

* Use Array destructuring! 
### Objects
* computed property names when creating objects with dynamic property names: 
```javascript
// bad
function getKey(k) {
  return `a key named ${k}`;
}

const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
```
* Use property value shorthand, list them before non-shorthand properties in object declaration, only quote properties with invalid identifiers
* Do not call Object.prototype methods direct (hasOwnProperty, propertyIsEnumerable) example:
```javascript
// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
console.log(has.call(object, key));
/* or */
import has from 'has'; // https://www.npmjs.com/package/has
console.log(has(object, key));
```
* Prefer object spread over Object.assign
```javascript
// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
delete copy.a; // so does this

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```
* Use object destructuring when accessing and using multiple properties of an object:
```javascript
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```
### Functions
* wrap immediately invoked function expressions
* Use object destructuring for multiple return values, not array destructuring
```javascript
return [left, right, top, bottom] //bad
return { left, right, top, bottom } //better alsos consts {left, top } = processInput(input) for example
```
* use return statements in array method callbacks (unless the function consists of a single statement returning an expression without side effects)
```javascript

    // good
    [1, 2, 3].map((x) => {
      const y = x + 1;
      return x * y;
    });

    // good
    [1, 2, 3].map((x) => x + 1);

    // bad - no returned value means `acc` becomes undefined after the first iteration
    [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
      const flatten = acc.concat(item);
    });

    // good
    [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
      const flatten = acc.concat(item);
      return flatten;
    });

    // bad
    inbox.filter((msg) => {
      const { subject, author } = msg;
      if (subject === 'Mockingbird') {
        return author === 'Harper Lee';
      } else {
        return false;
      }
    });

    // good
    inbox.filter((msg) => {
      const { subject, author } = msg;
      if (subject === 'Mockingbird') {
        return author === 'Harper Lee';
      }

      return false;
    });
```

## Other Tips

- Comment all functions
- Consistent indentation
- Avoid obvious comments
- Code grouping by task (introduce spaces between tasks (like in test))
- Consistent naming schemes
- DRY it up
- Avoid nesting/waterfalls
- Avoid writing long horizontal lines of code
- File and folder organization
- Consistent temporary names
- Capitalize SQL special words
- Seperate code and data
- Alternate syntax inside templates (think jQuery I guess?)
- Be OO for data and procedural for tasks
- Read Open Source Code
- A refactor should only make changes to the code without affecting its functionality