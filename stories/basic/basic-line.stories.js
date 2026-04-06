import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import BasicLine from '../../src/components/basic/basic-line.js';
import {
  colors,
  choice,
  strokeLinecap,
  hideControls,
} from '../../.storybook/options.js';

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
    x-start=${args.xStart}
    x-end=${args.xEnd}
    y-start=${args.yStart}
    y-end=${args.yEnd}
    line-color=${ifDefined(choice(args.lineColor))}
    line-dasharray=${ifDefined(args.lineDasharray)}
    line-dashoffset=${ifDefined(args.lineDashoffset)}
    linecap=${ifDefined(choice(args.lineCap))}
    line-opacity=${ifDefined(args.lineOpacity)}
    line-width=${ifDefined(args.lineWidth)}
    path-length=${ifDefined(args.pathLength)}
  >
  </basic-line>
`;

export default {
  title: 'Basic Shapes/Line',
  component: 'basic-line',
  parameters: {
    layout: 'padded',
  },
  render: args => defaultTemplate(args),
  argTypes: {
    lineColor: {
      control: 'select',
      options: colors,
    },
    lineCap: {
      control: 'select',
      options: strokeLinecap,
    },
    ...hideControls([
      'svg-width',
      'svg-height',
      'x-start',
      'x-end',
      'y-start',
      'y-end',
      'line-color',
      'line-dasharray',
      'line-dashoffset',
      'line-opacity',
      'line-width',
      'path-length',
    ]),
  },
};

export const Default = {
  args: {
    svgWidth: 100,
    svgHeight: 100,
    xStart: 20,
    xEnd: 50,
    yStart: 10,
    yEnd: 50,
    lineColor: 'black',
    lineWidth: '2',
    pathLength: 10,
  },
};
