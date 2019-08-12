import { ApolloGameModule } from './apollo-game.module';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { HttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';

describe('ApolloGameModule', () => {
  let ngZone: NgZone;

  beforeEach(() => {
    ngZone = {
      run: jest.fn((cb) => cb()),
    } as any;
  });

  it('should work', () => {
    expect(new ApolloGameModule(new Apollo(ngZone), new HttpLink({} as HttpClient))).toBeDefined();
  });
});
