export interface TvShow {
  id: number,
  genres: string[],
  image: {
    medium: string,
    original?: string,
  },
  name: string,
  summary?: string,
  rating?: {
    average: number
  },
  language?: string,
  officialSite?: string,
  links: {
    self: string,
    previousepisode: string,
  }
}

export interface Response {
  score: number,
  show: TvShow,
}

export interface ShowEpisode {
  id: number,
  url: string,
  name: string,
  season: 1,
  number: 5,
  type: string,
  airdate: string,
  // runtime: 20,
  // rating: { "average": null },
  image: string,
  summary: string,
  _links: {
    self: { href: string },
    show: { href: string }
  }
}
