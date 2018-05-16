export interface HeaderProps{
  genreSelected?: string,
  toggleType: Function,
  searchInputEnter: Function,
  onChangeInput: Function,
  onSearchClick: Function,
  searchInput?: string,
  isMovieSelected: boolean,
  movie: Movie | Object,
  reset?: Function
}

export interface Movie {
  id?: number,
  title?: string,
  tagline?: string,
  vote_average?: number,
  vote_count?: number,
  release_date?: string,
  poster_path?: string,
  overview?: string,
  budget?: number,
  revenue?: number,
  runtime?: number,
  genres?: string[]
}

export interface State {
  genreSelected?: string,
  movies: Movie[],
  searchInput?: string,
  movieSelected: any,
  isMovieSelected: boolean,
  sortBy: string
}