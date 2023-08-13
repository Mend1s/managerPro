import { DeleteDialogComponent } from './../../../shared/delete-dialog/delete-dialog.component';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../models/client';
import { ClienteService } from 'src/app/service/cliente.service';
import { Router } from '@angular/router';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { getLanguagePaginateList } from 'src/app/shared/paginate-translate';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useValue: getLanguagePaginateList() }]
})

export class ListClientComponent {

  clients!: Client[];
  displayedColumns: string[] = ['id', 'name', 'email', 'address', 'actions'];
  dataSource!: MatTableDataSource<Client>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private clientService: ClienteService,
    private router: Router,
    public dialog: MatDialog) { }


  ngOnInit() {
    this.loadListClients();
  }

  loadListClients() {
    this.clientService.getListClients().subscribe(data => {
      this.clients = data;
      this.dataSource = new MatTableDataSource(this.clients);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editClient(element: Client): void {
    this.router.navigate(['cliente', 'edit-client', element.id]);
  }

  createNewClient() {
    this.router.navigate(['cliente', 'new-client']);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: string): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: { id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadListClients();
      }
    })
  }
}
