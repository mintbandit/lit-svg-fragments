## Example SVG Structure

Structure for animating a single rectangle attribute.

```html
<svg height="100" width="100">
  <rect
    ...rectangle-attributes
  >
    <animate
      ...animate-attributes
    />
  </rect>
</svg>
```

Structure for animating multiple rectangle attributes.

```html
<svg height="100" width="100">
  <rect
    ...rectangle-attributes      
  >
    <animate
      ...animate-attributes-1
    />
    <animate
      ...animate-attributes-2
    />
    <!-- additional animate elements if required --> 
  </rect>
</svg>
```