const MySimpleComponent = <div data-test="my-simple-component">Hello</div>;
const MyComponent = (
  <div data-test="my-component">
    <h1>Hello</h1>
  </div>
);

const MyFunctionComponent = () => (
  <div data-test="my-function-component">Hello</div>
);

const MyFunctionComponentWithReturn = () => {
  return <div data-test="my-function-component-with-return">Hello</div>;
};

const ExistingDataTest = () => {
  return <div data-test="existing-data-test original">Hello</div>;
};
/**
 * Shouldn't touch JSX encased in a fragment
 */

const MyFragment = <>Hello</>;
const englishDescription = {
  heading: "Size Guide",
  subheading: (
    <>
      Please note this is for reference only. <br />
      Please refer to the product description for a more accurate size guidance.
    </>
  ),
};
