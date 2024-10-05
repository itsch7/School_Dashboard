import { Component } from '@angular/core';
import { events, eventsData } from '../../data';
import { CommonService } from '../../common/common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
   events:any=[]
   constructor(public commonService:CommonService){}
   ngOnInit(): void {
     this.commonService.currentMessage.subscribe(res=>{
       this.events =events.filter(e=>e.date === res)
     })
     this.events=events.filter(e=>e.date === this.commonService.formatDate(new Date()))
   }
}
