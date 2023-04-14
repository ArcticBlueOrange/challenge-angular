import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    ListComponent,
  ]
})
export class SearchModule { }
