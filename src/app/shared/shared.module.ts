import { Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCardComponent } from './show-card/show-card.component';
import { RouterModule } from '@angular/router';
import { EllipsisPipe } from '../pipes/ellipsis.pipe';
import { DetagPipe } from '../pipes/detag.pipe';
import { MenubarComponent } from './menubar/menubar.component';


@NgModule({
  declarations: [
    DetagPipe,
    EllipsisPipe,
    ShowCardComponent,
    MenubarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ShowCardComponent,
    MenubarComponent,
    DetagPipe,
  ]
})
export class SharedModule { }
