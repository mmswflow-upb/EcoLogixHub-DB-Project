import { TestBed } from '@angular/core/testing';

import { SessionGlobalDataService } from './session-global-data.service';

describe('SessionGlobalDataService', () => {
  let service: SessionGlobalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionGlobalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
