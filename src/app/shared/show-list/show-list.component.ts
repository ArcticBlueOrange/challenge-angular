import { AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { delay, fromEvent, tap } from 'rxjs';
import { TvShow } from 'src/app/models/tvshows';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.sass']
})
export class ShowListComponent implements OnInit, AfterViewInit {
  @Input() shows: TvShow[] = [];
  @Input() maxShown: number = 20;
  @Input() increment: number = 10;
  @Input() noMessage: string = "No shows found :("
  @ViewChild("showMoreButton") showMoreButton?: ElementRef;
  @Output() showSelected = new EventEmitter<string>();
  shown: number;

  constructor() {
    console.log("resetting counter...")
    this.shown = this.maxShown;
  }

  ngOnInit(): void { }
  ngAfterViewInit(): void {
    if (this.showMoreButton) {
      // console.log("More button found")
      // NOT 100% sure how it works
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // element is in view
            const event = new Event('elementInView');
            entry.target.dispatchEvent(event);
          }
        });
      });
      observer.observe(this.showMoreButton.nativeElement);

      fromEvent(this.showMoreButton.nativeElement, "elementInView")
        .pipe(
          delay(500),
          tap(() => { if (this.showMoreButton) this.showMoreButton.nativeElement.innerHTML = '...' }),
          delay(1000),
          tap(() => { if (this.showMoreButton) this.showMoreButton.nativeElement.innerHTML = 'SHOW MORE' }),
        ).subscribe(() => {
          // console.log("More visibility triggered")
          this.showMore()
        }
        );
    }
  }

  showMore() {
    this.shown += this.increment;
  }

}
