import { TestBed } from '@angular/core/testing';

import { WalmartFormService  } from './walmart-form.service';

describe('WalmartFromService', () => {
  let service: WalmartFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalmartFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
