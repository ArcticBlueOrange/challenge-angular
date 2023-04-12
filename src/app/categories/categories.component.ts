import { Component, OnInit } from '@angular/core';
import { TvShow } from '../models/tvshows';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

  shows: TvShow[] = [];
  categories: string[] = [];
  selectedCategories: string[] = [];
  checkAll: boolean = true;

  constructor(private user: UserDataService) { }

  ngOnInit(): void {
    // get cached shows
    const cached = localStorage.getItem('shows-cache');
    if (cached) {
      // console.log(cached)
      this.shows = JSON.parse(cached)
    }

    // extract categories
    this.categories = this.shows
      .map(s => s.genres)
      .flat()
      .filter((e, i, a) => a.indexOf(e) == i)
      .sort();
  }

  filterShows(all: boolean = true): TvShow[] {
    // shows movies that encompass all categories selected
    // return this.shows.filter((s) => s.genres.indexOf(category) > -1);
    if (this.selectedCategories.length == 0)
      return this.shows;
    if (all) {
      console.log("All Search")
      return this.shows.filter(
        (s) => this.selectedCategories.every(g => s.genres.includes(g))
      )
    }
    else {
      console.log("Any Search")
      return this.shows.filter(
        (s) => this.selectedCategories.some(g => s.genres.includes(g))
      )
    }
  }

  getUserSelect(e: Event, i: number): void {
    const isChecked: boolean = (e.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedCategories = [
        ...this.selectedCategories, this.categories[i]];
    }
    else {
      const l = this.selectedCategories.length;
      const s = this.categories[i];
      const idx = this.selectedCategories.indexOf(s);
      this.selectedCategories = [
        ...this.selectedCategories.slice(0, idx),
        ...this.selectedCategories.slice(idx + 1, l)];
    }
  }

}
