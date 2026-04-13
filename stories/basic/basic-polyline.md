# Example Polyline Structure

```html
<svg height="100" width="100">
  <polyline
    ...polyline-attributes      
  />
</svg>
```

## Basic Polyline

<basic-polyline svg-height="100" svg-width="100" points="50,0 21,90 98,35 2,35 79,90"></basic-polyline>

```html
<svg height="100" width="100">
  <polyline points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

It accepts a list of coordinates, with each point presenting the next position of the line.

> The basic SVG polyline visually will look identical to an SVG polygon. The differences become clear when stroke and
> fill attributes are applied. By default, the area enclosed will be colored black and the border will not be colored.

## Difference with Polygon

<basic-polyline svg-height="100" svg-width="100" fill="white" stroke="black" points="50,0 21,90 98,35 2,35 79,90"></basic-polyline>

```html
<svg height="100" width="100">
  <polyline points="50,0 21,90 98,35 2,35 79,90" fill="white" stroke="black" />
</svg>
```

The main difference is how the first and last points behave. In a polygon a line will be drawn between them closing the
shape, in a polyline it will not do that. The polygon equivalent to the above example is
[here.](?path=/docs/basic-shapes-polygon--docs#difference-with-polyline)