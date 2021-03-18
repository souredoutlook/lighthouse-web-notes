## Axios

Many libraries allow us to make requests using hte XMLHttpRequest API
Because we don't need the powerful selectors and DOM manip tools that jQuery provides we can use a modern library like Axios specifically for data fetching

### View Library Agnostic

The responsibility is limited to making HTTP requests so we can use it with Vue or Angular or React

## Usage

Install with `npm install axios`

We can use these methods

`axios.get(url[, config])`
`axios.post(url[, config])`
`axios.put(url[, config])`
`axios.delete(url[, config])`

Project specific examples from Scheduler

```javascript
//get appointments
axios.get("/api/appointments").then((response) => {
  console.log(response);
});

//update appointment
axios
  .put(`/api/appointments/2`, {
    id: 2,
    time: "1pm",
    interview: {
      student: "Archie Cohen",
      interviewer: 9,
    },
  })
  .then((response) => {
    console.log(response);
  });

//errors
axios
  .get("/api/appointments")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.response.status);
    console.log(error.response.headers);
    console.log(error.response.data);
  });
```

## Modern Library

Axios allows us to use advanced features that will scale wit hte project as requirements increase in complexity

* We can cancel an in-progress request
* Can set a timeout for a response
* Supports CSRF protection