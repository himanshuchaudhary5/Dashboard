import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements AfterViewInit {
  //Mark ModuleId for backend perpose
  displayedColumns: string[] = ['Seq','Name','URL','Credentials','Browser','Duration','Passed','Failed','Skipped','Status'];
  
  data = ELEMENT_DATA;

  resultsLength = 10;
  isLoadingResults = false;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
  }

  pagetitle="Module(s)";
}


export interface SuiteData {
  seq: number;
  name: string;
  url:string;
  credentials:string;
  browser:string;
  duration:string;
  passed:number;
  failed:number;
  skipped:number;
  status:string;
}

const ELEMENT_DATA: SuiteData[] = [
  {seq:1,name:'Module Name 0',credentials:'User: Himanshu ,\n Password: ***',url:'ww.url.com',browser:'Chrome',duration:'20 Min',passed:2,failed:0,skipped:0,status:'Passed'},
  {seq:2,name:'Module Name 1',credentials:'User: Himanshu ,\n Password: ***',url:'ww.url.com',browser:'Chrome',duration:'20 Min',passed:2,failed:3,skipped:0,status:'Failed'},
  {seq:3,name:'Module Name 2',credentials:'User: Himanshu ,\n Password: ***',url:'ww.url.com',browser:'Chrome',duration:'20 Min',passed:2,failed:3,skipped:0,status:'Passed'},
  {seq:4,name:'Module Name 3',credentials:'User: Himanshu ,\n Password: ***',url:'ww.url.com',browser:'Chrome',duration:'20 Min',passed:2,failed:3,skipped:0,status:'Passed'},
  {seq:5,name:'Module Name 4',credentials:'User: Himanshu ,\n Password: ***',url:'ww.url.com',browser:'Chrome',duration:'20 Min',passed:2,failed:3,skipped:0,status:'Passed'},
  ];

  