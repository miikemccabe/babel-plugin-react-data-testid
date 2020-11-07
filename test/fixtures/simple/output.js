const MySimpleComponent = <div data-testid="my-simple-component">Hello</div>;
const MyComponent = (
  <div data-testid="my-component">
    <h1>Hello</h1>
  </div>
);

const MyFunctionComponent = () => (
  <div data-testid="my-function-component">Hello</div>
);

const MyFunctionComponentWithReturn = () => {
  return <div data-testid="my-function-component-with-return">Hello</div>;
};

const ExistingDataTest = () => {
  return <div data-testid="existing-data-test original">Hello</div>;
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
