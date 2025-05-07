import { TestBed } from '@angular/core/testing';

import { DestinacionesMainService } from './destinaciones-main.service';

describe('DestinacionesMainService', () => {
  let service: DestinacionesMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinacionesMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
