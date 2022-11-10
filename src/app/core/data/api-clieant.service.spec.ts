import { TestBed } from '@angular/core/testing';

import { ApiClieantService } from './api-clieant.service';

describe('ApiClieantService', () => {
  let service: ApiClieantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiClieantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
