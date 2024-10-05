import { Component, OnInit } from '@angular/core';
import { announcementsData, events } from '../../data';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../common/common.service';

@Component({
  selector: 'app-announcement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss'
})
export class AnnouncementComponent implements OnInit {
    announcement:any=[]
    constructor(public commonService:CommonService){}
    ngOnInit(): void {
      this.commonService.currentMessage.subscribe(res=>{
        this.announcement =events.filter(e=>e.date === res)
      })
      this.announcement=events.filter(e=>e.date === this.commonService.formatDate(new Date()))
    }
}
