import { Component } from '@angular/core';
import { StudentListComponent } from '../students/student-list/student-list.component';
import { CommonModule } from '@angular/common';
import { TableSearchComponent } from '../table-search/table-search.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { subjectsData } from '../../data';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [SubjectListComponent,CommonModule,TableSearchComponent,PaginationComponent],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {

}
