import { nothing, svg } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';

// TODO missing attributes
//  - clip-path all
//  - clip-rule all (special??)
//  - color-interpolation all
//  - marker-end all (advanced)
//  - marker-mid all (advanced)
//  - marker-start all (advanced)
//  - paint-order all (strange)
//  - shape-rendering all
//  - transform all
//  - vector-effect all
//  - visibility all

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
