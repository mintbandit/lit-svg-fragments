# Example Grouped Structure

```html
<svg height="100" width="100">
  <g
    ...group-attributes
  >  
    <circle
      ...circle-attributes-1     
    />
    <circle
      ...circle-attributes-2
    />
    ... next shape and so on  
  </g>    
</svg>
```

Group element is used to apply common svg attribute styling on child elements. Child elements can override the inheritance
at anytime by apply css or an alternate attribute value. 

## Basic grouping

<grouped-circles r="50" fill="white" stroke-width="10" stroke="green"></grouped-circles>

```html
<svg height="200" width="200">
  <g stroke="green" fill="white" stroke-width="10">
    <circle r="50" cx="60" cy="60" />
    <circle r="50" cx="100" cy="100" />
    <circle r="50" cx="140" cy="140" />
  </g>   
</svg>
```

<grouped-circles r="50" fill="transparent" stroke-width="10" stroke="green"></grouped-circles>

```html
<svg height="200" width="200">
  <g stroke="green" fill="transparent" stroke-width="10">
    <circle r="50" cx="60" cy="60" />
    <circle r="50" cx="100" cy="100" />
    <circle r="50" cx="140" cy="140" />
  </g>   
</svg>
```

## Behavior of siblings rendering

The group element only affects common styling and does not affect how one shape will render in relation to another.
It is down to the order the elements are defined in the DOM and the positioning/size attributes the impact the final
shape of the SVG image.

```
...
  <circle r="50" cx="60" cy="60" />    // layer 1
  <circle r="50" cx="100" cy="100" />  // layer 2
  <circle r="50" cx="140" cy="140" />  // layer 3
  ... and so on
...
```

Take the above example with 3 circles. The first circle is the first layer which renders at the back, the second circle
is the second layer which will render on top of the first. Where both circles overlap the 2nd will render on top of the
first cropping part of it. When the 3rd circle is added it will render on top of the previous two.

This is why parts of the green circumference is missing from the above examples and only will the fill of the circles
is changed to transparent the content behind visible.

By configuring and overlapping shapes accordingly, complex images such as line charts can be developed.