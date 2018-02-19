import { ApolloGameModule } from './apollo-game.module';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';

describe('ApolloGameModule', () => {
  it('should work', () => {
    expect(new ApolloGameModule({} as Apollo, {} as HttpLink)).toBeDefined();
  });
});
