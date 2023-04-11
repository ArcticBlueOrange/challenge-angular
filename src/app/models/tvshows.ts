export interface TvShow {
  id: number,
  genres: string[],
  image: {
    medium: string,
    original?:string,
  },
  name: string,
  summary?: string,
  rating?: {
    average: number
  }
}

export interface Response {
  score: number,
  show: TvShow,
}

