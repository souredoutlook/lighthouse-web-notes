# React Patterns

## Looping Pattern

From the Tweeter example

```jsx
function TweetList(props) {
  return props.tweets.map((tweet) => {
    return (
      <Tweet
        key={tweet.id}
        name={tweet.name}
        avatar={tweet.avatar}
        content={tweet.content}
        date={tweet.date}
      />
    );
  });
}
```

## Passing Children With JSX
Within any component, we can access the children through props.children. A lot of libraries and some more advanced patterns take advantage of this concept.

```jsx
function Button(props) {
  return <button>{props.children}</button>;
}

function Application(props) {
  return (
    <main>
      <Button>Reset</Button>
    </main>
  );
}
```
## Handling DOM Events

Handling events is critical to building interactive apps

```jsx
//we can attach event handlers to react elements and pass a reference to a function directly
function Button(props) {
  return (
    <button onClick={(event) => console.log("Button Clicked")}>
      {props.children}
    </button>
  );
}

//we can pass a function reference similar to the example below - useful if our function requires multiple expressions on multiple lines
function Button(props) {
  function onClicked(event) {
    console.log("Button Clicked");
  };

  return <button onClick={props.onClick}>{props.children}</button>;
}
```

## Managing State
To store state we need to use a feature of React called hooks, specifically: the `useState` hook.

```javascript
import React, { useState } from "react";
```

>The useState function receives an initial state as an argument and returns an array. The first element of the array is the current value for the state. The second element is a function that can update the state and cause a render.

```jsx
function Application(props) {
  const [count, setCount] = useState(0); //array destructuring 

  return (
    <main>
      <Button onClick={(event) => setCount(count + 1)}>Increment</Button>
      <h1>Button was clicked {count} times.</h1>
    </main>
  )
}
```

## Controlled Inputs && Conditional Rendering

Certain HTML form elements maintain their state - an input element keeps track of what the current value is. Same for textarea and select.

It is preferable for React to manage all of the application state including what is currently typed into an `<input>`

> The search bar component in Album Search is a controlled component

```javascript
function Application(props) {
  const [name, setName] = useState("");

  return (
    <main>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Please enter your name"
      />
      <h1> {name ? `Hello, ${name}.` : ''}</h1>
    </main>
  );
}

```

Remember:

In JavaScript: `true && expression` always evaluates to `expression`, `false && expresion` always evaluates to `false`.

If our requirement was to rend one of two elements based on state it would be better to use a ternary operator - a common example for this is showing either a login button or  logout button depending on isLoggedIn state.


## Fragments

Components can only return one element the is true for when evaluating conditions

We must ensure that our expressions have only one React element at the root.

The solution provided by the library is called a React.Fragment:

```jsx
import React, {Fragment} from "react";

//three ways to access the fragment, the import above would let us just call <Fragment></Fragment>, the one below and the <> </> shorthand
{name && (
  <React.Fragment>
    <h1>Hello, {name}.</h1>
    <Button onClick={reset}>Reset</Button>
  </React.Fragment>
)}

//the non jsx way is more implicit as to why this is important
React.createElement(
  Fragment,
  null,
  React.createElement("h1", null, "Hello, ", name, "."),
  React.createElement(
    Button,
    { onClick: reset },
    "Reset"
  )
);
```