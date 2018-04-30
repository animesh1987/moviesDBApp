import * as React from "react";
import './button.scss';

export const Button = ({...rest}) => {

  let classes: Array<string> = [];

  if (rest.isActive) {
    classes.push('active');
  }

  if (rest.isPrimary) {
    classes.push('primary');
  }

  if (rest.isPrimary) {
    classes.push('long');
  }

  return (
    <button
      className={classes.join(' ')}
      onClick={() => rest.onClick(rest.value)}
    >
      {rest.children}
    </button>
  )
};