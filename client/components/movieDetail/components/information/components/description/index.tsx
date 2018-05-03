import * as React from "react";

interface Props {
  description: string
}

export const Description: React.SFC<Props> = (props) => {
  return (
    <p className="description">
      {props.description}
    </p>
  );
};
