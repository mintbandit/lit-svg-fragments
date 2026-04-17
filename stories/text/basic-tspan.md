# Example Tspan Structure

```html
<svg height="100" width="100">
  <text
    ...text-attributes      
  >
    <tspan
      ...tspan-attributes
    >
      Text inside tspan.  
    </tspan>
  </text>    
</svg>
```

## Basic Tspan

<basic-tspan svg-height="60" svg-width="530" displayText='"I am a tspan."'></basic-tspan>

```html
<svg height="60" width="530">
  <text x="15" y="35">
    This text is before the tspan.
    <tspan>"I am a tspan."</tspan>  
    This text is after the tspan.  
  </text>
</svg>
```

## Using the x + y attributes

<basic-tspan svg-height="60" svg-width="530" displayText='"I am a tspan."' x="50" y="40"></basic-tspan>

```html
<svg height="60" width="530">
  <text x="15" y="35">
    This text is before the tspan.
    <tspan x="50" y="40">"I am a tspan."</tspan>  
    This text is after the tspan.  
  </text>
</svg>
```

By default, the tspan will render directly after the previous text node. However, when the `x` + `y` attributes are applied,
the `tspan` will render relative to the top left of the canvas and will overlap any content occupying the same space.
The next text node will always render relative to the `tspan`.