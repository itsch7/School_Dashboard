import { Component } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { AssignmentLitComponent } from './assignment-lit/assignment-lit.component';
import { TableSearchComponent } from '../table-search/table-search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment',
  standalone: true,
  imports: [PaginationComponent,AssignmentLitComponent,TableSearchComponent,CommonModule],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.scss'
})
export class AssignmentComponent {

}
