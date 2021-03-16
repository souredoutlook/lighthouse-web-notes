# Immutable Update Paths 

### Instructor: Vasily Klimkin

## Content
Review
State
Immutability
Props
Practice

## Review

React's strength is that in the long run it is faster because it only loads content as it's needed. Things are re-rendered with changes in state.

### Review App

```javascript
import React from 'react'
import NumberDisplay from 'components/NumberDisplay'
import './App.css'


function App() {

let [num, setNum] = useState();

const countUp = () => {
  setNum(num+1); //num++ will not work even though we have 'let' the destructured variables because nothing has told React to re-render
}
  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={countUp}>Add 1 to num</button>
    </div>
  )
}
```

### Review Spread

```javascript
//compare the results of

const array=[1,2,3]
const copyArray = array

copyArray.push(4)

console.log(array, copyArray) //expect 1,2,3,4 and 1,2,3,4

const spreadArray = [...array]
spreadArray.push(5)

console.log(array,spreadArray) //expect 1,2,3,4 and 1,2,3,4,5

//could also use
const anotherSpreadArray = [...array, 5]

console.log(anotherSpreadArray) //expect 1,2,3,4,5
```

## Immutability Patterns

Always make a copy and set it to the original

React looks to see if the value that is being set is different from the current value and if so then initiates a render

Because arrays and objects are references to values we need to use spread operators instead of push or property assignment:

```javascript
const [todos, setTodos] = useState(['Make oatmeal'])

setTodo([...todos, 'What the fuck is oatmeal?'])

```

## 

```jsx
function Form(props) {
  // here props is a parameter - when we call it in jsx like so... <Form /> we are just add keys to the props object
  const [val, setVal] = useState("");

  const handleOnChange = (event) => {
    event.preventDefault();
    setVal(event.target.value);
  }

  return (
    <form className="name-form">
      <input type="text" name="memeURL" value={val} onChange={handleOnChange}/>
      <button>Submit</button>
    </form>
  )
}
```
