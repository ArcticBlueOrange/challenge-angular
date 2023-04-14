import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { DetailModule } from './pages/detail/detail.module';
import { SearchModule } from './pages/search/search.module';
import { BrowseModule } from './pages/browse/browse.module';
import { ProfileModule } from './pages/profile/profile.module';

@NgModule({
  declarations: [
    RootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DetailModule,
    SearchModule,
    BrowseModule,
    ProfileModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
