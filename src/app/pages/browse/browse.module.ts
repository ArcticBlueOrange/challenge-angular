import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    SharedModule,
  ],
  // exports: [
  //   CategoriesComponent,
  // ]
})
export class BrowseModule { }
