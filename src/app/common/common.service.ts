import { Injectable } from '@angular/core';
import moment from 'moment';
import { Subject } from 'rxjs';
const CAL_DEFAULT_HOUR_FORMAT = 24; // e.g 12 | 24
const CAL_DEFAULT_HOUR_START = '09:00'; // e.g 00:00 ==> HH:mm ==> 12:00 AM
const CAL_DEFAULT_HOUR_END = '17:00'; // e.g 24:00 ==> HH:mm ==> 11:59 PM
const CAL_DEFAULT_HOUR_INTERVAL = 15; // e.g 10, 15, 20
const CAL_DEFAULT_WEEK_START_DAY = 1; // e.g 0 is sunday, 1 is monday etc
const CAL_DEFAULT_WEEK_END_DAY = 6; // e.g 0 is sunday, 1 is monday etc
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  role:string = "";
  menus:any=[];
  public announcements = new Subject<string>();
  currentMessage = this.announcements.asObservable();
 
  constructor() { }

  formatDate(date:Date){
    return moment(date).format("YYYY-MM-DD")
  }
  formathtmlDate(date:Date){
    return moment(date).format("DD/MM/YYYY");

  }
  getCalendarStartHour() {
 
      return moment(CAL_DEFAULT_HOUR_START, 'HH:mm').get('hour');
    
  }
  getCalendarEndHour() {
    let hour = 0;
  
      hour = moment(CAL_DEFAULT_HOUR_END, 'HH:mm').get('hour');
    
    return hour;
  }
  getCalendarHourSegments() {
    return Math.ceil(60 / CAL_DEFAULT_HOUR_INTERVAL);
  }
  getCalendarHourSegmentHeight() {
    return 35;
  }
  
  getCalendarDayEndMinute() {
    const endMins = 59; // calendar valid mins 0 - 59
    return this.getCalendarEndHour() === 23 ? endMins : 1;
  } 
  getCalendarWeekStart() {
    return CAL_DEFAULT_WEEK_START_DAY;
  }
  getCalendarWeekEnd() {
    return CAL_DEFAULT_WEEK_END_DAY;
  }
   formatScheduleDate(date) {
    const pad = (num) => num.toString().padStart(2, '0');
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1); // Months are zero-based
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    return `${year}-${month}-${day}T${hours}:${minutes}`;
}
}
