import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  // exports: [
  //   ProfileComponent,
  // ]
})
export class ProfileModule { }
