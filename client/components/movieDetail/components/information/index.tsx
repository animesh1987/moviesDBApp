import * as React from "react";
import { TitleAndRating } from './components/titleAndRating';
import { Tagline } from './components/tagline';
import { ReleaseAndRuntime } from './components/releaseAndRuntime';
import { Description } from './components/description';

interface Props {
  movie: any
}

export const MovieInformation: React.SFC<Props> = (props) => {

  const { movie } = props;
  return (
    <div className="layout-column">
      <TitleAndRating
        title={movie.title}
        rating={movie.vote_average} />

      <Tagline tagline={movie.tagline} />

      <ReleaseAndRuntime
        release_date={movie.release_date.substring(0,4)}
        runtime={movie.runtime} />

      <Description description={movie.overview} />
    </div>
  );
};