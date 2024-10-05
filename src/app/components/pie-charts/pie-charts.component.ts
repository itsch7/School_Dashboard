import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-pie-charts',
  standalone: true,
  imports: [],
  templateUrl: './pie-charts.component.html',
  styleUrl: './pie-charts.component.scss'
})
export class PieChartsComponent implements OnInit {
  chart: any;

  ngOnInit() {
    this.createChart();
    console.log(this.chart)
  }

  createChart() {
    this.chart = new Chart('myPieChart', {
      type: 'doughnut',
      data: {
        labels: ['Absent', 'Present'],
        datasets: [{
          data: [500, 200],
          backgroundColor: ['#C3EBFA','#FAE27C'],
        }]
      },
      options: {
        plugins: {
          legend: {
            display: true, // Ensure legend is set to display
            position: 'bottom', // Position of the legend
          },
        },
        responsive: true,
      }
    });
  }
}
