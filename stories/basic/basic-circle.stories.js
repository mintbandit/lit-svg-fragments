import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import BasicCircle from '../../src/components/basic/basic-circle.js';
import { colors, choice, hideControls } from '../../.storybook/options.js';
import { page } from '../../.storybook/page.jsx';
import markdown from './basic-circle.md?raw';

if (!customElements.get('basic-circle')) {
  customElements.define('basic-circle', BasicCircle);
}

/**
 * Default template for stories.
 *
 * @param {object} args
 * @returns
 */
const defaultTemplate = args => html`
  <basic-circle
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
  >
  </basic-circle>
`;

export default {
  title: 'Basic Shapes/Circle',
  component: 'basic-circle',
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
    ...hideControls([
      'svg-width',
      'svg-height',
      'stroke-dasharray',
      'stroke-dashoffset',
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
    r: 10,
    cx: 50,
    cy: 50,
    pathLength: 10,
    strokeWidth: '2',
    fillOpacity: '1', // Need to restrict to 0 -> 1
    strokeOpacity: '1', // Need to restrict to 0 -> 1
    stroke: 'not set',
    fill: 'not set',
  },
};
