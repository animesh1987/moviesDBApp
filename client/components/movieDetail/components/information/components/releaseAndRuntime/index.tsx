import * as React from "react";

interface Props {
  release_date: string,
  runtime: number
}

export const ReleaseAndRuntime: React.SFC<Props> = (props) => {
  return (
    <div className="layout-row">
      <span className="date">{props.release_date.substring(0,4)}</span>
      <span className="length">{props.runtime} min</span>
    </div>
  );
};
