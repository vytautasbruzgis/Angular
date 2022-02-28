import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointlistListComponent } from './pointlist/pointlist-list/pointlist-list.component';
import { PointlistComponent } from './pointlist/pointlist/pointlist.component';
import { PointListComponent } from './points/point-list/point-list.component';
import { SinglepageComponent } from './singlepage/singlepage.component';


const routes: Routes = [
  { path: 'pointlists', component: PointlistListComponent},
  { path: 'pointlist/:id', component: PointlistComponent },
  { path: 'points', component: PointListComponent},
  { path: 'singlepage', component: SinglepageComponent},
  { path: '',   redirectTo: 'singlepage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
