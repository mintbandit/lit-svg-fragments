import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import SimplePolyline from '../src/components/simple-polyline.js';
import { colors, choice, linecap, fillRule } from '../.storybook/options.js';

if (!customElements.get('simple-polyline')) {
  customElements.define('simple-polyline', SimplePolyline);
}

/**
 * Default template for stories.
 *
 * @param {object} args
 * @returns
 */
const defaultTemplate = args => html`
  <simple-polyline
    svg-width=${args.svgWidth}
    svg-height=${args.svgHeight}
    points=${args.points}
    line-color=${ifDefined(choice(args.lineColor))}
    line-dasharray=${ifDefined(args.lineDasharray)}
    line-dashoffset=${ifDefined(args.lineDashoffset)}
    linecap=${ifDefined(choice(args.lineCap))}
    linejoin=${ifDefined(args.lineJoin)}
    line-miterlimit=${ifDefined(args.lineMiterlimit)}
    line-opacity=${ifDefined(args.lineOpacity)}
    line-width=${ifDefined(args.lineWidth)}
    color=${ifDefined(choice(args.color))}
    color-opacity=${ifDefined(args.colorOpacity)}
    color-rule=${ifDefined(choice(args.colorRule))}
    path-length=${ifDefined(args.pathLength)}
  >
  </simple-polyline>
`;

export default {
  title: 'Components/SimplePolyline',
  component: 'simple-polyline',
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
    color: {
      control: 'select',
      options: colors,
    },
    colorRule: {
      control: 'select',
      options: fillRule,
    },
  },
};

export const Default = {
  args: {
    svgWidth: 100,
    svgHeight: 100,
    points: '50,0 21,90 98,35 2,35 79,90',
    lineColor: 'black',
    color: 'transparent',
    pathLength: 10,
  },
};
