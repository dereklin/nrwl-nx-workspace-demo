import { TestBed } from '@angular/core/testing';

import { FirstUniqueCharacterInStringService } from './first-unique-character-in-string.service';

describe('FirstUniqueCharacterInStringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstUniqueCharacterInStringService = TestBed.get(FirstUniqueCharacterInStringService);
    expect(service).toBeTruthy();
  });

  it('should be return 0', () => {
    const service: FirstUniqueCharacterInStringService = TestBed.get(FirstUniqueCharacterInStringService);
    const s = 'leetcode';
    expect(service.find(s)).toEqual(0);
  });

  it('should be return 2', () => {
    const service: FirstUniqueCharacterInStringService = TestBed.get(FirstUniqueCharacterInStringService);
    const s = 'lovleetcode';
    expect(service.find(s)).toEqual(2);
  });

  it('should be return -1', () => {
    const service: FirstUniqueCharacterInStringService = TestBed.get(FirstUniqueCharacterInStringService);
    const s = 'leetcodeleetcode';
    expect(service.find(s)).toEqual(-1);
  });
});
