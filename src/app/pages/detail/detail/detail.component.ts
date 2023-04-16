import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvShow } from '../../../models/tvshows';
import { UserDataService } from '../../../services/user-data.service';
import { ShowApiService } from '../../../services/show-api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  show?: TvShow;
  similarShows: TvShow[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private showApi: ShowApiService,
    public user: UserDataService,
    private router: Router,
    private title: Title) { }

  ngOnInit() {
    console.log(this.activatedRoute);
    const productId: string = this.activatedRoute.snapshot.params['id'];
    this.reloadData(productId);
  }


  loadSimilarShows(show: TvShow): void {
    if (show.genres.length > 0) {
      this.showApi.getCached().subscribe((res) => {
        this.similarShows = res.filter((s) => {
          return show.genres.every(g => s.genres.includes(g) && s.id != show.id)
        });
      });
    }
    // NOT IMPOLEMENT FOR NOW
    if (false && this.similarShows.length <= 15) {
      this.showApi.getShowsByKey(show.name, false).subscribe((simNames) => {
        this.similarShows = [...this.similarShows, ...simNames].filter((s, i, a) => {
          console.log("****")
          console.log(show)
          console.log(s)
          console.log(`${i} ${a.indexOf(s)}`)
          return a.indexOf(s) == i && s.id != show.id
        })
      })
    }
  }

  reloadData(productId: string) {
    console.log("Reloading page")
    this.showApi.getShowById(productId)
      .subscribe(
        res => {
          this.show = res;
          this.title.setTitle(this.show.name);
          this.loadSimilarShows(res);
        },
        err => {
          this.router.navigate(['/detail'])
        }
      );

  }
}
