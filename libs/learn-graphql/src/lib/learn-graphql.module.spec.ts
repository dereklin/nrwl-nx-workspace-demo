import { LearnGraphqlModule } from './learn-graphql.module';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { HttpClient } from '@angular/common/http';

describe('LearnGraphqlModule', () => {
  it('should work', () => {
    expect(new LearnGraphqlModule(new Apollo(), new HttpLink({} as HttpClient))).toBeDefined();
  });
});
