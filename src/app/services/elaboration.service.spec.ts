import { TestBed } from '@angular/core/testing';

import { ElaborationService } from './elaboration.service';

describe('ElaborationService', () => {
  let service: ElaborationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElaborationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fromStringToArrayOfNumbers should create an array of numbers', () => {
    expect(service.fromStringToArrayOfNumbers('uh 1 h 22 3')).toEqual([1, 22, 3])
  });

  it('filterAnomalies should create clamp array with top, bottom value', () => {
    expect(service.filterAnomalies([1, 30, 80, 2, 9, -500], 50, -50)).toEqual([1, 30, 50, 2, 9, -50])
  });

});
