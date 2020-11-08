import { types as t } from "@babel/core";

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

function getNameFromDefaultDeclaration(declaration) {
  let name;
  if (declaration.isIdentifier()) {
    name = declaration.get("name").node;
  } else if (declaration.isAssignmentExpression()) {
    name = declaration.get("left.name").node;
  } else {
    throw new Error("Component name cannot be determined");
  }
  return name;
}

const jsxVisitor = {
  JSXElement(path) {
    if (path.parentPath.isJSXFragment()) return;
    let added = false;
    // Either concatenate with an existing data-test attribute or add a new one
    path.node.openingElement.attributes = path.node.openingElement.attributes.map(
      (attr) => {
        if (attr.name && attr.name.name === this.attributeName) {
          added = true;
          return t.JSXAttribute(
            t.JSXIdentifier(this.attributeName),
            t.StringLiteral(`${this.name} ${attr.value.value}`)
          );
        } else {
          return attr;
        }
      }
    );
    if (!added) {
      path.node.openingElement.attributes.unshift(
        t.JSXAttribute(
          t.JSXIdentifier(this.attributeName),
          t.StringLiteral(this.name)
        )
      );
    }
    path.stop();
  }
};

export default function reactDataTestId() {
  return {
    name: "react-data-testid",
    visitor: {
      ExportDefaultDeclaration(path, state) {
        const attributeName =
          state.opts.attributeName || DEFAULTS.attributeName;
        const declaration = path.get("declaration");
        const name = kebabize(getNameFromDefaultDeclaration(declaration));
        declaration.traverse(jsxVisitor, { name, attributeName });
      },
    },
  };
}
