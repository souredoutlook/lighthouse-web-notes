# CSS

### Instructor: Dominic Tremblay

## Content

New Project
CSS Basics
Old CSS Style: Floats
New CSS STyle: Flexbox

## New Project

- Front End Project
- Single-page App
- Uses HTML, CSS, jQuery

- Will be playing with nice CSS efects (example, shadow on hover, in page warning, character counting)

- Will learn responsive design

- We will be using AJAX as well

## What the difference is between TinyApp and Tweeter

TinyApp was a multi-page app that was rendering pages with EJS

Tweeter will only use one page - HTTP request with AJAX (the browser only renders, the app makes the request)

HTML code is produced client side on the fly.

In the react week we are just switching jQuery for React

## Box Model

Almost every html element can be represented with a box.

We can play with the box model to get desired effect and spacing.

Padding: space between the content and the border of the box.

Border: Width of the border, colour of the border etc.

When there are multiple boxes on the page - the space between boxes is the margin.

We can change properties of the box model with the following CSS properties:

- width - relative to the _ box-sizing property _ (content-box, border-box)
- height
- padding
- border
- margin

```html
<div class"box">:box:</div>
```

```css
.box {
  width: 200px;
  height: 200px;

  border: 3px solid blue;
  margin: 20px;
  padding: 10px;
  font-size: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

There is a [css reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) on mdn that will list all the properties that we can think of and how to employ them.

### Calculating the width of a box:

The margin is always outside of the box - calculating width should be inclusive of padding, content and border.

A content box sizes based on the content

A border-box sizes the content inclusive of padding and border

> Chrome extensions called ["Web Developer Tool"](https://chrispederick.com/work/web-developer/)

## Web Layout - Floats

You may hvae to deal with floats with legacy CSS codes.

Before flexboat floats were being used for web layouts
Element can be floated left or oright
Floated elements are not part of the

### Block Level Elements

Take up the whole line.

Not all are block (em, spance, strong)

Browser will render elements fromtop left to bottom right. If given three blockl ine elements, will render "three lines"

We can float the elements left and the will all be inline- to-the-left

Same can happen for float center and right.

when we are floatig elements - it takes them out of their paren't container - the parent container thinks it has no elements in it and collapses to a height of 0 pixels.

THere is a clearfix hack to be used with this by putting the clearfix class on the parrent element.

```css
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
```

Floats aren't necessarily bad practice but do become SUPER tedious at scale.

## CSS: Flexbox

How do we want to distribute items on the page?

A better way to layout elements::

THe Flexbox layout provides more efficient way to layout (align/justify content)

In the Hotdog, Taco, Burrrito example the parent via flex box and the children are flexible items

The items are expanded to fill the box or shrunk to prevent overflow.

### Properties for parent

```css
.container {
  display: flex;
  flex direction: row, column etc.;
  flew flow: ;
  justify-content: flex-start etc.;
  align-items: ;
}
```

When working with flexbox you need to think in terms of two axes: the main axis and the cross axis. The main axis defined by the flex-direction property, and the cross axis-runs perpendicular to it.

Example:

- row -> make axis is horizontal, cross axis is vertical.
- Column -> main axis is vertical, cross axis is horizontal.

### Properties for Child

`order:0` is defult order, by making it -1 it will come before all others. Likewise with making `order: 1`

`flex-grow: 1` works in a similar way to order in that the values or proportional like a percentage.

`flex-basis: 40%` works differently than grow. grow will fill the space, basis has a limit

## Solving the CSS Exercise:

[Working through the exercise together](https://gist.github.com/DominicTremblay/83357ef5d5d006a87a5774893bb9addd)

Steps:

1. Seperate fruits and veggies into their own containers
2. Set the flex-grow properties on both fruit and veggiet containers
3. Set each container and make them flexboxes
4. Upper container flex-direction is row
5. Upper container align items center
6. Align-self: flex-start tomato
7. Align-self: flex-end mushroom
8. Lower container flex-direction is row
9. Lower container: justify-content: space-between;
10. Lower containerAlign items: center;
11. Strawberry order: -1
12. Flex basis: 40% on eggplant
13. display: flex container on egpplant
14. justify content: center on eggplant

### CSS Specificity

CSS is specified in a priority order

Inline style is highest, then id, then class, then element

Interal is higher than external

Can overide scores with `!important`

score is computers 0-0-0-0 but spoken as 1-0-0-0 "1 thousand" or 0-1-2-0 'one hundred twenty"

Pseudo class is considered like class - only active when a certain action happens.
