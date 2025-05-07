import { TestBed } from '@angular/core/testing';

import { DestinacionesDestinosService } from './destinaciones-destinos.service';

describe('DestinacionesDestinosService', () => {
  let service: DestinacionesDestinosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinacionesDestinosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
