import { Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCardComponent } from './show-card/show-card.component';
import { RouterModule } from '@angular/router';
import { EllipsisPipe } from '../pipes/ellipsis.pipe';
import { DetagPipe } from '../pipes/detag.pipe';


@NgModule({
  declarations: [
    DetagPipe,
    EllipsisPipe,
    ShowCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ShowCardComponent
  ]
})
export class SharedModule { }
