import { html, LitElement, css } from 'lit';
import { createCircle } from '../../core/core-functions.js';

/**
 * A component that creates a basic SVG circle using the createCircle
 * function from core-functions
 *
 * @tag basic-circle
 * @property {number} svgWidth - width of the SVG canvas
 * @property {number} svgHeight - height of the SVG canvas
 * @property {number} cx - X coordinate for center of circle. Equivalent of left css relative to top left of canvas
 * @property {number} cy - Y coordinate for center of circle. Equivalent of top css relative to top left of canvas
 * @property {number} r - radius of circle.
 * @property {string} stroke - Color of circumference of circle. Overruled by stroke css rule on circle element.
 * @property {string} strokeDasharray - Dash array options of circumference of circle. Overruled by stroke-dasharray css rule on circle element.
 * @property {string} strokeDashoffset - Dash offset options of circumference of circle. Overruled by stroke-dashoffset css rule on circle element.
 * @property {string} strokeOpacity - Opacity of circumference of circle. Overruled by stroke-opacity css rule on circle element.
 * @property {string} strokeWidth - Width of the circumference of circle. Half this value will be added to radius value increasing size of circle. Overruled by stroke-width css rule on circle element.
 * @property {string} fill - Color of circle. Overruled by fill css rule on circle element.
 * @property {string} fillOpacity - Opacity of circle. Overruled by fill-opacity css rule on circle element.
 * @property {number} pathLength - Relative length in units of circumference. Use with borderDasharray to influence styling of circumference.
 */
export default class BasicCircle extends LitElement {
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
    // TODO all 3 can be % values -> must be string to support in demo
    cx: { type: Number, reflect: true },
    cy: { type: Number, reflect: true },
    r: { type: Number, reflect: true },

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
    strokeOpacity: { attribute: 'stroke-opacity', type: String, reflect: true },
    strokeWidth: { attribute: 'stroke-width', type: String, reflect: true },

    fill: { type: String, reflect: true },
    fillOpacity: { attribute: 'fill-opacity', type: String, reflect: true },

    // Use with dasharray
    pathLength: { attribute: 'path-length', type: Number, reflect: true },

    // N/A attributes on circle based on MDN docs
    //  equivalent css page says they apply, css inheritance only?
    // stroke-linecap
    // stroke-linejoin
    // stroke-miterlimit
    // fill-rule
  };

  render() {
    return html`
      <svg height=${this.svgHeight} width=${this.svgWidth}>
        ${createCircle(this)}
      </svg>
    `;
  }
}
