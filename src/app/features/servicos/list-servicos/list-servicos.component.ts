import { ServicoService } from './../../../service/servico.service';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Servicos } from '../models/servicos';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { getLanguagePaginateList } from 'src/app/shared/paginate-translate';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { DialogDeleteServiceComponent } from '../dialog-delete-service/dialog-delete-service.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(
    private servicoService: ServicoService,
    private router: Router,
    public dialog: MatDialog) {}

  ngOnInit(){
    this.loadListServices();
  }

  loadListServices() {
    this.servicoService.getListAllServices().subscribe(data => {
      this.servicos = data;
      this.dataSource = new MatTableDataSource(this.servicos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  editServico(element: Servicos): void {
    this.router.navigate(['servicos', 'edit-servicos', element.id]);
  }

  createNewServicos(){
    this.router.navigate(['servicos', 'new-servicos']);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: string): void {
    const dialogRef = this.dialog.open(DialogDeleteServiceComponent, {
      width: '400px',
      data: { id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadListServices();
      }
    })
  }
}
