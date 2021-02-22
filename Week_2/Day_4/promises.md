# Promises

### Instructor: Dominic Tremblay

> Coding is like any 'sport' where you cannot be a champion just by throwing one ball. - Dom

## Content
* Async Flow Recap
* Exception Handling
* Error Handling with Callbacks 
* Introduction to Promises
* Error handling with Promises (vs callbacks)
* Optional: Parallelizing async things ([Promise.race](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) and Promise.all)
* Optional: History of promises in JavaScript

## Review Async Flow With Callbacks

```javascript
const processeOrder = (customer, callback) => {
  console.log(`${customer} orders a burger!`);
  setTimeout(()=>{ //this is the only asynchronus statement in this code - will likely execute last
    callback(`Burger ready for ${customer}`);
  ), 3000); //tip is to comment it out when you run the code the first time,
  })
}

processOrder('Sponge Bob', (message) => console.log(message));

console.log('Sponge Bob eats the burger');
```

In the above example the code executes in this order: 'orders' -> 'eats' -> 'ready'. This will happen if Timeout is 3000ms or 0 ms because of the nature of async.

## Sync Exception Handling

```javascript
const processeOrder = (customer, callback) => {
  console.log(`${customer} orders a burger!`);
  undeclared;  // Error is thrown;
}


try {
  processOrder('Sponge Bob', (message) => console.log(message));
} catch (error) {
  console.log(error.message)
}

console.log('Sponge Bob eats the burger');
```
Here undeclared will throw the error synchronously. The below example will throw an error asynchronously.

```javascript
const processOrder = (customer, callback) => {
  console.log(`${customer} orders a burger!`);
  setTimeout(()=>{
    callback(`Burger ready for ${customer}`);
    undeclared;
  }, 3000);
}


try {
  processOrder('Sponge Bob', (message) => console.log(message));
} catch (error) {
  console.log(error.message)
}

console.log('Sponge Bob eats the burger');
```

In the above example, the error is never caught because it is thrown asynchronously - and the catch is executed before the error is thrown. 

## Async Error Handling

```javascript
const processOrder = (customer, callback) => {
  console.log(`${customer} orders a burger!`);
  setTimeout(()=>{
    if (Math.random() > 0.5){
      burgerError = new Error ("Sorry your burger burst into flames"); //creates a truthy burgerError ~ 50% of the time
    } else {
      let burgerError = false;
    }
    
    callback(burgerError, `Burger ready for ${customer}`);
   
  }, 3000);
}

try {
  processOrder('Sponge Bob', (err, message) => {
    if (!err) {
       console.log(`Message: ${message}`)
    } else {
      throw err;
    }
  }); //adding an error parameter to callbacks allows us handle the error inside the callback and then catch it with a try catch
} catch (error) {
  console.log(`Error: ${error.message}`)
}

console.log('Sponge Bob eats the burger');
```

## Intro to Promises

Promises are a way to deal with "callback hell"

What is a promise? An analogy:
* Placing an order at the kiosk at a restaurant.
* You've been given a receipt with a number.
* The receipt is a promise that you're going to get a meal when it's ready.

### The promise is an object:

![alt text](assets/promiseStates.png "the states of a promise object")

### How to use a promise:

1. Create an executor function to create a promise. 
  * typically won't need to worry about this in bootcamp outside of this lecture and the test
2. Consuming the promise (using it)

### The executor function:

* Takes two parameters that are defined by JavaScript

```javascript
const ExecutorFCT = (resolveFct, rejectFct) => {
  const error = false;
  setTimeout(()=>{
    if (error){
  rejectFct(someValue); //failed => calling rejectFct and passing it the error
    } else {
  resolveFct(someValue); //success => calling resolveFct and passing it the data;
    }
  })
}

//creating a promise object
const promiseObj = new Promise(executorFct);

console.log(promisseObj); //will be pending for 3 seconds until timer event

setTimeout(()=> console.log(promisseObj),300) //will be resolved state after 3 seconds given error = false;
```

### Consuming the Promise

resolveFct(somevalue) lands at promise.then((result)=>console.log(result));
rejectFcT(someValue) lands at promise.catch((err)=>console.log(err));

Example:

```javascript
const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`); //call 2;
  return new Promise((resolve, reject) => {
    const error = true; // call 3

    setTimeout(()=>{ //call 4
      if (error) {
        reject('Sorry, your burger burst into flames!');
      }
      resolve (`Burger ready for ${customer}`); // can send an object back
    }, 3000);
  });
};

const promiseObj = processOrder("Sponge Bob"); //call 1;

//executes between 3 and 4 but we're not counting it because it's just illustrative
console.log(promiseObj); // pending state as the async promise has not resolved/rejected

//consume
promiseObj 
//after 3 seconds
.then(message => console.log(`success! ${message}`));
.catch(err => console.log(`error! ${err}`)); // call 5
```

## Promise.all()

[Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) lets us wait for all promises enclosed in .all() to be resolved/rejected. Syntax but be an "iterable".

Example:

```javascript
const placeOrder = () => {

  Promise.all([getUser(), getOrder(), getUser()]) //getUser(), getOrder() and getMeal() have been refactored to rreturn promiseObj
    .then((result) => {
      const wait = result[0];
      const meal = result[1];
      const customer = result[2]
      
      console.log(`${waiter} has delivered a ${meal} to ${customer}`);
    })
    .catch((err) => console.log(`Error: ${err}`));
};
```