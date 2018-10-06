import { Action } from '@ngrx/store';

export enum AppActionTypes {
  LoadApps = '[App] Load Apps',
  FetchData = '[App] Fetch Data',
  ShowWelcome = '[App] Show Welcome'
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
