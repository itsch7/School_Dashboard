import { Component, inject } from '@angular/core';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { TableSearchComponent } from '../table-search/table-search.component';
import { TeachersFormComponent } from '../forms/teachers-form/teachers-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [TeachersListComponent,MatIconModule,PaginationComponent,CommonModule,TableSearchComponent],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss'
})
export class TeachersComponent {
  _matDialog =inject(MatDialog)

        ngOnInit(): void {
          
        }

        onAdd(){
          console.log("hi")
          let dialog = this._matDialog.open(TeachersFormComponent,
            { 
              width:'50%',
             data:{
               }})
         dialog.afterClosed().subscribe((success: boolean) => {    
         });
        }
}
