# JSX

## React.createElement

JSX is the language we use with React to declare what the user interface should look like.

It is not required to use JSX with React.

### JSX v JavaScript

```jsx
const element = <h2 className="name">Name</h2>
```
> jsx uses className instead of class -> not all properties map directly to html attributes

```javascript
const element = React.createElement("h2", {
  className: "name"}, Name)
})
```

>The React.createElement(type, [props], [...children]) function allows us to create a hierarchy of DOM nodes. The following JSX describes a static tweet.

We import React from 'react' even when we don't see a reference to React anywhere because the conversion tool converts JSX to JavaScript and the dependency on React is revealed.

* A component is this way `const tweet = <Tweet /> 
* React requires that we always start component names with a capital letter
* JSX conversion uses the case of the tag name to determine if we are describing a component or an HTML element.

## ReactDOM.render

* An element can be "rendered" into any DOM node using the react-dom library

```javascript
import React from "react";
import ReactDOM from "react-dom";

function Tweet(props) {
  return (
    <article className="tweet">
      <header className="tweet__header">
        <img className="tweet__header-avatar" src={ props.avatar } />
        <h2 className="tweet__header-name">{ props.name }</h2>
      </header>
      <main className="tweet__content">
        <p>{ props.content }</p>
      </main>
      <footer className="tweet__footer">{ props.date }</footer>
    </article>
  );
}

ReactDOM.render(
  <Tweet
    name="React"
    avatar="https://api.adorable.io/avatars/64/react@adorable.png"
    content="A JavaScript library for building user interfaces"
    date="May 29th, 2013"
  />,
  document.getElementById("root")
)
// this example requires <div id="root"></div> to be declared in the HTML, everything inside the root dom node will be managed by React
```

Most applications call ReactDOM.render(element, container) a single time to render the app. Album Search example rendered <LiveSearch /> into the "root" DOM node

## Expressions in JSX

Earlier projects used EJS to create dynamic content out of HTML

JSX is going to feel similar

It looks like template but it is purely JavaScript so we can use expressions

```jsx
import { format } from "date-fns";

function Footer(props) {
  return (
    <footer className="tweet__footer">
      {format(props.date, "MMMM Do, YYYY")}
    </footer>
  )
}

ReactDOM.render(
  <Footer
    date="2013-05-29"
  />,
  document.getElementById("root")
);
```

### Rules

JSX is more strict than HTML

1. All tags must be closed
  * use a self closing tag, or open and close tags
  * an unclosed <img /> tag would result in an error
2. A child tag must close before it's parent. 
3. All JSX expressions must result in one root level element.
  * A function can only return one value.
4. No html comments `<!---->` only `// or /**/`

### Plain Language Rules

>
    All tags must be closed
    A child tag must close before its parent
    All JSX expressions must result in one root level element
    No HTML comments


## About unique id

When we render lists of components in React we need to uniquely identify each component.

React lets us do this through a key prop.

## About mock data

the easiest way to mock data is by loading some json directly into your project

This can be replaced later with live data

## Styles
styles can be applied to HTML elements using the className prop

The codesandbox had support for CSS definined in the src/styles.css file