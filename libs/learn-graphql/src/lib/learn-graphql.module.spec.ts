import { LearnGraphqlModule } from './learn-graphql.module';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { HttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';

describe('LearnGraphqlModule', () => {
  let ngZone: NgZone;

  beforeEach(() => {
    ngZone = {
      run: jest.fn(cb => cb()),
    } as any;
  });
  it('should work', () => {
    expect(new LearnGraphqlModule(new Apollo(ngZone), new HttpLink({} as HttpClient))).toBeDefined();
  });
});
