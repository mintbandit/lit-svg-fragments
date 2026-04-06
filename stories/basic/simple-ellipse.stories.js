import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import SimpleEllipse from '../../src/components/basic/simple-ellipse.js';
import { colors, choice, hideControls } from '../../.storybook/options.js';

if (!customElements.get('simple-ellipse')) {
  customElements.define('simple-ellipse', SimpleEllipse);
}

/**
 * Default template for stories.
 *
 * @param {object} args
 * @returns
 */
const defaultTemplate = args => html`
  <simple-ellipse
    svg-width=${args.svgWidth}
    svg-height=${args.svgHeight}
    radius-x=${args.radiusX}
    radius-y=${args.radiusY}
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
  </simple-ellipse>
`;

export default {
  title: 'Basic Shapes/Ellipse',
  component: 'simple-ellipse',
  parameters: {
    layout: 'padded',
  },
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
      'radius-x',
      'radius-y',
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
    radiusX: 20,
    radiusY: 10,
    centerX: 50,
    centerY: 50,
    pathLength: 10,
    borderWidth: '2',
  },
};
