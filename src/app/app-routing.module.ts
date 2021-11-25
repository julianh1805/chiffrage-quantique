import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuanticCardComponent} from './quantic-card/quantic-card.component';
import {QuanticProjectComponent} from './quantic-project/quantic-project.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'generator'},
  { path: 'generator', component: QuanticCardComponent },
  { path: 'project', component: QuanticProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
