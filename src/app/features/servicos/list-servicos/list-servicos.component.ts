import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-servicos',
  templateUrl: './list-servicos.component.html',
  styleUrls: ['./list-servicos.component.scss']
})
export class ListServicosComponent {

  displayedColumns: string[] = ['id', 'name', 'email', 'address', 'actions'];
  dataSource!: MatTableDataSource<any>;

  editServico(){

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
