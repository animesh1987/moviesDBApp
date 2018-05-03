import * as React from "react";
import './bannerImage.scss';

interface Props {
  imageUrl: string,
}

export const MovieBanner: React.SFC<Props> = (props) => {
  return (
    <img src={props.imageUrl} alt="Movie Banner"/>
  )
};