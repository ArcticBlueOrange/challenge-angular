import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: 'shows', component: ListComponent },
  { path: 'profile', component: NotFoundComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'detail', redirectTo: '' },
  { path: '', redirectTo: '/shows', pathMatch: 'prefix' },
  { path: '**', redirectTo: '/shows', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
