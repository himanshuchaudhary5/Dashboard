import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  pagetitle="Quality Overview";
  constructor() { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {


    //Assign Value for line and bar here
  }


  //*********************Line Chart for product health */
  healthData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Suite1' },
    { data: [0, 34, 65, 22, 12, 2], label: 'Suite2' },
    { data: [44, 72], label: 'Suite3' },
    { data: [34], label: 'Suite4' },
    { data: [], label: 'Suite5' },
  ];

  healthLabels: Label[] = ['1', '2', '3', '4', '5', '6'];

  healthOptions = {
    responsive: true,
    title: {
      text: 'Product Quality',
      display: true,
      fontSize:20,
      fontColor:"black"
    }
  };

  healthColors: Color[] = [
    {
      borderColor: 'black',
      //backgroundColor: '#498B30',
    },
  ];
  healthLegend = true;
  healthPlugins = [];
  healthType = 'line';


  //****************BAR CHART - Last Run */
  barChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: 'Last Execution Status',
      display: true,
      fontSize:20,
      fontColor:"black"
    }
  };
  barChartLabels: Label[] = ['Suite1', 'Suite2', 'Suite3', 'Suite4'];
  barChartType: ChartType = 'bar';
  barChartLegend =  true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 33, 46, 70], label: 'Passed',backgroundColor: '#27AE60',hoverBackgroundColor: '#27AE60' },
    { data: [23, 45, 32,34], label: 'Failed' ,backgroundColor: '#E74C3C' ,hoverBackgroundColor: '#E74C3C' },
    { data: [35, 34, 19, 30], label: 'Skipped' ,backgroundColor: '#FFBF00',hoverBackgroundColor: '#FFBF00' }
  ];


  //********************Pie for Over All */

  public pieChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: 'Overall Execution Status',
      display: true,
      fontSize:20,
      fontColor:"black"
    }
  };
  public pieChartLabels: Label[] = [['Passed'], ['Failed'], 'Skipped'];
  public pieChartData: SingleDataSet = [30, 50, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartColors: Color[] = [{backgroundColor:["#27AE60","#E74C3C","#FFBF00"]}];
  public pieChartLegend = true;
  public pieChartPlugins = [];


    //*********************Line Chart for product health */
    lineChartData1: ChartDataSets[] = [
      { data: [85, 72, 78, 75, 77, 75], label: 'Run(S)' },
    ];
  
    lineChartLabels1: Label[] = ['1', '2', '3', '4', '5', '6'];
  
    lineChartOptions1 = {
      responsive: true,
      title: {
        text: 'Product Quality',
        display: true,
        fontSize:20,
        fontColor:"black"
      }
    };
  
    lineChartColors1: Color[] = [
      {
        borderColor: 'black',
        backgroundColor: '#498B30',
      },
    ];
    lineChartLegend1 = true;
    lineChartPlugins1 = [];
    lineChartType1 = 'line';
  
  
    //****************BAR CHART - Last Run */
    barChartOptions1: ChartOptions = {
      responsive: true,
      title: {
        text: 'Module(s) Latest Execution Status',
        display: true,
        fontSize:20,
        fontColor:"black"
      }
    };
    barChartLabels1: Label[] = ['Module1', 'Module2', 'Module3', 'Module4', 'Module5','Module6','Module7','Module8','Module9','Module10'];
    barChartType1: ChartType = 'bar';
    barChartLegend1 =  true;
    barChartPlugins1 = [];
  
    barChartData1: ChartDataSets[] = [
      { data: [45, 33, 46, 70, 33, 5, 33, 46, 70, 33], label: 'Passed',backgroundColor: '#27AE60',hoverBackgroundColor: '#27AE60' },
      { data: [23, 45, 32, 34, 33, 35, 34, 19, 30, 33], label: 'Failed' ,backgroundColor: '#E74C3C' ,hoverBackgroundColor: '#E74C3C' },
      { data: [35, 34, 19, 30, 33, 23, 45, 32, 34, 33], label: 'Skipped' ,backgroundColor: '#FFBF00' ,hoverBackgroundColor: '#FFBF00'}
    ];
  
  
    //********************Pie for Over All */
  
    public pieChartOptions1: ChartOptions = {
      responsive: true,
      title: {
        text: 'Overview Execution Status',
        display: true,
        fontSize:20,
        fontColor:"black"
      }
    };
    public pieChartLabels1: Label[] = [['Passed'], ['Failed'], 'Skipped'];
    public pieChartData1: SingleDataSet = [30, 50, 20];
    public pieChartType1: ChartType = 'pie';
    public pieChartColors1: Color[] = [{backgroundColor:["#27AE60","#E74C3C","#FFBF00"]}];
    public pieChartLegend1 = true;
    public pieChartPlugins1 = [];

}
