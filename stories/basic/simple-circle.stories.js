import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import SimpleCircle from '../../src/components/basic/simple-circle.js';
import { colors, choice, hideControls } from '../../.storybook/options.js';

if (!customElements.get('simple-circle')) {
  customElements.define('simple-circle', SimpleCircle);
}

/**
 * Default template for stories.
 *
 * @param {object} args
 * @returns
 */
const defaultTemplate = args => html`
  <simple-circle
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
  >
  </simple-circle>
`;

export default {
  title: 'Basic Shapes/Circle',
  component: 'simple-circle',
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
    ...hideControls([
      'svg-width',
      'svg-height',
      'center-x',
      'center-y',
      'border-color',
      'border-dasharray',
      'border-dashoffset',
      'border-opacity',
      'border-width',
      'color-opacity',
      'path-length',
    ]),
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
  },
};
