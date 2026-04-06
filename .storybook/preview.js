import { setCustomElementsManifest } from '@storybook/web-components';
import customElementManifest from '../custom-elements.json';

setCustomElementsManifest(customElementManifest);

/** @type { import('@storybook/web-components-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    actions: {
      disable: true,
    },
    options: {
      storySort: {
        order: ['Basic Shapes', 'Animation'],
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
