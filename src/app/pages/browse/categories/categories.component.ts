import { Component, OnInit } from '@angular/core';
import { TvShow } from '../../../models/tvshows';
import { UserDataService } from '../../../services/user-data.service';
import { ShowApiService } from '../../../services/show-api.service';
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
  maxShown: number = 30;
  increment: number = 10;

  constructor(
    private user: UserDataService,
    public showsApi: ShowApiService,
    private title: Title) { }

  ngOnInit(): void {
    // get cached shows - extract genres
    this.resetSelection();
    this.title.setTitle("Browse");
  }

  newSelection(g: string) {
    console.log("Adding to selections...");
    console.log(g)
    this.selectedGenres = [...this.selectedGenres, g]
    this.filterShows(this.selectedGenres)
    this.genres = this.filterGenres(false)
  }

  resetSelection() {
    console.log("Resetting selections")
    this.selectedGenres = [];
    this.showsApi.getCached().subscribe(
      (res) => { this.shows = res; }
    )
    this.genres = this.filterGenres()
  }

  // filterShows(genres: string[]): TvShow[] {
  filterShows(genres: string[]) {
    if (genres.includes('none')) {
      this.shows = this.shows.filter((s) => s.genres.length == 0);
      return;
    }
    else if (genres.length == 0)
      return;
    let newShows = this.shows.filter(
      (s) => this.selectedGenres.every(g => s.genres.includes(g)));
    // return newShows;
    this.shows = newShows
  }

  filterGenres(addNone: boolean = true) {
    let out = addNone ? ['none'] : [];
    return [...out, ...this.shows
      .map(s => s.genres)
      .flat()
      .filter((e, i, a) => a.indexOf(e) == i)
      .sort()];
  }

  // selectedGenres: string[] = [];
  // checkAll: boolean = true;
  // filterShows(all: boolean = true): TvShow[] {
  //   if (this.selectedGenres.length == 0) {
  //     return this.shows;
  //   }
  //   if (all) {
  //     return this.shows.filter(
  //       (s) => this.selectedGenres.every(g => s.genres.includes(g)));
  //   }
  //   else {
  //     return this.shows.filter(
  //       (s) => this.selectedGenres.some(g => s.genres.includes(g)));
  //   }
  // }

  // getUserSelect(e: Event, i: number): void {
  //   const isChecked: boolean = (e.target as HTMLInputElement).checked;
  //   // RESET COUNTER
  //   this.maxShown = 20;
  //   if (isChecked) {
  //     this.selectedGenres = [
  //       ...this.selectedGenres, this.genres[i]];
  //   }
  //   else {
  //     const l = this.selectedGenres.length;
  //     const s = this.genres[i];
  //     const idx = this.selectedGenres.indexOf(s);
  //     this.selectedGenres = [
  //       ...this.selectedGenres.slice(0, idx),
  //       ...this.selectedGenres.slice(idx + 1, l)];
  //   }
  // }

  // filterShows(all: boolean = true): TvShow[] {
  //   if (this.selectedGenres.length == 0) {
  //     return this.shows;
  //   }
  //   if (all) {
  //     return this.shows.filter(
  //       (s) => this.selectedGenres.every(g => s.genres.includes(g)));
  //   }
  //   else {
  //     return this.shows.filter(
  //       (s) => this.selectedGenres.some(g => s.genres.includes(g)));
  //   }
  // }

}
