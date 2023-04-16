import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ListComponent } from './pages/search/list/list.component';
// import { NotFoundComponent } from './shared/not-found/not-found.component';
// import { DetailComponent } from './pages/detail/detail/detail.component';
// import { ProfileComponent } from './pages/profile/profile/profile.component';
// import { CategoriesComponent } from './pages/browse/categories/categories.component';

const routes: Routes = [
  { path: 'shows', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'detail', loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule) },
  { path: 'browse', loadChildren: () => import('./pages/browse/browse.module').then(m => m.BrowseModule) },
  { path: '', redirectTo: '/shows', pathMatch: 'prefix' },
  { path: '**', redirectTo: '/shows', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
