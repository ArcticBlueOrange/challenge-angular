import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TvShow } from '../models/tvshows';
import { UserDataService } from '../services/user-data.service';
import { ShowApiService } from '../services/show-api.service';
import { delay, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-genres',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit, AfterViewInit {

  shows: TvShow[] = [];
  genres: string[] = [];
  selectedGenres: string[] = [];
  checkAll: boolean = true;
  maxShown: number = 10;
  increment: number = 10;
  @ViewChild("showMoreButton") showMoreButton?: ElementRef;

  constructor(
    private user: UserDataService,
    public showsApi: ShowApiService) { }

  ngAfterViewInit(): void {
    if (this.showMoreButton) {
      console.log("More button found")

      // NOT 100% sure how it works
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // element is in view
            // observer.unobserve(entry.target);
            // emit an event
            const event = new Event('elementInView');
            entry.target.dispatchEvent(event);
          }
        });
      });
      observer.observe(this.showMoreButton.nativeElement);

      fromEvent(this.showMoreButton.nativeElement, "elementInView")
        .pipe(
          delay(1000)
        )
        .subscribe(() => {
          // console.log("More visibility triggered")
          this.showMore()
        }
        );
    }
  }

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
    this.maxShown = 10;
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
