import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { NotFoundComponent } from 'src/app/shared/not-found/not-found.component';

const routes: Routes = [
  { path: ':id', component: DetailComponent , pathMatch: 'full'},
  { path: '', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
