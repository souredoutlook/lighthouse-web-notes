# ASYNC and Callbacks

### Lecturer: Francis Bourgouin

## Content:

- Function recap
- Callback recap
- What is async
- Playing with setTimeout
- Playing with events
- Playing with the filesystem
- Playing with standard IO

## Function Recap

Functions can be written a few ways:

```javascript
function showSongInConsole(songTitle) {
  // A function definition. Will be a hoisted function. Will be available even if you call it before you define it. Can be kind of a crutch and can lead to inconsistencies (a bit like using == instead of === convenient but not always accurate)
}

const showSongInConsole = function (title) {
  // A function declaration.
};

const showSongInConsole = (title) => {
  // Arrow function - depends on whether or how you need 'this.' Generally using an arrow function to take advantage of the shorter syntax
};

const makeSomeMagic = () => "Magic!!!!"; // Arrow function with implicit returns. only works
```

## Callback Recap

- Reusability.
- Convenience.
- DRY code.

Used with Higher Order Functions - functions that take a function as a parameter (callback) or returns a function (closures).

Callbacks are used to "split the work" - see "seperation of concerns" - like so:

```javascript
const iterateOverList = (list, action) => {
  for (const item of list) {
    action(item);
  }
};

const listOfSongs = ["Country Roads", "Mastermind", "Feel Good Inc"];
// List a list of songs, first I want to show lal of them not fancy, and then in a fancy way, maybe.

//Iterate over the list <<< the same
//For every item of the list, console.log the list item <<<this is what we give to action param
const nonFancyConsoleLog = (title) =>
  console.log(`The title of the song is: ${title}`);
iterateOverList(listOfSongs, nonFancyConsoleLog);

//If the randomizer says so
//Iterate over the list <<< the same
// For every item of the list, console.log the item in a fancy way. <<<this is what we give to action param
const superFancyConsoleLog = (title) =>
  console.log(`🔥 🔥 🔥 ${title} 📢 📢 📢 `);
if (Math.random() > 0.5) {
  iterateOverList(listOfSongs, superFancyConsoleLog);
}

// The callbacks here are defined even though we are using them minimally because they are easier to read and easier to test
```

## setTimeout

setTimeout() accepts a callback and a number (that represents miliseconds).

```javascript
setTimeout(() => console.log("Wait for it...."), 2 * 1000);

// or even

const waitlog = () => console.log("Wait for it...");

setTimeout(waitlog, 2 * 1000);
```

setTimeout() is an example of async in JS

```javascript
setTimeout(waitlog, 0 * 1000);
console.log("1");
setTimeout(waitlog, 2 * 1000);
console.log("2");
setTimeout(waitlog, 2 * 1000);
console.log("3");
```

the result of this will generally be:

```javascript
//1
//2
//3
//"Wait for it..."
//"Wait for it..."
//"Wait for it..."
```

this is because the callback is not put in the stack until the timer has completed. The timers are not checked until the synchronus code is completed.

## setInterval()

There is also an async method setInterval() which will repeat an action at a setInterval()

```javascript
const annoyingFrancis = () => {
  setInterval(
    () => console.log("Anybody has any questions? Are you okay?"),
    2000
  );
};

annoyingFrancis();
// Expected Output

// Anybody has any questions? Are you ok?
// Anybody has any questions? Are you ok?
// Anybody has any questions? Are you ok?
// Anybody has any questions? Are you ok?
// Anybody has any questions? Are you ok?
// .... forever
```

## Node FS

The [NodeFS](nodejs.org/api/fs.html) has a very rich API for IO, which is mainly asynchronus because of how long it can take to read and write files.

```javascript
//fs.js

const fs = require('fs')
fs.readFile('./fs.js', {encoding: "utf8" } (err,data) => {
  if (err) throw err;
  console.log(data);
  }
}
```

Reading a file like this doesn't take long. We can actually check how long:

```javascript
//fs.js
const fs = require('fs')

const startTime = Data.now();

//readFile will:
  //Open a file
  //Read character per character
  //When finished it will stop to read
  //Tell node that it finished reading the file (emit the event of finished)
  //Node listens to an event finished, and does the callback

fs.readFile('./fs.js', {encoding: "utf8" } (err,data) => {
  if (err) throw err;
  console.log(data);
  console.log(Data.now() - startTime) //returns number of milliseconds it takes to read and log the file.
  }
}
```

Even though the operation is fast in this case - it can be slow at other times. This is why the readFile method uses a callback to work with the data - so that it doesn't block the program from operating in the case of reading LARGE files. Or hard to encode files etc.

## Events

Another kind of asynchronus operation is event handling - which can be extended to readfile:

```javascript
const EventEmitter = require('events');

const clientEmitter = new EventEmitter()

//waiter is asynchronus
//On the event of a client saying 'waitercall', callback => greeting
clientEmitter.on('waitercall'), ()=> console.log("Anything I can help with ?"))
//On the event of a client saying 'iwantthecheck', callback => bring the check
clientEmitter.on('iwantthecheck', ()=> console.log("Here's the check"));

//client is synchronus
//client calls the waiter
clientEmitter.emit('waitercall')
//client asks for the check
clientEmitter.emit('iwantthecheck')

//orrrr

const fileRead = new EventEmitter()

fileRead.on('readComplete', ()=> console.log("File reading is done"))

const readAFile = () => {
  console.log("Starting to read the file")
  setTimeout(()=> fileRead.emit('readComplete'), 2000)
}

readAFile()
```

The above example is not a real IO operation but is an example of how it works behind the scenes!

Node already has a fs method for this called fs.watcher().

## stdin/out

process.stdin and process.stdout are built into process.

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) =>{

  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
}
```

> The reason we call javascript an event driven language is because everything is events. In Python and Ruby there is no async. - Francis
