import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { TestCaseComponent } from '../test-case/test-case.component';

@Component({
  selector: 'app-test-steps',
  templateUrl: './test-steps.component.html',
  styleUrls: ['./test-steps.component.css']
})
export class TestStepsComponent implements AfterViewInit {
//Mark StepId for backend perpose
displayedColumns: string[] = ['Seq','Description','Screenshots','Status'];
data = ELEMENT_DATA;

resultsLength = 10;
isLoadingResults = false;
isRateLimitReached = false;

moduleId = TestCaseComponent.getModuleId();

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

ngAfterViewInit(): void {
}

pagetitle="Test Step(s)";

openModal(){
  const buttonModal = document.getElementById("openModalButton")
  console.log('buttonModal', buttonModal)
  buttonModal.click()
}

}


export interface SuiteData {
seq: number;
description:string;
screenshot:string;
status:string;
}

const ELEMENT_DATA: SuiteData[] = [
{seq:1,description:'Step 1',screenshot:'',status:'Passed'},
{seq:2,description:'Step 2',screenshot:'/src/assets/icons/user.svg',status:'Failed'}
];
