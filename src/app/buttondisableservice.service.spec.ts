import { TestBed } from '@angular/core/testing';

import { ButtondisableserviceService } from './buttondisableservice.service';

describe('ButtondisableserviceService', () => {
  let service: ButtondisableserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtondisableserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
