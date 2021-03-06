import { RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from './store';
import { AppEffects } from './+state/app.effects';
import { Dummy1Service } from '@nrwl-nx-workspace-demo/dummy1-service';
import * as fromServices from './services';
import { MovieResolver } from '@nrwl-nx-workspace-demo/movie-resolver';
import { APP_BASE_HREF } from '@angular/common';

export const providers = [
  { provide: RouterStateSerializer, useClass: CustomSerializer },
  AppEffects,
  Dummy1Service,
  ...fromServices.services,
  MovieResolver,
  { provide: APP_BASE_HREF, useValue: '/' }
];
