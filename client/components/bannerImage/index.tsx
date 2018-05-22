import * as React from "react";
import './bannerImage.scss';

interface Props {
  imageUrl: string,
}

export const MovieBanner: React.SFC<Props> = (props) => {

  const style = {
    backgroundImage: `url(${props.imageUrl})`
  };
  return (
    <div className="banner-image" style={style}></div>
  )
};