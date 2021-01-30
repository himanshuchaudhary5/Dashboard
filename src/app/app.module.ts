import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { SuiteComponent } from './components/suite/suite.component';
import { ModuleComponent } from './components/module/module.component';
import { TestCaseComponent } from './components/test-case/test-case.component';
import { TestStepsComponent } from './components/test-steps/test-steps.component';
import { RunhistoryService } from './services/runhistory.service';


const routes : Routes =[
  {path: "dashboard", component:DashboardComponent},
  {path: "dashboard/:refresh", component:DashboardComponent},
  {path: "dashboard/:timeline", component:DashboardComponent},
  {path: "runHistory", component:RunhistoryComponent},
  {path: "modules", component:ModuleComponent},
  {path: "testCase", component:TestCaseComponent},
  {path: "testStep", component:TestStepsComponent},
  {path: "topFailed", component:TopFailedComponent},
  {path: "topPassed", component:TopPassedComponent},
  {path: "currentMonth", component:CurrentMonthComponent},
  {path: "lastQuater", component:LastQuarterComponent},
  {path: "customTimeline", component:CustomComponent},
  {path: "suite/id", component:SuiteComponent},
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
    CustomComponent,
    SuiteComponent,
    ModuleComponent,
    TestCaseComponent,
    TestStepsComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,ChartsModule,MatTableModule,MatPaginatorModule,
  HttpClientModule],
  providers: [RunhistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
