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

* arrow functions do not bind.
* this may be different each time because it is determined by how a function is called (runtime binding)
* in the example of a assigning a function  as value to an object - .this will refer to the object.
* the global context of .this is the window in a browser, and globalThis in node.
