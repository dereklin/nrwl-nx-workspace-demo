import { HttpClient } from '@angular/common/http';

import { MovieResolver } from './movie-resolver';

describe('MoviesResolver', () => {
  it('should work', () => {
    expect(new MovieResolver({} as HttpClient)).toBeDefined();
  });
});
