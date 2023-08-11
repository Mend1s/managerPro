import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../models/client';
import { ClienteService } from 'src/app/service/cliente.service';
@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})

export class ListClientComponent {

  clients!: Client[];
  displayedColumns: string[] = ['id', 'name', 'email', 'address'];
  dataSource!: MatTableDataSource<Client>;

  constructor(private clientService: ClienteService) { }

  ngOnInit() {
    this.loadListClients();
  }

  loadListClients() {
    this.clientService.getListClients().subscribe(data => {
      this.clients = data;
      this.dataSource = new MatTableDataSource(this.clients);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
