import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-passed',
  templateUrl: './top-passed.component.html',
  styleUrls: ['./top-passed.component.css']
})
export class TopPassedComponent implements OnInit {
  pagetitle="Top Passed Module(s)";
  constructor() { }

  ngOnInit(): void {
  }

}
