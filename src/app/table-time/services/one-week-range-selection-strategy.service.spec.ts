import { TestBed } from '@angular/core/testing';

import { OneWeekRangeSelectionStrategyService } from './one-week-range-selection-strategy.service';

describe('OneWeekRangeSelectionStrategyService', () => {
  let service: OneWeekRangeSelectionStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneWeekRangeSelectionStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
