import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ListServicosComponent } from './list-servicos/list-servicos.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { NewServicoComponent } from './new-servico/new-servico.component';
import { DialogDeleteServiceComponent } from './dialog-delete-service/dialog-delete-service.component';


@NgModule({
  declarations: [
    ListServicosComponent,
    NewServicoComponent,
    DialogDeleteServiceComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ]
})
export class ServicosModule { }
