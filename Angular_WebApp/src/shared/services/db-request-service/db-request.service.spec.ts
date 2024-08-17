import { TestBed } from '@angular/core/testing';

import { DBRequestService } from './db-request.service';

describe('DBRequestService', () => {
  let service: DBRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DBRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
