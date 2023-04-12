import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './list/list.component';
import { RootComponent } from './root/root.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { ProfileComponent } from './profile/profile.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { DetagPipe } from './pipes/detag.pipe';

@NgModule({
  declarations: [
    ListComponent,
    RootComponent,
    NotFoundComponent,
    DetailComponent,
    ProfileComponent,
    EllipsisPipe,
    DetagPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
