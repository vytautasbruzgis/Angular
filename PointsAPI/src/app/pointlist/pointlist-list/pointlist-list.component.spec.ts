import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointlistListComponent } from './pointlist-list.component';

describe('PointlistListComponent', () => {
  let component: PointlistListComponent;
  let fixture: ComponentFixture<PointlistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointlistListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointlistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
