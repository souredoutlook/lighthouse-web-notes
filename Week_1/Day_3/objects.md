# W1D3 - Objects in JS

### Instructor: Francis Bourgouin

## Content

* Primitive Data Types
* Object Fundamentals
* Object Keys
* Functions as Objects Method
* Sharing Objects
* What is this?

## Primitive Data Types

* `number`
* `string`
* `boolean`
* `null`
* `symbol` (new in ES6)
* `undefined`
* `NaN`

`array` is not a primitive data type - technically derived from an object which is a data structure.

## Data Structures 

* `Arrays` - order is important, because its an ordered system.
* `Objects` - has key:value pairs so the order is not important.

Arrays do have a key:value system of sorts but the key is ordered numerically starting at 0 (index)

Objects can be accessed with **Dot Notation** and **Bracket Notation** - bracket notation recieves a string like so `donut['flavour']`
- Use dot notation when you are being literal *like Drax*
- Use bracket notation when you are not sure what the keys actually are.

## Object Fundamentals
### Some tips for defining objects:

* Dollar armounts are best to ommit the decimal this makes math operations easier as well as local currency and tax conversions.
* Better to define the keys on multiple lines for easier legibility (especially when you key:value pair contains another object)

### Iterating over objects:

For an array you can use for...of... logic but an object must use for...in...

It is possible to iterate over an object with a for...of.. by iterating over Object.keys(definedObject). 

When dealing with classes that generate objects a for..in... can sometimes pickup the keys of the parentals as well - something to worry about later.

### Object Properties

These concepts were demonstrated in [javascript visualizer](http://pythontutor.com/javascript.html#mode=edit)
`const` v `let` : you can alter the values at the location of keys in `const` declared objects, but you cannot define the object as a new object.

you cannot declare a new object using an existing object as they will use the same reference. This also applies to keys that contain objects.      

must declare new objects using `newObject = {}` and import key:value pairs from existing object to create a copy. Using a loop would only get you a shallow copy.

```javascript
const cow = {
  breed: "Belgian Blue",
  age: 10,
  sound: "Moo"
  farm: {location: "Montreal" }
}
]
for (const key of Object.keys(cow)) {
  newCow[key] = cow[key];
}
newCow.sound = "Meuh" //changes only newCow.sound -- cow.sound is left alone.
newCow.farm.location = "Halifax" // !!! changes both newCow.farm.location and cow.farm.location
```
You can use something called a spread operator `{...existingObject}` in a variable assignment to make a deep copy.

### Object Methods

A key can store a function as too - for example:
```javascript
const cow = {
  breed: "Belgian Blue",
  age: 10,
  sound: "Moo"
  farm: {location: "Montreal" }
  makeSound: function() {
    console.log("Moo");
  }
}
```

You can call it with:

```javascript
cow.makeSound();
```

Functions can reference object keys in a local way using `this.['key']`

Like in this example:

```javascript
const superCow = {
  breed: "Belgian Blue",
  age: 10,
  sound: "MooMoo"
  farm: {location: "Montreal" }
  makeSound: function() {
    console.log(this.sound);
  }
}
```
A method *IS* a function but not all functions are methods. 

### `this` in the Global Scope

`this` can be invoked in the global scope but it is not typically used in this way. 

### Some additional info on object keys
An object can be defined even with emoji, but you should not do this unless its for the *luls* - must be invoked later with bracket notation ex.`["📢 "]`:

```javascript
const lecture = {
  title:"Objects in JS",
  lecturer:"Francis",
  "📢": "Very loud"
}
```

We can add keys using either `.dot` or `[bracket]` notation:
```javascript
// Add a key to the object and give it a value.

lecture.length = 120;
lecture["length"] = 120;
lecture["📢"] = "loud-ish";
```
We can also modify a key in the same way:
```javascript
// Modify a value at a specific key

lecture["📢"] = "loud-ish";
lecture.title = "Super Objects in Super JavaScript of Destiny"
```
We need to invoke a a special operator to delete keys:
```javascript
// Delete a key

lecture.cybermen = "DELETE DELETE"
delete lecture.cybermen
```
## When to use and Array and when to use an Object:
It depends. If you're tempted to use a numbered key, ask why you need an object?

 Arrays | Objects 
 :---: | :---: 
 indepdant items | dependant items 

