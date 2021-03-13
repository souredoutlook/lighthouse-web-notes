# OOP I Did it Again

Examples of OOP Languages:

- Java
- C++
- Python
- Ruby

Examples of Functional Programming Languages:

- Haskell
- Erlang
- Clojure
- Common Lisp

Javascript is based on a functional paradigm but ES6 added more OOP features. This can create confusion amongst the commmunity but creates an opportunity to work with OOP in a "more evolutionary way"

Some common facts about OOP:

- software development "paradigm" (i.e. not syntax, not lanaguage)
- popular way to solve code organization, re-use and modularity.
- mastering OO is essential due to is ubiquity.
- Javascript is not strictly OOP unlike Ruby and Java
- Functional programming </> OOP (they are different paradigms -> Javascript is mainly FP)

## Object in OOP

In OOP we want to group all functions and variables that relate to "dogs" in a dog object - like this:

```javascript
const dog = {
  sound: "woof",
  dogBreed: "shih tzu",
  speak: function () {
    console.log(`${this.dogBreed} says ${this.dogSound}`);
  },
};
```

### Object Recap

> An object is a collection of key/value pairs known as properties.

> An object's little bundle of information is also known as a state - the properties can represent the state of an object. In this case the objects "sound" is woof and the "breed" is shih tzu. This is the objects state.

> When a property's value is a function we cann it a method. This method is also called the object's behaviour.

### Much ado and `this`

We use `this` like a variable but it is actually a keyword (like for, or function)

The value of `this` is determined at the time of the call and depends on how and where it was called.

When you use `this` inside a method it refers to the object.

## Back to OO

OO bundles (groups) together related state and logic into an object that can be passed around as a single entity.

Primary goals: reduce duplicated code, breaking code up into sensibly-divided units.

Ultimately about making more complex things simpler to read, write and maintain.

### Abstraction

> Abstraction is a technique for arranging complexity of computer systems. It works by establishing a level of complexity on which a person interacts with the system, supressing the more complex details below the current level.

Private v public : in some languages properties can be made private whic means that they can't be accessed outside of the class they're created in. In javascript there is no way of making something private but if we add an \_ to the start of a property name other develoeprs will know that they shouldn't access it directly.

### Single Responsibility Principle

a class should be responsible for a single part of the apps functionality, giving it only one reason to change. Having only one job.

If there is more than one reason to change a class the class needs to be broken up into smaller objects.

### Inheritance

When we're not using OO we use functions and modules to reduce duplicate code.

## Why?

It gives us a new tool for modularization

In JS when and how OO gets used is a choice, usually based on the project - in languages like C++, Ruby, you will use it and you might not have other options.

THe reason OO languages are so popular is that it is often a good option.
