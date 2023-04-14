import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TvShow, Response } from '../../../models/tvshows';
import { Subject, of } from 'rxjs'
import { delay, debounceTime, tap } from 'rxjs/operators'
import { UserDataService } from '../../../services/user-data.service';
import { ShowApiService } from '../../../services/show-api.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  data: TvShow[] = [];
  text: string = '';
  subject: Subject<string> = new Subject();

  constructor(
    public user: UserDataService,
    public shows: ShowApiService,
    private title: Title) { }


  ngOnInit(): void {
    this.shows.getShowsByKey().subscribe((res) => {
      this.data = res.map(r => r.show);
    })

    this.subject
      .pipe(
        debounceTime(400),
        tap((sk) => this.title.setTitle(`...${sk}...`))
      ).subscribe((text: string) =>
        this.shows.getShowsByKey(text).subscribe(
          (res) => {
            const r = res.map(r => r.show)
            this.data = r
            this.shows.cacheValues(r);
          })
      );
    this.title.setTitle("NeetFLUX - search")
  }

  search() {
    this.subject.next(this.text);
  }

}
