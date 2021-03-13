# Responsive Design

### Instructor: Vasily Klimkin

## Content

- Responsive Design
- REM EM Pixe Percent
- Breakpoints/media Queries
- Advanced Layout With Flexbox and Breakpoints
- SASS

## Resposive Design

In the past - we had one standard computer design: a desktop or laptop with a big screen.

In 2007 Iphone were released. Websites were ill equiped to work with different screen sizes. Websites on mobile generally gave a terrible user experience. That involved a great deal of pinching and spreading to navigate a page.

Some old webservers decided to detect what device you are using and send you a different layout based on the device you are using.

Responsive design is a different approach to solving this problem.

## Units and Media Queries

In the example below the `<meta>` tag is used to scale the website based on the size of the viewport.

```html
<head>
  <!--stlyesheet, title, etc...-->
  <meta name="viewport" content="width=device-width initial-scale=1.0" />
</head>
<body>
  <div class="item1">
    <div class="item2"></div>
  </div>

  <div class="item3"></div>
</body>
```

Setting heights and widths with computed units is generally favourable when doing responsive design. Sometimes navbars are a fixed unit to accomodate the designers needs.

```css
* {
  margin: 0;
  padding: 0;
  font-size: 16px; /* default font size */
}

.item1 {
  background-color: salmon;
  width: 25%;
  font-size: 2em; /* will make font size 32 */
}

.item2 {
  background-color: firebrick;
  width: 50%;
  font-size: 2em; /*will make font size 64 because item2 is a child of item 1 isa child of body*/
}

.item3 {
  background-color: greenyellow;
  width: 75%;
  font-size: 4rem; /*will be 64 because the root element (body) font is 16*/
}

@media only screen and (min-width: 750px) {
  body {
    /*we can modify properties on breakpoint with this media query - a good way to do this is define a class only inside the media query but add it to the element in the document*/
  }
}
```

## SASS

An example of nested SASS code.

```scss
$wow-color: #c6538c;

.test {
  background-color: salmon;
  padding: 3px;
  > h1 {
    background-color: yellow;
  }
  &:hover {
    background-color: $wow-color;
  }
}
```

When the browser loads the page the server is set up with a compiler that creates a browser-readable .css file on page load.
