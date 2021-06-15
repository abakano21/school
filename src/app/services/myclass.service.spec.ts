import { TestBed } from '@angular/core/testing';

import { MyclassService } from './myclass.service';

describe('MyclassService', () => {
  let service: MyclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
