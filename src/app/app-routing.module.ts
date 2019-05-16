import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsComponent } from './components/animals/animals.component';
import { ManagersComponent } from './components/managers/managers.component';
import { IndexComponent } from './components/index/index.component';
import { AddAnimalsComponent } from './components/add-animals/add-animals.component';
import { AddManagersComponent } from './components/add-managers/add-managers.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'managers', component: ManagersComponent },
  { path: 'addAnimals', component: AddAnimalsComponent },
  { path: 'addManagers', component: AddManagersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
