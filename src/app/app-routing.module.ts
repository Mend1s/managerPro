import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cliente',
    loadChildren: () => import('./features/cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: 'servicos',
    loadChildren: () => import('./features/servicos/servicos.module').then(m => m.ServicosModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
