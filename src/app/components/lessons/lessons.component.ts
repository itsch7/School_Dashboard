import { Component } from '@angular/core';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { TableSearchComponent } from '../table-search/table-search.component';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [LessonsListComponent,PaginationComponent,TableSearchComponent],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.scss'
})
export class LessonsComponent {

}
