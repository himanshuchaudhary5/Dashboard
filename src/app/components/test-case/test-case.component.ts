import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { Testcase } from 'src/app/common/testcase';
import { ModuleService } from 'src/app/services/module.service';
import { TestcaseService } from 'src/app/services/testcase.service';
import { ModuleComponent } from '../module/module.component';

@Component({
  selector: 'app-test-case',
  templateUrl: './test-case.component.html',
  styleUrls: ['./test-case.component.css']
})
export class TestCaseComponent implements AfterViewInit {
   //Mark TestCaseId for backend perpose
   displayedColumns: string[] = ['Seq','Name','Credentials','Browser','Passed','Failed','Skipped','Status'];
   pagetitle="Test Case(s)";
   testCaseData : Testcase[];
   resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   suiteId : number = ModuleComponent.getSuiteId();
 
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
 
   hasRunId : boolean ;
   static moduleId: number;

   constructor(private suiteService : TestcaseService, private route : ActivatedRoute){}
 
 ngAfterViewInit(): void {
   this.hasRunId = this.route.snapshot.paramMap.has('moduleId');
   TestCaseComponent.moduleId  = +this.route.snapshot.paramMap.get('moduleId');
  
      this.suiteService.getTestCaseByModuleId(TestCaseComponent.moduleId).subscribe(
        data => {
          this.testCaseData=data;
          this.isLoadingResults = false;
          this.resultsLength = this.testCaseData.length;
        }
      )
  }

  static getModuleId(): number {
    return this.moduleId;
  }
 }
 
   