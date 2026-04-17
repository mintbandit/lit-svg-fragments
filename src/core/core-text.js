import { svg, nothing } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';

/**
 * Function to create an SVG text fragment
 *
 * @param {string|number} dx - Shifts position horizontally from previous text element.
 * @param {string|number} dy - Shifts position vertically from previous text element.
 * @param {string} fill - Color of text. Overruled by fill css rule on text element.
 * @param {string|number} fillOpacity - Opacity of text. Overruled by fill-opacity css rule on text element.
 * @param {string} fillRule - Presentation attribute to determine the inside part of the shape. Overruled by fill-rule css rule on text element.
 * @param {string} fontFamily - attribute indicates which font family will be used to render the text. Overruled by font-family css rule on text element.
 * @param {string} fontSize - Size of font. Overruled by font-size css rule on text element.
 * @param {string|number} fontSizeAdjust - Attribute allows authors to specify an aspect value for an element that will preserve the x-height of the first choice font in a substitute font. Overruled by font-size-adjust css rule on text element.
 * @param {string} fontStretch - Attribute indicates the desired amount of condensing or expansion in the glyphs used to render the text. Overruled by font-stretch css rule on text element.
 * @param {string} fontStyle - Text is to be rendered using a normal, italic, or oblique. Overruled by font-style css rule on text element.
 * @param {string} fontVariant - Attribute indicates whether the text is to be rendered using variations of the font's glyphs. Overruled by font-variant css rule on text element.
 * @param {string|number} fontWeight - boldness or lightness of the glyphs to render text. Overruled by font-weight css rule on text element.
 * @param {string} fontWidth - Experimental, attribute selects a normal, condensed, or expanded face from a font family for the glyphs used to render the text.
 * @param {string} lengthAdjust - How the text is stretched by textLength attribute.
 * @param {string|number} rotate - Rotate orientation of each individual glyph.
 * @param {string} stroke - Color of text border. Overruled by stroke css rule on text element.
 * @param {string} strokeDasharray - Dash array options of text border. Overruled by stroke-dasharray css rule on text element.
 * @param {string|number} strokeDashoffset - Dash offset options of text border. Overruled by stroke-dashoffset css rule on text element.
 * @param {string} strokeLinecap - Shape of the end of the text border. Overruled by stroke-linecap css rule on text element.
 * @param {string} strokeLinejoin - Shape of corners when they are stroked. Overruled by stroke-linejoin css rule on text element.
 * @param {number} strokeMiterlimit - Limit of ratio of miter length to stroke-width. Overruled by stroke-miterlimit css rule on text element.
 * @param {string|number} strokeOpacity - Opacity of text border. Overruled by stroke-opacity css rule on text element.
 * @param {string|number} strokeWidth - Width of the text border. Overruled by stroke-width css rule on text element.
 * @param {string} textAnchor - Alignment of text in relation to x + y attributes.
 * @param {string} textDecoration - Text decorated with underline, overline and/or strike-through.
 * @param {string|number} textLength - Width text should be scaled to fit.
 * @param {string} textRendering - Tradeoffs when rendering text.
 * @param {string|number} x - X coordinate for starting point of text. Equivalent of left css relative to top left of canvas
 * @param {string|number} y - Y coordinate for starting point of text. Equivalent of top css relative to top left of canvas
 *
 * @param {array<TemplateResult<2>>|nothing} innerHtmlFragments - Array of lit fragments that are child elements of text. Default nothing.
 * @returns {TemplateResult<2>}
 */
export const createText = (
  {
    dx,
    dy,
    fill,
    fillOpacity,
    fillRule,
    fontFamily,
    fontSize,
    fontSizeAdjust,
    fontStretch,
    fontStyle,
    fontVariant,
    fontWeight,
    fontWidth, // Experimental
    lengthAdjust,
    rotate,
    stroke,
    strokeDasharray,
    strokeDashoffset,
    strokeLinecap,
    strokeLinejoin,
    strokeMiterlimit,
    strokeOpacity,
    strokeWidth,
    textAnchor,
    textDecoration,
    textLength,
    textRendering,
    x,
    y,
  },
  innerHtmlFragments = nothing,
) => {
  return svg`
    <text
      dx=${ifDefined(dx)}
      dy=${ifDefined(dy)}
      fill=${ifDefined(fill)}
      fill-opacity=${ifDefined(fillOpacity)}
      fill-rule=${ifDefined(fillRule)}
      font-family=${ifDefined(fontFamily)}
      font-size=${ifDefined(fontSize)}
      font-size-adjust=${ifDefined(fontSizeAdjust)}
      font-stretch=${ifDefined(fontStretch)}
      font-style=${ifDefined(fontStyle)}
      font-weight=${ifDefined(fontWeight)}
      font-variant=${ifDefined(fontVariant)}
      font-width=${ifDefined(fontWeight)}
      lengthAdjust=${ifDefined(lengthAdjust)}
      rotate=${ifDefined(rotate)}
      stroke=${ifDefined(stroke)}
      stroke-dasharray=${ifDefined(strokeDasharray)}
      stroke-dashoffset=${ifDefined(strokeDashoffset)}
      stroke-linecap=${ifDefined(strokeLinecap)}
      stroke-linejoin=${ifDefined(strokeLinejoin)}
      stroke-miterlimit=${ifDefined(strokeMiterlimit)}
      stroke-opacity=${ifDefined(strokeOpacity)}
      stroke-width=${ifDefined(strokeWidth)}
      textLength=${ifDefined(textLength)}
      text-anchor=${ifDefined(textAnchor)} 
      text-decoration=${ifDefined(textDecoration)}     
      text-rendering=${ifDefined(textRendering)}
      x=${x}
      y=${y}
    >
      ${innerHtmlFragments}
    </text>
  `;
};

/**
 * Function to create an SVG textPath fragment
 *
 * @param {string} fill - Color of text. Overruled by fill css rule on textPath element.
 * @param {string|number} fillOpacity - Opacity of text. Overruled by fill-opacity css rule on textPath element.
 * @param {string} fillRule - Presentation attribute to determine the inside part of the shape. Overruled by fill-rule css rule on textPath element.
 * @param {string} fontFamily - attribute indicates which font family will be used to render the text. Overruled by font-family css rule on textPath element.
 * @param {string} fontSize - Size of font. Overruled by font-size css rule on textPath element.
 * @param {string|number} fontSizeAdjust - Attribute allows authors to specify an aspect value for an element that will preserve the x-height of the first choice font in a substitute font. Overruled by font-size-adjust css rule on textPath element.
 * @param {string} fontStretch - Attribute indicates the desired amount of condensing or expansion in the glyphs used to render the text. Overruled by font-stretch css rule on textPath element.
 * @param {string} fontStyle - Text is to be rendered using a normal, italic, or oblique. Overruled by font-style css rule on textPath element.
 * @param {string} fontVariant - Attribute indicates whether the text is to be rendered using variations of the font's glyphs. Overruled by font-variant css rule on textPath element.
 * @param {string|number} fontWeight - boldness or lightness of the glyphs to render text. Overruled by font-weight css rule on textPath element.
 * @param {string} fontWidth - Experimental, attribute selects a normal, condensed, or expanded face from a font family for the glyphs used to render the text.
 * @param {string} href - URL reference to Path element if path attribute not applied.
 * @param {string} lengthAdjust - How the text is stretched by textLength attribute.
 * @param {string} method - Method by which text should be rendered along textPath.
 * @param {string} path - Experimental, path text renders along.
 * @param {string} side - Experimental, which side of the path text should be rendered. Default left.
 * @param {string} spacing - How space between glyphs should be handled.
 * @param {string|number} startOffset - How far the beginning of the text should be offset from the beginning of the path.
 * @param {string} stroke - Color of text border. Overruled by stroke css rule on textPath element.
 * @param {string} strokeDasharray - Dash array options of text border. Overruled by stroke-dasharray css rule on textPath element.
 * @param {string|number} strokeDashoffset - Dash offset options of text border. Overruled by stroke-dashoffset css rule on textPath element.
 * @param {string} strokeLinecap - Shape of the end of the text border. Overruled by stroke-linecap css rule on textPath element.
 * @param {string} strokeLinejoin - Shape of corners when they are stroked. Overruled by stroke-linejoin css rule on textPath element.
 * @param {number} strokeMiterlimit - Limit of ratio of miter length to stroke-width. Overruled by stroke-miterlimit css rule on textPath element.
 * @param {string|number} strokeOpacity - Opacity of text border. Overruled by stroke-opacity css rule on textPath element.
 * @param {string|number} strokeWidth - Width of the text border. Overruled by stroke-width css rule on textPath element.
 * @param {string} textAnchor - Alignment of text.
 * @param {string} textDecoration - Text decorated with underline, overline and/or strike-through.
 * @param {string|number} textLength - Width text should be scaled to fit.
 *
 * @param {array<TemplateResult<2>>|nothing} innerHtmlFragments - Array of lit fragments that are child elements of textPath. Default nothing.
 * @returns {TemplateResult<2>}
 */
export const createTextPath = (
  {
    fill,
    fillOpacity,
    fillRule,
    fontFamily,
    fontSize,
    fontSizeAdjust,
    fontStretch,
    fontStyle,
    fontVariant,
    fontWeight,
    fontWidth, // Experimental
    href,
    lengthAdjust,
    method,
    path, // Experimental
    side, // Experimental
    spacing,
    startOffset,
    stroke,
    strokeDasharray,
    strokeDashoffset,
    strokeLinecap,
    strokeLinejoin,
    strokeMiterlimit,
    strokeOpacity,
    strokeWidth,
    textAnchor,
    textDecoration,
    textLength,
  },
  innerHtmlFragments = nothing,
) => {
  return svg`
    <textPath
      fill=${ifDefined(fill)}
      fill-opacity=${ifDefined(fillOpacity)}
      fill-rule=${ifDefined(fillRule)}
      font-family=${ifDefined(fontFamily)}
      font-size=${ifDefined(fontSize)}
      font-size-adjust=${ifDefined(fontSizeAdjust)}
      font-stretch=${ifDefined(fontStretch)}
      font-style=${ifDefined(fontStyle)}
      font-weight=${ifDefined(fontWeight)}
      font-variant=${ifDefined(fontVariant)}
      font-width=${ifDefined(fontWeight)}
      href=${ifDefined(href)}
      lengthAdjust=${ifDefined(lengthAdjust)}
      method=${ifDefined(method)}
      path=${ifDefined(path)}
      side=${ifDefined(side)}
      spacing=${ifDefined(spacing)}
      startOffset=${ifDefined(startOffset)}
      stroke=${ifDefined(stroke)}
      stroke-dasharray=${ifDefined(strokeDasharray)}
      stroke-dashoffset=${ifDefined(strokeDashoffset)}
      stroke-linecap=${ifDefined(strokeLinecap)}
      stroke-linejoin=${ifDefined(strokeLinejoin)}
      stroke-miterlimit=${ifDefined(strokeMiterlimit)}
      stroke-opacity=${ifDefined(strokeOpacity)}
      stroke-width=${ifDefined(strokeWidth)}
      textLength=${ifDefined(textLength)}
      text-anchor=${ifDefined(textAnchor)}
      text-decoration=${ifDefined(textDecoration)}
    >
      ${innerHtmlFragments}
    </textPath>
  `;
};

// TODO subtext within a <text>
/**
 * Function to create an SVG tspan fragment
 *
 * @param {string|number} dx - Shifts position horizontally from previous tspan element.
 * @param {string|number} dy - Shifts position vertically from previous tspan element.
 * @param {string} fill - Color of tspan. Overruled by fill css rule on tspan element.
 * @param {string|number} fillOpacity - Opacity of tspan. Overruled by fill-opacity css rule on tspan element.
 * @param {string} fillRule - Presentation attribute to determine the inside part of the shape. Overruled by fill-rule css rule on tspan element.
 * @param {string} fontFamily - attribute indicates which font family will be used to render the text. Overruled by font-family css rule on tspan element.
 * @param {string} fontSize - Size of font. Overruled by font-size css rule on tspan element.
 * @param {string|number} fontSizeAdjust - Attribute allows authors to specify an aspect value for an element that will preserve the x-height of the first choice font in a substitute font. Overruled by font-size-adjust css rule on tspan element.
 * @param {string} fontStretch - Attribute indicates the desired amount of condensing or expansion in the glyphs used to render the text. Overruled by font-stretch css rule on tspan element.
 * @param {string} fontStyle - Text is to be rendered using a normal, italic, or oblique. Overruled by font-style css rule on tspan element.
 * @param {string} fontVariant - Attribute indicates whether the text is to be rendered using variations of the font's glyphs. Overruled by font-variant css rule on tspan element.
 * @param {string|number} fontWeight - boldness or lightness of the glyphs to render text. Overruled by font-weight css rule on tspan element.
 * @param {string} fontWidth - Experimental, attribute selects a normal, condensed, or expanded face from a font family for the glyphs used to render the text.
 * @param {string} lengthAdjust - How the text is stretched by textLength attribute.
 * @param {string|number} rotate - Rotate orientation of each individual glyph.
 * @param {string} stroke - Color of text border. Overruled by stroke css rule on tspan element.
 * @param {string} strokeDasharray - Dash array options of text border. Overruled by stroke-dasharray css rule on tspan element.
 * @param {string|number} strokeDashoffset - Dash offset options of text border. Overruled by stroke-dashoffset css rule on tspan element.
 * @param {string} strokeLinecap - Shape of the end of the text border. Overruled by stroke-linecap css rule on tspan element.
 * @param {string} strokeLinejoin - Shape of corners when they are stroked. Overruled by stroke-linejoin css rule on tspan element.
 * @param {number} strokeMiterlimit - Limit of ratio of miter length to stroke-width. Overruled by stroke-miterlimit css rule on tspan element.
 * @param {string|number} strokeOpacity - Opacity of tspan. Overruled by stroke-opacity css rule on tspan element.
 * @param {string|number} strokeWidth - Width of the tspan. Overruled by stroke-width css rule on tspan element.
 * @param {string} textAnchor - Alignment of text.
 * @param {string} textDecoration - Text decorated with underline, overline and/or strike-through.
 * @param {string|number} textLength - Width text should be scaled to fit.
 * @param {string|number} x - X coordinate for starting point of tspan. Equivalent of left css relative to top left of canvas
 * @param {string|number} y - Y coordinate for starting point of tspan. Equivalent of top css relative to top left of canvas
 *
 * @param {array<TemplateResult<2>>|nothing} innerHtmlFragments - Array of lit fragments that are child elements of tspan. Default nothing.
 * @returns {TemplateResult<2>}
 */
export const createTspan = (
  {
    dx,
    dy,
    fill,
    fillOpacity,
    fillRule,
    fontFamily,
    fontSize,
    fontSizeAdjust,
    fontStretch,
    fontStyle,
    fontVariant,
    fontWeight,
    fontWidth, // Experimental
    lengthAdjust,
    rotate,
    stroke,
    strokeDasharray,
    strokeDashoffset,
    strokeLinecap,
    strokeLinejoin,
    strokeMiterlimit,
    strokeOpacity,
    strokeWidth,
    textAnchor,
    textDecoration,
    textLength,
    x,
    y,
  },
  innerHtmlFragments = nothing,
) => {
  return svg`
    <tspan
      dx=${ifDefined(dx)}
      dy=${ifDefined(dy)}
      fill=${ifDefined(fill)}
      fill-opacity=${ifDefined(fillOpacity)}
      fill-rule=${ifDefined(fillRule)}
      font-family=${ifDefined(fontFamily)}
      font-size=${ifDefined(fontSize)}
      font-size-adjust=${ifDefined(fontSizeAdjust)}
      font-stretch=${ifDefined(fontStretch)}
      font-style=${ifDefined(fontStyle)}
      font-weight=${ifDefined(fontWeight)}
      font-variant=${ifDefined(fontVariant)}
      font-width=${ifDefined(fontWeight)}
      lengthAdjust=${ifDefined(lengthAdjust)}
      rotate=${ifDefined(rotate)}
      stroke=${ifDefined(stroke)}
      stroke-dasharray=${ifDefined(strokeDasharray)}
      stroke-dashoffset=${ifDefined(strokeDashoffset)}
      stroke-linecap=${ifDefined(strokeLinecap)}
      stroke-linejoin=${ifDefined(strokeLinejoin)}
      stroke-miterlimit=${ifDefined(strokeMiterlimit)}
      stroke-opacity=${ifDefined(strokeOpacity)}
      stroke-width=${ifDefined(strokeWidth)}
      textLength=${ifDefined(textLength)}
      text-anchor=${ifDefined(textAnchor)}
      text-decoration=${ifDefined(textDecoration)}
      x=${x}
      y=${y}
    >
      ${innerHtmlFragments}
    </tspan>
  `;
};
