# CRUD with Express

## Instructor: Vasily Klimkin

## Content
* Review
* CRUD

## Review
* Always going to be a request and response object.
* Always going to be some kind of instruction that needs to be coded for routing.
* Always going to send a response to the client.
> Tip for boilerplating an HTML doc with Emmet: type `!` on first line and look at Emmet autocomplete options.

## CRUD Basics
What is the basic purpose of a web app? Basically replaces people passing physical documents and images back and forth (in many cases.)

Passing notes requires same CRUD operations that a web server employs.

Creating - Making new information (POST)
Reading - Displaying that information (GET)
Updating - Add more information (PUT)
Destryoing - Making the information go away (DELETE)

## Route Naming Conventions

[REST Resource Naming Guide](https://restfulapi.net/resource-naming/)

> A resource can be a singleton or a collection - REST API Tutorial

Basically a collection should be `'/nouns'` and a singleton should be `'/nouns/{nounID}'`

## Post Memes

We can even using .ejs to populate `<img src="">` tags.

## Nodemon

* We can add a script after installing nodemon that will load out project in a nodemon wrapper. This does not need  to be NPM start but the assignment in compass will have us do this using the absolute path.

## Using Req and Res

* All the instructions from the request will always live in the request.
* Express allows a params key that is an object with an id. This enables dynamic routing.
* We can dynamically inject the param keys into pages as we render them.

## Post Requests

* Post Requests are methods that **change** information on the server.
* You will never be able to make a post request from the browser URL input field or an href as they are all get requests.
  * We need a form: `<form method="POST" action="/path/to/thing">

* A post request often results in a redirect - for user experience, sending a confirmation of a post request (like checking out a shopping cart ) should add a contextually appropriate page.
  * If we rendered a new page based on a post request it would probably result in duplicate code
    * It would also result in a weird route in the URL in this case.pp
  * A redirect in the example of tiny app is more contextually appropriate. 

> A note on render: there should only be one render per route - you might have an if statement in a route that has branching paths for render but there endpoint should never have more than one render.

## Dynamic Routes

* When using dynamic routes, ordering your get and post matters!
* For exmaple /memes/new and /memes/:id can trigger the same event. By changing the order the event handlers go on the stack you can avoid having memes/new go to the memes/:id endpoint.

