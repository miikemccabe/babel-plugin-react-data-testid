const MySimpleComponent = <div>Hello</div>;

const MyComponent = <div><h1>Hello</h1></div>;

const MyFunctionComponent = () => <div>Hello</div>;

const MyFunctionComponentWithReturn = () => {
  return <div>Hello</div>;
}

const ExistingDataTest = () => {
  return <div data-testid="original">Hello</div>;
}

/**
 * Shouldn't touch JSX encased in a fragment
 */
const MyFragment = <>Hello</>;
const englishDescription = {
  heading: 'Size Guide',
  subheading: (
    <>
      Please note this is for reference only. <br />
      Please refer to the product description for a more accurate size guidance.
    </>
  )
};
