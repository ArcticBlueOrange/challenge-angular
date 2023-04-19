import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-genre-selector',
  templateUrl: './genre-selector.component.html',
  styleUrls: ['./genre-selector.component.sass']
})
export class GenreSelectorComponent implements OnInit {

  @Input() genres: string[] = [];
  @Input() selectedGenres: string[] = [];
  @Output() newSelection = new EventEmitter();
  @Output() resetSelection = new EventEmitter<string>();
  ngOnInit(): void { }

  constructor() { }


  // ngAfterContentChecked() {
  //   this.cdref.detectChanges();
  // }
}
