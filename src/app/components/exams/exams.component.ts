import { Component } from '@angular/core';
import { ExamsListComponent } from './exams-list/exams-list.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { TableSearchComponent } from '../table-search/table-search.component';

@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [ExamsListComponent,PaginationComponent,CommonModule,TableSearchComponent],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.scss'
})
export class ExamsComponent {

}
