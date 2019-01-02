import { TestBed } from '@angular/core/testing';

import { ActivityListService } from './activity-list.service';

describe('ActivityListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityListService = TestBed.get(ActivityListService);
    expect(service).toBeTruthy();
  });
});
