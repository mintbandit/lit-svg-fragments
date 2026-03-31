import { html, LitElement, css } from 'lit';
import { createEllipse } from '../core/core-functions.js';

/**
 * A component that creates a simple SVG ellipse using the createEllipse
 * function from core-functions
 *
 * @tag simple-ellipse
 * @property {number} svgWidth - width of the SVG canvas
 * @property {number} svgHeight - height of the SVG canvas
 * @property {number} centerX - X coordinate for center of ellipse. Equivalent of left css relative to top left of canvas
 * @property {number} centerY - Y coordinate for center of ellipse. Equivalent of top css relative to top left of canvas
 * @property {number} radiusX - radius of ellipse of X axis.
 * @property {number} radiusY - radius of ellipse of Y axis.
 * @property {string} borderColor - Color of circumference of ellipse. Overruled by stroke css rule on ellipse element.
 * @property {string} borderDasharray - Dash array options of circumference of ellipse. Overruled by stroke-dasharray css rule on ellipse element.
 * @property {string} borderDashoffset - Dash offset options of circumference of ellipse. Overruled by stroke-dashoffset css rule on ellipse element.
 * @property {string} borderOpacity - Opacity of circumference of ellipse. Overruled by stroke-opacity css rule on ellipse element.
 * @property {string} borderWidth - Width of the circumference of ellipse. Half this value will be added to radius value increasing size of ellipse. Overruled by stroke-width css rule on ellipse element.
 * @property {string} color - Color of ellipse. Overruled by fill css rule on ellipse element.
 * @property {string} colorOpacity - Opacity of ellipse. Overruled by fill-opacity css rule on ellipse element.
 * @property {number} pathLength - Relative length in units of circumference. Use with borderDasharray to influence styling of circumference.
 */
export default class SimpleEllipse extends LitElement {
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
    // TODO all 4 can be % values -> must be string to support in demo
    centerX: { attribute: 'center-x', type: Number, reflect: true },
    centerY: { attribute: 'center-y', type: Number, reflect: true },
    // TODO will be auto by default
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
    borderOpacity: { attribute: 'border-opacity', type: String, reflect: true }, // stroke-opacity
    borderWidth: { attribute: 'border-width', type: String, reflect: true }, // stroke-width

    color: { type: String, reflect: true }, // fill
    colorOpacity: { attribute: 'color-opacity', type: String, reflect: true }, // fill-opacity

    // Use with dasharray
    pathLength: { attribute: 'path-length', type: Number, reflect: true },

    // N/A attributes on ellipse based on MDN docs
    //  equivalent css page says they apply, css inheritance only?
    // stroke-linecap
    // stroke-linejoin
    // stroke-miterlimit
    // fill-rule
  };

  render() {
    return html`
      <svg height=${this.svgHeight} width=${this.svgWidth}>
        ${createEllipse(this)}
      </svg>
    `;
  }
}
