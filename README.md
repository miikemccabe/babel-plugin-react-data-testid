# babel-plugin-react-data-testid

A babel plugin for automatically including a `data-testid` attribute on the parent
element of a rendered react component. The value is the name of the component.

## Example

#### Component
```jsx
export default MyAwesomeComponent = () => {
  return <div>Hello, world!</div>;
};
```

#### In use
```jsx
<App>
  <MyAwesomeCompent />
</App>
```

#### Rendered output
```html
<div data-testid="my-awesome-component">Hello, world!</div>
```

### Fragments

Components that are enclosed by a JSX Fragment are not affected because this can 
change CSS specificity.

## To use

Include the plugin in the plugins section of your .babelrc.

```json
{
  "plugins": [ "babel-plugin-react-data-testid" ]
}
```

If your project is written in Typescript you'll need to set the `jsx` option in
`tsconfig.json` to `preserve` and have babel take care of transpiling your react
code with `@babel/preset-react`.

To change the attribute to something other than `data-testid` you can pass the
`attributeName` option when you include the plugin:

```json
{
  "plugins": [
    [ "babel-plugin-react-data-testid", { "attributeName": "my-test-id" } ]
  ]
}
```

## To build

```bash
npm run build
```

## To test

```bash
npm test
```

# Contributing

Please contribute!
