import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-case',
  templateUrl: './test-case.component.html',
  styleUrls: ['./test-case.component.css']
})
export class TestCaseComponent implements OnInit {
   //Mark TestCaseId for backend perpose
   displayedColumns: string[] = ['Seq','Name','Credentials','Browser','Passed','Failed','Skipped','Status'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
