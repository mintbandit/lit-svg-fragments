import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import BasicPolygon from '../../src/components/basic/basic-polygon.js';
import {
  colors,
  choice,
  strokeLinecap,
  fillRule,
  hideControls,
} from '../../.storybook/options.js';
import { page } from '../../.storybook/page.jsx';
import markdown from './basic-polygon.md?raw';

if (!customElements.get('basic-polygon')) {
  customElements.define('basic-polygon', BasicPolygon);
}

/**
 * Default template for stories.
 *
 * @param {object} args
 * @returns
 */
const defaultTemplate = args => html`
  <basic-polygon
    svg-width=${args.svgWidth}
    svg-height=${args.svgHeight}
    points=${args.points}
    stroke=${ifDefined(choice(args.stroke))}
    stroke-dasharray=${ifDefined(args.strokeDasharray)}
    stroke-dashoffset=${ifDefined(args.strokeDashoffset)}
    stroke-linejoin=${ifDefined(choice(args.strokeLinejoin))}
    stroke-miterlimit=${ifDefined(args.strokeMiterlimit)}
    stroke-opacity=${ifDefined(args.strokeOpacity)}
    stroke-width=${ifDefined(args.strokeWidth)}
    fill=${ifDefined(choice(args.fill))}
    fill-opacity=${ifDefined(args.fillOpacity)}
    fill-rule=${ifDefined(choice(args.fillRule))}
    path-length=${ifDefined(args.pathLength)}
  >
  </basic-polygon>
`;

export default {
  title: 'Basic Shapes/Polygon',
  component: 'basic-polygon',
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
    fillRule: {
      control: 'select',
      options: fillRule,
    },
    ...hideControls([
      'svg-width',
      'svg-height',
      'stroke-dasharray',
      'stroke-dashoffset',
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
    pathLength: 10,
    fillRule: 'not set',
  },
};
