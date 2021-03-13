# Media Queries

### From [Codesource - Responsive Web Design: Media Queries](https://youtu.be/KX94fPaKqaU)

## Some Posible Meqia Query Parameters

| `media-type` | `(media-features)` |
| ------------ | ------------------ |
| screen       | width              |
| print        | height             |
| handheld     | min-width          |
| tv           | min-height         |
| projector    | max-width          |
| all          | max- height        |
| -            | color              |
| -            | monochrome         |

## Meqia Queries

`@media "media-type" and ("meadia-feature": argument)`

Media Queries can be written in the main stylesheet or in an external styleshee, linked thus:

```html
<link rel="stlyesheet" href="small.css" media="(max-width: 600px)" />
```

Usually embedded is best - because it's an additional http request it can slow down the page load.

### Width

Width typically causes the layout to change the most - ideally we need an upper bound, but a lower band can set as well.

```css
@media (min-width: 400px) and (max-width: 800px) {
  /*style goes here*/
}
```
