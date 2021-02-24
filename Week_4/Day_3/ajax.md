# AJAX

### Instructor: Dominic Tremblay

## Content
* What is AJAX
* Traditional Model vs AJAX
* Vanill Ajax
* Ajax with Jquery
* CORS

## What is AJAX

Like a regular HTTP request an AJAX request has a verb and a path
Unlike a regular HTTP request, the web server only sends back the DATA

### Review of Traditional Model

1. Clicking register submits a POST /register request
2. The browser creates the request and sends it to the server.
3. This model triggers a page reload

Basically: AJAX is a technique allowing the user interface to update itself WITHOUT RELOADING the whole document.

History:
* Microsoft added a little-known function named XMLHttpRequest to IE5
* In 2006 the W3 published a specification for the XMLHttpRequest object
* The XMLHttpRequest object is used to retrieve data asynchronously.
* Initially, it was mainly using XML, but today it can use any other formats such as JSON.

### Vanilla AJAX

```javascript
const getBiography = function (url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();
  xhr.addEventListener("load", function(event) {
    console.log(JSON.parse(this.response));
  })
}

const frm = document.getElementById('get-bio-frm');

frm.addEventListener("submit", (event)=>{
  event.preventDefault();
  getBiograpy(someURL); // om this example someURL is actualy a locally hosted API
})
```

>Very important that we understand HOW the data is structured if we are going to try to extract information from it.

## AJAX with jQuery

An AJAX 'GET' request:
```javascript
const createMediaElement = function(obj) {
  return `a template string written in HTML syntx`;
}

const getTVResult = function(searchTerm) {
  const url = `http://api.tvmaz.com/serach/shows?q=${searchTerm}`;

  $.ajax({
      url,
      method: 'GET'
  })
    .done(data => {
      console.log('Success! Data: ', data)
      //empty the container
      $('#search-results').empty();
      // convert the data to HTML elements
      for (const mediaObj of data) {
        const newElement = createMediaElement(meidaObj)
        $('#search-results').append(newElement);
      }
    })
    .fail(error => console.log(error.message))
    .always(
      console.log('Request completed.')
    );

});

$(document).ready(function() {
  const $form = $('#seach-frm')

  // put an event listener on submit of form
  $form.on('submit', function(event) {
    event.preventDefault();
    console.log('Submit')//always do these console logs for each step
    // capture the content of the search box
    // Method 1:
    const $searchBox = $(this).children('input[type="search"]');
    // Method 2: use serialize();
    // const searchTerm = $(this).serialize(); //if input box name="searchBox" the value of searchTerm becomes 'searchBox=value'

    // make an AJAX request
    getTVResult($searchBox.val());

  // add each HTML elements to the container


})
```

> Benefit of using AJAX vs. the fetch() API - for this application not much of an advantage. fetch() is another way to do it that is built into the browser.
### Pro's and Con's

Pro's of AJAX: Improve user experience. Apps that require a lot of clicking means the classical model is probably not the best. No page reloads - faster renders and improved response times. Reduced network load.

Cons of AJAX: Creating dynamic content can be tricky. Async programming patterns are complex to code. Requires JS and XMLHTTPRequest support. (Most users should have no problem with this)

OTHER BIG CON: you lose your browser history. Browsers do provide a history API that allows you to [programmaticaly](https://css-tricks.com/using-the-html5-history-api) interact with the browser history. 

### CORS

* For security reasons, browsers restrict cross-origin HTTP requests iniatated from scripts.
* Ajax requests follow same-origin policy.
* A web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins inccludes the right CORS headers.

To make cross-origin requests work - we need to tell our server that we can accept requests from another server.

Can use an NPM module called CORS, a middleware that enables cross-origin resource sharing. `npm install cors`

```javascript
//using express && body-parser
const cors = require('cors'
corsOptions = {
  origin: crossOriginURL //some url that we are allowing to issue requests on our server
  optionSuccessStatus: 200 // some legacy browsers don't play with 204
}

app.use(cors(corsOptions));
```

Use case we will run into running seperate servers on different ports:

API is running on one port. Front-end is running on another port. React is like this. We can either use CORS or write a proxy.

If you use API on the frontend (like tvmaze.com) then you need to configure things to allow the users of the api to make CORS requests.


