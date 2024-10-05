import { Component } from '@angular/core';
import { AnnouncemntListComponent } from './announcemnt-list/announcemnt-list.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { TableSearchComponent } from '../table-search/table-search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [AnnouncemntListComponent,PaginationComponent,TableSearchComponent,CommonModule],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss'
})
export class AnnouncementsComponent {

}
