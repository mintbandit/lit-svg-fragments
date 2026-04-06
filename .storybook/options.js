/**
 * Sample colors for fills and stroke attributes
 *
 * @type {string[]}
 */
export const colors = [
  'not set',
  'black',
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'yellow',
  'white',
  'transparent',
];

/**
 * If choice is 'not set' then sets the attribute to empty string.
 * Lit's ifDefined directive will then remove the attribute.
 */
export const choice = attribute => (attribute === 'not set' ? '' : attribute);

/**
 * Generates an object with properties set to { table: { disable: true } }
 * Controls hidden will no longer be displayed in Storybook.
 * Useful as both attribute and property versions from lit properties are listed in cem
 * resulting in duplicate controls.
 *
 * @param {Array} [properties=[]] - The list of properties to set to { table: { disable: true } }
 * @return {Object} - An object with properties set to { table: { disable: true } }
 */
export const hideControls = (properties = []) => {
  const hiddenControls = {};
  properties.forEach(property => {
    hiddenControls[property] = {
      table: { disable: true },
    };
  });
  return hiddenControls;
};

// -------------------------------------------------
// SVG Attributes with fixed values that can be set
// -------------------------------------------------

/**
 * Available options for stroke-linecap attribute
 *
 * @type {string[]}
 */
export const strokeLinecap = ['not set', 'butt', 'round', 'square'];

/**
 * Available options for stroke-linejoin attribute
 *
 * @type {string[]}
 */
export const strokeLinejoin = [
  'not set',
  'arcs',
  'bevel',
  'miter',
  'miter-clip',
  'round',
];

/**
 * Available options for fill-rule attribute
 *
 * @type {string[]}
 */
export const fillRule = ['not set', 'nonzero', 'evenodd'];

/**
 * Animation fill is not color. Easy to get confused. Use for the following fragments
 *  - animate
 *  - animateMotion
 *  - animateTransform
 *  - set
 *
 *  @type {string[]}
 */
export const animationFill = ['not set', 'freeze', 'remove'];

/**
 * Available options for accumulate attribute
 *
 * @type {string[]}
 */
export const animationAccumulate = ['not set', 'none', 'sum'];

/**
 * Available options for additive attribute
 *
 * @type {string[]}
 */
export const animationAdditive = ['not set', 'replace', 'sum'];

/**
 * Available options for calcMode attribute
 *
 * @type {string[]}
 */
export const animationCalcMode = [
  'not set',
  'discrete',
  'linear',
  'paced',
  'spline',
];

/**
 * Available options for restart attribute
 *
 * @type {string[]}
 */
export const animationRestart = ['not set', 'always', 'whenNotActive', 'never'];
