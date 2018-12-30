import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstUniqueCharacterInStringService {
  constructor() {}

  public find(s) {
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (s.indexOf(c) === s.lastIndexOf(c)) {
        return i;
      }
    }
    return -1;
  }

  public findWithAlph(s) {
    const arr = new Array(26).fill(0);

    for (const c of s) {
      const baseCharCode = 'a'.charCodeAt(0);
      const index = c.charCodeAt() - baseCharCode;
      arr[index]++;
    }

    for (let i = 0; i < s.length; i++) {
      const c = s.charAt(i);
      const baseCharCode = 'a'.charCodeAt(0);
      const index = c.charCodeAt() - baseCharCode;
      if (arr[index] === 1) {
        return i;
      }
    }
    return -1;
  }

  public findSlow(s) {
    for (let i = 0; i < s.length; i++) {
      const c = s.charAt(i);

      const regex = new RegExp(c, 'gi');
      // tslint:disable
      debugger;
      let result = regex.exec(s);
      const indexes = [];
      while (result) {
        indexes.push(result.index);
        result = regex.exec(s);
      }
      if (indexes.length === 1) {
        return i;
      }
    }
    return -1;
  }
}
