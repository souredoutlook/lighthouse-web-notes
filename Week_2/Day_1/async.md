# ASYNC

Our code so far has generally run in the order that it's written out.

If there's a function call we expect it to jump to that function when it's called, and return to location of it's call.

> Asynchronus programming is when a unit of work is run seperately from the main thread of the program.

I/O operations are an example of a type of operation that is time consuming. I/O usually includes reading or writing from/to the disk or network.

## Asynchronus Callbacks

```javascript
const fs = require("fs");

console.log('BEFORE writeFile call');

fs.writeFile("./test_async.txt", "h3ll0 file!\n", (error) => {
  if (error) {
    // Handle error
    console.log("Failed to write to file");
    return;
  }
  // Success!
  console.log("Successfully wrote to file");
});

console.log('AFTER writeFile call');

```

You might expect something like: "BEFORE" then "SUCCESS" then "AFTER". However writing the file takes much more time than logging to the console so we actually see... "BEFORE" "AFTER" "SUCCESS"

Dealing with async code is called async flow control. There are many solutions for many different scenarios when async is employed (some operations can ONLY be done asynchronusly.)
