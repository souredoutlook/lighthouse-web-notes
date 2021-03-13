# Day 2 Lecture

### Instructor: Dominic T

## Content

- Intro
- Curriculum Overview
- Appraoch to lectures
- Incremenetal development
- Git

## Intro

Instructor Team: Dominic T (leader), Francis (East), Vasily (East), Christian (West)

About Dom:
Started [Visicom Media](https://vmn.net) in his parents basement with 2 friends and ran it for 15 years. Still on the board, but transitioned to teaching. His goal is that we will get the same opportunities that he had.

MJ Quote takeaway - so used to seeing peoples succeses but the reality is that you cannot succeed if you don't fail. Especially in coding - it rarely works on the first try.

## Curriculum

- Week 1 & 2: About Javascript fundamentals. Just learning the language itself. Learn about

  - F unctions
    - O bjects
      - C onditionals
      - A rrays
        - L ooping
  - Asychronous control flow, networking, NPM, Unit Testing

- Each Friday is Fundamental Friday - Tests, Learning about computer science topics, later research, write and reflect. 1st test is the first Friday (mock test), we will also learn about recursion.

- Week 3: Creating a web app.

  - HTTP Servers
  - Node.js
  - Express.js
  - Cookies

- Week 4: Front end.

  - jQuery.
  - Single page app.
  - client side JS
  - CSS

- Week 5: Databases.

  - postgres
  - SQL
  - Midterm kickoff.

- Week 6: Midterm - they will define teams, stack and framework. Team selects the project from a list of 10 projects.

- Web Frameworks Week 7 - 10. Lots of time with Modern Web Stacks and Frameworks.

  - Will learn react.js after midterms.
  - Build a scheduler app using react.
  - Learn a new framework, Ruby on Rails. More classical OOP.
  - White papers/blog posts.

- Final Project - Weeks 11 & 12: built in about 10 days. We define the teams, we define the stack and pick our project.

- Four major solo porjects:

  - TinyApp (bit.ly clone)
  - Tweeter (twitter clone)
  - Scheduling Interviews (react.js based)
  - Jungle (ruby on rails project)

- Tech interviews: will get into 1 on 1 with a mentor or an instructor. Whiteboarding questions.
  - In week 2, week 4, week 9.
  - On topics we learned in the prior week.

## Lecture Approach

- General Lecture info:

  - Link will be provided in the slack 10-20 minutes before 10 AM.
  - Lectures will start at 10 am sharp.
  - 10 minute break around 11 am.
  - Cameras turned on.
  - Raise your hand ALT+Y or type in chat. Questions are welcomed.

- Lectures will be a mix of theory and practice - ideally more practice.

  - Will be incremental, error driven development.

- Lectures will have breakout rooms, from time to time.

- Lectures are not a coding along session. Better off focusing on what they are doing and why instead of trying to do it at the same time.
  - Will be provided code aftwards
- Not a good time to do your daily activities alongside.

## Tools

- Best advice for VSCode - learn shortcuts.
- Get güd at google.
- Useful add-ons:
  - Eslint
  - Bracket Matching
  - Prettier (but not for the first few weeks)

Some handy shortcuts for git:

- `git add .` (add all files)
- `git log` (history of git commits)
- `git remote add origin address` (link local git repo to remote on github)
- `git pull` will pull and merge, `git fetch` will just do a pull (without merge)
- `git add -A` will add all modified and untracked files in the entire repository.

Terminal shortcuts:

- `CTRL+L` to clear.

VSCode Shortcuts:

- `OPTION/ALT up or down arrow` will move a selected block of code up or down

JS Ideas:

- `Math.floor(val) === val` can be truthy or falsey - evaluates if val is a whole intege.
- `Number.isInteger(val)` will return a boolean that evaluates where val is an integer.
- `isNaN` or `typeof(Val) === 'number'` will produce similar results in different ways.
- `.slice()` does not necessarily require a second argument if you want it to grab values indefinitely.
- `process.exit()` will halt an executable - ideally you want to cease a program with a return, but if it can't be done you use .exit()
- By putting those kinds of edge cases INSIDE functions you make them less reusable. See Single Responsibility Principle.
- Another work around is to call a function with another function. ex. `console.log(sum(getArguments(args)));`
- In the same example using the Single Responsibility Principle we can understand that it is not the responsibility of a `sum()` function to check if the input are actually numbers.

## Incremental Development

An approach to problem solving. When problems are very simple we tend to blitz through and ignore the step by step appraoch. Then when we do throw an error we don't know where to look.

- Form a habit of breaking the task down into steps
  - Each step can have edge cases. Leave those for later.
- Go into node REPL (Read-Eval-Print-Loop) and play with each method to make sure you understand it before implementing it in your code.
- Remember that when you are coding you are stating a hypothesis. It is important to verify the hypothesis. Then make changes before moving on.
- function composition is a component of functional programming - using functions together can become quite advanced.

## Version Control

GIT <> GITHUB. Git is our version control.

- Save milestones
- keep a history of your code (commits)
- A backup copy exists on github
- May as well use it as it will help with your team project where you are REQUIRED to use it.
- Recommend getting comfortable with CLI before integrating with VS Code or using desktop.
