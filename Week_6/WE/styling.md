# Styling React

## [Four Ways to Style React Components](https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822)

React has no opinions on how it should be styled.

Inline styling for just a few style properties

When you want to reuse your style properties then style-component are perfect

Otherwise CSS Modules or Regular CSS stylesheets

### CSS Stylesheet

```javascript
import './DottedBox.css'

const DottedBox = () => (
  <div className="DottedBox">
    <p className="DottedBox_content">Get started with CSS styling</p>
  </div>
);

export default DottedBox;
```

a seperate style sheet for each component in this example

### Inline
Inline styles are not specified as string. Instead they are specified with an object whose key is the cameCased version of the style name and whose value is the styles value - usually a string

We can create a variable that stores style properties and then pass it to the element like `style={nameOfVariable}`

It is also possible to pass the style direct: `style={{color: 'pink'}}`

```javascript
mport React from 'react';

const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};

const Box = () => (
  <div style={divStyle}>
    <p style={pStyle}>Get started with inline style</p>
  </div>
);

export default Box;
```

### CSS Modules

A CSS module is a CSS file in which all class names and animation names are scoped locally by default.

```javascript
import React from 'react';
import styles from './DashedBox.css';

const DashedBox = () => (
  <div className={styles.container}>
    <p className={styles.content}>Get started with CSS Modules style</p>
  </div>
);

export default DashedBox;
```
Use :local with webpack configurations or just `.className` of you are using your own react boilerplate
```css
 :local(.container) {
   margin: 40px;
   border: 5px dashed pink;
 }
 :local(.content) {
   font-size: 15px;
   text-align: center;
 }
```
To make CSS modules work with Webpack you only have to include the modules mentioned above and add the following loader to your webpack.config.js file:

```json
. . .
{
  test: /\.css$/,
  loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
}
. . .
```

### Styled Components

[Styled-components](https://github.com/styled-components/styled-components) is a library for React and React Native that allows you to use component-level styles in your app that are written with a mixture of JavaScript and CSS

```javascript
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;
  &:hover {
   background-color: yellow;
 }
`;

const Paragraph = styled.p`
  font-size: 15px;
  text-align: center;
`;

const OutsetBox = () => (
  <Div>
    <Paragraph>Get started with styled-components 💅</Paragraph>
  </Div>
);

export default OutsetBox;
```

>    First we need to install styled-components library
    `npm install styled-components --save`
    Now we can create a variable by selecting a particular html element where we store our style keys `const Div = styled.htmlElemnet`color: pink``
    Then we use the name of our variable as a wrapper `<Div></Div>` kind of react component:)
    Tips to use emoji icons key shortcut CTRL+CMD+SPACE 💡

### Preprocessors

Sass is a preprocessor scripting language this is interpreted or compiled into Cascading Style Sheets

SCSS uses block formating like that of CSS supported in create-react-app 2.0 out of the box and becomes a common way to style components


Less extends CSS with dynamic behaviour such as variables, mixins,  operations and functions 

Styleable is another approach to CSS modules

SCSS style sheets are processed into CSS through webpack 

SCSS can also use .env [SASS_PATH](https://create-react-app.dev/docs/adding-a-sass-stylesheet/) variables to make requirement a breeze throughout the app

## Component.css

With vanilla ES6 we cannot import CSS files support for this was built into create-react-app but it is webpack and babel doing the heavy lifting.

importing css modules is not a requirement for react - one might build all their css into one module so that the codebase is more portable (where webpack may not be available for some constraints)

## BEM


* Block: Encapsulates a standalone entity that is meaningful on its own. In our case this is the .day-list.
* Element: An element that is tied to its block. In our case this is the .day-list__item.
* Modifier: An modification to a block or an element. In our case this is .day-list__item---selected or .day-list__item---full.

```jsx
<li class="day-list__item">Default</li>
<li class="day-list__item day-list__item---selected">Selected</li>
<li class="day-list__item day-list__item---full">Full</li>
<li class="day-list__item day-list__item---selected day-list__item---full">Selected & Full</li>
```
