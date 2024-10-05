import { Component } from '@angular/core';
import { assignmentsData } from '../../../data';
import { CommonService } from '../../../common/common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment-lit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignment-lit.component.html',
  styleUrl: './assignment-lit.component.scss'
})
export class AssignmentLitComponent {
  constructor(public commonService:CommonService){}
  studentList:any =assignmentsData
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
      header: "Due Date",
      accessor: "dueDate",
      className: "hidden md:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];
  
}
