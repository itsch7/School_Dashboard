import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ResultsListComponent } from './results-list/results-list.component';
import { TableSearchComponent } from '../table-search/table-search.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule,ResultsListComponent,TableSearchComponent,PaginationComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {

}
