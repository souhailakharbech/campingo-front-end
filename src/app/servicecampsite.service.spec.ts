import { TestBed } from '@angular/core/testing';

import { ServicecampsiteService } from './servicecampsite.service';

describe('ServicecampsiteService', () => {
  let service: ServicecampsiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecampsiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
