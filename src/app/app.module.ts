import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RunhistoryComponent } from './components/runhistory/runhistory.component';
import { TopPassedComponent } from './components/top-passed/top-passed.component';
import { TopFailedComponent } from './components/top-failed/top-failed.component';
import { CurrentMonthComponent } from './components/current-month/current-month.component';
import { LastQuarterComponent } from './components/last-quarter/last-quarter.component';
import { CustomComponent } from './components/custom/custom.component';


const routes : Routes =[
  {path: "dashboard", component:DashboardComponent},
  {path: "dashboard/:refresh", component:DashboardComponent},
  {path: "dashboard/:timeline", component:DashboardComponent},
  {path: "runHistory", component:RunhistoryComponent},
  {path: "topFailed", component:TopFailedComponent},
  {path: "topPassed", component:TopPassedComponent},
  {path: "currentMonth", component:CurrentMonthComponent},
  {path: "lastQuater", component:LastQuarterComponent},
  {path: "customTimeline", component:CustomComponent},
  {path:'',redirectTo:'/dashboard', pathMatch: 'full'},
  {path:'**',redirectTo:'/dashboard', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashboardComponent,
    RunhistoryComponent,
    TopPassedComponent,
    TopFailedComponent,
    CurrentMonthComponent,
    LastQuarterComponent,
    CustomComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
