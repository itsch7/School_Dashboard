import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-attendance-chart',
  standalone: true,
  imports: [],
  templateUrl: './attendance-chart.component.html',
  styleUrl: './attendance-chart.component.scss'
})
export class AttendanceChartComponent implements OnInit {
  chart: any;
   data = [
    {
      name: "Mon",
      present: 60,
      absent: 40,
    },
    {
      name: "Tue",
      present: 70,
      absent: 60,
    },
    {
      name: "Wed",
      present: 90,
      absent: 75,
    },
    {
      name: "Thu",
      present: 90,
      absent: 75,
    },
    {
      name: "Fri",
      present: 65,
      absent: 55,
    },
  ];
  
  ngOnInit() {

    this.createChart();
    
  }

  createChart() {
    const presentData = this.data.map(day => day.present);
    const absentData = this.data.map(day => day.absent);
    console.log(absentData)
    
    this.chart = new Chart('mybarChart', {
      type: 'bar',
      data: {
        labels: this.data.map(day => day.name), // Use day names as labels
        datasets: [
          {
            label: 'Present',
            data: presentData,
            backgroundColor: '#C3EBFA',
            borderRadius: {
              topLeft: 50, // Round top left corner
              topRight: 50, // Round top right corner
              bottomLeft: 0, // Keep bottom left corner square
              bottomRight: 0 // Keep bottom right corner square
            }
          },
          {
            label: 'Absent',
            data: absentData,
            backgroundColor: '#FAE27C',
            borderRadius: {
              topLeft: 50, // Round top left corner
              topRight: 50, // Round top right corner
              bottomLeft: 0, // Keep bottom left corner square
              bottomRight: 0 // Keep bottom right corner square
            }
          },
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
        },
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              tickBorderDash: [5, 5], // Set dashed lines for y-axis
            }
          },
          x:{
            grid: {
              tickBorderDash: [50, 50], // Optional: dashed lines for x-axis
            }
          }
        },
       
      }
    });
  }
  
}
