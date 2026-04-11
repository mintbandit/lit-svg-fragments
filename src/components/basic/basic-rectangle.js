import { html, LitElement, css } from 'lit';
import { createRectangle } from '../../core/core-shapes.js';

/**
 * A component that creates a basic SVG rectangle using the createRectangle
 * function from core-functions
 *
 * @tag basic-rectangle
 * @property {number} svgWidth - width of the SVG canvas
 * @property {number} svgHeight - height of the SVG canvas
 * @property {number} x - X coordinate of the top left corner of rectangle. Equivalent of left css relative to top left of canvas
 * @property {number} y - Y coordinate of the top left corner of rectangle. Equivalent of top css relative to top left of canvas
 * @property {number} width - Width of the rectangle.
 * @property {number} height - Height of the rectangle.
 * @property {number} rx - Radius of the horizontal corners of the rectangle.
 * @property {number} ry - Radius of the vertical corners of the rectangle.
 * @property {string} stroke - Color of the border of the rectangle. Overruled by stroke css rule on rectangle element.
 * @property {string} strokeDasharray - Dash array options of the border of the rectangle. Overruled by stroke-dasharray css rule on rectangle element.
 * @property {string} strokeDashoffset - Dash offset options of the border of the rectangle. Overruled by stroke-dashoffset css rule on rectangle element.
 * @property {string} strokeLinejoin - Shape of corners when they are stroked. Overruled by stroke-linejoin css rule on rectangle element.
 * @property {number} strokeMiterlimit - Limit of ratio of miter length to stroke-width. Overruled by stroke-miterlimit css rule on rectangle element.
 * @property {string} strokeOpacity - Opacity of the border of the rectangle. Overruled by stroke-opacity css rule on rectangle element.
 * @property {string} strokeWidth - Width of the border of the rectangle. Half this value will be added to height/width value increasing size of rectangle. Overruled by stroke-width css rule on rectangle element.
 * @property {string} fill - Color of rectangle. Overruled by fill css rule on rectangle element.
 * @property {string} fillOpacity - Opacity of rectangle. Overruled by fill-opacity css rule on rectangle element.
 * @property {number} pathLength - Relative length in units of border. Use with borderDasharray to influence styling of border.
 */
export default class BasicRectangle extends LitElement {
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
    x: { type: Number, reflect: true },
    y: { type: Number, reflect: true },
    width: { type: Number, reflect: true },
    height: { type: Number, reflect: true },
    rx: { type: Number, reflect: true },
    ry: { type: Number, reflect: true },

    // Style - css will overrule attributes
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/stroke
    stroke: { type: String, reflect: true },
    strokeDasharray: {
      attribute: 'stroke-dasharray',
      type: String,
      reflect: true,
    },
    strokeDashoffset: {
      attribute: 'stroke-dashoffset',
      type: String,
      reflect: true,
    },
    // strokeLinecap: { attribute: 'stroke-linecap', type: String, reflect: true },
    strokeLinejoin: {
      attribute: 'stroke-linejoin',
      type: String,
      reflect: true,
    },
    strokeMiterlimit: {
      attribute: 'stroke-miterlimit',
      type: Number,
      reflect: true,
    },
    strokeOpacity: { attribute: 'stroke-opacity', type: String, reflect: true },
    strokeWidth: { attribute: 'stroke-width', type: String, reflect: true },

    fill: { type: String, reflect: true },
    fillOpacity: { attribute: 'fill-opacity', type: String, reflect: true },
    // fillRule: { attribute: 'fill-rule', type: String, reflect: true },

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
