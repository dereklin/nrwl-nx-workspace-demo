import { AppApolloModule } from './app-apollo.module';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';

describe('AppApolloModule', () => {
  it('should work', () => {
    expect(new AppApolloModule({} as Apollo, {} as HttpLink)).toBeDefined();
  });
});
