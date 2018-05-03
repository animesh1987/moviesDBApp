import * as React from "react";

interface Props {
  title: string,
  rating: number
}

export const TitleAndRating: React.SFC<Props> = (props) => {
  return (
    <div className="layout-row layout-align-center">
      <span className="title">{props.title}</span>
      <span className="average">{props.rating}</span>
    </div>
  );
};
