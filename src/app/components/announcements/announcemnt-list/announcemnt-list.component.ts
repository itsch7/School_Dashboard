import { Component } from '@angular/core';
import { announcementsData } from '../../../data';
import { CommonService } from '../../../common/common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-announcemnt-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcemnt-list.component.html',
  styleUrl: './announcemnt-list.component.scss'
})
export class AnnouncemntListComponent {
  constructor(public commonService:CommonService){}
  studentList:any =announcementsData
  columns = [
    {
      header: "Title",
      accessor: "title",
    },
    {
      header: "Class",
      accessor: "class",
    },
    {
      header: "Date",
      accessor: "date",
      className: "hidden md:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];
}
