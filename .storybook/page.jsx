import { Title, Description, Primary, Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

export const page = (markdown) => (
  <>
    <Title />
    <Description />
    <Primary />
    <Markdown>{markdown}</Markdown>
  </>
);
