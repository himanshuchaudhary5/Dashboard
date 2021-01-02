import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suite',
  templateUrl: './suite.component.html',
  styleUrls: ['./suite.component.css']
})
export class SuiteComponent implements OnInit {
  //Mark SUiteId for backend perpose
  displayedColumns: string[] = ['Seq','Name','Environment','URL','Browsers','Duration','Passed','Failed','Skipped','Status'];
  constructor() { }

  ngOnInit(): void {
  }

}
