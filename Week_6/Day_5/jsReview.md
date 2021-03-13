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
et square = n => ({ square: n * n });
```

!function(n){function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r={};o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=21)}({21:function(e,t,n){e.exports=n("XQp5")},XQp5:function(){var n="https://m.stripe.network",e=window.location.hash,t=/preview=true/.test(e)?"inner-preview.html":"inner.html",r=document.createElement("iframe");r.src=n+"/"+t+e;function o(e){if(e.origin===n){var t=window.opener||window.parent||window;if(!t)return;t.postMessage(e.data,"*")}else r.contentWindow.postMessage(e.data,"*")}window.addEventListener?window.addEventListener("message",o,!1):window.attachEvent("onMessage",o),document.body&&document.body.appendChild(r)}});