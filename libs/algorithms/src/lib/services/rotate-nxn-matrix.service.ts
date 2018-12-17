import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RotateNxnMatrixService {
  constructor() {}

  public rotateExtraSpace(matrix: number[][]) {
    const b = new Array(matrix.length).fill(0).map(() => new Array(matrix.length).fill(0));

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        b[j][matrix.length - 1 - i] = matrix[i][j];
      }
    }
    return b;
  }

  public rotateInPlace(matrix: number[][]): any {
    // tslint:disable
    debugger;
    // reverse the rows
    matrix = matrix.reverse();

    // swap the symmetric elements
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < i; j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  }
}
