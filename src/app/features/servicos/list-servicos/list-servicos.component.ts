import { ServicoService } from './../../../service/servico.service';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Servicos } from '../models/servicos';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { getLanguagePaginateList } from 'src/app/shared/paginate-translate';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-servicos',
  templateUrl: './list-servicos.component.html',
  styleUrls: ['./list-servicos.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useValue: getLanguagePaginateList() }
  ]
})
export class ListServicosComponent {

  servicos!: Servicos[];
  displayedColumns: string[] = ['id', 'description', 'value', 'material', 'actions'];
  dataSource!: MatTableDataSource<Servicos>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private servicoService: ServicoService) {}

  ngOnInit(){
    this.loadListServices();
  }

  editServico(){

  }

  loadListServices() {
    this.servicoService.getListAllServices().subscribe(data => {
      this.servicos = data;
      this.dataSource = new MatTableDataSource(this.servicos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  createNewServicos(){}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: string): void {
    // const dialogRef = this.dialog.open(DeleteDialogComponent, {
    //   width: '400px',
    //   data: { id: id },
    //   enterAnimationDuration,
    //   exitAnimationDuration,
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.loadListClients();
    //   }
    // })
  }
}
