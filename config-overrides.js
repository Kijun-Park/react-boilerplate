/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "src", "components"),
    "@atoms": path.resolve(__dirname, "src", "Atoms"),
    "@components": path.resolve(__dirname, "src", "components"),
    "@pages": path.resolve(__dirname, "src", "Page"),
    "@styles": path.resolve(__dirname, "src", "styles"),
    "@type": path.resolve(__dirname, "src", "Types"),
    "@redux": path.resolve(__dirname, "src", "Redux"),
  }),
);
