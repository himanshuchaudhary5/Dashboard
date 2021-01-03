import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-test-case',
  templateUrl: './test-case.component.html',
  styleUrls: ['./test-case.component.css']
})
export class TestCaseComponent implements AfterViewInit {
   //Mark TestCaseId for backend perpose
   displayedColumns: string[] = ['Seq','Name','Credentials','Browser','Passed','Failed','Skipped','Status'];
  
   data = ELEMENT_DATA;

   resultsLength = 10;
   isLoadingResults = false;
   isRateLimitReached = false;
 
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
 
   ngAfterViewInit(): void {
   }
 
   pagetitle="Test Case(s)";
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
   {seq:1,name:'Test Case Name 0',credentials:'Flat: 1',url:'ww.url.com',browser:'Chrome',duration:'20 Min',passed:2,failed:0,skipped:0,status:'Passed'},
   {seq:2,name:'Test Case Name 1',credentials:'',url:'ww.url.com',browser:'Chrome',duration:'20 Min',passed:2,failed:3,skipped:0,status:'Failed'},
   ];
 
   