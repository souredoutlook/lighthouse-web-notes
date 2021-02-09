# Automated Testing
## Instructor: Dominic Tremblay
> "Not sure if I wrote good code or a shitty unit test."
## Content

* Automated Testing
* TestDriven Development
* NodeJS Assert
* BBD
* Mocha && Chai

## Automated Testing

Why?

* To save time on debugging.
* To make sure that the code does what it intends to.
* Works as documentation for code too (to show how the code SHOULD work.)
* It is hard to keep an entire program in your head (as a mental model.)
* Forces us to make more modular code.

#### Main Goal: 
To improve over all code quality.

#### Other Benefits: 
* Save time compared to manual testing.
* Easy to see if new code is breaking anything
* Forces us to think about bugs up front.

> Can be integrated into build workflow. - Dominic Tremblay

#### Idea:
When working on branch: writing tests that can be run automatically to decide whether to approve or decline a pull request.

## Test Driven Development
What is TDD?
* Relise on test to DRIVE development.
* Write the test first and the write the code to make the test pass.
  * Write a test, which will fail (because no code written yet.)
  * Write the minimal amount of code to make the test pass.
  * Then refactor the code to make it more readable and maintainable.

> Building the app is maybe 20% of the work - maintaining and managing the app is 80% of the work.

## Demo
1. NodeJS Assert
2. Mocha
3. Chai

```javascript
const numberOfVowels = (str) => {

}

// write the assertion using the built in console.assert
console.assert(numberOfVowels('tomato') === 3, "it should have 3 vowels with tomato");
```

TDD requires ensuring the test fails when the code is empty. 

Then add the minimal amount of code to make the test pass, in the case above: `return 3`

Then we would refactor to make the code continues to work under different conitions, like below:

```javascript
const numberOfVowels = (str) => {

}

// write the assertion using the built in console.assert
console.assert(numberOfVowels('tomato') === 3, "it should have 3 vowels with 'tomato'");
console.assert(numberOfVowels('sweet potato') === 5, "it should have 5 with 'sweet potato'")
```

Which would fail - so we refactor our code to make it pass. etc. etc.

Maybe with a for loop, and some `.includes` logic

```javascript
console.assert([1,2] === [1,2], "array 1 should match array 2" ) // returns false - therefore assertion fails

//they fail because they're reference values.

console.assert([1,2].toString ==== [1,2].toString) // will pass but there is abtter way

const assert = require('assert').strict;

assert.deepEqual([1,2] == [1,2]) // works on arrays and objects
```

When doing multiple assertions - throwing an error will not allow the remainder of the assertions to run.

We can use Try Catch to handle the errors more gracefully.

```javascript
try {
  // What we need to execute
} catch (error){
  // Handle the error here ex.
  console.log('this is a message about an error')
}
```

the `catch (error)` clause is catching an object (error) that is populated when error is thrown. We can use the properties of the error to give us more information about what the error is. This can be proven using `console.log(error)`

```javascript
console.log(`${error.name} - expected: ${error.expected} actual: ${error.actual}`)
```

## In Practice: Automated Testing

Using `module.exports = functionName` (it is very inmportant to omit the call) to make the function requirable in your test folder.

The benefit of testing in this way is that is seperates your code and test code. 

> Do not use import even though vsCode wants it - this can happen if you are on very recent version of Node. Require is the js standard for now. - Dominic Tremblay

## Modules

Are keeping a set of function in seperate files. We can think of modules as javaScript libraries

## Mocha

Bring it in locally using npm install mocha --save-dev so that dev dependencies are updated.

Mocha allows us to have better assertion messaging and more complex cases than simply using NodeJS assert.

Mocha testing uses describe/context blocks and it blocks. It blocks contain the test cases.


Using [chai assertion](https://devhints.io/chai) library instead of NodeJS assertion library lets us do BBD as well as TDD.

### BBB

* BBD describes the behaviour of the system from the customers point of view.

* Based on users' stories

* Uses a more natural lanaguage that everyone can understand.

## Expect

We can require expect with const expect = require(chai).expect()

There is also .should()  etc.

## Testing With Chai

Deploy chai locally with `npm install chai --save-dev`

A tip for requiring multiple functions from a module in a test file:

```javascript
//test/pet_adoption_test.js
const {findPetByName, addForAdoption} = require ('../pet_adoption')

//pet_adoption.js
module.exports = {findPetByName, addForAdoption}
```

The chai assertion library allows us to make assertions that are much morelike human language - which is a component of BBD. See below:

```javascript
const {expect} = require('chai');
const {findPetByName, addForAdoption} = require ('../pet_adoption')

describe("findPetByName",()=>{
  it('returns false if the pet is not found', ()=> {
    const result = findPetByName('Coco', pets);

    expect(results).to.be.false; //example of an expressive assertion - chai includes a variety of symantic chains to create these expressive statements.
  })
})

describe("addForAdoption", ()=>{
  const pets = [];

  it('it put a new pet for adoption',()=>{
  const result = addForAdoption("Dora", "Female", "House Cat", '🐱', 6, pets);

    expect(result).to.have.length(1);
    expect(result).to.deep.include({ //deep.include is used for looking at arrays and objects, likewise with deep.equal
      name: 'Dora',
      gender: 'Female',
      breed: 'House Cat',
      type: '🐱',
      age: 6
    });
  });
})

describe('adoptPet',()=>{

  it('removes the pet from the adoption list' ()=>{
    const result = adoptPet('Gus', pets)
    expect(result).to.have.length(1);
    expect (result).to.not.deep.include({ // chaining with .not is similar to a not equals operator !==
      name: 'Gus',
      gender: 'Male',
      breed: 'Domestic Cat',
      type: '🐱',
      age: 8
    })
  })
})
```

