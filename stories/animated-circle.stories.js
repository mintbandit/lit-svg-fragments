import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import AnimatedCircle from '../src/components/animated/animated-circle.js';
import {
  colors,
  choice,
  animationAccumulate,
  animationAdditive,
  animationCalcMode,
  animationFill,
  animateRestart,
} from '../.storybook/options.js';

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
    radius=${args.radius}
    center-x=${args.centerX}
    center-y=${args.centerY}
    border-color=${ifDefined(choice(args.borderColor))}
    border-dasharray=${ifDefined(args.borderDasharray)}
    border-dashoffset=${ifDefined(args.borderDashoffset)}
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
    animation-color=${ifDefined(args.animationColor)}
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
  </animated-circle>
`;

export default {
  title: 'Animation/Circle',
  component: 'animated-circle',
  render: args => defaultTemplate(args),
  argTypes: {
    borderColor: {
      control: 'select',
      options: colors,
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
    animationColor: {
      control: 'select',
      options: animationFill,
    },
    animateRestart: {
      control: 'select',
      options: animateRestart,
    },
  },
};

export const Default = {
  args: {
    svgWidth: 100,
    svgHeight: 100,
    radius: 10,
    centerX: 50,
    centerY: 50,
    pathLength: 10,
    borderWidth: '2',
    colorOpacity: '1', // Need to restrict to 0 -> 1
    borderOpacity: '1', // Need to restrict to 0 -> 1

    animateAttributeName: 'r',
    animateAttributeType: 'XML',
    animateValues: '5;20;5',
    animationDuration: '1s',
    animateRepeatCount: 20,
  },
};
