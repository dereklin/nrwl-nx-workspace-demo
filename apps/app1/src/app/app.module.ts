import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createInputTransfer, createNewHosts, removeNgStyles } from '@angularclass/hmr';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';
import { take } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { AppEffects } from './+state/app.effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromProviders from './app.providers';
import { metaReducers, reducers, State as AppState } from './store';

interface StoreType {
  state: AppState;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NxModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule,
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [...fromProviders.providers]
})
export class AppModule {
  constructor(private store: Store<AppState>, public appRef: ApplicationRef) {}
  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    if (store.state) {
      this.store.dispatch({
        type: 'SET_ROOT_STATE',
        payload: store.state
      });
    }

    if ('restoreInputValues' in store) {
      store.restoreInputValues();
    }
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    this.store.pipe(take(1)).subscribe((s) => (store.state = s));
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
