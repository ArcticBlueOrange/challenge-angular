import { Component, OnInit } from '@angular/core';
import { TvShow } from '../../../models/tvshows';
import { Subject } from 'rxjs'
import { debounceTime, tap } from 'rxjs/operators'
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
      this.data = res;
    })

    this.subject
      .pipe(
        debounceTime(450),
        tap((sk) => this.title.setTitle(`...${sk}...`))
      ).subscribe((text: string) =>
        this.shows.getShowsByKey(text).subscribe(
          (res) => {
            const r = res
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
