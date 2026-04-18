# lit-svg-fragments

## Overview

A repository which experiments with Scalar Vector Graphics (SVG) and Lit Element. 

This repository contains a storybook playground which some simple SVG shapes and controls to manipulate a sub-set of the
configurable attributes.

This storybook also includes an experiment JSON to SVG parser which can be used to construct more complex SVG images.

## Run Storybook

To run storybook:

1. Install all dependencies by executing `npm install`
2. Generate the `custom element manifest` by executing `npm run cem`
3. Launch Storybook by executing `npm run storybook`

> Note: Failing to generate the `custom element manifest` will result in storybook failing.

## Deployed Storybook

A deployed version of storybook is available [here](https://mintbandit.github.io/lit-svg-fragments/)