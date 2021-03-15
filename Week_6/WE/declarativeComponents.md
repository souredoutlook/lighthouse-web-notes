# React

## Declarative Components

We must transfer the responsibility of manipulating the DOM to React.

### HTML to React

The browser parses HTML and converts it to the necessary DOM nodes

The content and structure can also be changed with the JavaScript DOM API in a very imperative way

```javascript
function renderTweet(props) {
  const header = document.createElement('header');
  header.className = 'tweet__header';

  const avatar = document.createElement('img');
  avatar.className = 'tweet__header-avatar';
  avatar.src = props.avatar;

  const name = document.createElement('h2');
  name.className = 'tweet__header-name';
  name.innerText = props.name;

  header.appendChild(avatar);
  header.appendChild(name);

  const main = document.createElement('main');
  main.className = 'tweet__content';

  const content = document.createElement('p');
  content.innerText = props.content;

  main.appendChild(content);

  const footer = document.createElement('footer');
  footer.className = 'tweet__footer';
  footer.innerText = props.date;

  const tweet = document.createElement('article');
  tweet.className = 'tweet';

  tweet.appendChild(header);
  tweet.appendChild(main);
  tweet.appendChild(footer);

  return tweet;
}
```

It would be possible to create the same tweet element using jQuery, which while still imperative would be slightly easier to read with method chaining.

```javascript
function renderTweet(props) {
  return $('<article>').addClass('tweet').append(
    $('<header>').addClass('tweet__header').append(
      $('<img>').addClass('tweet__header-avatar').attr('src', props.avatar),
      $('<h2>').addClass('tweet__header-name').text(props.name)
    ),
    $('<main>').addClass('tweet__content').append(
      $('<p>').text(props.content)
    ),
    $('<footer>').addClass('tweet__footer').text(props.date)
  ).appendTo('.tweets');
}
```

Or use ES6 which template literals which is 'declarative' but also dynamic and readable. jQuery would still do the imperative work of building the DOM described by the string.

```javascript
function Tweet(props) {
  return $(`
    <article class="tweet">
      <header class="tweet__header">
        <img class="tweet__header-avatar" src="${props.avatar}" />
        <h2 class="tweet__header-name">${props.name}</h2>
      </header>
      <main class="tweet__content">
        <p>${props.content}</p>
      </main>
      <footer class="tweet__footer">${props.date}</footer>
    </article>
  `);
}
```

The above solution has drawbacks, it's not that fast, in Tweeter we rendered all the tweets every time a new one came in

We still need to escape all the text to guardd against XSS and that is manual.

It could be logically added to only update what changes but that would also be very intensive.

### Function Components

Conceptually components are like JavaScript functions.

accept arbitrary inputs called props and return React elements describing what should appear on the screen.

Tweeter the react way:

```jsx
function Tweet(props) {
  return (
    <article className="tweet">
      <header className="tweet__header">
        <img className="tweet__header-avatar" src={props.avatar} />
        <h2 className="tweet__header-name">{props.name}</h2>
      </header>
      <main className="tweet__content">
        <p>{props.content}</p>
      </main>
      <footer className="tweet__footer">{props.date}</footer>
    </article>
  );
}
```

### Class Components

An alternative is to declare our React components as ES6 classes

They must exten React.component and overwrite the render() method. The render() method can return React elements:

```jsx
class Tweet extends React.Component {
  render() {
    return (
      <article className="tweet">
        <header className="tweet__header">
          <img className="tweet__header-avatar" src={this.props.avatar} />
          <h2 className="tweet__header-name">{this.props.name}</h2>
        </header>
        <main className="tweet__content">
          <p>{this.props.content}</p>
        </main>
        <footer className="tweet__footer">{this.props.date}</footer>
      </article>
    );
  }
}
```

It is no longer required to implement components as classes to take advantage of some of the core features of the library - we will only use components as functions for the remainder of the project.

