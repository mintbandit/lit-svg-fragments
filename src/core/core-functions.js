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

// TODO list of attributes for SVGs
//  https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute
//  Not all are applicable to every element

// TODO May need list all of them in javadocs or CEM for storybook demo.
//  For only a subset will be documented.

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
