import { Component } from '@angular/core';
import { resultsData } from '../../../data';
import { CommonService } from '../../../common/common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results-list.component.html',
  styleUrl: './results-list.component.scss'
})
export class ResultsListComponent {
  constructor(public commonService:CommonService){}
  studentList:any =resultsData
  columns = [
    {
      header: "Subject Name",
      accessor: "name",
    },
    {
      header: "Student",
      accessor: "student",
    },
    {
      header: "Score",
      accessor: "score",
      className: "hidden md:table-cell",
    },
    {
      header: "Teacher",
      accessor: "teacher",
      className: "hidden md:table-cell",
    },
    {
      header: "Class",
      accessor: "class",
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
