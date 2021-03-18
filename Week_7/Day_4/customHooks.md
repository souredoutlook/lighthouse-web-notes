## From Compass

## Custom Hooks - More Rules

So far for hooks we know

1. Don't call hooks inside loops, conditions or nested functions
2. Only call Hooks from inside React components

We also have 3? 

> A custom hook is a function that must start with the word "use"

Since we must call a custom Hook from within a component, a custom Hook can call other custom or built-in-Hooks

## Sharing Logic Between Functions

Hooks are designed to solve an entire class of problems in React:

* Hard to reuse stateful logic between components
* Complex components grow in size.
* Classes confuse people and Machines

Controlled components example:

```jsx
function Application(props) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <form>
      <input
        value={firstname}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        value={lastname}
        onChange={(event) => setLastName(event.target.value)}
      />
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        type="password"
      />
      <input
        value={passwordConfirmation}
        onChange={(event) => setPasswordConfirmation(event.target.value)}
        type="password"
      />
  </form>
);

// versus

function useControlledInput(initial) {
  const [value, setValue] = useState(initial);

  return {
    value,
    onChange: (event) => setValue(event.target.value)
  };
}

function Application(props) {
  const firstname = useControlledInput("");
  const lastname = useControlledInput("");
  const email = useControlledInput("");
  const password = useControlledInput("");
  const passwordConfirmation = useControlledInput("");

  return (
    <form>
      <input {...firstname} />
      <input {...lastname} />
      <input {...email} />
      <input {...password} type="password" />
      <input {...passwordConfirmation} type="password" />
    </form>
  );
}
```