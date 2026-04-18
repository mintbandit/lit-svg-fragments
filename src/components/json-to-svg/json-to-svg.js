import { html, LitElement, css, nothing } from 'lit';
import { map } from 'lit-html/directives/map.js';
import {
  createCircle,
  createEllipse,
  createLine,
  createPolygon,
  createPolyline,
  createRectangle,
} from '../../core/core-shapes.js';
import { createGroup, createSVG } from '../../core/core-misc.js';
import {
  createAnimate,
  createAnimateMotion,
  createAnimateTransform,
} from '../../core/core-animation.js';
import {
  createDesc,
  createMetadata,
  createTitle,
} from '../../core/core-descriptive.js';
import {
  createText,
  createTextPath,
  createTspan,
} from '../../core/core-text.js';

/**
 * An experimental that component parses a JSON object to an SVG image.
 *
 * @tag json-to-svg
 * @property {object} json - JSON object detailing the structure of the SVG
 */
export default class JsonToSvg extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    svg {
      border: black 1px solid;
    }
  `;

  static properties = {
    json: { attribute: false, state: true },
  };

  // TODO both processChildren and jsonToSVG functions should be extracted from component
  //  Could be re-used.
  processChildren(children = []) {
    return map(children, child => html`${this.jsonToSVG(child)}`);
  }

  jsonToSVG(json) {
    // Might be text node
    if (typeof json === 'string') {
      return json;
    }

    const {
      // TODO assume missing at top level
      type = 'svg',
      attributes = {},
      children = [],
    } = json;
    let svgElement;

    switch (type) {
      // core-misc
      case 'svg':
        svgElement = createSVG;
        break;
      case 'g':
        svgElement = createGroup;
        break;
      // core-shapes
      case 'circle':
        svgElement = createCircle;
        break;
      case 'ellipse':
        svgElement = createEllipse;
        break;
      case 'line':
        svgElement = createLine;
        break;
      case 'polyline':
        svgElement = createPolyline;
        break;
      case 'polygon':
        svgElement = createPolygon;
        break;
      case 'rect':
        svgElement = createRectangle;
        break;
      // core-text
      case 'text':
        svgElement = createText;
        break;
      case 'tspan':
        svgElement = createTspan;
        break;
      case 'textPath':
        svgElement = createTextPath;
        break;
      // core-animation
      case 'animate':
        svgElement = createAnimate;
        break;
      case 'animateMotion':
        svgElement = createAnimateMotion;
        break;
      case 'animateTransform':
        svgElement = createAnimateTransform;
        break;
      // core-descriptive
      case 'desc':
        svgElement = createDesc;
        break;
      case 'metadata':
        svgElement = createMetadata;
        break;
      case 'title':
        svgElement = createTitle;
        break;
      // Invalid element
      default:
        return nothing;
    }

    return svgElement(attributes, this.processChildren(children));
  }

  render() {
    return this.jsonToSVG(this.json);
  }
}
