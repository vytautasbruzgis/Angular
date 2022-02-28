import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import newPointList from 'src/app/models/new_pointlist.model';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-pointlist',
  templateUrl: './pointlist.component.html',
  styleUrls: ['./pointlist.component.scss']
})
export class PointlistComponent implements OnInit {

  // private routeId: number = 0;
  public pointListInput: newPointList = {
    id: 0,
    name: '',
    points: []
  }
public selectedPointListId: number = 0;
  constructor(
    //private route: ActivatedRoute, 
    private stateService: StateService) { }

  ngOnInit(): void {
    //var id = this.route.snapshot.paramMap.get('id') === null ? 0: this.route.snapshot.paramMap.get('id');
    //this.routeId = Number(id);
    console.log('selectedPointListId =' + this.selectedPointListId);
    if (this.selectedPointListId != 0 ){
        this.LoadPointListData(this.selectedPointListId);
    }
    this.stateService.pointlist$.subscribe(
      (pointlist) => {
        this.pointListInput = pointlist
      },
      (error) => {console.log(error)}
    );
    this.stateService.selectedPointListId$.subscribe(
      (selectedId) => {
        console.log('selectedPointListId subscription received, selectedPointListId =' + selectedId);
        this.selectedPointListId = selectedId;
        this.LoadPointListData(this.selectedPointListId);
      },
      (error) => {console.log(error)}
    );
  }

  private LoadPointListData(id: number){
    if (id != 0 ){
      this.stateService.pointlistGetData(id);
    } else {
      let pointList: newPointList = {
        id: 0,
        name: '', 
        points: this.stateService.emptyPointListPoints
      }
      this.stateService.pointlist$.next(pointList);
    }
  }
}
