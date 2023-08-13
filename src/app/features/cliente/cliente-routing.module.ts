import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientComponent } from './list-client/list-client.component';
import { NewClientComponent } from 'src/app/components/new-client/new-client.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-client',
    pathMatch: 'full'
  },
  {
    path: 'list-client',
    component: ListClientComponent
  },
  {
    path: 'new-client',
    component: NewClientComponent
  },
  {
    path: 'edit-client/:id',
    component: NewClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
