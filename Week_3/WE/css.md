# CSS & HTML Review

## HTML, CSS and DOM

- HTML - language of the web
  - HTML in a document with syntax and rules
  - Browser turns HTML tags into htmls in a a tree (DOM)
  - In between tags are content, tags can have attributes and values
  - Tag type determines what kind of element will be created.
- CSS:

  - CSS syntax and rules change how things look on the page.
  - Can style all class of elements the same way.
  - CSS classes create hooks for styling elements when the page is rendered.

  Element : Description

  ***

- `<html>` represents the root of an HTML document
- `<head>` provides general information (metadata) about the document
- `<title>` defines the title of the document, shown in a browser's title bar
- `<link>` specifies relationships between the current document and an external resource
- `<body>` represents the content of an HTML document
- `<h1>`,`<h2>,` ... Heading elements implement six levels of document headings
- `<p>` represents a paragraph of text
- `<div>` Division Element, generic container for flow content
- `<ol>`,`<ul>` list of items with, or without numerical ordering
- `<li>` represents an item in a list
- `<a>` anchor element; defines a hyperlink to a location or page on the Web
- `<table>` display a data table. Note: not to be used for layout
- `<tr>` a table row
- `<td>` a cell in a table row

## CSS

### ID's v Classes

Id's are a unique identifier used once on a page.

A class is an identifier of an element which can be used multiple times on a page.

Both are used for JS and CSS

ID's are required for using the url/#ID anchor for example, and because of this must be unique.

Id syntax:

```html
<div id="header"></div>
<div id="navigation"></div>
<div id="typesOfFish/types-of-fish"></div>
```

Class syntax:

```html
<div class="contact-method">
  <h3>Phone</h3>
  <p>###-###-####</p>
</div>
<div class="contact-method">
  <h3>Email</h3>
  <p>new@old.haus</p>
</div>
<div class="contact-method">
  <h3>Carrier Pidgeon</h3>
  <p>coo-coo-cooo</p>
</div>
```

## devTools Tips

Right-click -> Inspect // elements styles appear in styles pane
Docking-> cmd+shift+p -> dock to bottom in cmd menu / or un-dock

> Command menu is a really useful way to speed up routine tasks
> Computed pane will show you what styles are applied to element but expanding the style tree will show the cascade that has been applied to the element
> Inspect mode will allow you to mouse-over and highlight elements in the DOM tree.
> The DOM tree is searchable with cmd+F:

- //section/h2 (xPath -> query language for xml)
- simple strings
- Also searchable in the devtools console inspect(document.querySelector{'input'})
  Detailed tooltip's in inspect mode: cmd+shift+c
  Debugging animations - in the animations menu. Accesible from the command menu.
  Rendering tab - rendering in command menu.
- Green - means browser has to paint to do animation - room for [improvement.](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)
  Prototyping CSS:
- Tedious to edit CSS and reload the page.
- Edit in styles pane and the element is updated immediately.
- Autocompleting is also available in devTools
- Shift+Up Arrow will incremement pixels by 10.
- Pseudo-classes inspectible with .hov tab. (next to .cls tb)
- .cls button to quickly add and remove classes (autocomplete is populated with other classes found on the page)
- Contrast ratio: the colour box in the element.style pane will open the colour picker - which gives detail regarding the contrast ratio
- Copy back to code base:
  1. Right-click > Copy > Copy-styles
  2. Paste what's on clipboard in element.style
- Screenshots:
  - Command menu -> Capture Screenshot
  - Command menu -> Capture Full Size Screenshot (above and below viewport)
  - Commnd Menu -> Capture Area Screenshot (arbitrary size)
  - Command Menu -> Capture Node Screenshot (just the inspected node)
- Debugging Javascript -> console log shortcute CMD+SHIFT+J
  - Open the console in the drawer with escape. (will keep it open no matter what other panel you're working on.)
  - Logging an object wrapped in curly braces will give you shorthand notation
  - Console.table will put it in table format
  - Console.trace('how is this?')
- Debugging with sources (put a debugger statement in the code) Step over -> Next function call ->
  - Stepping over the code will print out the value of items as we step through
  - We can also use live expressions ex: `typeof someVar` in the console to get more info than just the value.
  - A logpoint can be used to log statements without having to add console.log to your code.
  - Store as globle variable in the console will allow us to write further expressions on the variable.
  - More breakpoints - DOM mutation, event handler. (beware the un-privated click !!! DAMN chrome extensions)
- Alot of confusion about what tools to use about analyzing load performance - start withs audits panel - tests the page and follow documentation
