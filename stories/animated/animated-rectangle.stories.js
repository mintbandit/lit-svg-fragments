import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import AnimatedRectangle from '../../src/components/animated/animated-rectangle.js';
import {
  colors,
  choice,
  strokeLinejoin,
  animationAccumulate,
  animationAdditive,
  animationCalcMode,
  animationFill,
  animationRestart,
  hideControls,
} from '../../.storybook/options.js';

if (!customElements.get('animated-ellipse')) {
  customElements.define('animated-rectangle', AnimatedRectangle);
}

/**
 * Default template for stories.
 *
 * @param {object} args
 * @returns
 */
const defaultTemplate = args => html`
  <animated-rectangle
    svg-width=${args.svgWidth}
    svg-height=${args.svgHeight}
    x-start=${args.xStart}
    y-start=${args.yStart}
    width=${args.width}
    height=${args.height}
    radius-x=${args.radiusX}
    radius-y=${args.radiusY}
    border-color=${ifDefined(choice(args.borderColor))}
    border-dasharray=${ifDefined(args.borderDasharray)}
    border-dashoffset=${ifDefined(args.borderDashoffset)}
    border-linejoin=${ifDefined(choice(args.borderLinejoin))}
    border-miterlimit=${ifDefined(args.borderMiterlimit)}
    border-opacity=${ifDefined(args.borderOpacity)}
    border-width=${ifDefined(args.borderWidth)}
    color=${ifDefined(choice(args.color))}
    color-opacity=${ifDefined(args.colorOpacity)}
    path-length=${ifDefined(args.pathLength)}
    animate-accumulate=${ifDefined(choice(args.animateAccumulate))}
    animate-additive=${ifDefined(choice(args.animateAdditive))}
    animate-attribute-name=${ifDefined(args.animateAttributeName)}
    animate-attribute-type=${ifDefined(args.animateAttributeType)}
    animation-begin=${ifDefined(args.animationBegin)}
    animation-by=${ifDefined(args.animationBy)}
    animation-calc-mode=${ifDefined(choice(args.animationCalcMode))}
    animation-duration=${ifDefined(args.animationDuration)}
    animation-end=${ifDefined(args.animationEnd)}
    animation-fill=${ifDefined(args.animationFill)}
    animate-to=${ifDefined(args.animateTo)}
    animate-from=${ifDefined(args.animateFrom)}
    animate-key-points=${ifDefined(args.animateKeyPoints)}
    animate-key-splines=${ifDefined(args.animateKeySplines)}
    animate-key-times=${ifDefined(args.animateKeyTimes)}
    animate-max=${ifDefined(args.animateMax)}
    animate-min=${ifDefined(args.animateMin)}
    animate-restart=${ifDefined(choice(args.animateRestart))}
    animate-values=${ifDefined(args.animateValues)}
    animate-repeat-count=${ifDefined(args.animateRepeatCount)}
    animate-repeat-duration=${ifDefined(args.animateRepeatDuration)}
  >
  </animated-rectangle>
`;

export default {
  title: 'Animation/Rectangle',
  component: 'animated-rectangle',
  parameters: {
    layout: 'padded',
  },
  render: args => defaultTemplate(args),
  argTypes: {
    borderColor: {
      control: 'select',
      options: colors,
    },
    borderLinejoin: {
      control: 'select',
      options: strokeLinejoin,
    },
    color: {
      control: 'select',
      options: colors,
    },
    animateAccumulate: {
      control: 'select',
      options: animationAccumulate,
    },
    animateAdditive: {
      control: 'select',
      options: animationAdditive,
    },
    animateCalcMode: {
      control: 'select',
      options: animationCalcMode,
    },
    animationFill: {
      control: 'select',
      options: animationFill,
    },
    animateRestart: {
      control: 'select',
      options: animationRestart,
    },
    ...hideControls([
      'svg-width',
      'svg-height',
      'x-start',
      'y-start',
      'radius-x',
      'radius-y',
      'border-color',
      'border-dasharray',
      'border-dashoffset',
      'border-linejoin',
      'border-miterlimit',
      'border-opacity',
      'border-width',
      'color-opacity',
      'path-length',
      // animation dupes
      'animate-accumulative',
      'animate-additive',
      'animate-attribute-name',
      'animate-attribute-type',
      'animate-begin',
      'animate-by',
      'animate-calc-mode',
      'animation-duration',
      'animation-end',
      'animation-fill',
      'animate-to',
      'animate-from',
      'animate-from',
      'animate-key-points',
      'animate-key-splines',
      'animate-key-times',
      'animate-max',
      'animate-min',
      'animate-restart',
      'animate-values',
      'animate-repeat-count',
      'animation-repeat-duration',
    ]),
  },
};

export const Default = {
  args: {
    svgWidth: 100,
    svgHeight: 100,
    xStart: 50,
    yStart: 50,
    width: 20,
    height: 40,
    pathLength: 10,
    borderWidth: '2',

    animateAttributeName: 'y',
    animateAttributeType: 'XML',
    animateFrom: 10,
    animateTo: 90,
    animationDuration: '1s',
    animateRepeatCount: 5,

    animationFill: 'freeze', // or remove
  },
};
