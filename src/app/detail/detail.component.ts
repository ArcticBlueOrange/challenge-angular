import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShow } from '../models/tvshows';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../services/user-data.service';
import { ShowApiService } from '../services/show-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent {

  show?: TvShow;

  constructor(
    private activatedRoute: ActivatedRoute,
    private showApi: ShowApiService,
    public user: UserDataService) {
  }

  ngOnInit() {
    const productId: string = this.activatedRoute.snapshot.params['id'];
    this.showApi.getShowById(productId)
      .subscribe(res => this.show = res);
  }

}
