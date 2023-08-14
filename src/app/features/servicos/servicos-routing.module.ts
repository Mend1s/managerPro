import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListServicosComponent } from './list-servicos/list-servicos.component';
import { NewServicoComponent } from './new-servico/new-servico.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-servicos',
    pathMatch: 'full'
  },
  {
    path: 'list-servicos',
    component: ListServicosComponent
  },
  {
    path: 'new-servicos',
    component: NewServicoComponent
  },
  {
    path: 'edit-servicos/:id',
    component: NewServicoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
