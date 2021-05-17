import compileFileToComponent from "./compileFileToComponent.js";
const fileRegex = /\.frag$/;

export default function webglLoader() {
  return {
    name: "element3-webgl",
    transform(rawCode, id) {
      if (fileRegex.test(id)) {
        const { code } = compileFileToComponent(rawCode, null);
        return { code };
      } else {
        return rawCode;
      }
    },
  };
}
