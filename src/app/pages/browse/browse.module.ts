import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GenreSelectorComponent } from './genre-selector/genre-selector.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    GenreSelectorComponent,
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    SharedModule,
  ],
})
export class BrowseModule { }
