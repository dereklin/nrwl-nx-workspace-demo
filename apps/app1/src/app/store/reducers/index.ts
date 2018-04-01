import { ActionReducerMap, createFeatureSelector, ActionReducer } from '@ngrx/store';
import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import { environment } from '../../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  public serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}

export function stateSetter(myReducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action: any) => {
    if (action.type === 'SET_ROOT_STATE') {
      return action.payload;
    }
    return myReducer(state, action);
  };
}

export const metaReducers: any = environment.production ? [] : [storeFreeze, stateSetter];
