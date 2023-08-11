import { ClienteService } from 'src/app/service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/features/cliente/models/client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {

  id!: string;
  client!: Client;
  checkedClient!: boolean;
  formsNewClient!: FormGroup;
  rota!: string;

  constructor(
    private clientService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.createdFormsClient();
    this.getIdByRoute();
    this.getClientbyId();
  }

  createdFormsClient(){
    this.formsNewClient = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  asEditorCreate(){
    this.rota = this.activatedRoute.snapshot.url[0].path;

    if (this.rota === 'edit-client') {
      this.getIdByRoute();
      this.getClientbyId();
    } else {

    }
  }

  getIdByRoute() {
    this.id = this.activatedRoute.snapshot.url[1].path;
  }

  getClientbyId(){
    this.clientService.getClientById(this.id).subscribe(client => {
      this.client = client;
      this.formsNewClient.controls['name'].setValue(this.client.name);
      this.formsNewClient.controls['email'].setValue(this.client.email);
      this.formsNewClient.controls['address'].setValue(this.client.address);
      this.checkedClient = true;
    })
  }

  saveForms(){
    const clientSave: Client = {
      id: (this.id),
      name: this.formsNewClient.controls['name'].value,
      email: this.formsNewClient.controls['email'].value,
      address: this.formsNewClient.controls['address'].value,
    }

    if (!this.checkedClient) {
      this.createdClient(clientSave);
    } else {
      this.updateClient(clientSave);
    }
  }

  createdClient(clientSave: Client){
    this.clientService.postClient(clientSave).subscribe(response =>{
      this.router.navigate(['cliente','list-client']);
    })
  }

  updateClient(clientSave: Client) {
    this.clientService.putClient(clientSave).subscribe(response => {
      this.router.navigate(['cliente','list-client']);
    })
  }
}
