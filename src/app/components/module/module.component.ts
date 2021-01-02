import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  //Mark ModuleId for backend perpose
  displayedColumns: string[] = ['Seq','Name','URL','Credentials','Browser','Duration','Passed','Failed','Skipped','Status'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
