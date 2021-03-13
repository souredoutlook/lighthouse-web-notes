# React 

## Why?

* Declarative
  * simple views for each state
  * update and render just the right components when your data changes

* Component-based
  * encapsulated componenets that manage their own state
  * then compose them to make complex uis
  * component logic is written in JS not templates

## [Imperative v Declarative](https://ui.dev/imperative-vs-declarative-programming/)

Imperative: “I see that table located under the Gone Fishin’ sign is empty. My husband and I are going to walk over there and sit down.”

Declarative: "Table for two, please"

Imperative: "Take a left... got two blocks ... blah blah"

Declarative: "Here's my address"

Thinking declaratively can also mean thinking functionally. For example .map() is a declarative abstraction of a for loop (imperative).

> Declarative programming is “the act of programming in languages that conform to the mental model of the developer rather than the operational model of the machine.”
>Declarative Programming is programming with declarations, i.e., declarative sentences.
> The declarative property is where there can exist only one possible set of statements that can express each specific modular semantic. The imperative property is the dual, where semantics are inconsistent under composition and/or can be expressed with variations of sets of statements.
>Declarative languages contrast with imperative languages which specify explicit manipulation of the computer’s internal state; or procedural languages which specify an explicit sequence of steps to follow.
>In computer science, declarative programming is a programming paradigm that expresses the logic of a computation without describing its control flow.
>I draw the line between declarative and non-declarative at whether you can trace the code as it runs. Regex is 100% declarative, as it’s untraceable while the pattern is being executed.

## Component Based

Components are the most important concept in the React ecosystem

Building blocks of complex user interfaces.

Can receive data and maintain state.

When a component recieves new data or changes it's state then it will return element that will be rendered into the DOM.

Good components are:

* composable - can combine them together to build complex user interfaces
* encapsulated we can build them in isolation
* reusable - we can use them in different parts of our application without duplicating code
* testable - we can isolate them for certain types of testing

### Single Responsibility Principle

Each component should be responsible for doing only one thing. When we have narrowed down each thing - we can then build their relationship into a tree structure.

### An example of a react app structure

```jsx
<LiveSearch>
  <SearchBar>
    <Loading />
  </SearchBar>
  <Error />
  <Filters />
  <Results >
    <Album />
    <Album />
    <Album/>
  </Results>
</LiveSearch>
```

## Props & State

### Props 
Props are the data passed from a parent component to a child component

Similar to passing arguments to a function except a component cannot change the props passed to it
### State

State is private data managed internally by the component
A render() is triggered when a component changes it's state.

### Important

Identify the minimal state needed to represent your application

1. Is it passed in from a parent via props. If so - it probably isn't state
2. Does it remain unchanged over time? If so - it probably isn't state
3. Can you compute it based on any other state or props in your component? If so it isn't state
