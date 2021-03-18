## Custom Hooks

### Instructor: Vasily Klimkin

## Promise.all()

A way to .then a group of promises 

If one fails - the whole group triggers a .catch

This is in contrast to Promise.any(), or Promise.allSettled()


## Custom Hook

A custom hook is at its base exporting state to a seperate file and then returning the state and setState functions from your custome hook

Custom hooks always start with the keyword "use" as a convention 

### What is the point

1. At it's base - we don't need to import useState directly into the component
2. The logic is seperate from the component
3. The component looks cleaner and is more readable
4. The logic is REUSABLE (in the lecture example it was reused in both the Login and Register forms)

### Hold on though - these are on the same page?

When we call useForm() it creates a unique iteration of the same hook - it's not global state - global state is CONTEXT

This is why Login and Register can both use useForm() custom hook even though the components are rendered on the same page

### More about custom hooks

Custom hooks are basically grouping of existing hooks in React

We can even add useEffect() to useForm

Custom hooks 'libraries' do exist see [useHooks.com](https://usehooks.com/)

## Refactor Custom Hooks

Refactored useForm()

```javascript
function useForm() {
  const [val, setVal] =useState();

  const onChangeVal = (evt) => {
    setVal(evt.target.value);
  }

  return {val, onChangeVal}
}

//registerForm.js

const email = useForm()
const pass = useForm()
const confPass = useForm()

const onSubmit = (evt) => {
  evt.preventDefault();
  alert(`${email.val} ${pass.val}`);
}
```

## Testing Custom Hooks

We will be testing custom hooks using JEST and @testing-library/react-hooks

### Creating a Test

Make a directory called __tests__ in the hooks directory

Make a file called customHook.test.js *where customHook is the name of your customHook

Import the customHook with `import customHook from '../customHook'`

Write a test:

```javascript
import { renderHook, act } from '@testing-library/react-hooks'

it('sets an array of colors that are passed, and sets the current color to the first element in the array', ()=>{
  const colors = ['salmon', 'firebrick', 'lime', 'green', 'red'];
  
  const {result} = renderHook(()=> useColors(colors))
  console.log(result.current) // will be the returned value of our custom hook if no error
  expect(result.current.state.currentColor).toBe('salmon')
  expect(result.current.state.currentIndex).toBe('0')
})

it('sets the colors passed, then we run next() function which changes the color the next one in the array', ()=>{
  const colors = ['salmon', 'firebrick', 'lime', 'green', 'red'];
  
  const {result} = renderHook(()=> useColors(colors))
  act(()=>{
    result.current.next();
  });
  expect(result.current.state.currentColor).toBe('Firebrick')
  expect(result.current.state.currentIndex).toBe('1')
})

it('sets the colors passed, then we run next() then we run back() which changes it back to salmon, ()=>{
  const colors = ['salmon', 'firebrick', 'lime', 'green', 'red'];
  
  const {result} = renderHook(()=> useColors(colors))
  act(()=>{
    result.current.next();
    result.current.back();
  });
  expect(result.current.state.currentColor).toBe('Salmon')
  expect(result.current.state.currentIndex).toBe('0')
})

//in useColors.js

function useColors(c) {
  const [state, setState] = useState({currentColor: c[0], allColors: c, currentIndex: 0})

  const next = () => {
    setState(prev => {
      const {allColors, currentIndex} = prev;
      const newCurrentColor = allColors[currentIndex + 1]
      const newCurrentIndex = currentIndex + 1;
      return {...prev, currentColor: newCurrentColor, currentIndex: newCurrentIndex; }
    })
  }

  const back = () => {
    setState(prev => {
      const {allColors, currentIndex} = prev;
      const newCurrentColor = allColors[currentIndex - 1]
      const newCurrentIndex = currentIndex - 1;
      return {...prev, currentColor: newCurrentColor, currentIndex: newCurrentIndex; }
    })
  }

  return {state, next, back};
}
```

### Other notes

There are likely other tests we need to write to make sure the index doesn't break but we get the idea

Wrap react state updates in `act(()=>{})` while testing.