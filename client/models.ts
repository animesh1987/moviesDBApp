export interface HeaderProps{
  genreSelected?: string,
  toggleType: Function,
  searchInputEnter: Function,
  searchInput?: string
}

export interface Movie {
  name: string,
}

export interface State{
  genreSelected?: string,
  movies?: Movie[],
  searchInput?: string
}