import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Client } from 'src/app/features/cliente/models/client';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string },
  private dialogRef: MatDialogRef<DeleteDialogComponent>,
  private clientService: ClienteService) {}

  ngOnInit(){
  }

  deleteClient(): void {
    this.clientService.deleteClient(this.data.id).subscribe(data => {});
    this.dialogRef.close(true);
  }
}
