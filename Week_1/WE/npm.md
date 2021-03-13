# Introduction to Modules

So far we've copy/pasted code around because we don't yet know how to share code between files. This is a pain. The code is [WET instead of DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself#DRY_vs_WET_solutions)

Seperating code into multiple files so that we don't repeat ourselves uses something called modules.

## Every File In Node Is A Module

This can be checked with a single line of code, in a .js file run by node:

```javascript
console.log(module);
```

the result should look like this:

```javascript
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: '/Users/superman/codes/moduleCheck.js',
  loaded: false,
  children: [],
  paths: [ ... ]
}
```

A collection of information about the file - which is considered it's own module by node.

## `exports: {}`

A key aspect of modules is `exports: {}`.

A js file must 'export' the part that it want to be `require`-able (importable). Files usually export an object (or a function - which is an object anyways.)

The following code can be used to `require` a file:

```javascript
const functionName = require("./myModule"); // .js is not necessary - the ./ syntax assumes myModule is in the same directory
```

When a file is required, it needs to also be exporting an object in order for the requirement to work - objects can be export this way:

```javascript
module.exports = objectName; //this can be done with a function (which is an object)
```

## NPM

Another powerful feature of node is it's package manager. If we want to add functionality we can usually find and install a package to use in our projects.

A package is a self contained code library that we can install and use. Code libraries are a collection of pre-written code. They can be private, but many are packaged up nicely, branded and made publicly available for other developers to use in their own projects. (ex. jQuery)

Installing and using packages in Node is relatively straightforward from the command line. Say we want to install a package called chalk:

```
npm install chalk
```

## package.json

Virtually all Node.js projects ahve a file called package.json - might look similar to this:

```javascript
{
  "name": "project-name",
  "version": "1.0.0",
  "description": "Short project summary",
  "main": "index.js",
  "scripts": {
    "myscript": "ENV=development node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "express": "^4.13.4"
  }
}
```

Include basic attributes such as the project's name, description and author.

The scripts portion allows us to run command using an alias for instance:

```
npm run myscript
```

## [Dependencies](https://docs.npmjs.com/files/package.json)

Dependencies are the packages that need to be installed for the project to run properly. The above package.json lists: express, with a version of 4.13.4 or higher

There is also a [package-lock.json](https://www.google.com/search?q=npm+docs+package+lock+json&oq=npm+docs+package+lock+json) file that lists **all the details** of our projects dependencies. It should be checked into git along with package.json (whereas the node_modules directory is gitignored)

> \*\*Editing the package-lock file directly should be avoided, we modify it indirectly with commands like npm install
