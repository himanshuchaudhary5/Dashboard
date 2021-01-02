import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-steps',
  templateUrl: './test-steps.component.html',
  styleUrls: ['./test-steps.component.css']
})
export class TestStepsComponent implements OnInit {
//Mark StepId for backend perpose
displayedColumns: string[] = ['Seq','Description','Screenshots','Status'];
  constructor() { }

  ngOnInit(): void {
  }

}
