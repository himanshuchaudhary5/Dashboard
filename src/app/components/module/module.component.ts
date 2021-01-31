import { AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { Module } from 'src/app/common/module';
import { ModuleService } from 'src/app/services/module.service';
import { SuiteComponent } from '../suite/suite.component';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements AfterViewInit {
  //Mark ModuleId for backend perpose
  displayedColumns: string[] = ['Seq','Name','Details','Duration','Passed','Failed','Skipped','Status'];
  moduleData : Module[];
  pagetitle="Module(s)";
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  runId : number = SuiteComponent.getRunId();
  hasRunId : boolean ;
  static suiteId: number;

  constructor(private suiteService : ModuleService, private route : ActivatedRoute){}
  
  ngAfterViewInit(): void {
   this.hasRunId = this.route.snapshot.paramMap.has('suiteId');
   ModuleComponent.suiteId  = +this.route.snapshot.paramMap.get('suiteId');
   console.log(this.route.snapshot.paramMap.get('suiteId'));
   console.log(this.hasRunId);
   console.log(ModuleComponent.suiteId);
      this.suiteService.getModulesByRubId(ModuleComponent.suiteId).subscribe(
        data => {
          this.moduleData=data;
          this.isLoadingResults = false;
          this.resultsLength = this.moduleData.length;
        }
      )
  }

  static getSuiteId(): number {
    return this.suiteId;
  }
}




  