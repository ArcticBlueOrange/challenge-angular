import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  { path: 'shows', component: ListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'detail', component: NotFoundComponent },
  { path: '', redirectTo: '/shows', pathMatch: 'prefix' },
  { path: '**', redirectTo: '/shows', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
