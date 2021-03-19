## React Breakout Lecture 

### Instructor Dominic Tremblay

## Selectors

Getting comfortable with find, map, reduce, filter will greatly enhance the speed of which we can develope this kind of functions and we will likely be using them a great deal.


```javascript
// an example of the selector function from todays work
const getAppointmentsForDay = (state, day) => {

  const dayFound = state.days.find(eachDay => eachDay.name === day)

  const appointments = dayFound.appointments.map(appointmentId => state.appointments[appointmentId])

  return appointments;
}

const appointmentsFound = getAppointmentsForDay(state, state.day)'
```

## Stack Data Structure

The stack data structure is a type of data structure where the last item on the stack is the first item off the stack.

There are some typical applications we might do with a stack data structure:

### PUSH

Put a new element on top of the stack

### POP

Take an element off the top of the stack

### Replace

In the case of our example sometimes we want to take an item off and put a new item on the same time.

Some immutable data patterns to achieve this:


```javascript
function useVisualMode(initialMode) {
  const state = {
    elements: [initialMode],
    currentElement: initialMode
  }

const push = (newEl, replace) => {
  state.currentElement = newEl;

  if (replace) {
    state.elements = [...state.elements.slice(0, -1), newEl]
  } else {
    state.elements = [...state.elements, newEl]
  }
} 

const pop = (newEl) => {
 
 
}

const replace = (el) => {

  // remove the last element 
}

return {
  state,
  push,
  pop,
  replace
}

}
```


## Interview Examples

When dealing with data structures we should plan for the data to be maleable - in the case of counting the number of spots available from the appointmentsFound array we need to understand that we cannot subtract the number of booked interviews from teh default number of spots, we must instead count all the appointments where there is no interview. If we decided to scale our operation to add more times in the future we would need to go back and reset all the constants where spots was 5.

We can loop over the array of objects and return the length of a new array or even use reduce to accumulate the number of appointments where interview ==== null but we should NOT expect a constant.


