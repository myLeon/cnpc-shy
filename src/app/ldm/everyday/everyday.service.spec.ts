import { TestBed, inject } from '@angular/core/testing';

import { EverydayService } from './everyday.service';

describe('EverydayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EverydayService]
    });
  });

  it('should ...', inject([EverydayService], (service: EverydayService) => {
    expect(service).toBeTruthy();
  }));
});
