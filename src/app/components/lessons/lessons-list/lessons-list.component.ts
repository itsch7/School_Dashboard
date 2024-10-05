import { Component } from '@angular/core';
import { lessonsData } from '../../../data';
import { CommonService } from '../../../common/common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lessons-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lessons-list.component.html',
  styleUrl: './lessons-list.component.scss'
})
export class LessonsListComponent {
  constructor(public commonService:CommonService){}
  studentList:any =lessonsData
  columns = [
    {
      header: "Subject Name",
      accessor: "name",
    },
    {
      header: "Class",
      accessor: "class",
    },
    {
      header: "Teacher",
      accessor: "teacher",
      className: "hidden md:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];
}
