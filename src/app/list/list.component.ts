import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TvShow, Response } from '../models/tvshows';
import { Subject, of } from 'rxjs'
import { delay, debounceTime } from 'rxjs/operators'
import { UserDataService } from '../services/user-data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  constructor(private _http: HttpClient, public user: UserDataService) {
  }

  data: TvShow[] = [];
  text: string = '';
  subject: Subject<string> = new Subject();

  ngOnInit(): void {
    this.getData().subscribe((res) => {
      this.data = res.map(r => r.show);
    })

    this.subject
      .pipe(debounceTime(400))
      .subscribe((text: string) =>
        this.getData(text).subscribe(
          (res) => this.data = res.map(r => r.show))
      );
  }

  private getData(searchKey: string = 'naruto') {
    return this._http.get<Response[]>(`https://api.tvmaze.com/search/shows?q=${searchKey}`)
  }

  search() {
    this.subject.next(this.text);
  }
}
