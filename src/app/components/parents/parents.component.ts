import { Component } from '@angular/core';
import { ParentListComponent } from './parent-list/parent-list.component';
import { CommonModule } from '@angular/common';
import { TableSearchComponent } from '../table-search/table-search.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-parents',
  standalone: true,
  imports: [ParentListComponent,CommonModule,TableSearchComponent,PaginationComponent],
  templateUrl: './parents.component.html',
  styleUrl: './parents.component.scss'
})
export class ParentsComponent {

}
