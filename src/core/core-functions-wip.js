import { svg, nothing } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';

// TODO svg elements have a lot of attributes that can be applied
//  Currently lit-html does not support a spread function for
//  dynamic attributes in templates.
//  https://github.com/lit/lit/issues/923
//  This issue refers to @open-wc/lit-helpers as possible solution.
//  https://github.com/open-wc/open-wc/blob/master/packages/lit-helpers/CHANGELOG.md
//  See 0.5.0 changes, covers spreadEvents as well
//  Would likely need to stick with native names in this file.
//  Re-mapping would only be possible components

// TODO for lit-helpers spread to work
//  Keys must match the native attribute name
//   -> Agree with position of not converting 'camelCase' -> 'camel-case'
//   -> Would break the few attributes which are required to be defined in camelCase e.g. pathLength
//  Therefore mapping would need to be done upstream or here to construct/control object passed into helper
//   - 'key' : val -> maps to attribute
//   - '?key' : val -> maps to boolean attribute
//   - '.key' : val -> maps to property, native attributes won't react to this. Ok on another Lit Element webcomponent that has reflect enabled
//   - '@key ': val -> adds event-listener. Not useful at this time but would be in the future. No effect on rendering.
//  SpreadEvents might be the only useful helper

// TODO long term function structure proposal
//  -> svgFragmentFunction( <object> attributeValues, <array> childElements, <object> eventMap)
//     - attributeValues -> values to be applied to each attribute on each svg element (Done)
//     - childElement -> Many svg elements require innerHtml or text to function, e.g. <text> and animating elements (working)
//     - eventMap -> Use the spreadEvent lit-helper to add event listeners (Advanced usage)
//  Not considered yet -> adding classnames

// TODO list of attributes for SVGs
//  https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute
//  Not all are applicable to every element

// TODO May need list all of them in javadocs or CEM for storybook demo.
//  Only a subset will be documented initially.

// Attributes evaluated
//  - style -> All elements, if using this what is the point of the other attributes?
