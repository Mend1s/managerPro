import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { RegisterComponent } from './register/register.component';
import { ListClientComponent } from './list-client/list-client.component';


@NgModule({
  declarations: [
    RegisterComponent,
    ListClientComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
