import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../models/client';
import { ClienteService } from 'src/app/service/cliente.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})

export class ListClientComponent {

  clients!: Client[];
  displayedColumns: string[] = ['id', 'name', 'email', 'address', 'actions'];
  dataSource!: MatTableDataSource<Client>;

  constructor(
    private clientService: ClienteService,
    private router: Router) { }

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

  deleteClient(id: any): void {
    this.clientService.deleteClient(id).subscribe(data => {
      this.router.navigate(['cliente']);
      this.loadListClients();
    })
  }

// to-do - dialog
// implementar dialog com pergunta se quer deletar cliente
// passar no dialog o ID e chamar a função de delete caso a pessoa queira excluir
// caso nao queira, feche o dialog

// to do - tela
// criar forms reativo
// consumir post e put
// testar


  editClient(element: Client): void {
    this.router.navigate(['cliente', 'edit-client', element.id]);
  }

  createNewClient() {
    this.router.navigate(['cliente', 'new-client']);
  }
}
