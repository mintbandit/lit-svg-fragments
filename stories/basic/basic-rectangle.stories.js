import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import BasicRectangle from '../../src/components/basic/basic-rectangle.js';
import {
  colors,
  choice,
  strokeLinejoin,
  hideControls,
} from '../../.storybook/options.js';
import { page } from '../../.storybook/page.jsx';
import markdown from './basic-rectangle.md?raw';

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
    x=${args.x}
    y=${args.y}
    width=${args.width}
    height=${args.height}
    rx=${args.rx}
    ry=${args.ry}
    stroke=${ifDefined(choice(args.stroke))}
    stroke-dasharray=${ifDefined(args.strokeDasharray)}
    stroke-dashoffset=${ifDefined(args.strokeDashoffset)}
    stroke-linejoin=${ifDefined(choice(args.strokeLinejoin))}
    stroke-miterlimit=${ifDefined(args.strokeMiterlimit)}
    stroke-opacity=${ifDefined(args.strokeOpacity)}
    stroke-width=${ifDefined(args.strokeWidth)}
    fill=${ifDefined(choice(args.fill))}
    fill-opacity=${ifDefined(args.fillOpacity)}
    path-length=${ifDefined(args.pathLength)}
  >
  </basic-rectangle>
`;

export default {
  title: 'Basic Shapes/Rectangle',
  component: 'basic-rectangle',
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
    strokeLinejoin: {
      control: 'select',
      options: strokeLinejoin,
    },
    fill: {
      control: 'select',
      options: colors,
    },
    ...hideControls([
      'svg-width',
      'svg-height',
      'stroke-dasharray',
      'stroke-dashoffset',
      'stroke-linejoin',
      'stroke-miterlimit',
      'stroke-opacity',
      'stroke-width',
      'fill-opacity',
      'path-length',
    ]),
  },
};

export const Default = {
  args: {
    svgWidth: 100,
    svgHeight: 100,
    x: 15,
    y: 35,
    width: 70,
    height: 30,
    stroke: 'not set',
    fill: 'not set',
    strokeLinejoin: 'not set',
  },
};
