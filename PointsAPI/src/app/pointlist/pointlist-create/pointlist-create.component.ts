import { Component, OnInit } from '@angular/core';
import newPointList from 'src/app/models/new_pointlist.model';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-pointlist-create',
  templateUrl: './pointlist-create.component.html',
  styleUrls: ['./pointlist-create.component.scss']
})
export class PointlistCreateComponent implements OnInit {

  public pointListCreate = {} as newPointList;
  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    
  }

}
