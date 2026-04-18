import { html } from 'lit';
// import { ifDefined } from 'lit-html/directives/if-defined.js';
import JsonToSvg from '../../src/components/json-to-svg/json-to-svg.js';
import { colors, hideControls } from '../../.storybook/options.js';
import { page } from '../../.storybook/page.jsx';
import markdown from './json-to-svg.md?raw';

if (!customElements.get('json-to-svg')) {
  customElements.define('json-to-svg', JsonToSvg);
}

/**
 * Default template for stories.
 *
 * @param {object} args
 * @returns
 */
const defaultTemplate = args => html`
  <json-to-svg .json=${args.json}> </json-to-svg>
`;

export default {
  title: 'Parser/JSON to SVG Experimental',
  component: 'json-to-svg',
  render: args => defaultTemplate(args),
  parameters: {
    docs: {
      page: () => page(markdown),
    },
  },
};

export const Circle = {
  args: {
    json: {
      type: 'svg',
      attributes: {
        height: '100',
        width: '100',
      },
      children: [
        {
          type: 'circle',
          attributes: {
            r: '10',
            cx: '50',
            cy: '50',
          },
        },
      ],
    },
  },
};

export const Rectangle = {
  args: {
    json: {
      type: 'svg',
      attributes: {
        height: '100',
        width: '100',
      },
      children: [
        {
          type: 'rect',
          attributes: {
            x: '15',
            y: '35',
            height: '30',
            width: '70',
          },
        },
      ],
    },
  },
};

export const Text = {
  args: {
    json: {
      type: 'svg',
      attributes: {
        height: '100',
        width: '100',
      },
      children: [
        {
          type: 'text',
          attributes: {
            x: '15',
            y: '35',
          },
          children: ['Hello World'],
        },
      ],
    },
  },
};

export const AnimatedCircle = {
  render: args => defaultTemplate(args),
  args: {
    json: {
      type: 'svg',
      attributes: {
        height: '100',
        width: '100',
      },
      children: [
        {
          type: 'circle',
          attributes: {
            r: '10',
            cx: '50',
            cy: '50',
          },
          children: [
            {
              type: 'animate',
              attributes: {
                // TODO names need fixing
                animationAttributeName: 'r',
                animationAttributeType: 'XML',
                animationValues: '5;20;5',
                animationDuration: '1s',
                animationRepeatCount: 20,
              },
            },
          ],
        },
      ],
    },
  },
};

export const RotatingRectangle = {
  render: args => defaultTemplate(args),
  args: {
    json: {
      type: 'svg',
      attributes: {
        height: '100',
        width: '100',
      },
      children: [
        {
          type: 'rect',
          attributes: {
            x: '15',
            y: '35',
            height: '30',
            width: '70',
          },
          children: [
            {
              type: 'animateTransform',
              attributes: {
                // TODO names need fixing
                animationAttributeType: 'XML',
                animationAttributeName: 'transform',
                animationType: 'rotate',
                animationFrom: '0 60 70',
                animationTo: '360 60 70',
                animationDuration: '10s',
                animationRepeatCount: 20,
              },
            },
          ],
        },
      ],
    },
  },
};
