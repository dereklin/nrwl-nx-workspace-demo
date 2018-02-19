import { LearnGraphqlModule } from './learn-graphql.module';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';

describe('LearnGraphqlModule', () => {
  it('should work', () => {
    expect(new LearnGraphqlModule({} as Apollo, {} as HttpLink)).toBeDefined();
  });
});
