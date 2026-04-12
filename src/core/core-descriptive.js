import { svg, nothing } from 'lit';

// --- descriptive elements  ----
// These do not render anything
// Used to describe aspects of the svg

// TODO supports global attributes only
//  lit-helpers might be useful here
//  accept whatever is passed and apply
//  If incorrect attribute blame the user

/**
 * Create a desc element that contains long description about SVG content.
 * This element is not rendered
 *
 * @param {object} attributes - Key value pairs of attributes to be applied (not used yet)
 * @param {array<TemplateResult<2>>|nothing} innerHtmlFragments - Array of lit fragments that are child elements. Default nothing.
 * @returns {TemplateResult<2>}
 */
export const createDesc = (attributes = {}, innerHtmlFragments = nothing) => {
  return svg`
    <desc>
      ${innerHtmlFragments}
    </desc>
  `;
};

/**
 * Create a metadata element that contains information about SVG content.
 * This element is not rendered
 *
 * @param {object} attributes - Key value pairs of attributes to be applied (not used yet)
 * @param {array<TemplateResult<2>>|nothing} innerHtmlFragments - Array of lit fragments that are child elements. Default nothing.
 * @returns {TemplateResult<2>}
 */
export const createMetadata = (
  attributes = {},
  innerHtmlFragments = nothing,
) => {
  return svg`
    <metadata>
      ${innerHtmlFragments}
    </metadata>
  `;
};

/**
 * Create a title element that contains a short description about SVG content.
 *
 * @param {object} attributes - Key value pairs of attributes to be applied (not used yet)
 * @param {array<TemplateResult<2>>|nothing} innerHtmlFragments - Array of lit fragments that are child elements. Default nothing.
 * @returns {TemplateResult<2>}
 */
export const createTitle = (attributes = {}, innerHtmlFragments = nothing) => {
  return svg`
    <title>
      ${innerHtmlFragments}
    </title>
  `;
};
