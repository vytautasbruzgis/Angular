import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolListComponent } from './school/school-list/school-list.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { HeaderComponent } from './header/header.component';
import { AlldataComponent } from './content/alldata/alldata.component';
import { CreateComponent } from './student/create/create.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { SchoolCreateComponent } from './school/school-create/school-create.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolListComponent,
    StudentListComponent,
    HeaderComponent,
    AlldataComponent,
    CreateComponent,
    StudentCreateComponent,
    SchoolCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
