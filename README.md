# babel-plugin-react-data-test

A babel plugin for automatically including a data-test attribute on the parent
element of a rendered react component. The value is the name of the component.

## Example

```javascript
// This
const MyAwesomeComponent = () => {
  return <div>Hello, world!</div>;
}

// Becomes this
const MyAwesomeComponent = () => {
  return <div data-test="my-awesome-component">Hello, world!</div>;
}
```

## To use

Include the plugin in the plugins section of your .babelrc.

```json
{
  "plugins": [
    "babel-plugin-react-data-test"
  ]
}
```

If your project is written in Typescript you'll need to set the `jsx` option in
`tsconfig.json` to `preserve` and have babel take care of transpiling your react
code with `@babel/preset-react`.

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
