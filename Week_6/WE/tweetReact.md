# Tweeter React Refactor Notes

## React Overview

##

## Dynamic Components

Importing external fonts in React works the same way as a typical file - react can only controll the node we gave it access to.

It is also possible to use a package to manage external fonts etc. but the simplest way is to inlude the script tags in the head.

Rendering a list of components is possible but each component must have a unique `key` prop

### Dynamic Tweets

Managing props for dynamic components is simple, we can create a component that loops over the data and returns an array of components with each data point as props as children. We can even make an array of tweets and simply call it as a child to be rendered inside a container with `{tweets}` 

## Using State

useState hooks allow use to use state in each functional component that we build.

useState() returns two values typically we create a destructured array with the first element of data, and the second element of setData

useState also takes an argument which is the initial value of our state
```javascript

const [tweetData, setTweetData] = useStata(initialTweetData)

// write a function 

// add the function to onClick in a componenet

return (
  <App onClick={function}>
)
 ```

 ## Forms

 We can get form data the same way as jquery with event.target.value and manipulate the dom with useState

 In tweeter we want to turn the character counter red when the characters remaining is 0 or less we can do this with a conditional style tag.

 ## Passing Props to Children

 We can pass props to children (like a function for example) and use them in the component declaration of the child components. This is a good way to pass state UP the tree (in the case of tweeter) because the Composer is a child of root but we need to call functions at the base of root where the tweets themselves will be rendered. 

