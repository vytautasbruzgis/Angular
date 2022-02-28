import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import newPointList from 'src/app/models/new_pointlist.model';
import { Router } from '@angular/router';
import { PointlistService } from 'src/app/services/pointlist.service';
//
@Component({
  selector: 'app-pointlist-list',
  templateUrl: './pointlist-list.component.html',
  styleUrls: ['./pointlist-list.component.scss']
})
export class PointlistListComponent implements OnInit {

  public pointlistsInput: newPointList[] = [];

  constructor(private stateService: StateService,
     private router: Router,
     private pointListService: PointlistService) { }

  ngOnInit(): void {
    this.stateService.pointlistsLoadAll();
    this.stateService.pointlists$.subscribe(
      (pointlists) => {this.pointlistsInput = pointlists;},
      (error) => {console.log(error)}
    );
  }
  btnClick(id: number){
    this.router.navigateByUrl('/pointlist/' + id);
  };
  
  deletePointList(id: number){
    this.stateService.deletePointList(id);
    this.stateService.pointlists$.subscribe(
      (pointlists) => {this.pointlistsInput = pointlists;},
      (error) => {console.log(error)}
    );
  }
}
