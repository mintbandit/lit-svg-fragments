import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import BasicRectangle from '../../src/components/basic/basic-rectangle.js';
import {
  colors,
  choice,
  strokeLinejoin,
  hideControls,
} from '../../.storybook/options.js';

if (!customElements.get('basic-ellipse')) {
  customElements.define('basic-rectangle', BasicRectangle);
}

/**
 * Default template for stories.
 *
 * @param {object} args
 * @returns
 */
const defaultTemplate = args => html`
  <basic-rectangle
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
  >
  </basic-rectangle>
`;

export default {
  title: 'Basic Shapes/Rectangle',
  component: 'basic-rectangle',
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
  },
};
