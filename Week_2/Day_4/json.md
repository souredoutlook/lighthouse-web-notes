# JSON 

## Syntax

Lookes like this:

```javascript
{
  "name": "New York City",
  "boroughs": [
    "Manhattan",
    "Queens",
    "Brooklyn",
    "The Bronx",
    "Staten Island"],
  "population": 8491079,
  "area_codes": [212, 347, 646, 718, 917, 929],
  "position": { "lat": 40.7127, "lng": -74.0059 }
}

```

* keys are always double-quoted "strings"
* values can be numbers, strings, or objects themselves.

> JSON syntax is and must be *valid* JavaScript

## JSON.parse() & JSON.stringify()

* Serialization converts objects (or data structures) into a format that can be stored or transmitted between computers (typically a string of text)
* The opposite is called *deserialization*
* In JavaScript we use JSON.parse() and JSON.stringify() to perform deserialization and serialization, respectively.

>trying to delete a json obj property? `jsonObj.property = undefined;`... `jsonObj = JSON.parse(JSON.stringify(jsonObj))`

## API

* A set of requirements that govern how one application can talk to another.
* On the web - API's make it possible for big services to laet other apps piggyback on their offerings.
* API's do this by exposing some of a programs internal functions to the outside world in a limited fashion.
* Doesn't require sharing the software's code - which is inefficient and runs into liscencing issues.
* Open source programs also do this.
* User convenience and programmer convenience.
* Make Web-service "mashups" possible
* API's go bad when services that offer their API's for use unilaterally alter what functions are exposed or limit the exposition altogether.


/// request function - after i check if the url is undefined if !error host is invalid