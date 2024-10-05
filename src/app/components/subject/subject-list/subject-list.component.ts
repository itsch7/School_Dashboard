import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { subjectsData } from '../../../data';
import { CommonService } from '../../../common/common.service';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.scss'
})
export class SubjectListComponent {
  constructor(public commonService:CommonService){}

  studentList:any =subjectsData
  columns = [
    {
      header: "Subject Name",
      accessor: "name",
    },
    {
      header: "Teachers",
      accessor: "teachers",
      className: "hidden md:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];
  
}
