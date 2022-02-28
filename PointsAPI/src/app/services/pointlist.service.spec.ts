import { TestBed } from '@angular/core/testing';

import { PointlistService } from './pointlist.service';

describe('PointlistService', () => {
  let service: PointlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
