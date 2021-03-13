# User Authentication with Express

## Instructor: Francis Bourgoin

## Content

Creating a login form
Server-side authentication
HTTP Lifecycle Review
Usefulness of Cookies
Implementing cookies in the server

## Creating a Login Form

```javascript
const database = {
  'email' = {
    email: 'email',
    password: 'password',
    name: 'name'
  }
}
//...
const {} = require('body-parser') // bodyParser takes raw data from a form and parses it into an object
app.use(bodyParser.urlEncoded({ extended: false }))
//...
app.get('/login', (req, res) => {
  // would work with req.params but it doesnt respect REST conventions
});

app.post('/login', (req, res) => {
  //need to use req.body.email || .password to get the credentials with a post
  const {email, password} = req.body;
  if (database[email].password === password) {
    res.redirect('/');
  } else {
    res.send("BAD PASSWORD OR YOU ARE A BAD PERSON I DUNNO");
  }
});
```

## Using Cookies for Authentication

```javascript
//...
const cookieParser = require("cookierParser");
app.use(cookieParser());
//...

app.get("/", (req, res) => {});

app.post("/login", (req, res) => {
  //need to use req.body.email || .password to get the credentials with a post
  const { email, password } = req.body;
  if (database[email]) {
    if (database[email].password === password) {
      res.cookie("email", email);
      res.redirect("/");
    } else {
      res.send("BAD PASSWORD OR YOU ARE A BAD PERSON I DUNNO");
    }
  } else {
    res.send("BAD EMAIL OR YOU ARE A BAD PERSON I DUNNO");
  }
});
```

> When using `<button>` instead of `<input type="submit">` you need to make sure the `<button type="submit">` not `<button type="button">` which is the default button type.

```javascript
// validation function
const validateUser = function (email, password, userDB) {
  const currentUser = userDB(email);
  if (currentUser) {
    if (currentUser.password === password) {
      //successful login
      return { user: currentUser, error: null };
    } else {
      //failed at email
      return { user: null, error: "password" };
    }
  } else {
    return { user: null, error: email }; //null is more explicit as the user isn't undefined, the user doesnt exist ++ explicit
  }
};

//endpoint

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const { user, error } = validateUser(email, passowrd, databaseISH);

  if (user) {
    res.cookie("email", email);
    res.redirect("/");
  } else {
    res.send(`There was an error of type : ${error}`);
  }
});
```

## Registration with our validation function

```javascript
//create user function
const { user, error } = validateUser(email, password, userDB);
```

## EJS Tip

The `<%- %>` tags render external html into a document, usuallt used with include('./partials/\_...') but can also write html directly into the page like so.

```html
<%-
<script>
  Bob = 5;
</script>
%>
```

## HTTP is Stateless

What do we mean by stateless?
