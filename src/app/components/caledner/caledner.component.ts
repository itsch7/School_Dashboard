import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import moment from 'moment';
import { CommonService } from '../../common/common.service';
import { EventsComponent } from '../events/events.component';

@Component({
  selector: 'app-caledner',
  standalone: true,
  imports: [MatDatepickerModule,CommonModule,FormsModule,MatNativeDateModule,EventsComponent],
  templateUrl: './caledner.component.html',
  styleUrl: './caledner.component.scss'
})
export class CalednerComponent implements OnInit{
  currentDate = moment(new Date()).format("YYYY-MM-DD");
  selectedDate:any

  constructor(private router: Router, private commonService:CommonService, ) {}
 ngOnInit(): void {
   this.selectedDate =this.currentDate
 }
  onDateSelected(date: Date): void {
    this.selectedDate = moment(date).format("YYYY-MM-DD");
    this.commonService.announcements.next(this.selectedDate)
  }


  dateClass(date:any){
    const dateString =  moment(date).format("YYYY-MM-DD"); // Format date as 'YYYY-MM-DD'
   console.log(dateString)
    return dateString === this.selectedDate ? 'selected-date' : '';
  }
}
