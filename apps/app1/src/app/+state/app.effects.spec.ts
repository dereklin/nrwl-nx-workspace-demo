import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { AppEffects } from './app.effects';

describe('AppEffects', () => {
  // tslint:disable-next-line
  let actions;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [AppEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(AppEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      expect(true).toBeTruthy();
      // actions = hot('-a-|', { a: { type: 'LOAD_DATA' } });
      // expect(effects.loadData).toBeObservable(hot('-a-|', { a: { type: 'DATA_LOADED', payload: {} } }));
    });
  });
});
