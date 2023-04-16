import { Injectable } from '@angular/core';
import { TvShow, Response } from '../models/tvshows';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowApiService {

  lastSearch: string = '';
  lcShows: TvShow[] = [];
  fresh: boolean = false;

  constructor(private _http: HttpClient) {
    this.lastSearch = localStorage.getItem('last-search') ?? 'dragon ball';
  }

  public getShowById(id: string): Observable<TvShow> {
    return this._http.get<TvShow>(`https://api.tvmaze.com/shows/${id}`)
  }

  // public getShowsByKey(searchKey: string = this.lastSearch): Observable<Response[]> {
  //   let res = this._http.get<Response[]>(`https://api.tvmaze.com/search/shows?q=${searchKey}`)
  //   this.lastSearch = searchKey;
  //   localStorage.setItem('last-search', searchKey);

  //   return res;
  // }

  public getShowsByKey(
    searchKey: string = this.lastSearch,
    cacheSearch = true,
  ): Observable<TvShow[]> {
    const res: Observable<TvShow[]> = this
      ._http.get<Response[]>(`https://api.tvmaze.com/search/shows?q=${searchKey}`)
      .pipe(map(responses => responses.map(resp => resp.show)));
    if (cacheSearch) {
      this.lastSearch = searchKey;
      localStorage.setItem('last-search', searchKey);
    }
    return res
  }

  public cacheValues(newShows: TvShow[]) {
    const lc = localStorage.getItem('shows-cache');
    let oldShows = [];
    if (lc) {
      oldShows = JSON.parse(lc);
    }
    const shows = [...newShows, ...oldShows.filter(
      (os: TvShow) => newShows.find(ns => ns.id == os.id) == undefined
    )];

    localStorage.setItem(
      'shows-cache',
      JSON.stringify(shows)
    );
    this.fresh = false;

  }

  public getCached(): Observable<TvShow[]> {
    if (!this.fresh) {
      const cache = localStorage.getItem('shows-cache');
      if (cache) {
        this.lcShows = JSON.parse(cache);
        this.fresh = true;
      }
    }
    return of(this.lcShows);
  }

}
