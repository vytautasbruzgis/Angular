import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PointlistService } from './pointlist.service';
import newPointList from '../models/new_pointlist.model';
import PointCreate from '../models/point-create.model';
import { PointService } from './point.service';
import Point from '../models/point.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  // We will use this to transmit updated Todos
  public selectedPointListId: number = 0;
  private pointlists: newPointList[] = [];
  private currentPointList: newPointList = {
    points: [],
    id: 0,
    name: ''
  };
  public emptyPointListPoints: Point[] = []

  public pointlists$ = new BehaviorSubject<newPointList[]>([]);
  public pointlist$ = new BehaviorSubject<newPointList>(this.currentPointList);
  public selectedPointListId$ = new BehaviorSubject<number>(this.selectedPointListId);


  constructor(
    private pointlistService: PointlistService,
    private pointService: PointService
    ) {}

  public pointlistsLoadAll() {
    this.pointlistService.getAll().subscribe(
      (pointlists) => {
          this.pointlists = pointlists;
          this.pointlists$.next(this.pointlists);
      },
      (error) => {console.log(error)}
    );
  }
  public pointlistGetData(id: number) {
    this.pointlistService.get(id).subscribe(
      (pointlist) => {
        this.currentPointList = pointlist;
        this.pointlist$.next(this.currentPointList);
      },
      (error) => {console.log(error)}
    );
  }
  public deletePointList(id: number) {
    this.pointlistService.delete(id).subscribe(
      () => {
        this.pointlists = this.pointlists.filter(x => x.id != id);
        console.log(this.pointlists);
        this.pointlists$.next(this.pointlists);
      },
      (error) => {console.log(error)}
    );
  }

  public createPoint(pointCreate: PointCreate) {
    if (pointCreate.pointListId != 0) {
      this.pointService.createNewPoint(pointCreate).subscribe(
        (point) => {
          this.currentPointList.points.push(point);
          this.pointlist$.next(this.currentPointList);
        },
        (error) => {console.log(error);}
      );
    } else {
      let emptyPoint: Point = {
        x_Coordinate: pointCreate.x_coordinate,
        y_Coordinate: pointCreate.y_coordinate,
        pointListId: 0,
        id: 0
      }
      this.emptyPointListPoints.push( emptyPoint );
    }
    
  }
  // public create(todoCreate: TodoCreate) {
  //   this.todosService.create(todoCreate).subscribe((todo) => {
     
  //     this.todos.push(todo);

  //     this.todos$.next(this.todos);
  //   });
  // }

  // public delete(id: number) {
  //   this.todosService.delete(id).subscribe(() => {
  //     this.todos = this.todos.filter((t) => t.id !== id);
  //     this.todos$.next(this.todos);
  //   });
  // }
}