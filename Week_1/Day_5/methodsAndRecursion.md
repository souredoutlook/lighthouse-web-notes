# Tips For Working With Methods

It is common to have objects with properties that reference data (like strings, numbers, arrays, other objects, etc.)
```javascript
const person = {
  firstName: 'Bob',
  lastName: 'Smith'
}
```
We can write additional code that references this object and it's data like so:

```javascript
console.log('Hello,', person.firstName, person.lastName);
```

>If we wanted to be able to just ask person for the full name without having to do string concatenation?

It would be easier to just have a method we could invoke similar to `console.log(person.fullName());`

A common problem - with a popular solution: assign functions as values to objects. Like so:

```javascript
const person = {
  firstName: 'Bob',
  lastName: 'Smith'
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
}

// Now we can use fullName()

console.log('Hello,',fullName());
```

# A Note About `this`

* arrow functions do not bind .this - it is lexically determined - which is intentional.
* this may be different each time because it is determined by how a function is called (runtime binding)
* in the example of a assigning a function  as value to an object - .this will refer to the object.
* the global context of .this is the window in a browser, and globalThis in node.


# A  Quick Note About Recursion
Some facts about recursion:
* any problem you solve with a for loop you can solve with recursion.
* every recursive function has a recursive case that causes the function to call itself
* every recursive function has at least one base case that causes the function to stop calling itself.
* a function that calls itself recursively without a base case would repeat forever

Some special language around recursion, from the below example:

```javascript
function countEvenToTwelve(number) {
  if (number <= 12) {
    console.log(number);
    countEvenToTwelve(number+2);
  }
}
countEvenToTwelve(0);
```

* `number <= 12` is called the recursive case
* `number > 12` is refered to as a base case. When a base case is true the function will no longer call itself.

## Definition of Recusrion from Khan Academy

Here is the basic idea behind recursive algorithms:

    To solve a problem, solve a subproblem that is a smaller instance of the same problem, and then use the solution to that smaller instance to solve the original problem.