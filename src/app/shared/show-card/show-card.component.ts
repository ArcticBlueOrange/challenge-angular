import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, asNativeElements } from '@angular/core';
import { TvShow } from 'src/app/models/tvshows';
import { Observable, fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.sass']
})
export class ShowCardComponent implements OnInit, AfterViewInit {

  @Input() show?: TvShow;
  @Input() customId?: string;
  @ViewChild("showCard") element?: ElementRef;
  hovered: boolean = false;

  hovering(): void {
    // console.log(`hovering ${this.show?.name}`);
    this.hovered = true;
  }

  leaving(): void {
    // console.log(`leaving ${this.show?.name}`);
    this.hovered = false;
  }

  constructor() { }
  ngOnInit(): void { }
  ngAfterViewInit(): void {
    if (this.element) {
      fromEvent(this.element.nativeElement, "mouseenter")
        .subscribe((e) => this.hovering());
      fromEvent(this.element.nativeElement, "mouseleave")
        .subscribe((e) => this.leaving());
    }
  }

}
