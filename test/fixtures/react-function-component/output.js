import React from "react";
import { keyboardTrigger, PreventMouseFocus } from "utils/domUtils";
import * as styles from "./styles.scss";
const preventMouseFocus = new PreventMouseFocus();

const Link = ({
  additionalClasses = [],
  style,
  className,
  href,
  title,
  label,
  onClick,
  onMouseEnter,
  onMouseLeave,
  attributes,
  children,
}) => (
  <a
    data-testid="link"
    style={style}
    className={className || [styles.link, ...additionalClasses].join(" ")}
    href={href}
    title={title}
    onClick={
      onClick &&
      ((event) => {
        event.preventDefault();
        onClick(event);
      })
    }
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onKeyDown={keyboardTrigger(
      onClick,
      href,
      attributes && String(attributes.target)
    )}
    onMouseDown={preventMouseFocus.onMouseDown}
    onMouseUp={preventMouseFocus.onMouseUp}
    onFocus={preventMouseFocus.onFocus}
    {...attributes}
  >
    {label || children}
  </a>
);

export default Link;
