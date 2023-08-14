import { ServicoService } from './../../../service/servico.service';
import { Component, OnInit } from '@angular/core';
import { Servicos } from '../models/servicos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-servico',
  templateUrl: './new-servico.component.html',
  styleUrls: ['./new-servico.component.scss']
})
export class NewServicoComponent implements OnInit {


  id!: string;
  service!: Servicos;
  checkedService!: boolean;
  formsNewService!: FormGroup;
  rota!: string;

  constructor(
    private servicoService: ServicoService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
    this.createdFormsService();
    this.asEditorCreate();
  }

  asEditorCreate(){
    this.rota = this.activatedRoute.snapshot.url[0].path;

    if (this.rota === 'edit-servicos') {
      this.getIdByRoute();
      this.getServicebyId();
    } else {}
  }

  createdFormsService(){
    this.formsNewService = this.formBuilder.group({
      description: ['', [Validators.required, Validators.max(70)]],
      value: ['0', Validators.required],
      material: ['0', Validators.required]
    })
  }

  saveForms() {
    const serviceSave: Servicos = {
      id: (this.id),
      description: this.formsNewService.controls['description'].value,
      value: this.formsNewService.controls['value'].value,
      material: this.formsNewService.controls['material'].value,
    }

    if (!this.checkedService) {
      this.createdService(serviceSave);
    } else {
      this.updateService(serviceSave);
    }
  }

  getIdByRoute() {
    this.id = this.activatedRoute.snapshot.url[1].path;
  }

  getServicebyId(){
    this.servicoService.getServiceById(this.id).subscribe(service => {
      this.service = service;
      this.formsNewService.controls['description'].setValue(this.service.description);
      this.formsNewService.controls['value'].setValue(this.service.value);
      this.formsNewService.controls['material'].setValue(this.service.material);
      this.checkedService = true;
    })
  }

  createdService(serviceSave: Servicos){
    this.servicoService.postService(serviceSave).subscribe(response =>{
      this.router.navigate(['servicos','list-servicos']);
    })
  }

  updateService(serviceSave: Servicos) {
    this.servicoService.putService(serviceSave).subscribe(response => {
      this.router.navigate(['servicos','list-servicos']);
    })
  }
}
