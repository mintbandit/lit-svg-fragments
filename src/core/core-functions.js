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

/**
 * Function to create an SVG circle fragment
 *
 * @param {string|number} cx - X coordinate for center of circle. Equivalent of left css relative to top left of canvas
 * @param {string|number} cy - Y coordinate for center of circle. Equivalent of top css relative to top left of canvas
 * @param {string|number} r - radius of circle.
 * @param {string} stroke - Color of circumference of circle. Overruled by stroke css rule on circle element.
 * @param {string} strokeDasharray - Dash array options of circumference of circle. Overruled by stroke-dasharray css rule on circle element.
 * @param {string|number} strokeDashoffset - Dash offset options of circumference of circle. Overruled by stroke-dashoffset css rule on circle element.
 * @param {string|number} strokeOpacity - Opacity of circumference of circle. Overruled by stroke-opacity css rule on circle element.
 * @param {string|number} strokeWidth - Width of the circumference of circle. Half this value will be added to radius value increasing size of circle. Overruled by stroke-width css rule on circle element.
 * @param {string} fill - Color of circle. Overruled by fill css rule on circle element.
 * @param {string|number} fillOpacity - Opacity of circle. Overruled by fill-opacity css rule on circle element.
 * @param {number} pathLength - Relative length in units of circumference. Use with borderDasharray to influence styling of circumference.
 *
 * @param {array<TemplateResult<2>>|nothing} innerHtmlFragments - Array of lit fragments that are child elements of circle. Default nothing.
 * @returns {TemplateResult<2>} - svg fragment
 */
export const createCircle = (
  {
    cx,
    cy,
    r,
    stroke,
    strokeDasharray,
    strokeDashoffset,
    strokeOpacity,
    strokeWidth,
    fill,
    fillOpacity,
    pathLength,
  },
  innerHtmlFragments = nothing,
) => {
  return svg`
    <circle 
      cx=${cx}
      cy=${cy}
      r=${r}
      stroke=${ifDefined(stroke)}
      stroke-dasharray=${ifDefined(strokeDasharray)}
      stroke-dashoffset=${ifDefined(strokeDashoffset)}
      stroke-opacity=${ifDefined(strokeOpacity)}
      stroke-width=${ifDefined(strokeWidth)}      
      fill=${ifDefined(fill)}
      fill-opacity=${ifDefined(fillOpacity)}
      pathLength=${ifDefined(pathLength)}
    >
      ${innerHtmlFragments}
    </circle>
  `;
};

/**
 * Function to create an SVG ellipse fragment
 *
 * @param {string|number} cx - X coordinate for center of ellipse. Equivalent of left css relative to top left of canvas
 * @param {string|number} cy - Y coordinate for center of ellipse. Equivalent of top css relative to top left of canvas
 * @param {string|number} rx - radius of ellipse of X axis.
 * @param {string|number} ry - radius of ellipse of Y axis.
 * @param {string} stroke - Color of circumference of ellipse. Overruled by stroke css rule on ellipse element.
 * @param {string} strokeDasharray - Dash array options of circumference of ellipse. Overruled by stroke-dasharray css rule on ellipse element.
 * @param {string|number} strokeDashoffset - Dash offset options of circumference of ellipse. Overruled by stroke-dashoffset css rule on ellipse element.
 * @param {string|number} strokeOpacity - Opacity of circumference of ellipse. Overruled by stroke-opacity css rule on ellipse element.
 * @param {string|number} strokeWidth - Width of the circumference of ellipse. Half this value will be added to radius value increasing size of ellipse. Overruled by stroke-width css rule on ellipse element.
 * @param {string} fill - Color of ellipse. Overruled by fill css rule on ellipse element.
 * @param {string|number} fillOpacity - Opacity of ellipse. Overruled by fill-opacity css rule on ellipse element.
 * @param {number} pathLength - Relative length in units of circumference. Use with borderDasharray to influence styling of circumference.
 *
 * @param {array<TemplateResult<2>>|nothing} innerHtmlFragments - Array of lit fragments that are child elements of circle. Default nothing.
 * @returns {TemplateResult<2>} - svg fragment
 */
export const createEllipse = (
  {
    cx,
    cy,
    rx,
    ry,
    stroke,
    strokeDasharray,
    strokeDashoffset,
    strokeOpacity,
    strokeWidth,
    fill,
    fillOpacity,
    pathLength,
  },
  innerHtmlFragments = nothing,
) => {
  return svg`
    <ellipse 
      cx=${cx} 
      cy=${cy} 
      rx=${rx} 
      ry=${ry} 
      stroke=${ifDefined(stroke)}
      stroke-dasharray=${ifDefined(strokeDasharray)}
      stroke-dashoffset=${ifDefined(strokeDashoffset)}
      stroke-opacity=${ifDefined(strokeOpacity)}
      stroke-width=${ifDefined(strokeWidth)}      
      fill=${ifDefined(fill)}
      fill-opacity=${ifDefined(fillOpacity)}
      pathLength=${ifDefined(pathLength)}
    >
      ${innerHtmlFragments}   
    </ellipse>
  `;
};

/**
 * Function to create an SVG line fragment
 *
 * @param {string|number} x1 - X coordinate of the line starting point. Equivalent of left css relative to top left of canvas
 * @param {string|number} x2 - X coordinate of the line ending point. Equivalent of left css relative to top left of canvas
 * @param {string|number} y1 - Y coordinate of the line starting point. Equivalent of top css relative to top left of canvas
 * @param {string|number} y2 - Y coordinate of the line ending point. Equivalent of top css relative to top left of canvas
 * @param {string} stroke - Color of the Line. Overruled by stroke css rule on Line element.
 * @param {string} strokeDasharray - Dash array options of the line. Overruled by stroke-dasharray css rule on Line element.
 * @param {string|number} strokeDashoffset - Dash offset options of the line. Overruled by stroke-dashoffset css rule on Line element.
 * @param {string} strokeLinecap - Shape of the end of the line. Overruled by stroke-linecap css rule on Line element.
 * @param {string|number} strokeOpacity - Opacity of the line. Overruled by stroke-opacity css rule on Line element.
 * @param {string|number} strokeWidth - Width of the line. Overruled by stroke-width css rule on Line element.
 * @param {number} pathLength - Relative length in units of line. Use with lineDasharray to influence styling of line.
 *
 * @param {array<TemplateResult<2>>|nothing} innerHtmlFragments - Array of lit fragments that are child elements of circle. Default nothing.
 * @returns {TemplateResult<2>}
 */
export const createLine = (
  {
    x1,
    x2,
    y1,
    y2,
    stroke,
    strokeDasharray,
    strokeDashoffset,
    strokeLinecap,
    strokeOpacity,
    strokeWidth,
    pathLength,
  },
  innerHtmlFragments = nothing,
) => {
  return svg`
    <line
      x1=${x1}
      x2=${x2}
      y1=${y1}
      y2=${y2}
      stroke=${ifDefined(stroke)}
      stroke-dasharray=${ifDefined(strokeDasharray)}
      stroke-dashoffset=${ifDefined(strokeDashoffset)}
      stroke-linecap=${ifDefined(strokeLinecap)}
      stroke-opacity=${ifDefined(strokeOpacity)}
      stroke-width=${ifDefined(strokeWidth)}
      pathLength=${ifDefined(pathLength)}
    >
      ${innerHtmlFragments}
    </line>
  `;
};

/**
 * Function to create an SVG polyline fragment
 *
 * @param {string} points - list of X,Y coordinates. Values relative to top left.
 * @param {string} stroke - Color of the polyline. Overruled by stroke css rule on polyline element.
 * @param {string} strokeDasharray - Dash array options of the polyline. Overruled by stroke-dasharray css rule on polyline element.
 * @param {string|number} strokeDashoffset - Dash offset options of the polyline. Overruled by stroke-dashoffset css rule on polyline element.
 * @param {string} strokeLinecap - Shape of the end of the polyline. Overruled by stroke-linecap css rule on polyline element.
 * @param {string} strokeLinejoin - Shape of corners when they are stroked. Overruled by stroke-linejoin css rule on polyline element.
 * @param {number} strokeMiterlimit - Limit of ratio of miter length to stroke-width. Overruled by stroke-miterlimit css rule on polyline element.
 * @param {string|number} strokeOpacity - Opacity of the polyline. Overruled by stroke-opacity css rule on polyline element.
 * @param {string|number} strokeWidth - Width of the polyline. Overruled by stroke-width css rule on polyline element.
 * @param {string} fill - Color of polyline. Overruled by fill css rule on polyline element.
 * @param {string|number} fillOpacity - Opacity of polyline. Overruled by fill-opacity css rule on polyline element.
 * @param {string} fillRule - Presentation attribute to determine the inside part of the shape. Overruled by fill-rule css rule on polyline element
 * @param {number} pathLength - Relative length in units of polyline. Use with lineDasharray to influence styling of polyline.
 *
 * @param {array<TemplateResult<2>>|nothing} innerHtmlFragments - Array of lit fragments that are child elements of circle. Default nothing.
 * @returns {TemplateResult<2>}
 */
export const createPolyline = (
  {
    points,
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
  return svg`
    <polyline
      points=${points} 
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
    </polyline>
  `;
};

/**
 * Function to create an SVG rectangle fragment
 *
 * @param {string|number} x - X coordinate of the top left corner of rectangle.
 * @param {string|number} y - Y coordinate of the top left corner of rectangle.
 * @param {string|number} width - Width of the rectangle.
 * @param {string|number} height - Height of the rectangle.
 * @param {string|number} rx - Radius of the horizontal corners of the rectangle.
 * @param {string|number} ry - Radius of the vertical corners of the rectangle.
 * @param {string} stroke - Color of the border of the rectangle. Overruled by stroke css rule on rectangle element.
 * @param {string} strokeDasharray - Dash array options of the border of the rectangle. Overruled by stroke-dasharray css rule on rectangle element.
 * @param {string|number} strokeDashoffset - Dash offset options of the border of the rectangle. Overruled by stroke-dashoffset css rule on rectangle element.
 * @param {string} strokeLinejoin - Shape of corners when they are stroked. Overruled by stroke-linejoin css rule on rectangle element.
 * @param {number} strokeMiterlimit - Limit of ratio of miter length to stroke-width. Overruled by stroke-miterlimit css rule on rectangle element.
 * @param {string|number} strokeOpacity - Opacity of the border of the rectangle. Overruled by stroke-opacity css rule on rectangle element.
 * @param {string|number} strokeWidth - Width of the border of the rectangle. Half this value will be added to height/width value increasing size of rectangle. Overruled by stroke-width css rule on rectangle element.
 * @param {string} fill - Color of rectangle. Overruled by fill css rule on rectangle element.
 * @param {string|number} fillOpacity - Opacity of rectangle. Overruled by fill-opacity css rule on rectangle element.
 * @param {number} pathLength - Relative length in units of border. Use with borderDasharray to influence styling of border.
 *
 * @param {array<TemplateResult<2>>|nothing} innerHtmlFragments - Array of lit fragments that are child elements of circle. Default nothing.
 * @returns {TemplateResult<2>}
 */
export const createRectangle = (
  {
    x,
    y,
    width,
    height,
    rx,
    ry,
    stroke,
    strokeDasharray,
    strokeDashoffset,
    strokeLinejoin,
    strokeMiterlimit,
    strokeOpacity,
    strokeWidth,
    fill,
    fillOpacity,
    pathLength,
  },
  innerHtmlFragments = nothing,
) => {
  return svg`
    <rect
      x=${x}
      y=${y} 
      width=${width}
      height=${height}
      rx=${rx} 
      ry=${ry}
      stroke=${ifDefined(stroke)}
      stroke-dasharray=${ifDefined(strokeDasharray)}
      stroke-dashoffset=${ifDefined(strokeDashoffset)}
      stroke-linejoin=${ifDefined(strokeLinejoin)}
      stroke-miterlimit=${ifDefined(strokeMiterlimit)}
      stroke-opacity=${ifDefined(strokeOpacity)}
      stroke-width=${ifDefined(strokeWidth)}
      fill=${ifDefined(fill)}
      fill-opacity=${ifDefined(fillOpacity)}
      pathLength=${ifDefined(pathLength)}
    >
      ${innerHtmlFragments}
    </rect>
  `;
};

/**
 * Function to create an SVG polygon fragment
 *
 * @param {string} points - list of X,Y coordinates. Values relative to top left.
 * @param {string} stroke - Color of the polygon. Overruled by stroke css rule on polygon element.
 * @param {string} strokeDasharray - Dash array options of the polygon. Overruled by stroke-dasharray css rule on polygon element.
 * @param {string|number} strokeDashoffset - Dash offset options of the polygon. Overruled by stroke-dashoffset css rule on polygon element.
 * @param {string} strokeLinejoin - Shape of corners when they are stroked. Overruled by stroke-linejoin css rule on polygon element.
 * @param {number} strokeMiterlimit - Limit of ratio of miter length to stroke-width. Overruled by stroke-miterlimit css rule on polygon element.
 * @param {string|number} strokeOpacity - Opacity of the polygon. Overruled by stroke-opacity css rule on polygon element.
 * @param {string|number} strokeWidth - Width of the polygon. Overruled by stroke-width css rule on polygon element.
 * @param {string} fill - Color of polygon. Overruled by fill css rule on polygon element.
 * @param {string|number} fillOpacity - Opacity of polygon. Overruled by fill-opacity css rule on polygon element.
 * @param {string} fillRule - Presentation attribute to determine the inside part of the shape. Overruled by fill-rule css rule on polygon element
 * @param {number} pathLength - Relative length in units of polygon. Use with lineDasharray to influence styling of polygon.
 *
 * @param {array<TemplateResult<2>>|nothing} innerHtmlFragments - Array of lit fragments that are child elements of circle. Default nothing.
 * @returns {TemplateResult<2>}
 */
export const createPolygon = (
  {
    points,
    stroke,
    strokeDasharray,
    strokeDashoffset,
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
  return svg`
    <polygon
      points=${points} 
      stroke=${ifDefined(stroke)}
      stroke-dasharray=${ifDefined(strokeDasharray)}
      stroke-dashoffset=${ifDefined(strokeDashoffset)}
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
    </polygon>
  `;
};

// TODO will be a child element of another shape element
//  More than one child element can be used to animate multiple attributes
//  innerHtmlFragments args above checked with multiples of these and it works
//  No additional Lit directives required at this time.
//  Can have child elements as well
/**
 * Function to create an SVG animate fragment
 *
 * @param {string} animationAccumulate - Add next animation onto previous one
 * @param {string} animationAdditive - Animation is an offset or delta
 * @param {string} animationAttributeName - CSS or attribute name to be animated
 * @param {string} animationAttributeType - Deprecated, namespace of target attribute
 * @param {string} animationBegin - When the animation becomes active
 * @param {string} animationBy - Relative offset value
 * @param {string} animationCalcMode - Interpolation mode for the animation
 * @param {string} animationDuration - Duration of animation. Required
 * @param {string} animationEnd - End value for animation
 * @param {string} animationFill - Freeze or remove the last animation frame
 * @param {number} animationFrom - Starting value of attribute being animated
 * @param {string} animationKeyPoints - simple duration of the animation
 * @param {string} animationKeySplines - Set of Bézier curve control points
 * @param {string} animationKeyTimes - List of times to control animation
 * @param {string} animationMax - Maximum value of animation duration
 * @param {string} animationMin - Minimum value of animation duration
 * @param {string|number} animationRepeatCount - Number of times the animation repeats
 * @param {string} animationRepeatDuration - Total duration of animation
 * @param {string} animationRestart - Whether the animation can restart
 * @param {number} animationTo - Final value of attribute being animated
 * @param {string} animationValues - List of values to be applied to attribute during animation
 * @returns {TemplateResult<2>}
 */
export const createAnimate = ({
  animationAccumulate,
  animationAdditive,
  animationAttributeName,
  animationAttributeType, // deprecated
  animationBegin,
  animationBy,
  animationCalcMode,
  animationDuration,
  animationEnd,
  animationFill,
  animationFrom,
  animationKeyPoints,
  animationKeyTimes,
  animationKeySplines,
  animationMax,
  animationMin,
  animationRepeatCount,
  animationRepeatDuration,
  animationRestart,
  animationTo,
  animationValues,
}) => {
  return svg`
    <animate
      accumulate=${ifDefined(animationAccumulate)}
      additive=${ifDefined(animationAdditive)}
      attributeName=${ifDefined(animationAttributeName)}
      attributeType=${ifDefined(animationAttributeType)}
      begin=${ifDefined(animationBegin)}
      by=${ifDefined(animationBy)}
      calcMode=${ifDefined(animationCalcMode)}
      dur=${ifDefined(animationDuration)}
      end=${ifDefined(animationEnd)}
      fill=${ifDefined(animationFill)}
      from=${ifDefined(animationFrom)}
      keyPoints=${ifDefined(animationKeyPoints)}
      keySplines=${ifDefined(animationKeySplines)}
      keyTimes=${ifDefined(animationKeyTimes)}
      max=${ifDefined(animationMax)}
      min=${ifDefined(animationMin)}
      repeatCount=${ifDefined(animationRepeatCount)}
      repeatDur=${ifDefined(animationRepeatDuration)}
      restart=${ifDefined(animationRestart)}
      to=${ifDefined(animationTo)}
      values=${ifDefined(animationValues)}      
    />
  `;
};

/**
 * Function to create an SVG animateMotion fragment
 *
 * @param {string} animationAccumulate - Add next animation onto previous one
 * @param {string} animationAdditive - Animation is an offset or delta
 * @param {string} animationBegin - When the animation becomes active
 * @param {string} animationBy - Relative offset value
 * @param {string} animationCalcMode - Interpolation mode for the animation
 * @param {string} animationDuration - Duration of animation. Required
 * @param {string} animationEnd - End value for animation
 * @param {string} animationFill - Freeze or remove the last animation frame
 * @param {number} animationFrom - Starting value of attribute being animated
 * @param {string} animationKeyPoints - simple duration of the animation
 * @param {string} animationKeySplines - Set of Bézier curve control points
 * @param {string} animationKeyTimes - List of times to control animation
 * @param {string} animationMax - Maximum value of animation duration
 * @param {string} animationMin - Minimum value of animation duration
 * @param {string} animationOrigin - Origin of motion for an animation. No effect on SVG.
 * @param {string} animationPath - Motion path, same as d property on <path>
 * @param {string|number} animationRepeatCount - Number of times the animation repeats
 * @param {string} animationRepeatDuration - Total duration of animation
 * @param {string} animationRestart - Whether the animation can restart
 * @param {string|number} animationRotate - How the animated element rotates as it moves
 * @param {number} animationTo - Final value of attribute being animated
 * @param {string} animationValues - List of values to be applied to attribute during animation
 * @returns {TemplateResult<2>}
 */
export const createAnimateMotion = ({
  animationAccumulate,
  animationAdditive,
  animationBegin,
  animationBy,
  animationCalcMode,
  animationDuration,
  animationEnd,
  animationFill,
  animationFrom,
  animationKeyPoints,
  animationKeyTimes,
  animationKeySplines,
  animationMax,
  animationMin,
  animationOrigin,
  animationPath,
  animationRepeatCount,
  animationRepeatDuration,
  animationRestart,
  animationRotate,
  animationTo,
  animationValues,
}) => {
  return svg`
    <animateMotion
      accumulate=${ifDefined(animationAccumulate)}
      additive=${ifDefined(animationAdditive)}
      begin=${ifDefined(animationBegin)}
      by=${ifDefined(animationBy)}
      calcMode=${ifDefined(animationCalcMode)}
      dur=${ifDefined(animationDuration)}
      end=${ifDefined(animationEnd)}
      fill=${ifDefined(animationFill)}
      from=${ifDefined(animationFrom)}
      keyPoints=${ifDefined(animationKeyPoints)}
      keySplines=${ifDefined(animationKeySplines)}
      keyTimes=${ifDefined(animationKeyTimes)}
      max=${ifDefined(animationMax)}
      min=${ifDefined(animationMin)}
      origin=${ifDefined(animationOrigin)}
      path=${ifDefined(animationPath)}
      repeatCount=${ifDefined(animationRepeatCount)}
      repeatDur=${ifDefined(animationRepeatDuration)}
      restart=${ifDefined(animationRestart)}
      rotate=${ifDefined(animationRotate)}
      to=${ifDefined(animationTo)}
      values=${ifDefined(animationValues)}
    />
  `;
};

/**
 * Function to create an SVG animateTransform fragment
 *
 * @param {string} animationAccumulate - Add next animation onto previous one
 * @param {string} animationAdditive - Animation is an offset or delta
 * @param {string} animationAttributeName - CSS or attribute name to be animated
 * @param {string} animationAttributeType - Deprecated, namespace of target attribute
 * @param {string} animationBegin - When the animation becomes active
 * @param {string} animationBy - Relative offset value
 * @param {string} animationCalcMode - Interpolation mode for the animation
 * @param {string} animationDuration - Duration of animation. Required
 * @param {string} animationEnd - End value for animation
 * @param {string} animationFill - Freeze or remove the last animation frame
 * @param {number} animationFrom - Starting value of attribute being animated
 * @param {string} animationKeyPoints - simple duration of the animation
 * @param {string} animationKeySplines - Set of Bézier curve control points
 * @param {string} animationKeyTimes - List of times to control animation
 * @param {string} animationMax - Maximum value of animation duration
 * @param {string} animationMin - Minimum value of animation duration
 * @param {string|number} animationRepeatCount - Number of times the animation repeats
 * @param {string} animationRepeatDuration - Total duration of animation
 * @param {string} animationRestart - Whether the animation can restart
 * @param {number} animationTo - Final value of attribute being animated
 * @param {string} animationType - type of transformation
 * @param {string} animationValues - List of values to be applied to attribute during animation
 * @returns {TemplateResult<2>}
 */
export const createAnimateTransform = ({
  animationAccumulate,
  animationAdditive,
  animationAttributeName,
  animationAttributeType, // deprecated
  animationBegin,
  animationBy,
  animationCalcMode,
  animationDuration,
  animationEnd,
  animationFill,
  animationFrom,
  animationKeyPoints,
  animationKeyTimes,
  animationKeySplines,
  animationMax,
  animationMin,
  animationRepeatCount,
  animationRepeatDuration,
  animationRestart,
  animationTo,
  animationType,
  animationValues,
}) => {
  return svg`
    <animateTransform
      accumulate=${ifDefined(animationAccumulate)}
      additive=${ifDefined(animationAdditive)}
      attributeName=${ifDefined(animationAttributeName)}
      attributeType=${ifDefined(animationAttributeType)}
      begin=${ifDefined(animationBegin)}
      by=${ifDefined(animationBy)}
      calcMode=${ifDefined(animationCalcMode)}
      dur=${ifDefined(animationDuration)}
      end=${ifDefined(animationEnd)}
      fill=${ifDefined(animationFill)}
      from=${ifDefined(animationFrom)}
      keyPoints=${ifDefined(animationKeyPoints)}
      keySplines=${ifDefined(animationKeySplines)}
      keyTimes=${ifDefined(animationKeyTimes)}
      max=${ifDefined(animationMax)}
      min=${ifDefined(animationMin)}
      repeatCount=${ifDefined(animationRepeatCount)}
      repeatDur=${ifDefined(animationRepeatDuration)}
      restart=${ifDefined(animationRestart)}
      to=${ifDefined(animationTo)}
      type=${ifDefined(animationType)}
      values=${ifDefined(animationValues)}
    />
  `;
};
