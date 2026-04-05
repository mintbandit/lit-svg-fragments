import { html, LitElement, css } from 'lit';
import { createRectangle } from '../core/core-functions.js';

/**
 * A component that creates a simple SVG rectangle using the createRectangle
 * function from core-functions
 *
 * @tag simple-rectangle
 * @property {number} svgWidth - width of the SVG canvas
 * @property {number} svgHeight - height of the SVG canvas
 * @property {number} xStart - X coordinate of the top left corner of rectangle. Equivalent of left css relative to top left of canvas
 * @property {number} yStart - Y coordinate of the top left corner of rectangle. Equivalent of top css relative to top left of canvas
 * @property {number} width - Width of the rectangle.
 * @property {number} height - Height of the rectangle.
 * @property {number} radiusX - Radius of the horizontal corners of the rectangle.
 * @property {number} radiusY - Radius of the vertical corners of the rectangle.
 * @property {string} borderColor - Color of the border of the rectangle. Overruled by stroke css rule on rectangle element.
 * @property {string} borderDasharray - Dash array options of the border of the rectangle. Overruled by stroke-dasharray css rule on rectangle element.
 * @property {string} borderDashoffset - Dash offset options of the border of the rectangle. Overruled by stroke-dashoffset css rule on rectangle element.
 * @property {string} borderLinejoin - Shape of corners when they are stroked. Overruled by stroke-linejoin css rule on rectangle element.
 * @property {number} borderMiterlimit - Limit of ratio of miter length to stroke-width. Overruled by stroke-miterlimit css rule on rectangle element.
 * @property {string} borderOpacity - Opacity of the border of the rectangle. Overruled by stroke-opacity css rule on rectangle element.
 * @property {string} borderWidth - Width of the border of the rectangle. Half this value will be added to height/width value increasing size of rectangle. Overruled by stroke-width css rule on rectangle element.
 * @property {string} color - Color of rectangle. Overruled by fill css rule on rectangle element.
 * @property {string} colorOpacity - Opacity of rectangle. Overruled by fill-opacity css rule on rectangle element.
 * @property {number} pathLength - Relative length in units of border. Use with borderDasharray to influence styling of border.
 */
export default class SimpleRectangle extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    svg {
      border: black 1px solid;
    }
  `;

  static properties = {
    // TODO for testing only
    //  Values likely to be auto-generated from radius
    svgWidth: { attribute: 'svg-width', type: Number, reflect: true },
    svgHeight: { attribute: 'svg-height', type: Number, reflect: true },

    // Dimensions
    // TODO all 6 can be % values -> must be string to support in demo
    xStart: { attribute: 'x-start', type: Number, reflect: true },
    yStart: { attribute: 'y-start', type: Number, reflect: true },
    width: { type: Number, reflect: true },
    height: { type: Number, reflect: true },
    radiusX: { attribute: 'radius-x', type: Number, reflect: true },
    radiusY: { attribute: 'radius-y', type: Number, reflect: true },

    // Style - css will overrule attributes
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/stroke
    borderColor: { attribute: 'border-color', type: String, reflect: true }, // stroke
    borderDasharray: {
      // stroke-dasharray
      attribute: 'border-dasharray',
      type: String,
      reflect: true,
    },
    borderDashoffset: {
      // stroke-dashoffset
      attribute: 'border-dashoffset',
      type: String,
      reflect: true,
    },
    // borderLinecap: { attribute: 'border-linecap', type: String, reflect: true }, // stroke-linecap
    borderLinejoin: {
      attribute: 'border-linejoin',
      type: String,
      reflect: true,
    }, // stroke-linejoin
    borderMiterlimit: {
      attribute: 'border-miterlimit',
      type: Number,
      reflect: true,
    }, // stroke-miterlimit
    borderOpacity: { attribute: 'border-opacity', type: String, reflect: true }, // stroke-opacity
    borderWidth: { attribute: 'border-width', type: String, reflect: true }, // stroke-width

    color: { type: String, reflect: true }, // fill
    colorOpacity: { attribute: 'color-opacity', type: String, reflect: true }, // fill-opacity
    // colorRule: { attribute: 'color-rule', type: String, reflect: true }, // fill-rule

    // Use with dasharray
    pathLength: { attribute: 'path-length', type: Number, reflect: true },

    // N/A attributes on rectangle based on MDN docs
    //  equivalent css page says they apply, css inheritance only?
    // stroke-linecap
    // fill-rule
  };

  render() {
    return html`
      <svg height=${this.svgHeight} width=${this.svgWidth}>
        ${createRectangle(this)}
      </svg>
    `;
  }
}
