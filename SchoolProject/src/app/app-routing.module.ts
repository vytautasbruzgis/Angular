import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlldataComponent } from './content/alldata/alldata.component';
import { SchoolListComponent } from './school/school-list/school-list.component';

const routes: Routes = [
  { path: 'schools', component: SchoolListComponent},
  { path: 'alldata', component: AlldataComponent},
  { path: '',   redirectTo: '/alldata', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
