
import { AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { Suite } from 'src/app/common/suite';
import { SuiteService } from 'src/app/services/suite.service';


@Component({
  selector: 'app-suite',
  templateUrl: './suite.component.html',
  styleUrls: ['./suite.component.css']
})
export class SuiteComponent implements AfterViewInit {
 
  //Mark SUiteId for backend perpose
  displayedColumns: string[] = ['Seq','Name','URL','Browsers','Duration','Passed','Failed','Skipped','Status'];
  suitesData : Suite[];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  pagetitle="Suite(s)";
  hasRunId : boolean ;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  static runId: number;

  constructor(private suiteService : SuiteService, private route : ActivatedRoute){}
  
  ngAfterViewInit(): void {
   this.hasRunId = this.route.snapshot.paramMap.has('runId');
   SuiteComponent.runId  = +this.route.snapshot.paramMap.get('runId');
   console.log(this.route.snapshot.paramMap.get('runId'));
   console.log(this.hasRunId);
   console.log(SuiteComponent.runId);
      this.suiteService.getSuitesByRubId(SuiteComponent.runId).subscribe(
        data => {
          this.suitesData=data;
          this.isLoadingResults = false;
          this.resultsLength = this.suitesData.length;
        }
      )
  }

  static getRunId(): number {
    return this.runId;
  }
}