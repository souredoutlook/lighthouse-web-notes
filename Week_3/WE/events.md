# Events

## Event Driven Architecture

EDA is: When X happens, do Y

X is the event. Y is the event handler.

> X: Click a button. Y: turn on a lightbulb.

## Client Side v Server Side

On the client side (browser) there is the [DOM](https://en.wikipedia.org/wiki/Document_Object_Model). DOM events include onClick, onFocus, onLoad as well as custom events.

One library that we will use to demonstrate client-side events is jQuery.

On the server side (Node.js) events are like: incoming request, handlers are the callback function that handles the event (and could render a response.)

The Node.js code API provdies an EventEmitter class that is the basis for event-driven patterns.

## What is the DOM?

1. Browser Loads a page.
2. Browser is running a process that creates a Document Object Model in memory
3. Each HTML element is also called a Node or DOM node

## More about the DOM

- The DOM is an essential part of making websited interactive
- Allows programming language to manipulate the content structure and style of a website
- Javascript is the client-side scripting language that connects to the DOM in an internet browser.
  > The DOM is language agnostic (like JSON...?)
- A website consists of an HTML document.
- The browser interprets HTML and CSS and renders the style, content and structure
- The browser also creates a representation of the edocument know as the DOM

### Document Object

- The document object is a built in object that has many properties and methods
- In the DevTools console you can return document and see the elements returned
- The dom is modified by client-side Javascript
- The browser automatically fixes errors in the source code.
- We can modify attributes of the DOM in the console or with javascript. Ex:
  - `document.body.style.backgroundColor = 'red';`
- We can inspect the source of the website and see that the modified DOM is now different.

## Event Propagation

Because DOM elements are nested in a tree-like structure events that affact the child element _bubble up_ through the parents.

> It is also possible to prevent an event from continuing its propagation using `stopPropagation()`

### Bubbling and Capturing

- When an event happens on an element, it first runs the handlers on it, then on it's parent, then all the way up on other ancestors.
- Almost all events bubble, but a _focus_ for example does not.
- The most deeply nested element, that caused the event is called a target element, and is accessible as `event.target`

  > Note the differences from this (=event.currentTarget):
  >
  > > event.target is the "target" element that initiated the event, it doesn't change through the bubbling process.
  > > this - is the "current" element, the one that has a currently running handler on it.

- A bubbling event goes from the the target straight up. Some can go as far as the window. Whem an ancestor of the target decides that the event has been fully processed it calls `event.stopPropagation()`
- `stopPropagation()` only halts the upward move, if the element has a handler it will trigger. To stop any propagation at all use `event.stopImmediatePropagation()`
  Bubbling is convenient, don't stop it without a need.

#### Capturing

> Is rarely used in developement but important to understand that the click event actually goes DOWN the tree to the target elment then back up.
> We can set the handler capture option to true to catch an event on the capturing phase.

```javascript
elem.addEventListener(..., {capture: true})
// or, just "true" is an alias to {capture: true}
elem.addEventListener(..., true)
```

- We can also also set multiple event handlers in the same phase on an element and they will run in the order they are set.
