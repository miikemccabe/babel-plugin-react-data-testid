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
      title: `Doesn't change if there is nothing exported`,
      code: `<div>Hello</div>;`,
      snapshot: true
    },
    {
      title: `Doesn't change if the parent is a fragment`,
      code: `export default test = <><div>Hello</div></>;`,
      snapshot: true
    },
    {
      title: `Adds a data-testid with the value of the default export variable name`,
      code: `export default test = <div>Hello</div>;`,
      snapshot: true
    },
    {
      title: `Concatonates the data-testid if one already exists`,
      code: `export default test = <div data-testid="original">Hello</div>;`,
      snapshot: true
    },
    {
      title: `The test id can be changed via config`,
      pluginOptions: {
        attributeName: "data-test",
      },
      code: `export default test = <div>Hello</div>;`,
      snapshot: true
    },
    {
      title: `Adds a data-testid for arrow functions with explicit return`,
      fixture: "__fixtures__/arrow-function/implicit-return.js",
      snapshot: true
    },
    {
      title: `Adds a data-testid for arrow functions with explicit return`,
      fixture: "__fixtures__/arrow-function/explicit-return.js",
      snapshot: true
    },
    {
      title: `Doesn't add attribute to a nested map`,
      fixture: "__fixtures__/arrow-function/with-nested-map.js",
      snapshot: true
    },
  ],
});
