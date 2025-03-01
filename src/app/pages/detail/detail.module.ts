import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DetailRoutingModule
  ],
})
export class DetailModule { }
