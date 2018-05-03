import * as React from "react";

interface Props {
  genre: string
}

export const ByGenre: React.SFC<Props> = (props) => {
  return (
    <span>Films by {props.genre} genre</span>
  );
};
