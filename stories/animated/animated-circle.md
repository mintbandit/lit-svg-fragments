## Example SVG Structure

Structure for animating a single circle attribute.

```html
<svg height="100" width="100">
  <circle
    ...circle-attributes      
  >
    <animate
      ...animate-attributes
    />   
  </circle>
</svg>
```

Structure for animating multiple circle attributes.

```html
<svg height="100" width="100">
  <circle
    ...circle-attributes      
  >
    <animate
      ...animate-attributes-1
    />
    <animate
      ...animate-attributes-2
    />
    <!-- additional animate elements if required --> 
  </circle>
</svg>
```