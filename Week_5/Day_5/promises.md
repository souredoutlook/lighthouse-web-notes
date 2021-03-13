# Promises

### Instructor Gary J

## Promises in PG

```javascript
const { Pool } = require('pg');
const pool = new Pool({
  user: "labber",
  password: "labber"
  host: "localhost"
  database: "midterm",
})

const query = "select id, name from users limit 5;"

const results = pool.query(query);
//the query function of node postgres returns a promise
console.log(results); //expected result "Promise { <pending>}"

results.then(res => console.log(res.rows)); //calback inside .then executes when the promise resolves

//a subsequent then with a return will do nothing
results.then(res => console.log(res.rows)) //logs the response rows
.then(res=>console.log("then: ", res));  // then undefined

//a promise can return a value
results.then(res => {
  console.log(res.rows)
  return 8
  })
  .then(res => console.log('then: ', res)) //then 8

//catch will catch errors in the promise
results.then(res => {
  console.logg(res.rows)
  return res;
})
.catch(err => console.log('catch: ', err)); //will catch the error at console.logg as logg is not a method.

//third keyword for promises is finally
results.then(res => {
  console.logg(res.rows)
  return res;
})
.catch(err => console.log('catch: ', err))//will catch the error at console.logg as logg is not a method.
.finally(()=>{
  console.log("finally"); //will happen even if there is an error
});
```

## Axios Promises

```javascript
const axios = require("axios");

const url = "https://api.kanye.rest/";

axios
  .get(url)
  .then((res) => {
    console.log(res.data.quote); // returns a random kanye quote
  })
  .catch((err) => {
    console.log(err);
  });
```

## .all

```javascript
const axios = require('axios');

const url = "https://api.kanye.rest/";

  const promise1 = axios.get(url); //can add .catch(e => e) and it will return the error, through to the console.lgos
  const promise1 = axios.get(url);
  const promise1 = axios.get(url);

  Promise.all([promise1, promise2, promise 3])
  .them(resArray => { //not the same as previous .then res is an array of responses
  for (res of resArray) {
    console.log(res.data);
  }
  })
  .catch(err => console.log(err.errno)) //if one fails, they all fail, and catch won't tell you
```

## Making Promises

```javascript
const orderPizza = function(value) {
  if (value === "pineapple") {
    return Promise.reject("That's not a pizza!: " + value);
  }
  return PRomise.resolve("Your Pizza is ready: " + value);
};

orderPizza("pineapple")
.then(res = > console.log("then", res)
.catch(e=>console.log(e))
);
```
