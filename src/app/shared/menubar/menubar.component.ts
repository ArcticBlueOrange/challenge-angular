import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.sass']
})
export class MenubarComponent implements OnInit {

  @ViewChild("navBar", { static: true }) navBar!: ElementRef<HTMLElement>;

  constructor(public user: UserDataService) { }
  ngOnInit(): void { }

}
