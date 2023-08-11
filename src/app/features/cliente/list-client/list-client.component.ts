import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { client } from '../models/client';

const ELEMENT_DATA: client[] = [
  {position: 1, name: 'Hydrogen', email: '1.0079', address: 'H'},
  {position: 2, name: 'Helium', email: '4.0026', address: 'He'},
  {position: 3, name: 'Lithium', email: '6.941', address: 'Li'}
];

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})

export class ListClientComponent {

  displayedColumns: string[] = ['position', 'name', 'email', 'address'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
