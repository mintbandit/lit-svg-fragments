# Example Ellipse Structure

```html
<svg height="100" width="100">
  <ellipse
    ...ellipse-attributes      
  />
</svg>
```

## Basic Ellipse

<basic-ellipse svg-height="100" svg-width="100" rx="40" ry="25" cx="50" cy="50"></basic-ellipse>

```html
<svg height="100" width="100">
  <ellipse rx="40" ry="25" cx="50" cy="50" />
</svg>
```

A basic ellipse requires both the `rx` (x radius) and `ry` (y radius) to be defined and will be colored black by default.
While the `cx` and `cy` attributes are optional will result in the ellipse being rendered in the top-left corner of the
canvas and will be cropped.

## Styling the Ellipse

<basic-ellipse svg-height="100" svg-width="100" stroke-dasharray="10" fill="yellow" stroke="black" stroke-width="5" rx="40" ry="25" cx="50" cy="50"></basic-ellipse>

```html
<svg height="100" width="100">
  <ellipse fill="yellow" stroke="black" stroke-dasharray="10" stroke-width="5" rx="40" ry="25" cx="50" cy="50" />
</svg>
```

The only difference between a circle and an ellipse is how the radius is defined. To style it use the exact same `stroke`
and `fill` attributes.

For more examples consult [coloring circles.](?path=/docs/basic-shapes-circle--docs#coloring-the-circle)