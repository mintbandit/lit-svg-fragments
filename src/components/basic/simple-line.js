import { html, LitElement, css } from 'lit';
import { createLine } from '../../core/core-functions.js';

/**
 * A component that creates a simple SVG Line using the createLine
 * function from core-functions
 *
 * @tag simple-line
 * @property {number} svgWidth - width of the SVG canvas
 * @property {number} svgHeight - height of the SVG canvas
 * @property {number} xStart - starting X coordinate of the line. Equivalent of left css relative to top left of canvas
 * @property {number} xEnd - ending X coordinate of the Line. Equivalent of left css relative to top left of canvas
 * @property {number} yStart - starting Y coordinate of the line. Equivalent of top css relative to top left of canvas
 * @property {number} yEnd - ending T coordinate of the Line. Equivalent of top css relative to top left of canvas
 * @property {string} lineColor - Color of the Line. Overruled by stroke css rule on Line element.
 * @property {string} lineDasharray - Dash array options of the Line. Overruled by stroke-dasharray css rule on Line element.
 * @property {string} lineDashoffset - Dash offset options of the Line. Overruled by stroke-dashoffset css rule on Line element.
 * @property {string} lineCap - Shape of the end of the line. Overruled by stroke-linecap css rule on Line element.
 * @property {string} lineOpacity - Opacity of the Line. Overruled by stroke-opacity css rule on ellipse element.
 * @property {string} lineWidth - Width of the Line. Overruled by stroke-width css rule on Line element.
 * @property {number} pathLength - Relative length in units of the Line. Use with lineDasharray to influence styling of circumference.
 */
export default class SimpleLine extends LitElement {
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
    xStart: { attribute: 'x-start', type: Number, reflect: true },
    xEnd: { attribute: 'x-end', type: Number, reflect: true },
    yStart: { attribute: 'y-start', type: Number, reflect: true },
    yEnd: { attribute: 'y-end', type: Number, reflect: true },

    // Style - css will overrule attributes
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/stroke
    lineColor: { attribute: 'line-color', type: String, reflect: true }, // stroke
    lineDasharray: { attribute: 'line-dasharray', type: String, reflect: true }, // stroke-dasharray
    lineDashoffset: {
      // stroke-dashoffset
      attribute: 'line-dashoffset',
      type: String,
      reflect: true,
    },
    lineCap: { attribute: 'linecap', type: String, reflect: true }, // stroke-linecap
    // borderLinejoin: { attribute: 'border-linejoin', type: String, reflect: true }, // stroke-linejoin
    // borderMiterlimit: { attribute: 'border-miterlimit', type: String, reflect: true }, // stroke-miterlimit
    lineOpacity: { attribute: 'line-opacity', type: String, reflect: true }, // stroke-opacity
    lineWidth: { attribute: 'line-width', type: String, reflect: true }, // stroke-width

    // color: { type: String, reflect: true }, // fill
    // colorOpacity: { attribute: 'color-opacity', type: String, reflect: true }, // fill-opacity
    // colorRule: { attribute: 'color-rule', type: String, reflect: true }, // fill-rule

    // Use with dasharray
    pathLength: { attribute: 'path-length', type: Number, reflect: true },

    // N/A attributes on Line based on MDN docs
    //  equivalent css page says they apply, css inheritance only?
    // stroke-linejoin
    // stroke-miterlimit
    // fill
    // fill-opacity
    // fill-rule
  };

  render() {
    return html`
      <svg height=${this.svgHeight} width=${this.svgWidth}>
        ${createLine(this)}
      </svg>
    `;
  }
}
