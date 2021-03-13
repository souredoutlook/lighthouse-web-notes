# REACT, the JS parts

### [From Brad Westfall's Article](https://reacttraining.com/blog/javascript-the-react-parts/)

## Semicolons

There are many reasons not to use semi-colon (because of automatic semicolon insertion) but the point-counterpoint goes on and on.

We will use them - prettier.io will help normalize the code.

## Variable Declaration

### Var 

* Does not have block scope
* Can be reassigned with or without var.

### Let & Const

* Do have block scope.
* Let can be reassigned, const cannot.
* Const of objects and arrays allows for reassignment but not of the data type of the object.
  * Const does not provide proper immutability.  
* Const everything unless you need reassignment.

## String Literals

String can be made with single or double quotes. Making strings this way means we need to manually add new lines with \\n 

Template literals allow for multiline strings in a much cleaner way. The also allow for string interpolation using ``${variable}``

## Expressions vs. Statements and Declarations

### Expressions

Think ternary operator
Expressions resolve to a single value
Can be easily used inside JSX
Expressions can be chained
  * `const first = 'michael jackson'.split(' ')[0].toUpperCase()`
There is function expression ( `= function()`)

### Statements and Declarations

Think `if` statement
Cannot be used inside JSX
Function declaration (`function getName() {return 'name'}`)

## Functions

Function declarations can be hoisted (really a personal preference of style)
Arrow functions are special.

### Arrow Functions

```javascript
const getName = () => {
  return 'Michael'
}

// same as above but more compact, uses 'implicit return'
const getName = () => 'Michael'

// omit the brackets for a single parameter
const getName = name => `Hello ${name}`

//as a callback, gets te scope of the outerfunction call
someCallBack(() => {
    this.accessOuterScope();
})

//instead of doing this
var _this = this;
someCallBack(function() {
    _this.accessOuterScope();
})

// to return an object literal, wrap in quotes to force the parser to treat the object literal as an expression not a block statement
let square = n => ({ square: n * n });
```

## Objects

```javascript
const obj = {
  insteadOfThis: function() {
    //do stuff
  }

  youCanDoThis() {
    //but we already knew that
  }
}
```

### Destructuring

A way to take an object's properties out and make them variables outside of the object.

```javascript
const obj = {x: 1, y: 2}

//instead of
const x = obj.x

//desctructure values into ordinary variables
const {x} = obj

//works with functions
function add({x, y}) {
  return x + y
}

add({x: 3, y: 4}) //7 btw

//use parens when you want to do it without a declared object

let a, b;

({a, b} = {a: 1, b: 2});

// asign keys a different variable name with a key:value structure on the left side

const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true

//use it with default values ***think var = var || 10;
const {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5
```

How to tell if you're destructuring: the 'curlies' are on the left side of the expression

### Array Destructuring

Works almost the same as object destructuring but with square-brackets instead of curly-braces. Because arrays are indexed the order of our assignment === the order of the elements in the arrays


```javascript
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

```

Also useful when used with promises:

```javascript
Promise.all([
  Promise.resolve("a"),
  Promise.resolve("b"),
  Promise.resolve("c")
]).then(([a,b,c])=>{
  console.log(a,b,c); //a,b,c
})
```
### Property Shorthand

```javascript
//object shorthand
const name = 'Nick'
const person = {name}

//a bad way of doing things
const fullName = ['Nick', 'Meisenheimer']
const profile = [fullName, 'student'] // [['Nick', 'Meisenheimer'], 'student']

//...spread syntax
const spreadProfile = [...fullName, 'student'] //['Nick', 'Meisenheimer', 'Student']

//...rest syntax
const profile = {first: 'Nick', last:'Meisenheimer', occupation:'Student'}
const {occupation, ...rest} = profile // occupation === 'student' res === {first, last }

//works with functions
function myFunction(first, last, ...rest) {
  return rest
}

console.log(myFunction('Michael', 'Jackson', 'Developer', 'California')) //output: ['Developer','California']
```

### Computed Property Names

```javascript
//in the before times
var STATUS_SUCCESS = "STATUS_SUCCESS";
var STATUS_FAILURE = "STATUS_FAILURE";

var messages = {};

messages[STATUS_SUCCESS] = "Updated";
messages[STATUS_FAILURE] = "Error";

//With the update to the object literal syntax, we can perform the creation and assignment using a single expression.

const STATUS_SUCCESS = "STATUS_SUCCESS";
const STATUS_FAILURE = "STATUS_FAILURE";

const messages = {
  [STATUS_SUCCESS]: "Updated",
  [STATUS_FAILURE]: "Error"
};

```

## Modules

Breaking files into modules is key for React. ES modules aren't natively supported in browsers (yet) - we use Webpack (or Rollup) and Babel to re-write our code that has modules into something the browser does understand.

```javascript
//NodeJS pattern ("CommonJS" or cjs)

const someModule = require('some-module')
someModule.someMethod()

module.exports = SomethingToExport;

//ES Modules

import someModule from 'some-module'
someModule.someMethod()

export default SomethingToExport

//destructuring

import {someMethod} from 'some-module'
someMethod();

export default SomethingToExport;
```

## Arrays

Some common methods to be familiar with:

```javascript
//Array.isArray()
const myArray = ['hello']
console.log(Array.isArray(myArray)) //true
//.map()
const mappableArray = [1,2,3,4]
const result = mappableArray.map(function(item) {
  return item + 5
}) // 6,7,8,9
//.reduce()
const total = mappableArray.reduce((tally,current) => tally + current, 0) //10
//.filter()
const result = mappableArray.filter(item => item > 2) //[3,4]
//find() !!! ONLY WORKS ON THE FIRST ITEM WHERE THE PREDICATE IS TRUE
const people = [{ id: 3, name: 'Michael'}, {id: 5 name: 'Bruce' }]
const person = people.find(item => item.id === 3)
console.log(person) // { id: 3, name: 'Michael'}
```

It is more idiomatic to use Array.prototype.map or Array.prototype.reduce rather than their imperative alternatives in React applications

## Short Circuiting With &&

```javascript
function one() {
  console.log('one was called')
  return false
}
function two() {
  console.log('two was called')
  return false
}

if (one() && two()) {
  console.log('Here we go!')
}

// The only output of this code is "one was called" because of
// short circuiting

// This will cause an error if `users` is not an array
function findById(users, id) {
  return users.find(item => item.id === id)
}

// Now we are returning the person if `users` is an array
// If `users` is not an array, we the value whatever is before
// && which is `false` in that case
function findById(users, id) {
  return Array.isArray(users) && users.find(item => item.id === id)
}
```

## Optional Chaining

Instead of doing `users && users.length` you could `users?.length`
* Evaluates users to see if it's truthy. Return undefined from the expression without doing .length to it if users is falsy.
* If it is truthy continue with the rest of the .length expression.

Will only return undefined if the variable is falsy, not the falsy variable value (unlike users && users.length)

## Closures

A combination of a function bundled together with references to it's surround state (the lexical environment)

A closure gives you access to an outer functions scope from an inner function

In javascript closures are created every time a function is created at function creation time.

an interesting example

```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
//this works because function(y) is returned from MakeAdder before executing. in essence  var add5 = makeAdder(5) === const add5 = function(y) {return 5 + y};}
```

A web based example:

```javascript
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

// size12, size14, and size16 are now functions that resize the body text to 12, 14, and 16 pixels, respectively. You can attach them to buttons (in this case hyperlinks) as demonstrated in the following code example.

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;

```
```html
<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
```