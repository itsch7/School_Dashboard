import { Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { ParentsComponent } from './components/parents/parents.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ClassesComponent } from './components/classes/classes.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { ExamsComponent } from './components/exams/exams.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { ResultsComponent } from './components/results/results.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { EventComponent } from './components/event/event.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { TeacherDetailComponent } from './pages/teacher-detail/teacher-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: AdminComponent },  
    { path: 'list/students', component: StudentsComponent },
    { path: 'list/teachers', component: TeachersComponent },
    { path: 'list/parents', component: ParentsComponent },
    { path: 'list/subjects', component: SubjectComponent },
    { path: 'list/classes', component: ClassesComponent },
    { path: 'list/lessons', component: LessonsComponent },
    { path: 'list/exams', component: ExamsComponent },
    { path: 'list/assignments', component: AssignmentComponent },
    { path: 'list/results', component: ResultsComponent },
    { path: 'list/attendance', component: AttendanceComponent },
    { path: 'list/events', component: EventComponent },
    { path: 'list/announcements', component: AnnouncementsComponent },
    { path: 'teacher/:id', component: TeacherDetailComponent },

    // { path: '**', redirectTo: '', pathMatch: 'full' } ,
    // { path: 'about', component: AboutComponent }
  ];
