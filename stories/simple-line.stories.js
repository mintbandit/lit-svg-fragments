import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import SimpleLine from '../src/components/simple-line.js';
import { colors, choice, linecap } from '../.storybook/options.js';

if (!customElements.get('simple-line')) {
  customElements.define('simple-line', SimpleLine);
}

/**
 * Default template for stories.
 *
 * @param {object} args
 * @returns
 */
const defaultTemplate = args => html`
  <simple-line
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
  </simple-line>
`;

export default {
  title: 'Components/SimpleLine',
  component: 'simple-line',
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
      options: linecap,
    },
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
