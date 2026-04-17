import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import BasicPolyline from '../../src/components/basic/basic-polyline.js';
import {
  colors,
  choice,
  strokeLinecap,
  strokeLinejoin,
  fillRule,
  hideControls,
} from '../../.storybook/options.js';
import { page } from '../../.storybook/page.jsx';
import markdown from './basic-polyline.md?raw';

if (!customElements.get('basic-polyline')) {
  customElements.define('basic-polyline', BasicPolyline);
}

/**
 * Default template for stories.
 *
 * @param {object} args
 * @returns
 */
const defaultTemplate = args => html`
  <basic-polyline
    svg-width=${args.svgWidth}
    svg-height=${args.svgHeight}
    points=${args.points}
    stroke=${ifDefined(choice(args.stroke))}
    stroke-dasharray=${ifDefined(args.strokeDasharray)}
    stroke-dashoffset=${ifDefined(args.strokeDashoffset)}
    stroke-linecap=${ifDefined(choice(args.strokeLinecap))}
    stroke-linejoin=${ifDefined(choice(args.strokeLinejoin))}
    stroke-miterlimit=${ifDefined(args.strokeMiterlimit)}
    stroke-opacity=${ifDefined(args.strokeOpacity)}
    stroke-width=${ifDefined(args.strokeWidth)}
    fill=${ifDefined(choice(args.fill))}
    fill-opacity=${ifDefined(args.fillOpacity)}
    fill-rule=${ifDefined(choice(args.fillRule))}
    path-length=${ifDefined(args.pathLength)}
  >
  </basic-polyline>
`;

export default {
  title: 'Basic Shapes/Polyline',
  component: 'basic-polyline',
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
    strokeLinejoin: {
      control: 'select',
      options: strokeLinejoin,
    },
    fill: {
      control: 'select',
      options: colors,
    },
    fillRule: {
      control: 'select',
      options: fillRule,
    },
    ...hideControls([
      'svg-width',
      'svg-height',
      'stroke-dasharray',
      'stroke-dashoffset',
      'stroke-linecap',
      'stroke-linejoin',
      'stroke-opacity',
      'stroke-width',
      'stroke-miterlimit',
      'fill-opacity',
      'fill-rule',
      'path-length',
    ]),
  },
};

export const Default = {
  args: {
    svgWidth: 100,
    svgHeight: 100,
    points: '50,0 21,90 98,35 2,35 79,90',
    stroke: 'black',
    fill: 'transparent',
    fillRule: 'not set',
    strokeLinecap: 'not set',
    strokeLinejoin: 'not set',
  },
};
