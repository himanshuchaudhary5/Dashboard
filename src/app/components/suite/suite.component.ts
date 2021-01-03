import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-suite',
  templateUrl: './suite.component.html',
  styleUrls: ['./suite.component.css']
})
export class SuiteComponent implements AfterViewInit {
  //Mark SUiteId for backend perpose
  displayedColumns: string[] = ['Seq','Name','Environment','URL','Browsers','Duration','Passed','Failed','Skipped','Status'];
  data = ELEMENT_DATA;

  resultsLength = 10;
  isLoadingResults = false;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
  }

  pagetitle="Suite(s)";
}


export interface SuiteData {
  seq: number;
  name: string;
  environment:string;
  url:string;
  browsers:string;
  duration:string;
  passed:number;
  failed:number;
  skipped:number;
  status:string;
}

const ELEMENT_DATA: SuiteData[] = [
  {seq:1,name:'Suite_Name'+new Date().toLocaleDateString(),environment:'Stage',url:'ww.url.com',browsers:'Chrome',duration:'20 Min',passed:2,failed:0,skipped:0,status:'Passed'},
  {seq:2,name:'Suite_Name'+new Date().toLocaleDateString(),environment:'Stage',url:'ww.url.com',browsers:'Chrome',duration:'20 Min',passed:2,failed:3,skipped:0,status:'Failed'},
  {seq:3,name:'Suite_Name'+new Date().toLocaleDateString(),environment:'Stage',url:'ww.url.com',browsers:'Chrome',duration:'20 Min',passed:2,failed:3,skipped:0,status:'Passed'},
  {seq:4,name:'Suite_Name'+new Date().toLocaleDateString(),environment:'Stage',url:'ww.url.com',browsers:'Chrome',duration:'20 Min',passed:2,failed:3,skipped:0,status:'Passed'},
  {seq:5,name:'Suite_Name'+new Date().toLocaleDateString(),environment:'Stage',url:'ww.url.com',browsers:'Chrome',duration:'20 Min',passed:2,failed:3,skipped:0,status:'Passed'},
  ];