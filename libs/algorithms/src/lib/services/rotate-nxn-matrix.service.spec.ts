import { TestBed } from '@angular/core/testing';

import { RotateNxnMatrixService } from './rotate-nxn-matrix.service';

describe('RotateNxnMatrixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RotateNxnMatrixService = TestBed.get(RotateNxnMatrixService);
    expect(service).toBeTruthy();
  });
});
