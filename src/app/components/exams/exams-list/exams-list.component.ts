import { Component } from '@angular/core';
import { classesData, examsData } from '../../../data';
import { CommonService } from '../../../common/common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exams-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exams-list.component.html',
  styleUrl: './exams-list.component.scss'
})
export class ExamsListComponent {
  constructor(public commonService:CommonService){}
  studentList:any =examsData
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
