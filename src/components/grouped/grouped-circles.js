import { html, LitElement, css } from 'lit';
import { createCircle } from '../../core/core-shapes.js';
import { createGroup, createSVG } from '../../core/core-misc.js';

/**
 * A component that creates a three SVG circles inside a group element.
 *
 * @tag grouped-circles
 * @property {number} r - radius of all circles.
 * @property {string} stroke - Color of circumference of all circles. Overruled by stroke css rule or attribute on circle element.
 * @property {string} strokeDasharray - Dash array options of circumference of all circles. Overruled by stroke-dasharray css rule or attribute on circle element.
 * @property {string} strokeDashoffset - Dash offset options of circumference of all circles. Overruled by stroke-dashoffset css rule or attribute on circle element.
 * @property {string} strokeOpacity - Opacity of circumference of all circles. Overruled by stroke-opacity css rule or attribute on circle element.
 * @property {string} strokeWidth - Width of the circumference of all circles. Half this value will be added to radius value increasing size of circle. Overruled by stroke-width css rule or attribute on circle element.
 * @property {string} fill - Color of all circles. Overruled by fill css rule or attribute on circle element.
 * @property {string} fillOpacity - Opacity of all circles. Overruled by fill-opacity css rule or attribute on circle element.
 */
export default class GroupedCircles extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    svg {
      border: black 1px solid;
    }
  `;

  static properties = {
    r: { type: Number, reflect: true },

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
    strokeOpacity: { attribute: 'stroke-opacity', type: String, reflect: true },
    strokeWidth: { attribute: 'stroke-width', type: String, reflect: true },
    fill: { type: String, reflect: true },
    fillOpacity: { attribute: 'fill-opacity', type: String, reflect: true },
  };

  render() {
    const commonStyle = {
      r: this.r,
    };

    return html`
      ${createSVG({ height: 200, width: 200 }, [
        createGroup(this, [
          createCircle({ ...commonStyle, cx: 60, cy: 60 }),
          createCircle({ ...commonStyle, cx: 100, cy: 100 }),
          createCircle({ ...commonStyle, cx: 140, cy: 140 }),
        ]),
      ])}
    `;
  }
}
