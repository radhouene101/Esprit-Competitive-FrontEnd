import { TestBed } from '@angular/core/testing';

import { FirstAPIService } from './first-api.service';

describe('FirstAPIService', () => {
  let service: FirstAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
