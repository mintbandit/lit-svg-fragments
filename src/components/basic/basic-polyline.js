import { html, LitElement, css } from 'lit';
import { createPolyline } from '../../core/core-shapes.js';

/**
 * A component that creates a basic SVG polyline using the createPolyline
 * function from core-functions
 *
 * @tag basic-polyline
 * @property {number} svgWidth - width of the SVG canvas
 * @property {number} svgHeight - height of the SVG canvas
 * @property {string} points - list of X,Y coordinates. Values relative to top left.
 * @property {string} stroke - Color of the border of the polyline. Overruled by stroke css rule on polyline element.
 * @property {string} strokeDasharray - Dash array options of the border of the polyline. Overruled by stroke-dasharray css rule on polyline element.
 * @property {string} strokeDashoffset - Dash offset options of the border of the polyline. Overruled by stroke-dashoffset css rule on polyline element.
 * @property {string} strokeLinecap - Shape of the end of the line. Overruled by stroke-linecap css rule on polyline element.
 * @property {string} strokeLinejoin - Shape of corners when they are stroked. Overruled by stroke-linejoin css rule on polyline element.
 * @property {number} strokeMiterlimit - Limit of ratio of miter length to stroke-width. Overruled by stroke-miterlimit css rule on polyline element.
 * @property {string} strokeOpacity - Opacity of the border of the polyline. Overruled by stroke-opacity css rule on polyline element.
 * @property {string} strokeWidth - Width of the border of the polyline. Overruled by stroke-width css rule on polyline element.
 * @property {string} fill - Color of polyline. Overruled by fill css rule on polyline element.
 * @property {string} fillOpacity - Opacity of polyline. Overruled by fill-opacity css rule on polyline element.
 * @property {string} fillRule - Presentation attribute to determine the inside part of the shape. Overruled by fill-rule css rule on polyline element
 * @property {number} pathLength - Relative length in units of border. Use with borderDasharray to influence styling of border.
 */
export default class BasicPolyline extends LitElement {
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
    points: { type: String, reflect: true },

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
    strokeLinecap: { attribute: 'stroke-linecap', type: String, reflect: true },
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
    fillRule: { attribute: 'fill-rule', type: String, reflect: true },

    // Use with dasharray
    pathLength: { attribute: 'path-length', type: Number, reflect: true },
  };

  render() {
    return html`
      <svg height=${this.svgHeight} width=${this.svgWidth}>
        ${createPolyline(this)}
      </svg>
    `;
  }
}
