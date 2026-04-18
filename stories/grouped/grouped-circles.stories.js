import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import GroupedCircles from '../../src/components/grouped/grouped-circles.js';
import { colors, choice, hideControls } from '../../.storybook/options.js';
import { page } from '../../.storybook/page.jsx';
import markdown from './grouped-circles.md?raw';

if (!customElements.get('grouped-circles')) {
  customElements.define('grouped-circles', GroupedCircles);
}

/**
 * Default template for stories.
 *
 * @param {object} args
 * @returns
 */
const defaultTemplate = args => html`
  <grouped-circles
    r=${args.r}
    stroke=${ifDefined(choice(args.stroke))}
    stroke-dasharray=${ifDefined(args.strokeDasharray)}
    stroke-dashoffset=${ifDefined(args.strokeDashoffset)}
    stroke-opacity=${ifDefined(args.strokeOpacity)}
    stroke-width=${ifDefined(args.strokeWidth)}
    fill=${ifDefined(choice(args.fill))}
    fill-opacity=${ifDefined(args.fillOpacity)}
  >
  </grouped-circles>
`;

export default {
  title: 'Grouped Shapes/Grouped Circles',
  component: 'grouped-circles',
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
      'stroke-dasharray',
      'stroke-dashoffset',
      'stroke-opacity',
      'stroke-width',
      'fill-opacity',
    ]),
  },
};

export const Default = {
  args: {
    r: 50,
    stroke: 'green',
    strokeWidth: '10',
    fill: 'white',
  },
};
