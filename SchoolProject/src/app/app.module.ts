import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolListComponent } from './school/school-list/school-list.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { HeaderComponent } from './header/header.component';
import { AlldataComponent } from './content/alldata/alldata.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { SchoolCreateComponent } from './school/school-create/school-create.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolListComponent,
    StudentListComponent,
    HeaderComponent,
    AlldataComponent,
    StudentCreateComponent,
    SchoolCreateComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
