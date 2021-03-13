# More on Responsive Design

### From [Responsive Web Design Patterns](https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns)

## Five Patterns\*

- Mostly Fluid
- Column Drop
- Layout Shifter
- Tiny Tweaks
- Off Canvas

\*as identified by [Luke Wroblewski](https://www.lukew.com/ff/entry.asp?1514)

## Mostly Fluid

Small Screens - columns are stacked vertically
Medium screeens -> large screens - styles the same more gridlike- margins are adjusted to be wider

## Column Drop

Full-width multi column layouts become stacked vertically as the window width becomes too narrow for the content.

## Layout Shifter

Most responsive pattern:

Key to the layout is the way the content moves about, instead of reflowing and dropping below other columns. Significant changes to elements required, not just layout. Hard to maintain.

## Tiny Tweaks

Works well with single column layout to make small adjustments such as font size - image resizing or moving content around in minor ways.

## Off Canvas

Rather than vertically stacking, off canvas places less frequent content off screen only showing it when screen size is large enough. Smaller screens the content can be brought in with a click.

Instead of a layout flow - uses `transform: (translate(-250px, 0))` (for example) to shuttle the content divs offscren.
