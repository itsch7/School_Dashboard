import { Component } from '@angular/core';
import { TableSearchComponent } from '../table-search/table-search.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [TableSearchComponent,PaginationComponent,ClassesListComponent,CommonModule],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent {

}
