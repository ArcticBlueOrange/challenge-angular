import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShow } from '../models/tvshows';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent {

  show?: TvShow;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    public user: UserDataService) {
    console.log(activatedRoute);
  }

  ngOnInit() {
    const productId: string = this.activatedRoute.snapshot.params['id'];
    console.log(productId);
    this.http.get<TvShow>(`https://api.tvmaze.com/shows/${productId}`).subscribe(res => this.show = res);
  }

}
