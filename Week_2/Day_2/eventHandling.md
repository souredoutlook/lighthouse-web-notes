# Event Handling and User Input

- async is about more than just scheduling code to run later using setTimeout;
- user events are are also asynchronus
- user events can occur at any time while our app is running

## Callbacks

> Callbacks are a major way that JavaScript handles dealing with code that needs to run later.

**WARNING** There are other ways of handling asynchronus logic in JS like Promises and async/await - they are more powerful and more convenient but comfort with callbaks is essential and must be covered first.

## User Input

- Event Handling User Input

```javascript
// on any input from stdin (standard input), output a "." to stdout
process.stdin.on("data", (key) => {
  process.stdout.write(".");
});

console.log("after callback");
```

- use `.on` method to register a callback
  - unlike setTimeout this callback is not scheduled to run x ms later. It is meant to run any time the user provides input to the program.
  - Our callback function, is called each time there is new user input data - simply prints a "." ti the screen

**TIP** .on method or function is very common for registering callbacks to handle events.

The `console.log` in the above example actually executes before the callback because there is not user input yet.

Full code to get it working:

```javascript
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on("data", (key) => {
  if (key === "\u0003") {
    process.exit();
  }
  process.stdout.write(".");
});

console.log("after callback");
```
