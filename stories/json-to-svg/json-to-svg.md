# Experimental JSON to SVG parser

## Typical format

```json
{
  "type": "svg",
  "attributes": {
    "height": "100",
    "width": "100"
  },
  "children": [
    {
      "type": "circle",
      "attributes": {
        ... child attributes
      },
      "children": [
        ... nested children
      ]
    }
  ]
}
```

* type (string) -> Name of SVG element of render
* attributes (object) -> Name of attribute and value to be applied to element. Define attributes in camelCase e.g. `stroke-array` -> `strokeArray`
* children (Array) -> child elements. Each child needs to define a type, attributes (if applicable) and nested children (if applicable)

 
## Limitations

Only a limited number of SVG elements can be rendered at this time and not all attributes will be rendered. Only those listed
in the controls of existing stories can be applied.

> animation attributes have not been aligned with native name yet. Please use names listed in the controls.

## Useful links

* https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute
* https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element