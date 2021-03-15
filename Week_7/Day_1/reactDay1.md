# React

### Instructor: Francis Bourgoin

## Content

* Review Weekend Work
* Generating an App CRA
* Making a plan (todo list)
* Creating Components
* Redo the application with Storybook

## Weekend Work

Reviewing the following items:

### Props


### State


### Syntax JSX


### Hooks


### Tree Traversal


### Looping Elements

## Todo List

Requirements:

- Needs to show a list of todos
- Show differently completed / vs incomplete
- Text of the todo
- Add a todo with a form
- Mark as complete

### Data
```javascript
const todoItems = {
  1: {
    id: 1,
    name:"Does order matter?",
    completed:false
  },
  2: {
    id: 2,
    name:"Wear pants",
    completed:false
  },
  3: {
    id: 3,
    name:"Water the plants",
    completed:false
  },
  4: {
    id: 4,
    name:"Water the pants",
    completed:false
  }
}
```

### HTML Skeleton
body
  header
    h1 title of app
  main
    ul
      li
        span text of todo
        i icon of something (maybe)
    form
      input new todo name

### Components

App
  Header
  TodoList
    TodoListItem 
  TodoForm

> ToDoListItem: typically a list will have main component and then child components

### Make The App

1. `npx create-react-app` will create a react app skeleton

2. `npm start` to make sure everything works
  * one thing you can do is rename App.js to App.jsx to get better auto-complete options

3. Create the functional Components
  * Ideally you can create the components all in the same app - however it is cleaner to create them in their own files and call them in App.jsx

```jsx
function App() {
  return (
    <div className="App">
      <Header/> /* import from Header.jsx */
      <ToDoList/> /* import from ToDoList.jsx */
      <ToDoForm /> /* import from ToDoForm.jsx */
    </div>
  )
}
```

```jsx
export default function ToDoListItem() { /*the same as saying exports.ToDoForm = ToDoForm;*/
  return (
    <form action="">
      <input type="text" />
    </form>
  )
}

/*could also do this, but not required because components can be hoisted without issue*/

const someToDo = () => {return true}

export default someToDo

```

4. Modularize and import data
  * We need the data in todo list but we also need to update the data from ToDoForm so we will import the data in App and give it to ToDoList as a prop.


```jsx
import { todoItems } from './data'
function App() {
  const todoList = Object.values(todoItems)
  return (
    <div className="App">
      <Header /> /* import from Header.jsx */
      <ToDoList /> /* import from ToDoList.jsx */
      <ToDoForm /> /* import from ToDoForm.jsx */
    </div>
  )
}
```

5. Iterate over the data in ToDoList

```jsx
import ToDoListItem from './ToDoListItem'

export default function ToDoList(props) {
  const {todoList} = props
  const accumulator = [];
  
  const parsedToDoList = todoList.map(todo => <ToDoListItem todo={todo}/>)
  return (
    <ul>
      {parsedToDoList}
    </ul>
  )
}
```

6. Access the props in ToDoListItem

It is important to an id key to the data to ensure that React can differentiate between the data

```jsx
export default function TodoListItem(props) {
 const {name, completed} = props
 return (
   <li>
    <span>{name}</span>
    {completed && <i>Completed</i>}
  </li>
 )
}
```

## Story Book

What if we want to test our components in isolation? We could comment out the components we dont want to test in <App /> but that is slow and involves a lot of manual manipulation of our source code.

> a note about React.StrictMode: it double renders everything all the time - the goal is eventually - when we work with states rendering it twice we can see if we have state problems

* in CLI `npx sb init`

* creates a .storybook directory

* To run storybook `yarn storybook` or `npm start storybook`

> Yarn introduced version locks, yarn also caches packages

The GUI of storybook presents us with a list of components and their states

When we want to write a story we will make a file called ComponentName.stories.js

An example of a story:

```jsx
import { storiesOf } from '@storybook/react';
import ToDoListItem from '../components/ToDoListItem'

storiesOf('ToDoList Item', module)
  .add('Completed Todo', () => <ToDoListItem />)
  .add('Incomplete Todo', () => <ToDoListItem />)
```

Another example:

```jsx
import { storiesOf } from '@storybook/react';
import ToDoList from '../components/ToDoListItem'

const list = [
  {
    name: "Sing a song while signing a signed contract"
    completed: true
  },
  {
    name: "Look at the birds"
    completed: false
  }
]

storiesOf('ToDoList', module)
  .add('Populated List', () => <ToDoList todoList = {list}/>)
  .add('Empty List', () => <ToDoList todoList = {[]}/>)
  .add('Invalid List', () => <ToDoList todoList = {{}}/>)
  .add('Forgotten List', ()=> <ToDoList />)
```

Storybook lets us do error handling like so:

```jsx
import TodoListItem from './ToDoListItem'

export default function ToDoListItem(props) {
  const {todoList} = props
  const parsedToDoList = Array.isArray(todoList) && todoList.map(todo => <ToDoListItem key={todo.id} {... todo}> )
  return (
    <ul>
      {parsedTodolist}
      {parsedTodoList && parsedTodoList.length === 0 && <li>Looks like the list is empty</li> }
      {!parsedTodoList && <span>Looks like something went wrong with the list</span>}
    </ul>
  )
}
```

> Remember when we type `npm start` we are starting the webpack server for the project, when we run npm 

> Very important for todays activities: each activity follows a structure don't get ahead.