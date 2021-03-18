## From Compass

## useEffect Hook Rules

1. Don't call Hooks inside loops, conditions, or nested functions
2. Only call Hooks from inside React components
3. The effect method that we pass to useEffect must either return undefined or a function

## useEffect Dependencies

We can tell React to skip applying an effect if certain values haven't changed between re-renders by passing an option second argument.

The dependencies are an array of values (usually state)

## Data Fetching

Pattern for data fetching typically follows the same steps:

1. The component has no results when React renders it the first time
2. The component makes an async request to the API server
3. The data for the component is returned in the response
4. The component can now be updated with the data using an action that sets the state. 

## Class Based Components

Classes have an API that allows us to use this same type of pattern with lifecycle methods.

Any class-based component can implement one of the following functions

* componentDidMount
* componentDidUpdate
* componentWillUnmount


## useState addendum

setState[1] - the function that sets the state can either take a value or a callback that will be executed and the value that it returns will be set as state.

The callback has a paramater called prev (by convention - we can call it whatever we want but we SHOULD call it prev)

Getting the previous value of state is important with async functions

## React cleanup

If we return a function from useEffect React will use it for cleanup. In our example we created a timeout and then returned a clearInterval for the timeout. This ensures that multiple timeouts are not running at the same time. This will keep our intervals clean and ensure only one timer is running at a time (the effect actually counts down but that is inherent to the fact that the timeout changes the state we are dependant on)