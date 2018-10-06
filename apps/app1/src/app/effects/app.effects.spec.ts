import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AppEffects } from './app.effects';
import { TestScheduler } from 'rxjs/testing';
import * as fromAppActions from '../actions/app.actions';
import { throttleTime } from 'rxjs/operators';

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: AppEffects;
  let myScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(AppEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should fail because it matches with only one action', () => {
    myScheduler = new TestScheduler((a, b) => expect(a).toEqual(b));
    myScheduler.run((helpers) => {
      const action = new fromAppActions.LoadApps();
      const completion = new fromAppActions.FetchData();
      actions$ = helpers.hot('-a', { a: action });

      helpers.expectObservable(effects.load$.pipe(throttleTime(1, myScheduler))).toBe('300ms -(b)', { b: completion });
    });
  });

  it('should pass because it matches with two expected actions', () => {
    myScheduler = new TestScheduler((a, b) => expect(a).toEqual(b));
    myScheduler.run((helpers) => {
      const action = new fromAppActions.LoadApps();
      const completion1 = new fromAppActions.FetchData();
      const completion2 = new fromAppActions.ShowWelcome();
      actions$ = helpers.hot('-a', { a: action });

      helpers
        .expectObservable(effects.load$.pipe(throttleTime(1, myScheduler)))
        .toBe('300ms -(bc)', { b: completion1, c: completion2 });
    });
  });
});
