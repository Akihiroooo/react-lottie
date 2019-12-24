import { configure } from "@storybook/react";

function loadStories() {
  require("../src/stories");
}

configure(loadStories, module);

// // automatically import all files ending in *.stories.js
// configure(require.context("../dist/stories", true, /\.js$/), module);
