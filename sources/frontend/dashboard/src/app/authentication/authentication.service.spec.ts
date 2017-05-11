import { TestBed, inject } from '@angular/core/testing';

import { AtuthenticationService } from './authentication.service';

describe('AuthServeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtuthenticationService]
    });
  });

  it('should be created', inject([AtuthenticationService], (service: AtuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
