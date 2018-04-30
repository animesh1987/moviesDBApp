export interface HeaderProps{
  genreSelected?: string,
  toggleType: Function
}

export interface Movie {
  name: string,
}

export interface State{
  genreSelected?: string,
  movies?: Movie[]
}