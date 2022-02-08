import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopitemlistComponent } from './shopitemlist.component';

describe('ShopitemlistComponent', () => {
  let component: ShopitemlistComponent;
  let fixture: ComponentFixture<ShopitemlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopitemlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopitemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
