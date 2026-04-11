import { svg } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';

// TODO will be a child element of another shape element
//  More than one child element can be used to animate multiple attributes
//  Can have child elements as well

// TODO align api with native naming.
//  Problem with 'fill' on exising demo components. Not the same.

/**
 * Function to create an SVG animate fragment
 *
 * @param {string} animationAccumulate - Add next animation onto previous one
 * @param {string} animationAdditive - Animation is an offset or delta
 * @param {string} animationAttributeName - CSS or attribute name to be animated
 * @param {string} animationAttributeType - Deprecated, namespace of target attribute
 * @param {string} animationBegin - When the animation becomes active
 * @param {string} animationBy - Relative offset value
 * @param {string} animationCalcMode - Interpolation mode for the animation
 * @param {string} animationDuration - Duration of animation. Required
 * @param {string} animationEnd - End value for animation
 * @param {string} animationFill - Freeze or remove the last animation frame
 * @param {number} animationFrom - Starting value of attribute being animated
 * @param {string} animationKeyPoints - simple duration of the animation
 * @param {string} animationKeySplines - Set of Bézier curve control points
 * @param {string} animationKeyTimes - List of times to control animation
 * @param {string} animationMax - Maximum value of animation duration
 * @param {string} animationMin - Minimum value of animation duration
 * @param {string|number} animationRepeatCount - Number of times the animation repeats
 * @param {string} animationRepeatDuration - Total duration of animation
 * @param {string} animationRestart - Whether the animation can restart
 * @param {number} animationTo - Final value of attribute being animated
 * @param {string} animationValues - List of values to be applied to attribute during animation
 * @returns {TemplateResult<2>}
 */
export const createAnimate = ({
  animationAccumulate,
  animationAdditive,
  animationAttributeName,
  animationAttributeType, // deprecated
  animationBegin,
  animationBy,
  animationCalcMode,
  animationDuration,
  animationEnd,
  animationFill,
  animationFrom,
  animationKeyPoints,
  animationKeyTimes,
  animationKeySplines,
  animationMax,
  animationMin,
  animationRepeatCount,
  animationRepeatDuration,
  animationRestart,
  animationTo,
  animationValues,
}) => {
  return svg`
    <animate
      accumulate=${ifDefined(animationAccumulate)}
      additive=${ifDefined(animationAdditive)}
      attributeName=${ifDefined(animationAttributeName)}
      attributeType=${ifDefined(animationAttributeType)}
      begin=${ifDefined(animationBegin)}
      by=${ifDefined(animationBy)}
      calcMode=${ifDefined(animationCalcMode)}
      dur=${ifDefined(animationDuration)}
      end=${ifDefined(animationEnd)}
      fill=${ifDefined(animationFill)}
      from=${ifDefined(animationFrom)}
      keyPoints=${ifDefined(animationKeyPoints)}
      keySplines=${ifDefined(animationKeySplines)}
      keyTimes=${ifDefined(animationKeyTimes)}
      max=${ifDefined(animationMax)}
      min=${ifDefined(animationMin)}
      repeatCount=${ifDefined(animationRepeatCount)}
      repeatDur=${ifDefined(animationRepeatDuration)}
      restart=${ifDefined(animationRestart)}
      to=${ifDefined(animationTo)}
      values=${ifDefined(animationValues)}      
    />
  `;
};

/**
 * Function to create an SVG animateMotion fragment
 *
 * @param {string} animationAccumulate - Add next animation onto previous one
 * @param {string} animationAdditive - Animation is an offset or delta
 * @param {string} animationBegin - When the animation becomes active
 * @param {string} animationBy - Relative offset value
 * @param {string} animationCalcMode - Interpolation mode for the animation
 * @param {string} animationDuration - Duration of animation. Required
 * @param {string} animationEnd - End value for animation
 * @param {string} animationFill - Freeze or remove the last animation frame
 * @param {number} animationFrom - Starting value of attribute being animated
 * @param {string} animationKeyPoints - simple duration of the animation
 * @param {string} animationKeySplines - Set of Bézier curve control points
 * @param {string} animationKeyTimes - List of times to control animation
 * @param {string} animationMax - Maximum value of animation duration
 * @param {string} animationMin - Minimum value of animation duration
 * @param {string} animationOrigin - Origin of motion for an animation. No effect on SVG.
 * @param {string} animationPath - Motion path, same as d property on <path>
 * @param {string|number} animationRepeatCount - Number of times the animation repeats
 * @param {string} animationRepeatDuration - Total duration of animation
 * @param {string} animationRestart - Whether the animation can restart
 * @param {string|number} animationRotate - How the animated element rotates as it moves
 * @param {number} animationTo - Final value of attribute being animated
 * @param {string} animationValues - List of values to be applied to attribute during animation
 * @returns {TemplateResult<2>}
 */
export const createAnimateMotion = ({
  animationAccumulate,
  animationAdditive,
  animationBegin,
  animationBy,
  animationCalcMode,
  animationDuration,
  animationEnd,
  animationFill,
  animationFrom,
  animationKeyPoints,
  animationKeyTimes,
  animationKeySplines,
  animationMax,
  animationMin,
  animationOrigin,
  animationPath,
  animationRepeatCount,
  animationRepeatDuration,
  animationRestart,
  animationRotate,
  animationTo,
  animationValues,
}) => {
  return svg`
    <animateMotion
      accumulate=${ifDefined(animationAccumulate)}
      additive=${ifDefined(animationAdditive)}
      begin=${ifDefined(animationBegin)}
      by=${ifDefined(animationBy)}
      calcMode=${ifDefined(animationCalcMode)}
      dur=${ifDefined(animationDuration)}
      end=${ifDefined(animationEnd)}
      fill=${ifDefined(animationFill)}
      from=${ifDefined(animationFrom)}
      keyPoints=${ifDefined(animationKeyPoints)}
      keySplines=${ifDefined(animationKeySplines)}
      keyTimes=${ifDefined(animationKeyTimes)}
      max=${ifDefined(animationMax)}
      min=${ifDefined(animationMin)}
      origin=${ifDefined(animationOrigin)}
      path=${ifDefined(animationPath)}
      repeatCount=${ifDefined(animationRepeatCount)}
      repeatDur=${ifDefined(animationRepeatDuration)}
      restart=${ifDefined(animationRestart)}
      rotate=${ifDefined(animationRotate)}
      to=${ifDefined(animationTo)}
      values=${ifDefined(animationValues)}
    />
  `;
};

/**
 * Function to create an SVG animateTransform fragment
 *
 * @param {string} animationAccumulate - Add next animation onto previous one
 * @param {string} animationAdditive - Animation is an offset or delta
 * @param {string} animationAttributeName - CSS or attribute name to be animated
 * @param {string} animationAttributeType - Deprecated, namespace of target attribute
 * @param {string} animationBegin - When the animation becomes active
 * @param {string} animationBy - Relative offset value
 * @param {string} animationCalcMode - Interpolation mode for the animation
 * @param {string} animationDuration - Duration of animation. Required
 * @param {string} animationEnd - End value for animation
 * @param {string} animationFill - Freeze or remove the last animation frame
 * @param {number} animationFrom - Starting value of attribute being animated
 * @param {string} animationKeyPoints - simple duration of the animation
 * @param {string} animationKeySplines - Set of Bézier curve control points
 * @param {string} animationKeyTimes - List of times to control animation
 * @param {string} animationMax - Maximum value of animation duration
 * @param {string} animationMin - Minimum value of animation duration
 * @param {string|number} animationRepeatCount - Number of times the animation repeats
 * @param {string} animationRepeatDuration - Total duration of animation
 * @param {string} animationRestart - Whether the animation can restart
 * @param {number} animationTo - Final value of attribute being animated
 * @param {string} animationType - type of transformation
 * @param {string} animationValues - List of values to be applied to attribute during animation
 * @returns {TemplateResult<2>}
 */
export const createAnimateTransform = ({
  animationAccumulate,
  animationAdditive,
  animationAttributeName,
  animationAttributeType, // deprecated
  animationBegin,
  animationBy,
  animationCalcMode,
  animationDuration,
  animationEnd,
  animationFill,
  animationFrom,
  animationKeyPoints,
  animationKeyTimes,
  animationKeySplines,
  animationMax,
  animationMin,
  animationRepeatCount,
  animationRepeatDuration,
  animationRestart,
  animationTo,
  animationType,
  animationValues,
}) => {
  return svg`
    <animateTransform
      accumulate=${ifDefined(animationAccumulate)}
      additive=${ifDefined(animationAdditive)}
      attributeName=${ifDefined(animationAttributeName)}
      attributeType=${ifDefined(animationAttributeType)}
      begin=${ifDefined(animationBegin)}
      by=${ifDefined(animationBy)}
      calcMode=${ifDefined(animationCalcMode)}
      dur=${ifDefined(animationDuration)}
      end=${ifDefined(animationEnd)}
      fill=${ifDefined(animationFill)}
      from=${ifDefined(animationFrom)}
      keyPoints=${ifDefined(animationKeyPoints)}
      keySplines=${ifDefined(animationKeySplines)}
      keyTimes=${ifDefined(animationKeyTimes)}
      max=${ifDefined(animationMax)}
      min=${ifDefined(animationMin)}
      repeatCount=${ifDefined(animationRepeatCount)}
      repeatDur=${ifDefined(animationRepeatDuration)}
      restart=${ifDefined(animationRestart)}
      to=${ifDefined(animationTo)}
      type=${ifDefined(animationType)}
      values=${ifDefined(animationValues)}
    />
  `;
};
