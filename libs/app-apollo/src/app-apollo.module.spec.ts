import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';

import { AppApolloModule } from './app-apollo.module';

describe('AppApolloModule', () => {
  it('should work', () => {
    expect(new AppApolloModule(new Apollo(), new HttpLink({} as HttpClient))).toBeDefined();
  });
});
