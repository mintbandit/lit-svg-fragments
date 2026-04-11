import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import BasicLine from '../../src/components/basic/basic-line.js';
import {
  colors,
  choice,
  strokeLinecap,
  hideControls,
} from '../../.storybook/options.js';
import { page } from '../../.storybook/page.jsx';
import markdown from './basic-line.md?raw';

if (!customElements.get('basic-line')) {
  customElements.define('basic-line', BasicLine);
}

/**
 * Default template for stories.
 *
 * @param {object} args
 * @returns
 */
const defaultTemplate = args => html`
  <basic-line
    svg-width=${args.svgWidth}
    svg-height=${args.svgHeight}
    x1=${args.x1}
    x2=${args.x2}
    y1=${args.y1}
    y2=${args.y2}
    stroke=${ifDefined(choice(args.stroke))}
    stroke-dasharray=${ifDefined(args.strokeDasharray)}
    stroke-dashoffset=${ifDefined(args.strokeDashoffset)}
    stroke-linecap=${ifDefined(choice(args.strokeLinecap))}
    stroke-opacity=${ifDefined(args.strokeOpacity)}
    stroke-width=${ifDefined(args.strokeWidth)}
    path-length=${ifDefined(args.pathLength)}
  >
  </basic-line>
`;

export default {
  title: 'Basic Shapes/Line',
  component: 'basic-line',
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
    strokeLinecap: {
      control: 'select',
      options: strokeLinecap,
    },
    ...hideControls([
      'svg-width',
      'svg-height',
      'stroke-dasharray',
      'stroke-dashoffset',
      'stroke-linecap',
      'stroke-opacity',
      'stroke-width',
      'path-length',
    ]),
  },
};

export const Default = {
  args: {
    svgWidth: 100,
    svgHeight: 100,
    x1: 20,
    x2: 50,
    y1: 10,
    y2: 50,
    stroke: 'black',
    strokeWidth: '2',
    pathLength: 10,
    strokeLinecap: 'not set',
  },
};
