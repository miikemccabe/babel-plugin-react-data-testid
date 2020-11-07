const kebabize = (str) => {
  return str
    .split("")
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
        : letter;
    })
    .join("");
};

const DEFAULTS = {
  attributeName: "data-testid",
};

export default function reactDataTestId({ types: t }) {
  return {
    name: "react-data-testid",
    visitor: {
      ExportDefaultDeclaration(path, state) {
        const attributeName =
          state.opts.attributeName || DEFAULTS.attributeName;
        const theExport = path.get("declaration.right.body");
        if (theExport.isJSXElement() && !theExport.isJSXFragment()) {
          let componentName = path.get("declaration.left.name").node;
          componentName = kebabize(componentName);
          let added = false;
          // Either concatenate with an existing data-test attribute or add a new one
          theExport.node.openingElement.attributes = theExport.node.openingElement.attributes.map(
            (attr) => {
              if (attr.name && attr.name.name === attributeName) {
                added = true;
                return t.JSXAttribute(
                  t.JSXIdentifier(attributeName),
                  t.StringLiteral(`${componentName} ${attr.value.value}`)
                );
              } else {
                return attr;
              }
            }
          );
          if (!added) {
            theExport.node.openingElement.attributes.unshift(
              t.JSXAttribute(
                t.JSXIdentifier(attributeName),
                t.StringLiteral(componentName)
              )
            );
          }
        }
      }
    },
  };
}
