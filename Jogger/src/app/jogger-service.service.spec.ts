import { TestBed } from '@angular/core/testing';

import { JoggerServiceService } from './jogger-service.service';

describe('JoggerServiceService', () => {
  let service: JoggerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoggerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
