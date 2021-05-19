const element3Webgl = require("../dist/cjs/index");

module.exports = {
  input: "./draw.frag",
  output: [{ file: "./dist/build.js", format: "es" }],
  plugins: [element3Webgl.default()],
};
