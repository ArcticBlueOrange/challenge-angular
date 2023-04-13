import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.sass']
})
export class MenubarComponent implements OnInit {

  constructor(private user: UserDataService) { }

  ngOnInit(): void {
  }

}
