import { TestBed } from '@angular/core/testing';

import { JsonTestService } from './json-test.service';

describe('JsonTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonTestService = TestBed.get(JsonTestService);
    expect(service).toBeTruthy();
  });
});
