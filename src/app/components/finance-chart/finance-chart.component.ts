import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-finance-chart',
  standalone: true,
  imports: [],
  templateUrl: './finance-chart.component.html',
  styleUrl: './finance-chart.component.scss'
})
export class FinanceChartComponent {
  chart: any;
  data = [
   {
     name: "Mon",
     income: 3490,
     expense: 4300,
   },
   {
     name: "Tue",
     income: 3490,
     expense: 4880,
   },
   {
     name: "Wed",
     income: 5500,
     expense: 4300,
   },
   {
     name: "Thu",
     income: 5500,
     expense: 4400,
   },
   {
     name: "Fri",
     income: 5500,
     expense: 4900,
   },
 ];
 ngOnInit() {


   this.createChart();
   
 }

 createChart() {
   const expenseData = this.data.map(day => day.expense);
   const incomeData = this.data.map(day => day.income);
   console.log(incomeData)
   
   this.chart = new Chart('financeChart', {
     type: 'line',
     data: {
       labels: this.data.map(day => day.name), // Use day names as labels
       datasets: [
         {
           label: 'expense',
           data: expenseData,
           backgroundColor: '#C3EBFA',
         
         },
         {
           label: 'income',
           data: incomeData,
           backgroundColor: '#FAE27C',
       
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
