import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCardComponent } from './show-card/show-card.component';
import { RouterModule } from '@angular/router';
import { EllipsisPipe } from '../pipes/ellipsis.pipe';
import { DetagPipe } from '../pipes/detag.pipe';
import { MenubarComponent } from './menubar/menubar.component';
import { ToggleComponent } from './toggle/toggle.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowListComponent } from './show-list/show-list.component';


@NgModule({
  declarations: [
    DetagPipe,
    EllipsisPipe,
    ShowCardComponent,
    MenubarComponent,
    ToggleComponent,
    NotFoundComponent,
    ShowListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    ShowCardComponent,
    MenubarComponent,
    ToggleComponent,
    DetagPipe,
    NotFoundComponent,
    ShowListComponent,
  ]
})
export class SharedModule { }
