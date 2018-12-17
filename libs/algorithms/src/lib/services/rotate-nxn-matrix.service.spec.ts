import { TestBed } from '@angular/core/testing';

import { RotateNxnMatrixService } from './rotate-nxn-matrix.service';

describe('RotateNxnMatrixService', () => {
  let service: RotateNxnMatrixService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(RotateNxnMatrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be rotate n x n matrix with extra space', () => {
    const anArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
    expect(service.rotateExtraSpace(anArray)).toEqual(expected);
  });

  it('should be rotate 3 by 3 matrix in place', () => {
    const anArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
    service.rotateInPlace(anArray);
    expect(anArray).toEqual(expected);
  });

  it('should be rotate 4 by 4 matrix in place', () => {
    const anArray = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
    const expected = [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]];
    service.rotateInPlace(anArray);
    expect(anArray).toEqual(expected);
  });
});
