import { svg, nothing } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';

// TODO svg elements have a lot of attributes that can be applied
//  Currently lit-html does not support a spread function for
//  dynamic attributes in templates.
//  https://github.com/lit/lit/issues/923
//  This issue refers to @open-wc/lit-helpers as possible solution.
//  https://github.com/open-wc/open-wc/blob/master/packages/lit-helpers/CHANGELOG.md
//  See 0.5.0 changes, covers spreadEvents as well
//  Would likely need to stick with native names in this file.
//  Re-mapping would only be possible components

// TODO for lit-helpers spread to work
//  Keys must match the native attribute name
//   -> Agree with position of not converting 'camelCase' -> 'camel-case'
//   -> Would break the few attributes which are required to be defined in camelCase e.g. pathLength
//  Therefore mapping would need to be done upstream or here to construct/control object passed into helper
//   - 'key' : val -> maps to attribute
//   - '?key' : val -> maps to boolean attribute
//   - '.key' : val -> maps to property, native attributes won't react to this. Ok on another Lit Element webcomponent that has reflect enabled
//   - '@key ': val -> adds event-listener. Not useful at this time but would be in the future. No effect on rendering.
//  SpreadEvents might be the only useful helper

// TODO long term function structure proposal
//  -> svgFragmentFunction( <object> attributeValues, <array> childElements, <object> eventMap)
//     - attributeValues -> values to be applied to each attribute on each svg element (Done)
//     - childElement -> Many svg elements require innerHtml or text to function, e.g. <text> and animating elements (working)
//     - eventMap -> Use the spreadEvent lit-helper to add event listeners (Advanced usage)
//  Not considered yet -> adding classnames

// TODO list of attributes for SVGs
//  https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute
//  Not all are applicable to every element

// TODO May need list all of them in javadocs or CEM for storybook demo.
//  Only a subset will be documented initially.

// Attributes evaluated
//  - style -> All elements, if using this what is the point of the other attributes?

// TODO Remaining SVG elements
//  - clipPath
//  - feBlend
//  - fe*** x25 -> Advanced filters
//  - filter
//  - foreignObject
//  - linearGradient
//  - mask
//  - mpath
//  - pattern
//  - radialGradient
//  - stop
//  - style -> CSP conflict?
//  - symbol
//  - view

// TODO turn an shape into a link
//  Supports same attributes
//  Must wrap another shape
export const createAnchor = ({}, innerHtmlFragments = nothing) => {
  return svg`
    <a 
      download=""
      href=""
      hreflang=""
      interestfor="experimental"
      ping="experimental"
      referrerpolicy=""
      rel=""
      target=""
      type=""
      xlink:href="deprecated"
    >
      <!-- requires child elements --->
      ${innerHtmlFragments}
    </a>
  `;
};

// TODO graphical object that can be used later
//  Consider it a reusable svg template
export const createDefs = ({}, innerHtmlFragments = nothing) => {
  // TODO supports global attributes
  return svg`
    <defs>
      <!-- requires child elements --->
      ${innerHtmlFragments}
    </defs>
  `;
};

// TODO this one can be completed in full
export const createImage = ({}, innerHtmlFragments = nothing) => {
  return svg`
    <image 
      x=""
      y=""
      width=""
      height=""
      href=""
      preserveAspectRatio=""
      crossorigin=""
      decoding=""
      fetchpriority=""
      xlink:href=""
    >
      ${innerHtmlFragments}
    </image>
  `;
};

// TODO for creating arrowheads
//  important for charts
export const createMarker = ({}, innerHtmlFragments = nothing) => {
  return svg`
    <marker
      markerHeight=""
      markerUnits=""
      markerWidth=""
      orient=""
      preserveAspectRatio=""
      refX=""
      refY=""
      viewBox=""
    >
      ${innerHtmlFragments}
    </marker>
  `;
};

export const createPath = (
  {
    d,
    stroke,
    strokeDasharray,
    strokeDashoffset,
    strokeLinecap,
    strokeLinejoin,
    strokeMiterlimit,
    strokeOpacity,
    strokeWidth,
    fill,
    fillOpacity,
    fillRule,
    pathLength,
  },
  innerHtmlFragments = nothing,
) => {
  // https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/d

  // 6 types of commands, 20 available
  // Upper case -> absolute coordinates
  // lower case -> relative coordinates
  // x, y in each command is the end point (start point for next command)

  // M (moveTo) - starting position
  // A Elliptical arc curve - ( rx, ry arc-options x,y )
  // Q Quadratic Bezier curve - (x1, y1, x, y) - x1/y1 is control point, line bends towards it
  //   - T - (x, y) smooth curve to point, based on previous curve command
  // L LineTo - (x, y) straight line to coordinate
  //   - H - (x) horizontal line
  //   - V - (y) vertical line
  // C - Cubic Bezier curve - (x1, y1, x2, y2, x, y) x1/y1 is control point at beginning, x2/y2 is control point at end
  //   - S (x2, y2, x, y) smooth curve to point, first control point based on previous curve
  // Z Close Path - Connect first last point

  // Very similar to points array for polyline/polygon
  //  main difference is micromanaging how the points are connected
  //  M at the front of list of points will generate the exact same output
  //  Can create complex patterns without using multiple line elements

  d = `
      M 10,30
      A 20,20 0,0,1 50,30
      A 20,20 0,0,1 90,30
      Q 90,60 50,90
      Q 10,60 10,30 z
    `;

  stroke = 'blue';
  fill = 'red';

  return svg`
    <path
      d=${d}
      stroke=${ifDefined(stroke)}
      stroke-dasharray=${ifDefined(strokeDasharray)}
      stroke-dashoffset=${ifDefined(strokeDashoffset)}
      stroke-linecap=${ifDefined(strokeLinecap)}
      stroke-linejoin=${ifDefined(strokeLinejoin)}
      stroke-miterlimit=${ifDefined(strokeMiterlimit)}
      stroke-opacity=${ifDefined(strokeOpacity)}
      stroke-width=${ifDefined(strokeWidth)}
      fill=${ifDefined(fill)}
      fill-opacity=${ifDefined(fillOpacity)}
      fill-rule=${ifDefined(fillRule)}
      pathLength=${ifDefined(pathLength)}       
    >
      ${innerHtmlFragments}
    </path>
  `;
};

// TODO will be a child element of another shape element
//  Likely functions above will call this.
export const createSet = ({}, innerHtmlFragments = nothing) => {
  return svg`
    <set
      attributeName=""
      attributeType=""
      begin=""
      dur=""
      end=""
      fill=""
      keyPoints=""
      max=""
      min=""
      repeatCount=""
      repeatDur=""
      restart=""
      to=""
    >
      ${innerHtmlFragments}
    </set>
  `;
};

// TODO Useful for i18n
//  child elements will render subject to system configurations
export const createSwitch = ({}, innerHtmlFragments = nothing) => {
  return svg`
    <switch
      requiredExtensions=""
      systemLanguage=""
    >
      <!-- requires child elements --->
      ${innerHtmlFragments}
    </switch>>
  `;
};

// TODO Yes, this is allowed
//  Unlikely to ever be supported due to security concerns.
//  How would you even inject the logic?
//   - pass string and use eval?
//  External user would have to create this and provide the fragment
//  href is only option to load an external script
//  Would unsafeSVG directive be required here?
export const createScript = () => {
  return svg`
    <script
      crossorigin=""
      fetchpriority="experimental"
      href=""
      type=""
      xlink:href=""
    >
      // insert script to execute
    </script>
  `;
};

// TODO use defs created
//  href -> def id
//  MDN docs mention css inheritance, maybe impacted by shadowdom
//  hrefs may be in external files, can be impacted by CORS
export const createUse = ({}, innerHtmlFragments = nothing) => {
  return svg`
    <use 
      href=""
      xlink:href=""
      x=""
      y=""
      width=""
      height=""
    >
      ${innerHtmlFragments}
    </use>
  `;
};
