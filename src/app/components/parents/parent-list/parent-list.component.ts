import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { parentsData, teachersData } from '../../../data';
import { CommonService } from '../../../common/common.service';

@Component({
  selector: 'app-parent-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parent-list.component.html',
  styleUrl: './parent-list.component.scss'
})
export class ParentListComponent {
  constructor(public commonService:CommonService){}
  studentList:any =parentsData
  columns = [
    {
      header: "Info",
      accessor: "info",
    },
    {
      header: "Student Names",
      accessor: "students",
      className: "hidden md:table-cell",
    },
    {
      header: "Phone",
      accessor: "phone",
      className: "hidden lg:table-cell",
    },
    {
      header: "Address",
      accessor: "address",
      className: "hidden lg:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];
}
