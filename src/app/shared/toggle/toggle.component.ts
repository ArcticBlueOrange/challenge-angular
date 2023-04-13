import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.sass']
})
export class ToggleComponent implements OnInit {

  @Input() checkedVar?: boolean;
  @Output() checkedVarChange = new EventEmitter<boolean>();
  @Input() textOn?: string;
  @Input() textOff?: string;

  ngOnInit(): void { }

  changeSelection() {
    this.checkedVar = !this.checkedVar;
    this.checkedVarChange.emit(this.checkedVar);
  }

}
