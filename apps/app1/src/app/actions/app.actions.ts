import { Action } from '@ngrx/store';

export enum AppActionTypes {
  LoadAppsSimple = '[App] Load Apps Simple',
  LoadApps = '[App] Load Apps',
  FetchData = '[App] Fetch Data',
  ShowWelcome = '[App] Show Welcome'
}

export class LoadAppsSimple implements Action {
  public readonly type = AppActionTypes.LoadAppsSimple;
}

export class LoadApps implements Action {
  public readonly type = AppActionTypes.LoadApps;
}

export class FetchData implements Action {
  public readonly type = AppActionTypes.FetchData;
}

export class ShowWelcome implements Action {
  public readonly type = AppActionTypes.ShowWelcome;
}

export type AppActions = LoadApps | FetchData | ShowWelcome;
