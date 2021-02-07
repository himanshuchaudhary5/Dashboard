import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { TestSteps } from 'src/app/common/test-steps';
import { TestStepsService } from 'src/app/services/test-steps.service';
import { TestCaseComponent } from '../test-case/test-case.component';

@Component({
  selector: 'app-test-steps',
  templateUrl: './test-steps.component.html',
  styleUrls: ['./test-steps.component.css']
})
export class TestStepsComponent implements AfterViewInit {
//Mark StepId for backend perpose
displayedColumns: string[] = ['Seq','Description','Screenshot','Status'];
pagetitle="Test Step(s)";
testCaseSteps : TestSteps[];
   resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   testCaseId : number;

   moduleId : number = TestCaseComponent.getModuleId();

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

constructor(private testStepService : TestStepsService, private route : ActivatedRoute){
}

ngAfterViewInit(): void {
  this.testCaseId  = +this.route.snapshot.paramMap.get('testCaseId');
 
     this.testStepService.getTestCaseByModuleId(this.testCaseId).subscribe(
       data => {
         this.testCaseSteps=data;
         this.isLoadingResults = false;
         this.resultsLength = this.testCaseSteps.length;
       }
     )
 }
}

