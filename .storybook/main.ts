import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  refs: {
    // 👇 Upper-case characters not supported in the refs key
    "chromatic-published-storybook": {
      // The title of your Storybook
      title: "Design System Sample",
      // The url provided by Chromatic when it was published
      url: "https://moppiiiiis-components.chromatic.com",
    },
  },
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
