import * as fromServices from '../services';
import { MovieResolver } from '@nrwl-nx-workspace-demo';

export const providers = [
  ...fromServices.services,
  MovieResolver
]