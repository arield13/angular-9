import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EmployeeComponent } from './employee-data/employee/employee.component';
import { EmployeeListComponent } from './employee-data/employee-list/employee-list.component';
import { FiilterTable } from './classes/fiilter-table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NotFoundComponent } from './defaultComponent/not-found/not-found.component';
import { PathLocationStrategy, LocationStrategy  } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDataComponent,
    EmployeeComponent,
    EmployeeListComponent,
    FiilterTable,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  providers: [{provide : LocationStrategy , useClass: PathLocationStrategy}],
  bootstrap: [AppComponent],
  exports: [
   FiilterTable
  ]
})
export class AppModule { }
