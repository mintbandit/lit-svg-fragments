# Example Circle Structure

```html
<svg height="100" width="100">
  <circle
    ...circle-attributes      
  />
</svg>
```

## Basic Circle

<basic-circle svg-height="100" svg-width="100" r="25" cx="50" cy="50"></basic-circle>

```html
<svg height="100" width="100">
  <circle r="25" cx="50" cy="50" />
</svg>
```

A basic circle requires `r` (radius) to be defined and will be colored black by default. While the `cx` and `cy` attributes
are optional will result in the circle being rendered in the top-left corner of the canvas and will be cropped.

## Coloring the circle

<basic-circle svg-height="100" svg-width="100" r="25" fill="red" cx="50" cy="50"></basic-circle>

```html
<svg height="100" width="100">
  <circle r="25" fill="red" cx="50" cy="50" />
</svg>
```

Adding the `fill` attribute will color the internal area of the circle. `fill-opacity` can be applied which will let any
content located behind the circle to become visible.

Setting the `fill` to transparent is equivalent to applying `fill-opacity` zero.

> All fill attributes can also be applied using CSS. Where both exist the CSS rules will take priority.

## Styling the Circumference

<basic-circle svg-height="100" svg-width="100" r="25" fill="yellow" stroke="black" cx="50" cy="50"></basic-circle>

```html
<svg height="100" width="100">
  <circle r="25" fill="yellow" stroke="black" cx="50" cy="50" />
</svg>
```

Applying the stroke attribute will style the circumference of the circle. This can be styled further using the various
`stroke-*` attributes.

<basic-circle svg-height="100" svg-width="100" r="25" fill="yellow" stroke="black" stroke-width="5" cx="50" cy="50"></basic-circle>

```html
<svg height="100" width="100">
  <circle r="25" fill="yellow" stroke="black" stroke-width="5" cx="50" cy="50" />
</svg>
```

Applying `stroke-width` will increase the thickness of the circumference. Half of this value will be added to the overall
radius (r). If the value used in this example was increased to 50, then the circumference will touch the boundary of the
SVG canvas and the yellow fill color will no longer be visible.

Take this into consideration and adjust other attributes accordingly if the circle must adhere to a strict size.

> All stroke attributes can also be applied using CSS. Where both exist the CSS rules will take priority.

### Advanced Styling

<basic-circle svg-height="100" svg-width="100" r="40" fill="transparent" stroke-dasharray="10" stroke="black" stroke-width="2" cx="50" cy="50"></basic-circle>

```html
<svg height="100" width="100">
  <circle r="40" fill="transparent" stroke-dasharray="10" stroke="black" stroke-width="2" cx="50" cy="50" />
</svg>
```

<basic-circle svg-height="100" svg-width="100" r="40" fill="transparent" stroke-dashoffset="10" stroke-dasharray="5,25,40,10" stroke="black" stroke-width="2" cx="50" cy="50"></basic-circle>

```html
<svg height="100" width="100">
  <circle r="40" fill="transparent" stroke-dashoffset="10" stroke-dasharray="5,25,40,10"
    stroke="black" stroke-width="2" cx="50" cy="50" />
</svg>
```


<basic-circle svg-height="100" svg-width="100" r="25" fill="transparent" path-length="2" stroke-dasharray="1" stroke="black" stroke-width="2" cx="50" cy="50"></basic-circle>

```html
<svg height="100" width="100">
  <circle r="25" fill="transparent" pathLength="2" stroke-dasharray="1"
    stroke="black" stroke-width="2" cx="50" cy="50" />
</svg>
```

Using a combination of `stroke-dasharray`, `stroke-dashoffset` and `pathLength` can create some interesting styling effects
on the circumference. `pathLength` controls the effective circumference length and all `stroke` stylings are pro-rata
based on this value.

## Cropped circle

<basic-circle svg-height="100" svg-width="100" r="25" fill="blue" cx="10" cy="10"></basic-circle>

```html
<svg height="100" width="100">
  <circle r="25" fill="blue" cx="10" cy="10" />
</svg>
```

A circle which is positioned too close to the edge of the SVG canvas will be cropped. This can be used to your advantage
to create the necessary graphical output.

<basic-circle svg-height="100" svg-width="100" r="25" fill="blue" cx="-10" cy="-10"></basic-circle>

```html
<svg height="100" width="100">
  <circle r="25" fill="blue" cx="-10" cy="-10" />
</svg>
```

The `cx` and `cy` can be negative and or be greater than the height/width of the SVG canvas but if these coordinates are too
far from the canvas, the shape may be cropped completely. 