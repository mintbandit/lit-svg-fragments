import { html, LitElement, css } from 'lit';
import { createText } from '../../core/core-text.js';

/**
 * A component that creates a basic SVG text using the createText
 * function from core-text
 *
 * @tag basic-text
 * @property {number} svgWidth - width of the SVG canvas
 * @property {number} svgHeight - height of the SVG canvas
 * @property {string} displayText - Inner text to be displayed
 * @property {number} dx - Shifts position horizontally from previous text element.
 * @property {number} dy - Shifts position vertically from previous text element.
 * @property {number} x - X coordinate for starting point of text. Equivalent of left css relative to top left of canvas
 * @property {number} y - Y coordinate for starting point of text. Equivalent of top css relative to top left of canvas
 * @property {string} stroke - Color of text border. Overruled by stroke css rule on text element.
 * @property {string} strokeDasharray - Dash array options of text border. Overruled by stroke-dasharray css rule on text element.
 * @property {number} strokeDashoffset - Dash offset options of text border. Overruled by stroke-dashoffset css rule on text element.
 * @property {string} strokeLinecap - Shape of the end of the text border. Overruled by stroke-linecap css rule on text element.
 * @property {string} strokeLinejoin - Shape of corners when they are stroked. Overruled by stroke-linejoin css rule on text element.
 * @property {number} strokeMiterlimit - Limit of ratio of miter length to stroke-width. Overruled by stroke-miterlimit css rule on text element.
 * @property {number} strokeOpacity - Opacity of text border. Overruled by stroke-opacity css rule on text element.
 * @property {number} strokeWidth - Width of the text border. Overruled by stroke-width css rule on text element.
 * @property {string} fill - Color of text. Overruled by fill css rule on text element.
 * @property {number} fillOpacity - Opacity of text. Overruled by fill-opacity css rule on text element.
 * @property {string} fillRule - Presentation attribute to determine the inside part of the shape. Overruled by fill-rule css rule on text element.
 * @property {string} lengthAdjust - How the text is stretched by textLength attribute.
 * @property {number} rotate - Rotate orientation of each individual glyph.
 * @property {string} textAnchor - Alignment of text in relation to x + y attributes.
 * @property {string} textDecoration - Text decorated with underline, overline and/or strike-through.
 * @property {number} textLength - Width text should be scaled to fit.
 * @property {string} textRendering - Tradeoffs when rendering text.
 * @property {string} fontFamily - attribute indicates which font family will be used to render the text. Overruled by font-family css rule on text element.
 * @property {string} fontSize - Size of font. Overruled by font-size css rule on text element.
 * @property {number} fontSizeAdjust - Attribute allows authors to specify an aspect value for an element that will preserve the x-height of the first choice font in a substitute font. Overruled by font-size-adjust css rule on text element.
 * @property {string} fontStretch - Attribute indicates the desired amount of condensing or expansion in the glyphs used to render the text. Overruled by font-stretch css rule on text element.
 * @property {string} fontStyle - Text is to be rendered using a normal, italic, or oblique. Overruled by font-style css rule on text element.
 * @property {string} fontVariant - Attribute indicates whether the text is to be rendered using variations of the font's glyphs. Overruled by font-variant css rule on text element.
 * @property {string} fontWeight - boldness or lightness of the glyphs to render text. Overruled by font-weight css rule on text element.
 * @property {string} fontWidth - Experimental, attribute selects a normal, condensed, or expanded face from a font family for the glyphs used to render the text.
 */
export default class BasicText extends LitElement {
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
    svgWidth: { attribute: 'svg-width', type: Number, reflect: true },
    svgHeight: { attribute: 'svg-height', type: Number, reflect: true },
    displayText: { attribute: 'display-text', type: String, reflect: true },

    // Dimensions
    // TODO all 4 can be % values -> must be string to support in demo
    dx: { type: Number, reflect: true },
    dy: { type: Number, reflect: true },
    x: { type: Number, reflect: true },
    y: { type: Number, reflect: true },

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
      type: String,
      reflect: true,
    },
    strokeOpacity: { attribute: 'stroke-opacity', type: String, reflect: true },
    strokeWidth: { attribute: 'stroke-width', type: String, reflect: true },

    fill: { type: String, reflect: true },
    fillOpacity: { attribute: 'fill-opacity', type: String, reflect: true },
    fillRule: { attribute: 'fill-rule', type: String, reflect: true },

    lengthAdjust: { attribute: 'length-adjust', type: String, reflect: true },
    // Can be % -> must be string to support in demo
    rotate: { type: String, reflect: true },
    textAnchor: { attribute: 'text-anchor', type: String, reflect: true },
    textDecoration: {
      attribute: 'text-decoration',
      type: String,
      reflect: true,
    },
    // Can be % -> must be string to support in demo
    textLength: { attribute: 'text-length', type: Number, reflect: true },
    textRendering: { attribute: 'text-rendering', type: String, reflect: true },

    fontFamily: { attribute: 'font-family', type: String, reflect: true },
    fontSize: { attribute: 'font-size', type: String, reflect: true },
    fontSizeAdjust: {
      attribute: 'font-size-adjust',
      type: String,
      reflect: true,
    },
    // Can also be a string 'none' -> default value
    fontStretch: { attribute: 'font-stretch', type: Number, reflect: true },
    fontStyle: { attribute: 'font-style', type: String, reflect: true },
    fontVariant: { attribute: 'font-variant', type: String, reflect: true },
    // Can also be a number
    fontWeight: { attribute: 'font-weight', type: String, reflect: true },
    fontWidth: { attribute: 'font-width', type: String, reflect: true },
  };

  render() {
    return html`
      <svg height=${this.svgHeight} width=${this.svgWidth}>
        ${createText(this, this.displayText)}
      </svg>
    `;
  }
}
