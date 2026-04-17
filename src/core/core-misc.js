import { svg, nothing } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';

// TODO each child will overlap the previous
//  think child index is equal to z-index
//  child 2 will overlap child 1
//  child 3 will overlap child 2 and so on
//  Unless fills are transparent you won't be able to see anything behind
//  Accepts all global attributes
//   -> How many are missing???

/**
 * Function to create an SVG g fragment
 * This element is use fot grouping other SVG elements and attributes are inherited
 *
 * @param {string} fill - Color of child elements. Overruled by fill css rule or attribute on child element.
 * @param {string|number} fillOpacity - Opacity of child elements. Overruled by fill-opacity css rule or attribute on child element.
 * @param {string} fillRule - Presentation attribute to determine the inside part of the child elements. Overruled by fill-rule css rule or attribute on child element.
 * @param {string} stroke - Color of border on child elements. Overruled by stroke css rule or attribute on child element.
 * @param {string} strokeDasharray - Dash array options of border on child elements. Overruled by stroke-dasharray css rule or attribute on child element.
 * @param {string|number} strokeDashoffset - Dash offset options of border on child elements. Overruled by stroke-dashoffset css rule or attribute on child element.
 * @param {string} strokeLinecap - Shape of the end of the border on child elements. Overruled by stroke-linecap css rule on child element.
 * @param {string} strokeLinejoin - Shape of corners when they are stroked on child elements. Overruled by stroke-linejoin css rule on child element.
 * @param {number} strokeMiterlimit - Limit of ratio of miter length to stroke-width on child elements. Overruled by stroke-miterlimit css rule on child element.
 * @param {string|number} strokeOpacity - Opacity of border on child elements. Overruled by stroke-opacity css rule on child element.
 * @param {string|number} strokeWidth - Width of the border on child elements. Overruled by stroke-width css rule on child element.
 *
 * @param {array<TemplateResult<2>>|nothing} innerHtmlFragments - Array of lit fragments that are child elements of group. Default nothing.
 * @returns {TemplateResult<2>}
 */
export const createGroup = (
  {
    fill,
    fillOpacity,
    fillRule,
    stroke,
    strokeDasharray,
    strokeDashoffset,
    strokeLinecap,
    strokeLinejoin,
    strokeMiterlimit,
    strokeOpacity,
    strokeWidth,
  },
  innerHtmlFragments = nothing,
) => {
  return svg`
    <g
      fill=${ifDefined(fill)}
      fill-opacity=${ifDefined(fillOpacity)}
      fill-rule=${ifDefined(fillRule)}
      stroke=${ifDefined(stroke)}
      stroke-dasharray=${ifDefined(strokeDasharray)}
      stroke-dashoffset=${ifDefined(strokeDashoffset)}
      stroke-linecap=${ifDefined(strokeLinecap)}
      stroke-linejoin=${ifDefined(strokeLinejoin)}
      stroke-miterlimit=${ifDefined(strokeMiterlimit)}
      stroke-opacity=${ifDefined(strokeOpacity)}
      stroke-width=${ifDefined(strokeWidth)}
    >
      ${innerHtmlFragments}
    </g>
  `;
};

// TODO Yes, can be nested in another svg
//  Like <g>, accepts all global attributes
//   -> How many are missing???
/**
 * Function to create a top level or nested SVG fragment
 *
 * @param {string} baseProfile - Deprecated, minimum SVG language profile.
 * @param {string} clip - Deprecated, defines the visible region of an element.
 * @param {string} clipPath - defines or associates a clipping path with the element it is related to.
 * @param {string} fill - Color of child elements. Overruled by fill css rule or attribute on child element.
 * @param {string|number} fillOpacity - Opacity of child elements. Overruled by fill-opacity css rule or attribute on child element.
 * @param {string} fillRule - Presentation attribute to determine the inside part of the child elements. Overruled by fill-rule css rule or attribute on child element.
 * @param {string|number} height - Height of the viewport.
 * @param {string} preserveAspectRatio - How the svg fragment must be deformed if it is displayed with a different aspect ratio.
 * @param {string} stroke - Color of border on child elements. Overruled by stroke css rule or attribute on child element.
 * @param {string} strokeDasharray - Dash array options of border on child elements. Overruled by stroke-dasharray css rule or attribute on child element.
 * @param {string|number} strokeDashoffset - Dash offset options of border on child elements. Overruled by stroke-dashoffset css rule or attribute on child element.
 * @param {string} strokeLinecap - Shape of the end of the border on child elements. Overruled by stroke-linecap css rule on child element.
 * @param {string} strokeLinejoin - Shape of corners when they are stroked on child elements. Overruled by stroke-linejoin css rule on child element.
 * @param {number} strokeMiterlimit - Limit of ratio of miter length to stroke-width on child elements. Overruled by stroke-miterlimit css rule on child element.
 * @param {string|number} strokeOpacity - Opacity of border on child elements. Overruled by stroke-opacity css rule on child element.
 * @param {string|number} strokeWidth - Width of the border on child elements. Overruled by stroke-width css rule on child element.
 * @param {string} version - Deprecated, what specification an SVG document conforms to.
 * @param {string} viewBox - defines the position and dimension for the content of the <svg> element.
 * @param {string|number} width - Width of the viewport.
 * @param {string|number} x - X coordinate for starting point of nested SVG element. No effect on top level SVG element. Equivalent of left css relative to top left of canvas.
 * @param {string|number} y - Y coordinate for starting point of nested SVG element. No effect on top level SVG element. Equivalent of top css relative to top left of canvas.
 *
 * @param {array<TemplateResult<2>>|nothing} innerHtmlFragments - Array of lit fragments that are child elements of group. Default nothing.
 * @returns {TemplateResult<2>}
 */
export const createSVG = (
  {
    baseProfile, // deprecated
    clip, // deprecated
    clipPath,
    fill,
    fillOpacity,
    fillRule,
    height,
    preserveAspectRatio,
    stroke,
    strokeDasharray,
    strokeDashoffset,
    strokeLinecap,
    strokeLinejoin,
    strokeMiterlimit,
    strokeOpacity,
    strokeWidth,
    version, // deprecated
    viewBox,
    width,
    x,
    y,
  },
  innerHtmlFragments = nothing,
) => {
  return svg`
    <svg
      baseProfile=${ifDefined(baseProfile)}
      clip=${ifDefined(clip)}
      clip-path=${ifDefined(clipPath)}
      fill=${ifDefined(fill)}
      fill-opacity=${ifDefined(fillOpacity)}
      fill-rule=${ifDefined(fillRule)}
      height=${ifDefined(height)}
      preserveAspectRatio=${ifDefined(preserveAspectRatio)}
      stroke=${ifDefined(stroke)}
      stroke-dasharray=${ifDefined(strokeDasharray)}
      stroke-dashoffset=${ifDefined(strokeDashoffset)}
      stroke-linecap=${ifDefined(strokeLinecap)}
      stroke-linejoin=${ifDefined(strokeLinejoin)}
      stroke-miterlimit=${ifDefined(strokeMiterlimit)}
      stroke-opacity=${ifDefined(strokeOpacity)}
      stroke-width=${ifDefined(strokeWidth)}
      version=${ifDefined(version)}
      viewBox=${ifDefined(viewBox)}
      width=${ifDefined(width)}
      x=${ifDefined(x)}
      y=${ifDefined(y)}
    >
      ${innerHtmlFragments}
    </svg>
  `;
};
