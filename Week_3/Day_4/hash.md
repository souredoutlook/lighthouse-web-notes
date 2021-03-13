# Hash (Sheesh)

### Instructor: Dominic Tremblay

## Hashing V Encryption

Hashing is not reversible, encryption can be reversed.

## Hashing 101:

Salt: random string
Password:

Goes thru the hash function a number of times.

Returns a hash result

## bCrypt Basics

bCrypts hash process is slow. Done on purpose to prevent a brute force attack.

bCrypt lets us increase the iteration count of the hash function so we can scale our brute force protection as technology advances (specifically in relation to Moore's law)

## NPM bcrypt

```javascript
//...
const bcrypt = require("bcrypt");
//...
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
if (brcrypt.compareSync(myPlaintextPassword, hash)) {
  console.log("Success!");
}
```

## Why not just hash the cookie?

Hashing is irreversible.

We would also need access to the userid that was hashed to make the cookie each time which is itself a problem because we determine the userid dynamically whem the cookie comes with a request.

Hashing is also slow. And HTTP requests/responses are expected to be FAST.

So we will use encryption.

## cookie-session

```javascript
const cookieSession = require("cookie-sesion"); //middleware that replaces cookie parser

app.use(
  cookieSession({
    name: "session",
    keys: [key1, key2], //keys can be different
  })
);
//replace res.cookie with req.session['user_id'] = userID.
//res.clearCookie doesnt work need .session['user_id'] = null
```

## Stealing Cookies

A common cookie stealing method was when you connect to WiFi and that wasn't secured - anything you send over HTTP can be read because HTTP is a plain text protocol.

HTTPS is a way around this MITM type attack.

> Generally good advice to NEVER connect to an unsecured WiFi

## REST

- Representational State Transfer
- Resource based routes convention (The key abstraction of information in REST )

> Rest exercise in the lecture notes.

## Routes

- Not rest necessarily but when organizing routes in a server start with login/authentication at the top, followed by CRUD operations. Try to put get and post routes for the same endpoint near each other.
- Eventually when routes get complex enough routes will be moved into a seperate /routes folder organized by resource i.e. quotes, comments, authentication

## Middleware

When we get the request and before we send the response we can interact with the objects in the middle with middleware.

Examples: Incoming Request => body parser => cookie-parser/cookie-session => response

## Creating a Middleware

```javascript
const getCurrentUser = (req, res, next) => {
  // have access to req.session

  const userID = req.session["user_id"]; //extracting user id from the cookies

  const loggedInUser = usersDb[userId];

  req.currentUser = loggedInUser;

  next();
};

app.use(getCurrentUser());

// the order of the app.use() calls can alter the flow of the requests and responses

// can make you authentication function into a middleware function > typically what is done when that is in production
```
