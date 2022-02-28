import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PointListComponent } from './points/point-list/point-list.component';
import { PointlistListComponent } from './pointlist/pointlist-list/pointlist-list.component';
import { PointlistComponent } from './pointlist/pointlist/pointlist.component';
import { PointlistCreateComponent } from './pointlist/pointlist-create/pointlist-create.component';
import { PointCreateComponent } from './points/point-create/point-create.component';
import { SinglepageComponent } from './singlepage/singlepage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PointListComponent,
    PointlistListComponent,
    PointlistComponent,
    PointCreateComponent,
    PointlistCreateComponent,
    SinglepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
