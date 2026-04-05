import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import SimpleRectangle from '../../src/components/basic/simple-rectangle.js';
import { colors, choice, linejoin } from '../../.storybook/options.js';

if (!customElements.get('simple-ellipse')) {
  customElements.define('simple-rectangle', SimpleRectangle);
}

/**
 * Default template for stories.
 *
 * @param {object} args
 * @returns
 */
const defaultTemplate = args => html`
  <simple-rectangle
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
  </simple-rectangle>
`;

export default {
  title: 'Basic Shapes/Rectangle',
  component: 'simple-rectangle',
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
      options: linejoin,
    },
    color: {
      control: 'select',
      options: colors,
    },
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
