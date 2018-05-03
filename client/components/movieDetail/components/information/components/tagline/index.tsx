import * as React from "react";

interface Props {
  tagline: string,
}

export const Tagline: React.SFC<Props> = (props) => {
  return (
    <div className="tagline">{props.tagline}</div>
  );
};
