import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-month',
  templateUrl: './current-month.component.html',
  styleUrls: ['./current-month.component.css']
})
export class CurrentMonthComponent implements OnInit {
  pagetitle="Current Month Execution(s)";
  constructor() { }

  ngOnInit(): void {
  }

}
