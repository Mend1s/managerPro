import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListServicosComponent } from './list-servicos/list-servicos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-servicos',
    pathMatch: 'full'
  },
  {
    path: 'list-servicos',
    component: ListServicosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
