import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, asNativeElements } from '@angular/core';
import { TvShow } from 'src/app/models/tvshows';
import { fromEvent, switchMap } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.sass']
})
export class ShowCardComponent implements OnInit, AfterViewInit {

  @Input() show?: TvShow;
  @Input() customId?: string;
  @ViewChild("showCard") element?: ElementRef;
  @Output() newId = new EventEmitter<string>();
  hovered: boolean = false;

  hovering(): void {
    this.hovered = true;
  }

  leaving(): void {
    this.hovered = false;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void { }
  ngAfterViewInit(): void {
    if (this.element) {
      fromEvent(this.element.nativeElement, "mouseenter")
        .subscribe((e) => this.hovering());
      fromEvent(this.element.nativeElement, "mouseleave")
        .subscribe((e) => this.leaving());
    }
  }

  itemClicked() {
    if (this.show) {
      console.log(typeof this.router.url)
      const _id = this.show.id;
      this.newId.emit(`${_id}`)
      this.router.navigate([`/detail/`, _id],)
    }
  }

}
