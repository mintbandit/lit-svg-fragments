import { svg } from 'lit';
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
//     - childElement -> Many svg elements require innerHtml or text to function, e.g. <text> and animating elements
//     - eventMap -> Use the spreadEvent lit-helper to add event listeners (Advanced usage)

// TODO list of attributes for SVGs
//  https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute
//  Not all are applicable to every element

// TODO May need list all of them in javadocs or CEM for storybook demo.
//  Only a subset will be documented initially.

// Attributes evaluated
//  - style -> All elements, if using this what is the point of the other attributes?

/**
 * Function to create an SVG circle fragment
 *
 * @param {string|number} centerX - X coordinate for center of circle. Equivalent of left css relative to top left of canvas
 * @param {string|number} centerY - Y coordinate for center of circle. Equivalent of top css relative to top left of canvas
 * @param {string|number} radius - radius of circle.
 * @param {string} borderColor - Color of circumference of circle. Overruled by stroke css rule on circle element.
 * @param {string} borderDasharray - Dash array options of circumference of circle. Overruled by stroke-dasharray css rule on circle element.
 * @param {string|number} borderDashoffset - Dash offset options of circumference of circle. Overruled by stroke-dashoffset css rule on circle element.
 * @param {string|number} borderOpacity - Opacity of circumference of circle. Overruled by stroke-opacity css rule on circle element.
 * @param {string|number} borderWidth - Width of the circumference of circle. Half this value will be added to radius value increasing size of circle. Overruled by stroke-width css rule on circle element.
 * @param {string} color - Color of circle. Overruled by fill css rule on circle element.
 * @param {string|number} colorOpacity - Opacity of circle. Overruled by fill-opacity css rule on circle element.
 * @param {number} pathLength - Relative length in units of circumference. Use with borderDasharray to influence styling of circumference.
 * @returns {TemplateResult<2>} - svg fragment
 */
export const createCircle = ({
  centerX,
  centerY,
  radius,
  borderColor,
  borderDasharray,
  borderDashoffset,
  borderOpacity,
  borderWidth,
  color,
  colorOpacity,
  pathLength,
}) => {
  return svg`
    <circle 
      cx=${centerX}
      cy=${centerY}
      r=${radius}
      stroke=${ifDefined(borderColor)}
      stroke-dasharray=${ifDefined(borderDasharray)}
      stroke-dashoffset=${ifDefined(borderDashoffset)}
      stroke-opacity=${ifDefined(borderOpacity)}
      stroke-width=${ifDefined(borderWidth)}      
      fill=${ifDefined(color)}
      fill-opacity=${ifDefined(colorOpacity)}
      pathLength=${ifDefined(pathLength)}
    />
  `;
};

/**
 * Function to create an SVG ellipse fragment
 *
 * @param {string|number} centerX - X coordinate for center of ellipse. Equivalent of left css relative to top left of canvas
 * @param {string|number} centerY - Y coordinate for center of ellipse. Equivalent of top css relative to top left of canvas
 * @param {string|number} radiusX - radius of ellipse of X axis.
 * @param {string|number} radiusY - radius of ellipse of Y axis.
 * @param {string} borderColor - Color of circumference of ellipse. Overruled by stroke css rule on ellipse element.
 * @param {string} borderDasharray - Dash array options of circumference of ellipse. Overruled by stroke-dasharray css rule on ellipse element.
 * @param {string|number} borderDashoffset - Dash offset options of circumference of ellipse. Overruled by stroke-dashoffset css rule on ellipse element.
 * @param {string|number} borderOpacity - Opacity of circumference of ellipse. Overruled by stroke-opacity css rule on ellipse element.
 * @param {string|number} borderWidth - Width of the circumference of ellipse. Half this value will be added to radius value increasing size of ellipse. Overruled by stroke-width css rule on ellipse element.
 * @param {string} color - Color of ellipse. Overruled by fill css rule on ellipse element.
 * @param {string|number} colorOpacity - Opacity of ellipse. Overruled by fill-opacity css rule on ellipse element.
 * @param {number} pathLength - Relative length in units of circumference. Use with borderDasharray to influence styling of circumference.
 * @returns {TemplateResult<2>} - svg fragment
 */
export const createEllipse = ({
  centerX,
  centerY,
  radiusX,
  radiusY,
  borderColor,
  borderDasharray,
  borderDashoffset,
  borderOpacity,
  borderWidth,
  color,
  colorOpacity,
  pathLength,
}) => {
  return svg`
    <ellipse 
      cx=${centerX} 
      cy=${centerY} 
      rx=${radiusX} 
      ry=${radiusY} 
      stroke=${ifDefined(borderColor)}
      stroke-dasharray=${ifDefined(borderDasharray)}
      stroke-dashoffset=${ifDefined(borderDashoffset)}
      stroke-opacity=${ifDefined(borderOpacity)}
      stroke-width=${ifDefined(borderWidth)}      
      fill=${ifDefined(color)}
      fill-opacity=${ifDefined(colorOpacity)}
      pathLength=${ifDefined(pathLength)}
    />
  `;
};

/**
 * Function to create an SVG line fragment
 *
 * @param {string|number} xStart - X coordinate of the line starting point. Equivalent of left css relative to top left of canvas
 * @param {string|number} xEnd - X coordinate of the line ending point. Equivalent of left css relative to top left of canvas
 * @param {string|number} yStart - Y coordinate of the line starting point. Equivalent of top css relative to top left of canvas
 * @param {string|number} yEnd - Y coordinate of the line ending point. Equivalent of top css relative to top left of canvas
 * @param {string} lineColor - Color of the Line. Overruled by stroke css rule on Line element.
 * @param {string} lineDasharray - Dash array options of the line. Overruled by stroke-dasharray css rule on Line element.
 * @param {string|number} lineDashoffset - Dash offset options of the line. Overruled by stroke-dashoffset css rule on Line element.
 * @param {string} lineCap - Shape of the end of the line. Overruled by stroke-linecap css rule on Line element.
 * @param {string|number} lineOpacity - Opacity of the line. Overruled by stroke-opacity css rule on Line element.
 * @param {string|number} lineWidth - Width of the line. Overruled by stroke-width css rule on Line element.
 * @param {number} pathLength - Relative length in units of line. Use with lineDasharray to influence styling of line.
 * @returns {TemplateResult<2>}
 */
export const createLine = ({
  xStart,
  xEnd,
  yStart,
  yEnd,
  lineColor,
  lineDasharray,
  lineDashoffset,
  lineCap,
  lineOpacity,
  lineWidth,
  pathLength,
}) => {
  return svg`
    <line
      x1=${xStart}
      x2=${xEnd}
      y1=${yStart}
      y2=${yEnd}
      stroke=${ifDefined(lineColor)}
      stroke-dasharray=${ifDefined(lineDasharray)}
      stroke-dashoffset=${ifDefined(lineDashoffset)}
      stroke-linecap=${ifDefined(lineCap)}
      stroke-opacity=${ifDefined(lineOpacity)}
      stroke-width=${ifDefined(lineWidth)}
      pathLength=${ifDefined(pathLength)}
    />
  `;
};

/**
 * Function to create an SVG polyline fragment
 *
 * @param {string} points - list of X,Y coordinates. Values relative to top left.
 * @param {string} lineColor - Color of the polyline. Overruled by stroke css rule on polyline element.
 * @param {string} lineDasharray - Dash array options of the polyline. Overruled by stroke-dasharray css rule on polyline element.
 * @param {string|number} lineDashoffset - Dash offset options of the polyline. Overruled by stroke-dashoffset css rule on polyline element.
 * @param {string} lineCap - Shape of the end of the polyline. Overruled by stroke-linecap css rule on polyline element.
 * @param {string} linejoin - Shape of corners when they are stroked. Overruled by stroke-linejoin css rule on polyline element.
 * @param {number} lineMiterlimit - Limit of ratio of miter length to stroke-width. Overruled by stroke-miterlimit css rule on polyline element.
 * @param {string|number} lineOpacity - Opacity of the polyline. Overruled by stroke-opacity css rule on polyline element.
 * @param {string|number} lineWidth - Width of the polyline. Overruled by stroke-width css rule on polyline element.
 * @param {string} color - Color of polyline. Overruled by fill css rule on polyline element.
 * @param {string|number} colorOpacity - Opacity of polyline. Overruled by fill-opacity css rule on polyline element.
 * @param {string} colorRule - Presentation attribute to determine the inside part of the shape. Overruled by fill-rule css rule on polyline element
 * @param {number} pathLength - Relative length in units of polyline. Use with lineDasharray to influence styling of polyline.
 * @returns {TemplateResult<2>}
 */
export const createPolyline = ({
  points,
  lineColor,
  lineDasharray,
  lineDashoffset,
  lineCap,
  lineJoin,
  lineMiterlimit,
  lineOpacity,
  lineWidth,
  color,
  colorOpacity,
  colorRule,
  pathLength,
}) => {
  return svg`
    <polyline
      points=${points} 
      stroke=${ifDefined(lineColor)}
      stroke-dasharray=${ifDefined(lineDasharray)}
      stroke-dashoffset=${ifDefined(lineDashoffset)}
      stroke-linecap=${ifDefined(lineCap)}    
      stroke-linejoin=${ifDefined(lineJoin)}  
      stroke-miterlimit=${ifDefined(lineMiterlimit)}
      stroke-opacity=${ifDefined(lineOpacity)}
      stroke-width=${ifDefined(lineWidth)}
      fill=${ifDefined(color)}
      fill-opacity=${ifDefined(colorOpacity)}
      fill-rule=${ifDefined(colorRule)}
      pathLength=${ifDefined(pathLength)}
    />
  `;
};

/**
 * Function to create an SVG rectangle fragment
 *
 * @param {string|number} xStart - X coordinate of the top left corner of rectangle.
 * @param {string|number} yStart - Y coordinate of the top left corner of rectangle.
 * @param {string|number} width - Width of the rectangle.
 * @param {string|number} height - Height of the rectangle.
 * @param {string|number} radiusX - Radius of the horizontal corners of the rectangle.
 * @param {string|number} radiusY - Radius of the vertical corners of the rectangle.
 * @param {string} borderColor - Color of the border of the rectangle. Overruled by stroke css rule on rectangle element.
 * @param {string} borderDasharray - Dash array options of the border of the rectangle. Overruled by stroke-dasharray css rule on rectangle element.
 * @param {string|number} borderDashoffset - Dash offset options of the border of the rectangle. Overruled by stroke-dashoffset css rule on rectangle element.
 * @param {string} borderLinejoin - Shape of corners when they are stroked. Overruled by stroke-linejoin css rule on rectangle element.
 * @param {number} borderMiterlimit - Limit of ratio of miter length to stroke-width. Overruled by stroke-miterlimit css rule on rectangle element.
 * @param {string|number} borderOpacity - Opacity of the border of the rectangle. Overruled by stroke-opacity css rule on rectangle element.
 * @param {string|number} borderWidth - Width of the border of the rectangle. Half this value will be added to height/width value increasing size of rectangle. Overruled by stroke-width css rule on rectangle element.
 * @param {string} color - Color of rectangle. Overruled by fill css rule on rectangle element.
 * @param {string|number} colorOpacity - Opacity of rectangle. Overruled by fill-opacity css rule on rectangle element.
 * @param {number} pathLength - Relative length in units of border. Use with borderDasharray to influence styling of border.
 * @returns {TemplateResult<2>}
 */
export const createRectangle = ({
  xStart,
  yStart,
  width,
  height,
  radiusX,
  radiusY,
  borderColor,
  borderDasharray,
  borderDashoffset,
  borderLinejoin,
  borderMiterlimit,
  borderOpacity,
  borderWidth,
  color,
  colorOpacity,
  pathLength,
}) => {
  return svg`
    <rect
      x=${xStart}
      y=${yStart} 
      width=${width}
      height=${height}
      rx=${radiusX} 
      ry=${radiusY}
      stroke=${ifDefined(borderColor)}
      stroke-dasharray=${ifDefined(borderDasharray)}
      stroke-dashoffset=${ifDefined(borderDashoffset)}
      stroke-linejoin=${ifDefined(borderLinejoin)}
      stroke-miterlimit=${ifDefined(borderMiterlimit)}
      stroke-opacity=${ifDefined(borderOpacity)}
      stroke-width=${ifDefined(borderWidth)}
      fill=${ifDefined(color)}
      fill-opacity=${ifDefined(colorOpacity)}
      pathLength=${ifDefined(pathLength)}
    />
  `;
};

/**
 * Function to create an SVG polygon fragment
 *
 * @param {string} points - list of X,Y coordinates. Values relative to top left.
 * @param {string} lineColor - Color of the polygon. Overruled by stroke css rule on polygon element.
 * @param {string} lineDasharray - Dash array options of the polygon. Overruled by stroke-dasharray css rule on polygon element.
 * @param {string|number} lineDashoffset - Dash offset options of the polygon. Overruled by stroke-dashoffset css rule on polygon element.
 * @param {string} lineCap - Shape of the end of the polygon. Overruled by stroke-linecap css rule on polygon element.
 * @param {string} linejoin - Shape of corners when they are stroked. Overruled by stroke-linejoin css rule on polygon element.
 * @param {number} lineMiterlimit - Limit of ratio of miter length to stroke-width. Overruled by stroke-miterlimit css rule on polygon element.
 * @param {string|number} lineOpacity - Opacity of the polygon. Overruled by stroke-opacity css rule on polygon element.
 * @param {string|number} lineWidth - Width of the polygon. Overruled by stroke-width css rule on polygon element.
 * @param {string} color - Color of polygon. Overruled by fill css rule on polygon element.
 * @param {string|number} colorOpacity - Opacity of polygon. Overruled by fill-opacity css rule on polygon element.
 * @param {string} colorRule - Presentation attribute to determine the inside part of the shape. Overruled by fill-rule css rule on polygon element
 * @param {number} pathLength - Relative length in units of polygon. Use with lineDasharray to influence styling of polygon.
 * @returns {TemplateResult<2>}
 */
export const createPolygon = ({
  points,
  lineColor,
  lineDasharray,
  lineDashoffset,
  linejoin,
  lineMiterlimit,
  lineOpacity,
  lineWidth,
  color,
  colorOpacity,
  colorRule,
  pathLength,
}) => {
  return svg`
    <polygon
      points=${points} 
      stroke=${ifDefined(lineColor)}
      stroke-dasharray=${ifDefined(lineDasharray)}
      stroke-dashoffset=${ifDefined(lineDashoffset)}
      stroke-linejoin=${ifDefined(linejoin)}
      stroke-miterlimit=${ifDefined(lineMiterlimit)}
      stroke-opacity=${ifDefined(lineOpacity)}
      stroke-width=${ifDefined(lineWidth)}
      fill=${ifDefined(color)}
      fill-opacity=${ifDefined(colorOpacity)}
      fill-rule=${ifDefined(colorRule)}
      pathLength=${ifDefined(pathLength)}
    />
  `;
};

// TODO will be a child element of another shape element
//  Likely functions above will call this.
//  More than one child element can be used to animate multiple attributes
/**
 * Function to create an SVG animation fragment
 *
 * @param {string} animateAccumulate - Add next animation onto previous one
 * @param {string} animateAdditive - Animation is an offset or delta
 * @param {string} animateAttributeName - CSS or attribute name to be animated
 * @param {string} animateAttributeType - Deprecated, namespace of target attribute
 * @param {string} animationBegin - When the animation becomes active
 * @param {string} animationBy - Relative offset value
 * @param {string} animationCalcMode - Interpolation mode for the animation
 * @param {string} animationDuration - Duration of animation. Required
 * @param {string} animationEnd - End value for animation
 * @param {string} animationFill - Freeze or remove the last animation frame
 * @param {number} animateTo - Final value of attribute being animated
 * @param {number} animateFrom - Starting value of attribute being animated
 * @param {string} animateKeyPoints - simple duration of the animation
 * @param {string} animateKeySplines - Set of Bézier curve control points
 * @param {string} animateKeyTimes - List of times to control animation
 * @param {string} animateMax - Maximum value of animation duration
 * @param {string} animateMin - Minimum value of animation duration
 * @param {string} animateRestart - Whether the animation can restart
 * @param {string} animateValues - List of values to be applied to attribute during animation
 * @param {string|number} animateRepeatCount - Number of times the animation repeats
 * @param {string} animateRepeatDuration - Total duration of animation
 * @returns {TemplateResult<2>}
 */
export const createAnimate = ({
  animateAccumulate,
  animateAdditive,
  animateAttributeName,
  animateAttributeType, // deprecated
  animationBegin,
  animationBy,
  animationCalcMode,
  animationDuration,
  animationEnd,
  animationFill,
  animateTo,
  animateFrom,
  animateKeyPoints,
  animateKeyTimes,
  animateKeySplines,
  animateMax,
  animateMin,
  animateRestart,
  animateValues,
  animateRepeatCount,
  animateRepeatDuration,
}) => {
  // No options return nothing???
  return svg`
    <animate
      accumulate=${ifDefined(animateAccumulate)}
      additive=${ifDefined(animateAdditive)}
      attributeName=${ifDefined(animateAttributeName)}
      attributeType=${ifDefined(animateAttributeType)}
      begin=${ifDefined(animationBegin)}
      by=${ifDefined(animationBy)}
      calcMode=${ifDefined(animationCalcMode)}
      dur=${ifDefined(animationDuration)}
      end=${ifDefined(animationEnd)}
      fill=${ifDefined(animationFill)}
      from=${ifDefined(animateFrom)}
      keyPoints=${ifDefined(animateKeyPoints)}
      keySplines=${ifDefined(animateKeySplines)}
      keyTimes=${ifDefined(animateKeyTimes)}
      max=${ifDefined(animateMax)}
      min=${ifDefined(animateMin)}
      repeatCount=${ifDefined(animateRepeatCount)}
      repeatDur=${ifDefined(animateRepeatDuration)}
      restart=${ifDefined(animateRestart)}
      to=${ifDefined(animateTo)}
      values=${ifDefined(animateValues)}      
    />
  `;
};
