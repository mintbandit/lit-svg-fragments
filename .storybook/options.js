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
 * If choice is 'not set' then sets the attribute to null string.
 * Lit's ifDefined directive will then remove the attribute.
 */
export const choice = attribute => (attribute === 'not set' ? null : attribute);

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

/**
 * Available options for type attribute on <animateTransform> elements
 *
 * @type {string[]}
 */
export const animationType = [
  'not set',
  'translate',
  'scale',
  'rotate',
  'skewX',
  'skewY',
];

/**
 * Available options for clip-rule attribute
 *
 * @type {string[]}
 */
export const clipRule = ['not set', 'nonzero', 'evenodd', 'inherit'];

/**
 * Available options for clipPathUnits attribute
 *
 * @type {string[]}
 */
export const clipPathUnits = ['not set', 'userSpaceOnUse', 'objectBoundingBox'];

/**
 * Available options for color-interpolation and color-interpolation-filters attributes
 *
 * @type {string[]}
 */
export const colorInterpolation = ['not set', 'auto', 'sRGB', 'linearRBG'];

/**
 * Available options for vector-effect attribute
 *
 * @type {string[]}
 */
export const vectorEffect = [
  'not set',
  'none',
  'non-scaling-stroke',
  'non-scaling-size',
  'non-rotation',
  'fixed-position',
];

/**
 * Available options for shape-rendering attribute
 *
 * @type {string[]}
 */
export const shapeRendering = [
  'not set',
  'auto',
  'optimizedSpeed',
  'crispEdges',
  'geometricPrecision',
];

/**
 * Available options for markerUnits attribute
 *
 * @type {string[]}
 */
export const markerUnits = ['not set', 'userSpaceOnUse', 'strokeWidth'];

/**
 * Available options for lengthAdjust attribute
 *
 * @type {string[]}
 */
export const lengthAdjust = ['not set', 'spacing', 'spacingAndGlyphs'];

/**
 * Available options for text-overflow attribute
 *
 * @type {string[]}
 */
export const textAnchor = ['not set', 'start', 'middle', 'end'];

/**
 * Available options for text-overflow attribute
 *
 * @type {string[]}
 */
export const textOverflow = ['not set', 'clip', 'ellipses'];

/**
 * Available options for text-rendering attribute
 *
 * @type {string[]}
 */
export const textRendering = [
  'not set',
  'auto',
  'optimizeSpeed',
  'optimizeLegibility',
  'geometricPrecision',
];

/**
 * Available options for method attribute
 *
 * @type {string[]}
 */
export const method = ['not set', 'align', 'stretch'];

/**
 * Available options for side attribute
 *
 * @type {string[]}
 */
export const side = ['not set', 'left', 'right'];

/**
 * Available options for spacing attribute
 *
 * @type {string[]}
 */
export const spacing = ['not set', 'auto', 'exact'];

/**
 * Available options for font-style attribute
 *
 * @type {string[]}
 */
export const fontStyle = ['not set', 'normal', 'italic', 'oblique'];

/**
 * Available options for font-weight attribute
 *
 * @type {string[]}
 */
export const fontWeight = ['not set', 'normal', 'bold', 'bolder', 'lighter'];

/**
 * Some options for font-family attribute
 *
 * @type {string[]}
 */
export const fontFamily = [
  'not set',
  'serif',
  'san-serif',
  'monospace',
  'cursive',
  'fantasy',
  'system-ui',
];
