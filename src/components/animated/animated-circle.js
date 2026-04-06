import { html, LitElement, css } from 'lit';
import { createAnimate, createCircle } from '../../core/core-functions.js';

/**
 * A component that creates an animated SVG circle using the createCircle
 * function from core-functions
 *
 * @tag animated-circle
 * @property {number} svgWidth - width of the SVG canvas
 * @property {number} svgHeight - height of the SVG canvas
 * @property {number} centerX - X coordinate for center of circle. Equivalent of left css relative to top left of canvas
 * @property {number} centerY - Y coordinate for center of circle. Equivalent of top css relative to top left of canvas
 * @property {number} radius - radius of circle.
 * @property {string} borderColor - Color of circumference of circle. Overruled by stroke css rule on circle element.
 * @property {string} borderDasharray - Dash array options of circumference of circle. Overruled by stroke-dasharray css rule on circle element.
 * @property {string} borderDashoffset - Dash offset options of circumference of circle. Overruled by stroke-dashoffset css rule on circle element.
 * @property {string} borderOpacity - Opacity of circumference of circle. Overruled by stroke-opacity css rule on circle element.
 * @property {string} borderWidth - Width of the circumference of circle. Half this value will be added to radius value increasing size of circle. Overruled by stroke-width css rule on circle element.
 * @property {string} color - Color of circle. Overruled by fill css rule on circle element.
 * @property {string} colorOpacity - Opacity of circle. Overruled by fill-opacity css rule on circle element.
 * @property {number} pathLength - Relative length in units of circumference. Use with borderDasharray to influence styling of circumference.
 *
 * @property {string} animateAccumulate - Add next animation onto previous one
 * @property {string} animateAdditive - Animation is an offset or delta
 * @property {string} animateAttributeName - CSS or attribute name to be animated
 * @property {string} animateAttributeType - Deprecated, namespace of target attribute
 * @property {string} animationBegin - When the animation becomes active
 * @property {string} animationBy - Relative offset value
 * @property {string} animationCalcMode - Interpolation mode for the animation
 * @property {string} animationDuration - Duration of animation. Required
 * @property {string} animationEnd - End value for animation
 * @property {string} animationFill - Freeze or remove the last animation frame
 * @property {number} animateTo - Final value of attribute being animated
 * @property {number} animateFrom - Starting value of attribute being animated
 * @property {string} animateKeyPoints - simple duration of the animation
 * @property {string} animateKeySplines - Set of Bézier curve control points
 * @property {string} animateKeyTimes - List of times to control animation
 * @property {string} animateMax - Maximum value of animation duration
 * @property {string} animateMin - Minimum value of animation duration
 * @property {string} animateRestart - Whether the animation can restart
 * @property {string} animateValues - List of values to be applied to attribute during animation
 * @property {number} animateRepeatCount - Number of times the animation repeats
 * @property {string} animateRepeatDuration - Total duration of animation
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
    // TODO for testing only
    //  Values likely to be auto-generated from radius
    svgWidth: { attribute: 'svg-width', type: Number, reflect: true },
    svgHeight: { attribute: 'svg-height', type: Number, reflect: true },

    // Dimensions
    // TODO all 3 can be % values -> must be string to support in demo
    centerX: { attribute: 'center-x', type: Number, reflect: true },
    centerY: { attribute: 'center-y', type: Number, reflect: true },
    radius: { type: Number, reflect: true },

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

    // N/A attributes on circle based on MDN docs
    //  equivalent css page says they apply, css inheritance only?
    // stroke-linecap
    // stroke-linejoin
    // stroke-miterlimit
    // fill-rule

    // animation options
    // accumulate
    animateAccumulate: {
      attribute: 'animate-accumulative',
      type: String,
      reflect: true,
    },
    // additive
    animateAdditive: {
      attribute: 'animate-additive',
      type: String,
      reflect: true,
    },
    // attributeName
    animateAttributeName: {
      attribute: 'animate-attribute-name',
      type: String,
      reflect: true,
    },
    // attributeType
    animateAttributeType: {
      attribute: 'animate-attribute-type',
      type: String,
      reflect: true,
    },
    // begin
    animateBegin: {
      attribute: 'animate-begin',
      type: String,
      reflect: true,
    },
    // by
    animateBy: {
      attribute: 'animate-by',
      type: String,
      reflect: true,
    },
    // calcMode
    animateCalcMode: {
      attribute: 'animate-calc-mode',
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
    animateTo: { attribute: 'animate-to', type: Number, reflect: true }, // to
    animateFrom: { attribute: 'animate-from', type: Number, reflect: true }, // from
    // keyPoints
    animateKeyPoints: {
      attribute: 'animate-key-points',
      type: String,
      reflect: true,
    },
    // keySplines
    animateKeySplines: {
      attribute: 'animate-key-splines',
      type: String,
      reflect: true,
    },
    // keyTimes
    animateKeyTimes: {
      attribute: 'animate-key-times',
      type: String,
      reflect: true,
    },
    // max
    animateMax: { attribute: 'animate-max', type: String, reflect: true },
    // min
    animateMin: { attribute: 'animate-min', type: String, reflect: true },
    // restart
    animateRestart: {
      attribute: 'animate-restart',
      type: String,
      reflect: true,
    },
    animateValues: { attribute: 'animate-values', type: String, reflect: true }, // values
    // repeatCount
    // TODO can be string for 'indefinite'
    animateRepeatCount: {
      attribute: 'animate-repeat-count',
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
      centerX,
      centerY,
      radius,
      borderColor,
      borderDasharray,
      borderDashoffset,
      borderOpacity,
      borderWidth,
      color,
      colorOpacity,
      pathLength,
    } = this;
    return html`
      <svg height=${this.svgHeight} width=${this.svgWidth}>
        ${createCircle(
          {
            centerX,
            centerY,
            radius,
            borderColor,
            borderDasharray,
            borderDashoffset,
            borderOpacity,
            borderWidth,
            color,
            colorOpacity,
            pathLength,
          },
          [createAnimate(this)],
        )}
      </svg>
    `;
  }
}
