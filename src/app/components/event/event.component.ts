import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableSearchComponent } from '../table-search/table-search.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { EventListComponent } from './event-list/event-list.component';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule,TableSearchComponent,PaginationComponent,EventListComponent],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {

}
