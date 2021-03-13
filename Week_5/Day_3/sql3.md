# SQL 3

### Instructor: Francis Bourgouin

## REVIEW

From the commandline launch psql with `psql`

Create a new database in psql with: `CREATE DATABASE database_name WITH OWNER 'user'`

- Typically don't want to create database with superusers if it will be deployed online due to risk

Connect to database with `\c database_name`

Execute sql scripts with `\i path/to/file.sql`

- This command is dependant on what directory you launched psql from

Scripts:

```sql
DROP TABLE jokes; -- will throw an error if jokes does not exist. Can add IF EXISTS

CREATE TABLE authors(
  id SERIAL PRIMARY KEY
  name TEXT
  type TEXT
);

SELECT * FROM jokes JOIN authors ON auhtor_id = authors.id
```

## Using JS instead of PSQL

psql is just a client

We can install a node client for postgres with `npm install pg`

```javascript
// command-line-sql.js

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'labber',
  host: 'localhost',
  database: 'cooljokes',
  password: 'labber',
  port: 5432
})

const commandLineValue = Number(process.argv[2])

if (commandLineValue){
  const queryValues = [commandLineValue]
  pool.query('SELECT * FROM jokes WHERE id = $1', queryValues, (err, res) => {
    //first arg is actual query script, second arg is the variables for $ notation
    // use dollar sign notation with regular single quotes - it's an sql thing
    $joke = res.rows[0]) //res.rows is an array of objects
    console.log($joke.question)
    console.log('--- --- ---')
    console.log($joke.answer)
    pool.end()
  })
}
```

## SQL in Express

```js
//server.js

const { Pool } = require("pg");

const pool = new Pool({
  //...
});

app.get("/", (req, res) => {
  pool.query("SELECT * FROM jokes", (err, dbRes) => {
    const joke = dbRes.rows[0];
    const templateVars = {
      question: joke.question,
      answer: joke.answer,
    };
    res.render("index", templateVars);
  }); // pool.query is async
});
```

## Query with Promises

```javascript
getRandomJoke = () => {
  return pool.query("SELECT * FROM jokes").then((dbRes) => {
    const amountOfJokes = dbRes.rowCount;
    const randomIndex = Math.floor(Math.randomw() * amountOfJokes);
    const joke = dbRes.rows[randomIndex];

    return joke;
  });
};

app.get("/", (req, res) => {
  getRandomJoke().then((joke) => {
    const templateVars = {
      question: joke.question,
      answer: joke.answer,
    };
    res.render("index", templateVars);
  });
});
```

## Closures

```javascript
const countdown = (time) => {
  for (let i = time; i >= 0; i--) {
    console.log(`${i}...`);
  }
};

const countdownFromFive = () => countdown(5);

const countdownBuilder = (time) => {
  const countdown = () => {
    for (let i = time; i >= 0; i--) {
      console.log(`${i}...`);
    }
    console.log("Liftoff!");
  };
  return countdown;
};
```

## Closures with Pool

```javascript
//dbHelpers.js
const initializeDBHelpers = (pool) => {
  getRandomJoke = () => {
    return pool.query("SELECT * FROM jokes").then((dbRes) => {
      const amountOfJokes = dbRes.rowCount;
      const randomIndex = Math.floor(Math.randomw() * amountOfJokes);
      const joke = dbRes.rows[randomIndex];

      return joke;
    });
  };

  return { getRandomJoke };
};

//server.js
const initializeDBHelpers = require("dbHelpers.js");
//.. after defining pool
const { getRandomJoke } = initializeDBHelpers(pool);
```

The purpose of doing closures with these helper functions is to seperate the concerns of the routing - the server is not concerned with what kind of query is happening? Is it SQL? is it some other kind of database? The route just get's an object that it can work with.
