import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { AnnouncementComponent } from '../../components/announcement/announcement.component';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarModule,
  CalendarUtils,
  CalendarView,
  DateAdapter,
} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../common/common.service';
import moment, { Locale } from 'moment';
import { Subject } from 'rxjs';
import { addHours, endOfDay, startOfDay, startOfHour } from 'date-fns';
import { MatDialog } from '@angular/material/dialog';
import { AddEditTeachersScheduleComponent } from '../../Modal/add-edit-teachers-schedule/add-edit-teachers-schedule.component';
import { ActivatedRoute } from '@angular/router';
import { teachersData } from '../../data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teacher-detail',
  standalone: true,
  imports: [AnnouncementComponent, CalendarModule, CommonModule, FormsModule],
  templateUrl: './teacher-detail.component.html',
  styleUrl: './teacher-detail.component.scss',
})
export class TeacherDetailComponent implements OnInit {
  constructor(
    public _commonService: CommonService,
    private _matDialog: MatDialog,
    private route: ActivatedRoute
  ) {}
  view: CalendarView = CalendarView.Day;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  teacherId: number;
  events: CalendarEvent[] = [];
  teachersData: any = teachersData;
  teacherData: any = [];
  teahcerClasses: any = [];
  className: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.teacherId = params['id']; 
    });

    this.teacherData = this.teachersData.filter(
      (teacher) => teacher.id == this.teacherId
    );
    this.getClasses(this.teacherData[0].classes);
  }
  setView(view) {
    this.view = view;
  }
  getClasses(classes: any[]) {
    console.log(classes);
    for (let item of classes) {
      this.teahcerClasses.push({ name: item, id: item });
    }
    this.className = this.teahcerClasses[0].id;
  }
  onChangeClass() {
    console.log( this.className)
    this.filteredevents= this.events.filter(e=> e.meta.class == this.className)
    console.log( this.events)
    this.refresh.next(true)
  }
  filteredevents=[]
  handleEvent(event: CalendarEvent) {
    let dialog = this._matDialog.open(AddEditTeachersScheduleComponent, {
      width: '50%',
      data: {
        teacher_id: this.teacherId,
        type: 'update',
        title: 'Add Schedule',
        meta: event.meta,
      },
    });
    dialog.afterClosed().subscribe((success: any) => {
      if (success) {
        let filterEvent = this.events.filter((e) => e.meta.id == success.id);
        (filterEvent[0].title = success.subject),
          (filterEvent[0].start = event.start),
          (filterEvent[0].end = event.end),
          (filterEvent[0].color = {
            primary: success.color,
            secondary: success.color,
          }),
          (filterEvent[0].meta = success);

        this.refresh.next(true);
        //  console.log(newEvent)
      }
    });
  }
  refresh: Subject<any> = new Subject();
  hourSegmentClicked(segment: { date: Date }) {
    const start = startOfHour(segment.date);
    const end = addHours(start, 1);
    let dialog = this._matDialog.open(AddEditTeachersScheduleComponent, {
      width: '50%',
      data: {
        teacher_id: this.teacherId,
        type: 'create',
        title: 'Add Schedule',
        eventSegment: segment,
        start_time: start,
        end_time: end,
        events: this.events,
      },
    });
    dialog.afterClosed().subscribe((success: any) => {
      if (success) {
        const newEvent: CalendarEvent = {
          title: success.subject,
          start: start,
          end: end,
          color: {
            primary: success.color,
            secondary: success.color,
          },
          meta: success,
        };

        this.events = [...this.events, newEvent];
        // this.filteredevents= this.events
        this.onChangeClass()
        this.refresh.next(true);
        console.log(newEvent);
      }
    });
  }
}
