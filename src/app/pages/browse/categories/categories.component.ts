import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TvShow } from '../../../models/tvshows';
import { UserDataService } from '../../../services/user-data.service';
import { ShowApiService } from '../../../services/show-api.service';
import { delay, fromEvent, map, of, repeat, tap, timeInterval } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-genres',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

  shows: TvShow[] = [];
  genres: string[] = [];
  selectedGenres: string[] = [];
  checkAll: boolean = true;
  maxShown: number = 20;
  increment: number = 10;

  constructor(
    private user: UserDataService,
    public showsApi: ShowApiService,
    private title: Title) { }

  ngOnInit(): void {
    // get cached shows
    this.showsApi.getCached().subscribe(
      (res) => { this.shows = res; }
    )
    // extract genres
    this.genres = this.shows
      .map(s => s.genres)
      .flat()
      .filter((e, i, a) => a.indexOf(e) == i)
      .sort();
    this.title.setTitle("Browse");
  }

  filterShows(all: boolean = true): TvShow[] {
    if (this.selectedGenres.length == 0) {
      return this.shows;
    }
    if (all) {
      return this.shows.filter(
        (s) => this.selectedGenres.every(g => s.genres.includes(g)));
    }
    else {
      return this.shows.filter(
        (s) => this.selectedGenres.some(g => s.genres.includes(g)));
    }
  }

  getUserSelect(e: Event, i: number): void {
    const isChecked: boolean = (e.target as HTMLInputElement).checked;
    // RESET COUNTER
    this.maxShown = 20;
    if (isChecked) {
      this.selectedGenres = [
        ...this.selectedGenres, this.genres[i]];
    }
    else {
      const l = this.selectedGenres.length;
      const s = this.genres[i];
      const idx = this.selectedGenres.indexOf(s);
      this.selectedGenres = [
        ...this.selectedGenres.slice(0, idx),
        ...this.selectedGenres.slice(idx + 1, l)];
    }
  }

  showMore() {
    this.maxShown += this.increment;
  }

}
