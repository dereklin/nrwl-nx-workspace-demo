import { ApolloGameModule } from './apollo-game.module';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { HttpClient } from '@angular/common/http';

describe('ApolloGameModule', () => {
  it('should work', () => {
    expect(new ApolloGameModule(new Apollo(),
    new HttpLink({} as HttpClient))).toBeDefined();
  });
});
