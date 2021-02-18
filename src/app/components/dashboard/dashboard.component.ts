import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts'
import { Overall } from 'src/app/common/overall';
import { LatestModulesService } from 'src/app/services/latest-modules.service';
import { LatestSuiteStatusService } from 'src/app/services/latest-suite-status.service';
import { OverallService } from 'src/app/services/overall.service';
import { ProductHealthService } from 'src/app/services/product-health.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  static colorSet: string [] = ["#E1AAF5","#AAF5B7","#5B68E7","#5BE783","#D5F5AA","#AAF5D9","#E7AAF5","#F5B6AA","#AAB0F5"];
  pagetitle="Quality Overview";
  constructor(private overAll : OverallService, private latestSuite : LatestSuiteStatusService, 
    private latestModule : LatestModulesService, protected healthService : ProductHealthService) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.getOveerAllResult();
    this.getLatestSuiteStatus();
    this.getLatestModulesStatus();
    this.getLatestProductHealth();


  }

  //****************BAR CHART - Last Run  Suite*/
  barChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: 'Last Execution Status',
      display: true,
      fontSize:20,
      fontColor:"black"
    }
  };
  barChartLabels: any[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend =  true;
  barChartPlugins = [];
  passedData : any[]=[];
  failedData : any[]=[];
  skippedData : any[]=[];

  barChartData: any[] = [
    { data: this.passedData, label: 'Passed',backgroundColor: '#27AE60',hoverBackgroundColor: '#27AE60' },
    { data: this.failedData, label: 'Failed' ,backgroundColor: '#E74C3C' ,hoverBackgroundColor: '#E74C3C' },
    { data: this.skippedData, label: 'Skipped' ,backgroundColor: '#FFBF00',hoverBackgroundColor: '#FFBF00' }
  ];
  getLatestSuiteStatus() {
    return  this.latestSuite.getData().subscribe(
     data=>{
      for (let i = 0; i < data.length; i++) {
        this.barChartLabels.push(data[i].suiteName);
        this.passedData.push(data[i].passed);
      this.failedData.push(data[i].failed);
      this.skippedData.push(data[i].skipped);
      }
     
     }
    )
   }


  //*********************Line Chart for product health */
  suiteNames : any[] = this.barChartLabels;
  healthLabels: any[] = [];
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
  healthData : healthFormat[]=[];
  healthLegend = true;
  healthPlugins = [];
  healthType = 'line';
  tempData : any[];
  getLatestProductHealth()
  {
    return  this.healthService.getData().subscribe(
      data=>{
        let count = 1;
        for(let i= 0; i<this.suiteNames.length;i++)
        {
          this.tempData=[];
          for(let j =0; j<data.length; j++)
          {
            if(data[j].suite_name==this.suiteNames[i])
            {
            this.healthLabels.push(String(count++));
            this.tempData.push(data[j].pass_percentage);
            }
           } 
          this.healthData.push(new healthFormat(this.tempData,this.suiteNames[i]));
        
        }
      //TODO
      }
     )
  }
 

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
  overAllData:[];
  public pieChartLabels: Label[] = [['Passed'], ['Failed'], 'Skipped'];
  public pieChartData: any = [];
  public pieChartType: ChartType = 'pie';
  public pieChartColors: Color[] = [{backgroundColor:["#27AE60","#E74C3C","#FFBF00"]}];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  getOveerAllResult() {
    return  this.overAll.getData().subscribe(
     data=>{
      this.pieChartData.push(data.passed);
      this.pieChartData.push(data.failed);
      this.pieChartData.push(data.skipped);
     }
    )
   }
  
    //****************BAR CHART - Last Run  Module*/
    barChartOptions1: ChartOptions = {
      responsive: true,
      title: {
        text: 'Module(s) Latest Execution Status',
        display: true,
        fontSize:20,
        fontColor:"black"
      }
    };
    barChartLabels1: any[] = [];
    barChartType1: ChartType = 'bar';
    barChartLegend1 =  true;
    barChartPlugins1 = [];
    passedDataModule : any[]=[];
    failedDataModule : any[]=[];
    skippedDataModule : any[]=[];
  
    barChartData1: ChartDataSets[] = [
      { data: this.passedDataModule, label: 'Passed',backgroundColor: '#27AE60',hoverBackgroundColor: '#27AE60' },
      { data: this.failedDataModule, label: 'Failed' ,backgroundColor: '#E74C3C' ,hoverBackgroundColor: '#E74C3C' },
      { data: this.skippedDataModule, label: 'Skipped' ,backgroundColor: '#FFBF00' ,hoverBackgroundColor: '#FFBF00'}
    ];
    getLatestModulesStatus() {
      return  this.latestModule.getData().subscribe(
       data=>{
         for(let i=0;i<data.length; i++)
         {
          this.barChartLabels1.push(data[i].name);
          this.passedDataModule.push(data[i].passed);
          this.failedDataModule.push(data[i].failed);
          this.skippedDataModule.push(data[i].skipped);         }
       }
      )
     }
}

class healthFormat
{
  data : number[];
  label : string;
  backgroundColor : string;
  borderColor: string;
  
  constructor(data: number[], label: string) {
    this.data = data;
    this.label = label;
    const r = Math.round (Math.random () * 255);
    const g = Math.round (Math.random () * 251);
    const b = Math.round (Math.random () * 255);
    if(DashboardComponent.colorSet.length==1)
    {
      DashboardComponent.colorSet=["#D5F5AA","#AAF5D9","#E7AAF5","#F5B6AA","#AAB0F5","#E1AAF5","#AAF5B7","#5B68E7","#5BE783"];
    }
    let key = DashboardComponent.colorSet[0];
    this.backgroundColor = key;
    console.log(this.backgroundColor);
    DashboardComponent.colorSet.splice(0,1);
    this.borderColor = "black";
  
}

}
