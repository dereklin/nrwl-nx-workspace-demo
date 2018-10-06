import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { getTestScheduler } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as fromAppActions from '../actions/app.actions';
import { AppEffects } from './app.effects';

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(AppEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should pass', () => {
    getTestScheduler().run((helpers) => {
      const action = new fromAppActions.LoadApps();
      const completion1 = new fromAppActions.FetchData();
      const completion2 = new fromAppActions.ShowWelcome();
      actions$ = helpers.hot('-a', { a: action });
      helpers.expectObservable(effects.load$).toBe('300ms -(bc)', { b: completion1, c: completion2 });
    });
  });

  it('should pass simple', () => {
    getTestScheduler().run((helpers) => {
      const action = new fromAppActions.LoadAppsSimple();
      const completion1 = new fromAppActions.FetchData();
      const completion2 = new fromAppActions.ShowWelcome();
      actions$ = helpers.hot('-a', { a: action });
      helpers.expectObservable(effects.simple$).toBe('-(bc)', { b: completion1, c: completion2 });
    });
  });
});
