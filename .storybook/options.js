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

export const linecap = ['not set', 'butt', 'round', 'square'];

export const linejoin = [
  'not set',
  'arcs',
  'bevel',
  'miter',
  'miter-clip',
  'round',
];

export const fillRule = ['nonzero', 'evenodd'];

/**
 * Animation fill is not color. Easy to get confused. Use for the following fragments
 *  - animate
 *  - animateMotion
 *  - animateTransform
 *  - set
 */
export const animationFill = ['freeze', 'remove'];

export const animationAccumulate = ['none', 'sum'];

export const animationAdditive = ['replace', 'sum'];

export const animationCalcMode = ['discrete', 'linear', 'paced', 'spline'];

export const animateRestart = ['always', 'whenNotActive', 'never'];

export const choice = attribute => (attribute === 'not set' ? '' : attribute);
