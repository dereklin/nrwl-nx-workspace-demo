import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';

import { AppApolloModule } from './app-apollo.module';
import { NgZone } from '@angular/core';

describe('AppApolloModule', () => {
  let ngZone: NgZone;

  beforeEach(() => {
    ngZone = {
      run: jest.fn(cb => cb()),
    } as any;
  });
  it('should work', () => {
    expect(new AppApolloModule(new Apollo(ngZone), new HttpLink({} as HttpClient))).toBeDefined();
  });
});
