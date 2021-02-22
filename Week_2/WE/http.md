## How JavaScript Works

### v8js:
* Heap - the implementation of ECMA Script
* The Call Stack - a data structure: what function am I working through, and where do I return to
  * You can put things on top, and take them off the top.
  * A printout of the call stack on a thrown error in the browser is called a stack trace.
  * Blocking comes down to implementation - somet things are just slow. Blocking is an issue in the browser especially.
* WebAPI - DOM, ajax, setTimeout, XHR,
* Event Loop - "if stack is clear - push the first item in the task queue into the stack"
> Don't block the event loop: make sure the stack clears.


## Promises

Give you flexibility, intuitive syntax, and easy error handling.

Async examples: network, events, threads, unknowable time, drives etc.

Wrapping, Thening, Catching and Chaining are things you do with promises.

4 states a promise can have: Fulfilled (resolved), Rejected, pending, settled (has fulfilled or rejected)

Events can fire many times but a promise can only resolve once.

A promise is almost like try catch wrapper around async work.

Syntax
```javascript
var promise = new Promise(function(resolve[, reject]) {
  var value = doSomething();
  if (thingWorked) {
    resolve(value);
  } else if (somethingWentWrong) {
    reject();
  }
}).then(function(value){
  // sucess!
  return nextThing(value);
}).catch(rejectFunction);
```

jQuery implements it's own version of promises (a polyfill that was used before native promises)

Angular v1 also uses Q style promises, Angular v2 will take advantage of native promises.

Native promises also work with service worker and fetch API

### .then

.then actually takes two arguments (resolvefnc, rejectfnc)

If not resolve fnc is passed it skips to the next .then

As soon as a promise rejects JS skips to the next rejectfnc in the chain (could be .catch or .then)