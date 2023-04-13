import { Injectable } from '@angular/core';
import { TvShow, Response } from '../models/tvshows';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowApiService {

  lcShows: TvShow[] = [];
  fresh: boolean = false;

  constructor(private _http: HttpClient) {
  }

  public getShowById(id: string): Observable<TvShow> {
    return this._http.get<TvShow>(`https://api.tvmaze.com/shows/${id}`)
  }

  public getShowsByKey(searchKey: string = 'dragon ball') {
    let res = this._http.get<Response[]>(`https://api.tvmaze.com/search/shows?q=${searchKey}`)
    return res;
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
      // console.log("refreshing")
      const cache = localStorage.getItem('shows-cache');
      if (cache) {
        this.lcShows = JSON.parse(cache);
        this.fresh = true;
      }
    }
    return of(this.lcShows);
  }

}
