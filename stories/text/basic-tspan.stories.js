import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import BasicTspan from '../../src/components/text/basic-tspan.js';
import {
  colors,
  choice,
  strokeLinejoin,
  hideControls,
  strokeLinecap,
  fillRule,
  textAnchor,
  lengthAdjust,
  fontFamily,
  fontWeight,
  fontStyle,
} from '../../.storybook/options.js';
import { page } from '../../.storybook/page.jsx';
import markdown from './basic-tspan.md?raw';

if (!customElements.get('basic-tspan')) {
  customElements.define('basic-tspan', BasicTspan);
}

/**
 * Default template for stories.
 *
 * @param {object} args
 * @returns
 */
const defaultTemplate = args => html`
  <basic-tspan
    svg-width=${args.svgWidth}
    svg-height=${args.svgHeight}
    display-text=${args.displayText}
    dx=${ifDefined(args.dx)}
    dy=${ifDefined(args.dy)}
    x=${ifDefined(args.x)}
    y=${ifDefined(args.y)}
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
    length-adjust=${ifDefined(choice(args.lengthAdjust))}
    rotate=${ifDefined(args.rotate)}
    text-anchor=${ifDefined(choice(args.textAnchor))}
    text-decoration=${ifDefined(args.textDecoration)}
    text-length=${ifDefined(args.textLength)}
    text-rendering=${ifDefined(choice(args.textRendering))}
    font-family=${ifDefined(choice(args.fontFamily))}
    font-size=${ifDefined(args.fontSize)}
    font-size-adjust=${ifDefined(args.fontSizeAdjust)}
    font-stretch=${ifDefined(args.fontStretch)}
    font-style=${ifDefined(choice(args.fontStyle))}
    font-variant=${ifDefined(args.fontVariant)}
    font-weight=${ifDefined(choice(args.fontWeight))}
    font-width=${ifDefined(args.fontWidth)}
  >
  </basic-tspan>
`;

export default {
  title: 'Basic Text/Tspan',
  component: 'basic-tspan',
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
    fontFamily: {
      control: 'select',
      options: fontFamily,
    },
    fontStyle: {
      control: 'select',
      options: fontStyle,
    },
    fontWeight: {
      control: 'select',
      options: fontWeight,
    },
    lengthAdjust: {
      control: 'select',
      options: lengthAdjust,
    },
    textAnchor: {
      control: 'select',
      options: textAnchor,
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
      'display-text',
      'length-adjust',
      'text-anchor',
      'text-decoration',
      'text-length',
      'font-family',
      'font-size',
      'font-size-adjust',
      'font-stretch',
      'font-style',
      'font-variant',
      'font-weight',
      'font-width',
    ]),
  },
};

export const Default = {
  args: {
    svgWidth: 475,
    svgHeight: 60,
    displayText: '"I am a tspan."',
    fill: 'not set',
    fillRule: 'not set',
    fontFamily: 'not set',
    fontStyle: 'not set',
    fontWeight: 'not set',
    lengthAdjust: 'not set',
    stroke: 'not set',
    strokeLinecap: 'not set',
    strokeLinejoin: 'not set',
    textAnchor: 'not set',
  },
};
