import { Component, OnInit } from '@angular/core';
import newPointList from '../models/new_pointlist.model';
import PointCreate from '../models/point-create.model';
import Point from '../models/point.model';
import PointListCreate from '../models/pointlist-create.model';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.scss']
})
export class SinglepageComponent implements OnInit {

  public selectedPointListId: number = 0;
  public pointLists: newPointList[] = [];
  public pointCreate: PointCreate = {
    x_coordinate: 0,
    y_coordinate: 0,
    pointListId: 0
  }
  public pointListCreate: PointListCreate = {name: ''}
  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.pointlistsLoadAll();
    this.stateService.pointlists$.subscribe(
      (loadedpointlists) => {this.pointLists = loadedpointlists;},
      (error) => {console.log(error)}
    );
  }
  public savePointList(){
    console.log("savePointList button pressed");
  }
  public createPoint(){
    console.log("pointCreate button pressed");
    this.pointCreate.pointListId = this.selectedPointListId;
    if (this.pointCreate.pointListId == 0) {
      let emptyPoint: Point = {
        id: 0, 
        x_Coordinate: this.pointCreate.x_coordinate,
        y_Coordinate: this.pointCreate.y_coordinate,
        pointListId: 0
    }
      this.stateService.emptyPointListPoints.push(emptyPoint);
    } else {
      this.stateService.createPoint(this.pointCreate);
    }
    
  }
  public changeSelectedPointListId(){
    console.log('selectedPointListId=' + this.selectedPointListId);
    this.stateService.selectedPointListId$.next(this.selectedPointListId);
  }

}
