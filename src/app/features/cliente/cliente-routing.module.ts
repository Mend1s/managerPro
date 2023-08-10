import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientComponent } from './list-client/list-client.component';

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
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
