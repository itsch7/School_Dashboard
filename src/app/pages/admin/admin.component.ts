import { Component } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { PieChartsComponent } from '../../components/pie-charts/pie-charts.component';
import { AttendanceChartComponent } from '../../components/attendance-chart/attendance-chart.component';
import { FinanceChartComponent } from '../../components/finance-chart/finance-chart.component';
import { CalednerComponent } from '../../components/caledner/caledner.component';
import { AnnouncementComponent } from '../../components/announcement/announcement.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [UserCardComponent,PieChartsComponent,AttendanceChartComponent,FinanceChartComponent,CalednerComponent,AnnouncementComponent

  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
