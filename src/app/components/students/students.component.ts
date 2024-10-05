import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TableSearchComponent } from '../table-search/table-search.component';
import { StudentListComponent } from './student-list/student-list.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { MatIconModule } from '@angular/material/icon';
import { StudentFormComponent } from '../forms/student-form/student-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule,TableSearchComponent,StudentListComponent,PaginationComponent,MatIconModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {
  _matDialog =inject(MatDialog)

        ngOnInit(): void {
          
        }

        onAdd(){
          console.log("hi")
          let dialog = this._matDialog.open(StudentFormComponent,
            { 
              width:'50%',
             data:{
               }})
         dialog.afterClosed().subscribe((success: boolean) => {    
         });
        }
}
