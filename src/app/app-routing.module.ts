import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsComponent } from './components/animals/animals.component';
import { ManagersComponent } from './components/managers/managers.component';

const routes: Routes = [
  { path: 'animals', component: AnimalsComponent },
  { path: 'managers', component: ManagersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
