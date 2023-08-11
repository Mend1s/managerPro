import { ClienteService } from 'src/app/service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/features/cliente/models/client';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {

  id!: string;
  client!: Client;
  checkedClient!: boolean;

  constructor(
    private clientService: ClienteService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getIdByRoute();
    this.getClientbyId();
  }

  getIdByRoute() {
    this.id = this.activatedRoute.snapshot.url[1].path;
  }

  getClientbyId(){
    this.clientService.getClientById(this.id).subscribe(client => {
      this.client = client;
      this.checkedClient = true;
      console.log(this.client);
    })
  }

  saveForms(){
    console.log()
  }
}
