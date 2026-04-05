import { html, LitElement, css } from 'lit';
import { createPolyline } from '../../core/core-functions.js';

/**
 * A component that creates a simple SVG polyline using the createPolyline
 * function from core-functions
 *
 * @tag simple-polyline
 * @property {number} svgWidth - width of the SVG canvas
 * @property {number} svgHeight - height of the SVG canvas
 * @property {string} points - list of X,Y coordinates. Values relative to top left.
 * @property {string} lineColor - Color of the border of the polyline. Overruled by stroke css rule on polyline element.
 * @property {string} lineDasharray - Dash array options of the border of the polyline. Overruled by stroke-dasharray css rule on polyline element.
 * @property {string} lineDashoffset - Dash offset options of the border of the polyline. Overruled by stroke-dashoffset css rule on polyline element.
 * @property {string} lineCap - Shape of the end of the line. Overruled by stroke-linecap css rule on polyline element.
 * @property {string} lineJoin - Shape of corners when they are stroked. Overruled by stroke-linejoin css rule on polyline element.
 * @property {number} lineMiterlimit - Limit of ratio of miter length to stroke-width. Overruled by stroke-miterlimit css rule on polyline element.
 * @property {string} lineOpacity - Opacity of the border of the polyline. Overruled by stroke-opacity css rule on polyline element.
 * @property {string} lineWidth - Width of the border of the polyline. Overruled by stroke-width css rule on polyline element.
 * @property {string} color - Color of polyline. Overruled by fill css rule on polyline element.
 * @property {string} colorOpacity - Opacity of polyline. Overruled by fill-opacity css rule on polyline element.
 * @property {string} colorRule - Presentation attribute to determine the inside part of the shape. Overruled by fill-rule css rule on polyline element
 * @property {number} pathLength - Relative length in units of border. Use with borderDasharray to influence styling of border.
 */
export default class SimplePolyline extends LitElement {
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
    lineColor: { attribute: 'line-color', type: String, reflect: true }, // stroke
    lineDasharray: {
      // stroke-dasharray
      attribute: 'line-dasharray',
      type: String,
      reflect: true,
    },
    lineDashoffset: {
      // stroke-dashoffset
      attribute: 'line-dashoffset',
      type: String,
      reflect: true,
    },
    lineCap: { attribute: 'linecap', type: String, reflect: true }, // stroke-linecap
    lineJoin: { attribute: 'linejoin', type: String, reflect: true }, // stroke-linejoin
    lineMiterlimit: {
      attribute: 'line-miterlimit',
      type: Number,
      reflect: true,
    }, // stroke-miterlimit
    lineOpacity: { attribute: 'line-opacity', type: String, reflect: true }, // stroke-opacity
    lineWidth: { attribute: 'line-width', type: String, reflect: true }, // stroke-width

    color: { type: String, reflect: true }, // fill
    colorOpacity: { attribute: 'color-opacity', type: String, reflect: true }, // fill-opacity
    colorRule: { attribute: 'color-rule', type: String, reflect: true }, // fill-rule

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
