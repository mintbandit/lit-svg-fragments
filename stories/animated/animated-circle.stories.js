import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import AnimatedCircle from '../../src/components/animated/animated-circle.js';
import {
  colors,
  choice,
  animationAccumulate,
  animationAdditive,
  animationCalcMode,
  animationFill,
  animationRestart,
  hideControls,
} from '../../.storybook/options.js';
import { page } from '../../.storybook/page.jsx';
import markdown from './animated-circle.md?raw';

if (!customElements.get('animated-circle')) {
  customElements.define('animated-circle', AnimatedCircle);
}

/**
 * Default template for stories.
 *
 * @param {object} args
 * @returns
 */
const defaultTemplate = args => html`
  <animated-circle
    svg-width=${args.svgWidth}
    svg-height=${args.svgHeight}
    r=${args.r}
    cx=${args.cx}
    cy=${args.cy}
    stroke=${ifDefined(choice(args.stroke))}
    stroke-dasharray=${ifDefined(args.strokeDasharray)}
    stroke-dashoffset=${ifDefined(args.strokeDashoffset)}
    stroke-opacity=${ifDefined(args.strokeOpacity)}
    stroke-width=${ifDefined(args.strokeWidth)}
    fill=${ifDefined(choice(args.fill))}
    fill-opacity=${ifDefined(args.fillOpacity)}
    path-length=${ifDefined(args.pathLength)}
    animation-accumulate=${ifDefined(choice(args.animationAccumulate))}
    animation-additive=${ifDefined(choice(args.animationAdditive))}
    animation-attribute-name=${ifDefined(args.animationAttributeName)}
    animation-attribute-type=${ifDefined(args.animationAttributeType)}
    animation-begin=${ifDefined(args.animationBegin)}
    animation-by=${ifDefined(args.animationBy)}
    animation-calc-mode=${ifDefined(choice(args.animationCalcMode))}
    animation-duration=${ifDefined(args.animationDuration)}
    animation-end=${ifDefined(args.animationEnd)}
    animation-fill=${ifDefined(args.animationFill)}
    animation-to=${ifDefined(args.animationTo)}
    animation-from=${ifDefined(args.animationFrom)}
    animation-key-points=${ifDefined(args.animationKeyPoints)}
    animation-key-splines=${ifDefined(args.animationKeySplines)}
    animation-key-times=${ifDefined(args.animationKeyTimes)}
    animation-max=${ifDefined(args.animationMax)}
    animation-min=${ifDefined(args.animationMin)}
    animation-restart=${ifDefined(choice(args.animationRestart))}
    animation-values=${ifDefined(args.animationValues)}
    animation-repeat-count=${ifDefined(args.animationRepeatCount)}
    animation-repeat-duration=${ifDefined(args.animationRepeatDuration)}
  >
  </animated-circle>
`;

export default {
  title: 'Animation/Circle',
  component: 'animated-circle',
  render: args => defaultTemplate(args),
  parameters: {
    docs: {
      page: () => page(markdown),
    },
  },
  argTypes: {
    stroke: {
      control: 'select',
      options: colors,
    },
    fill: {
      control: 'select',
      options: colors,
    },
    animationAccumulate: {
      control: 'select',
      options: animationAccumulate,
    },
    animationAdditive: {
      control: 'select',
      options: animationAdditive,
    },
    animationCalcMode: {
      control: 'select',
      options: animationCalcMode,
    },
    animationFill: {
      control: 'select',
      options: animationFill,
    },
    animationRestart: {
      control: 'select',
      options: animationRestart,
    },
    ...hideControls([
      'svg-width',
      'svg-height',
      'stroke-dasharray',
      'stroke-dashoffset',
      'stroke-opacity',
      'stroke-width',
      'fill-opacity',
      'path-length',
      // animation dupes
      'animation-accumulative',
      'animation-additive',
      'animation-attribute-name',
      'animation-attribute-type',
      'animation-begin',
      'animation-by',
      'animation-calc-mode',
      'animation-duration',
      'animation-end',
      'animation-fill',
      'animation-to',
      'animation-from',
      'animation-from',
      'animation-key-points',
      'animation-key-splines',
      'animation-key-times',
      'animation-max',
      'animation-min',
      'animation-restart',
      'animation-values',
      'animation-repeat-count',
      'animation-repeat-duration',
    ]),
  },
};

export const Default = {
  args: {
    svgWidth: 100,
    svgHeight: 100,
    r: 10,
    cx: 50,
    cy: 50,
    stroke: 'not set',
    fill: 'not set',

    animationAttributeName: 'r',
    animationAttributeType: 'XML',
    animationValues: '5;20;5',
    animationDuration: '1s',
    animationRepeatCount: 20,

    animationFill: 'not set',
    animationAccumulate: 'not set',
    animationAdditive: 'not set',
    animationCalcMode: 'not set',
    animationRestart: 'not set',
  },
};
