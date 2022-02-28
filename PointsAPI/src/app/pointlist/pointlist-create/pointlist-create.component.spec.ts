import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointlistCreateComponent } from './pointlist-create.component';

describe('PointlistCreateComponent', () => {
  let component: PointlistCreateComponent;
  let fixture: ComponentFixture<PointlistCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointlistCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointlistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
