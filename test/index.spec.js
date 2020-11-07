import path from "path";
import pluginTester from "babel-plugin-tester";

import reactDataTestId from "../src";

pluginTester({
  plugin: reactDataTestId,
  pluginName: "react-data-testid",
  filename: __filename,
  babelOptions: {
    babelrc: true,
    filename: __filename,
  },
  tests: [
    {
      title: `Doesn't change if there is no identifier`,
      code: `<div>Hello</div>;`,
    },
    {
      title: `Adds a data-testid with the value of the parent variable`,
      code: `const test = <div>Hello</div>;`,
      output: `const test = <div data-testid="test">Hello</div>;`,
    },
    {
      title: `Adds a data-testid for arrow functions with explicit return`,
      fixture: "__fixtures__/arrow-function/implicit-return.js",
      outputFixture: "__fixtures__/arrow-function/implicit-return.output.js",
    },
    {
      title: `Adds a data-testid for arrow functions with explicit return`,
      fixture: "__fixtures__/arrow-function/explicit-return.js",
      outputFixture: "__fixtures__/arrow-function/explicit-return.output.js",
    },
  ],
});
