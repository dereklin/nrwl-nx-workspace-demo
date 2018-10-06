import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as fromAppActions from '../actions/app.actions';
import { debounceTime, switchMap, mergeMap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  @Effect()
  public load$: Observable<Action> = this.actions$.pipe(
    ofType(fromAppActions.AppActionTypes.LoadApps),
    debounceTime(300),
    mergeMap(() => {
      return [new fromAppActions.FetchData(), new fromAppActions.ShowWelcome()];
    })
  );

  @Effect()
  public simple$: Observable<Action> = this.actions$.pipe(
    ofType(fromAppActions.AppActionTypes.LoadAppsSimple),
    switchMap(() => {
      return [new fromAppActions.FetchData(), new fromAppActions.ShowWelcome()];
    })
  );

  constructor(private actions$: Actions) {}
}
