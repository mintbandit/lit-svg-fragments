import { html, LitElement, css } from 'lit';
import { createLine } from '../../core/core-shapes.js';
import { createSVG } from '../../core/core-misc.js';

/**
 * A component that creates a basic SVG Line using the createLine
 * function from core-functions
 *
 * @tag basic-line
 * @property {number} svgWidth - width of the SVG canvas
 * @property {number} svgHeight - height of the SVG canvas
 * @property {number} x1 - starting X coordinate of the line. Equivalent of left css relative to top left of canvas
 * @property {number} x2 - ending X coordinate of the Line. Equivalent of left css relative to top left of canvas
 * @property {number} y1 - starting Y coordinate of the line. Equivalent of top css relative to top left of canvas
 * @property {number} y2 - ending T coordinate of the Line. Equivalent of top css relative to top left of canvas
 * @property {string} stroke - Color of the Line. Overruled by stroke css rule on Line element.
 * @property {string} strokeDasharray - Dash array options of the Line. Overruled by stroke-dasharray css rule on Line element.
 * @property {string} strokeDashoffset - Dash offset options of the Line. Overruled by stroke-dashoffset css rule on Line element.
 * @property {string} strokeLinecap - Shape of the end of the line. Overruled by stroke-linecap css rule on Line element.
 * @property {string} strokeOpacity - Opacity of the Line. Overruled by stroke-opacity css rule on ellipse element.
 * @property {string} strokeWidth - Width of the Line. Overruled by stroke-width css rule on Line element.
 * @property {number} pathLength - Relative length in units of the Line. Use with lineDasharray to influence styling of circumference.
 */
export default class BasicLine extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    svg {
      border: black 1px solid;
    }
  `;

  static properties = {
    // For controlling size of canvas
    svgWidth: { attribute: 'svg-width', type: Number, reflect: true },
    svgHeight: { attribute: 'svg-height', type: Number, reflect: true },

    // Dimensions
    // All 4 can be % values -> must be string to support in demo
    x1: { type: Number, reflect: true },
    x2: { type: Number, reflect: true },
    y1: { type: Number, reflect: true },
    y2: { type: Number, reflect: true },

    // Styling - css will overrule attributes
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
    strokeLinecap: { attribute: 'stroke-linecap', type: String, reflect: true },
    strokeOpacity: { attribute: 'stroke-opacity', type: String, reflect: true },
    strokeWidth: { attribute: 'stroke-width', type: String, reflect: true },

    // Use with dasharray
    pathLength: { attribute: 'path-length', type: Number, reflect: true },
  };

  render() {
    return html`
      ${createSVG({ height: this.svgHeight, width: this.svgWidth }, [
        createLine(this),
      ])}
    `;
  }
}
