import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServicoService } from './../../../service/servico.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-delete-service',
  templateUrl: './dialog-delete-service.component.html',
  styleUrls: ['./dialog-delete-service.component.scss']
})
export class DialogDeleteServiceComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string },
    private dialogRef: MatDialogRef<DialogDeleteServiceComponent>,
    private servicoService: ServicoService) { }

  deleteServico(): void {
    this.servicoService.deleteService(this.data.id).subscribe(data => { });
    this.dialogRef.close(true);
  }

}
