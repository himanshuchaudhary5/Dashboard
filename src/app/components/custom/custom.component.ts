import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  pagetitle="Custom Timeline [From: Date - To: Date]";
  constructor() { }

  ngOnInit(): void {
  }

}
