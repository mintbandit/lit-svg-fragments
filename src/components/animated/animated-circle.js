import { html, LitElement, css } from 'lit';
import { createCircle } from '../../core/core-shapes.js';
import { createAnimate } from '../../core/core-animation.js';
import { createSVG } from '../../core/core-misc.js';

/**
 * A component that creates an animated SVG circle using the createCircle
 * function from core-functions
 *
 * @tag animated-circle
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
 *
 * @property {string} animationAccumulate - Add next animation onto previous one
 * @property {string} animationAdditive - Animation is an offset or delta
 * @property {string} animationAttributeName - CSS or attribute name to be animated
 * @property {string} animationAttributeType - Deprecated, namespace of target attribute
 * @property {string} animationBegin - When the animation becomes active
 * @property {string} animationBy - Relative offset value
 * @property {string} animationCalcMode - Interpolation mode for the animation
 * @property {string} animationDuration - Duration of animation. Required
 * @property {string} animationEnd - End value for animation
 * @property {string} animationFill - Freeze or remove the last animation frame
 * @property {number} animationTo - Final value of attribute being animated
 * @property {number} animationFrom - Starting value of attribute being animated
 * @property {string} animationKeyPoints - simple duration of the animation
 * @property {string} animationKeySplines - Set of Bézier curve control points
 * @property {string} animationKeyTimes - List of times to control animation
 * @property {string} animationMax - Maximum value of animation duration
 * @property {string} animationMin - Minimum value of animation duration
 * @property {string} animationRestart - Whether the animation can restart
 * @property {string} animationValues - List of values to be applied to attribute during animation
 * @property {number} animationRepeatCount - Number of times the animation repeats
 * @property {string} animationRepeatDuration - Total duration of animation
 */
export default class AnimatedCircle extends LitElement {
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
    // All 3 can be % values -> must be string to support in demo
    cx: { type: Number, reflect: true },
    cy: { type: Number, reflect: true },
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

    // Use with dasharray
    pathLength: { attribute: 'path-length', type: Number, reflect: true },

    // animation options
    // accumulate
    animationAccumulate: {
      attribute: 'animation-accumulative',
      type: String,
      reflect: true,
    },
    // additive
    animationAdditive: {
      attribute: 'animation-additive',
      type: String,
      reflect: true,
    },
    // attributeName
    animationAttributeName: {
      attribute: 'animation-attribute-name',
      type: String,
      reflect: true,
    },
    // attributeType
    animationAttributeType: {
      attribute: 'animation-attribute-type',
      type: String,
      reflect: true,
    },
    // begin
    animationBegin: {
      attribute: 'animation-begin',
      type: String,
      reflect: true,
    },
    // by
    animationBy: {
      attribute: 'animation-by',
      type: String,
      reflect: true,
    },
    // calcMode
    animationCalcMode: {
      attribute: 'animation-calc-mode',
      type: String,
      reflect: true,
    },
    // dur
    animationDuration: {
      attribute: 'animation-duration',
      type: String,
      reflect: true,
    },
    // end
    animationEnd: {
      attribute: 'animation-end',
      type: String,
      reflect: true,
    },
    // fill
    animationFill: {
      attribute: 'animation-fill',
      type: String,
      reflect: true,
    },
    animationTo: { attribute: 'animation-to', type: Number, reflect: true }, // to
    animationFrom: { attribute: 'animation-from', type: Number, reflect: true }, // from
    // keyPoints
    animationKeyPoints: {
      attribute: 'animation-key-points',
      type: String,
      reflect: true,
    },
    // keySplines
    animationKeySplines: {
      attribute: 'animation-key-splines',
      type: String,
      reflect: true,
    },
    // keyTimes
    animationKeyTimes: {
      attribute: 'animation-key-times',
      type: String,
      reflect: true,
    },
    // max
    animationMax: { attribute: 'animation-max', type: String, reflect: true },
    // min
    animationMin: { attribute: 'animation-min', type: String, reflect: true },
    // restart
    animationRestart: {
      attribute: 'animation-restart',
      type: String,
      reflect: true,
    },
    animationValues: {
      attribute: 'animation-values',
      type: String,
      reflect: true,
    }, // values
    // repeatCount
    // TODO can be string for 'indefinite'
    animationRepeatCount: {
      attribute: 'animation-repeat-count',
      type: Number,
      reflect: true,
    },
    // repeatDur
    animationRepeatDuration: {
      attribute: 'animation-repeat-duration',
      type: String,
      reflect: true,
    },
  };

  render() {
    const {
      cx,
      cy,
      r,
      stroke,
      strokeDasharray,
      strokeDashoffset,
      strokeOpacity,
      strokeWidth,
      fill,
      fillOpacity,
      pathLength,
    } = this;
    return html`
      ${createSVG({ height: this.svgHeight, width: this.svgWidth }, [
        createCircle(
          {
            cx,
            cy,
            r,
            stroke,
            strokeDasharray,
            strokeDashoffset,
            strokeOpacity,
            strokeWidth,
            fill,
            fillOpacity,
            pathLength,
          },
          [createAnimate(this)],
        ),
      ])}
    `;
  }
}
