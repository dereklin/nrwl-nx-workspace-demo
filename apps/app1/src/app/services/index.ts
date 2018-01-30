import { environment } from '../../environments/environment';
import { SessionResolver } from '@nrwl-nx-workspace-demo/session-resolver';
import { HttpClientService } from '@nrwl-nx-workspace-demo/http-client-service';
import { HTTPSERVICE, HTTPSERVICESETTINGS } from '@nrwl-nx-workspace-demo/app-tokens';
import { SimpleHttpService } from '@nrwl-nx-workspace-demo/simple-http-service';

export * from '@nrwl-nx-workspace-demo/session-resolver';
export * from '@nrwl-nx-workspace-demo/http-client-service';

export const services: any[] = [
  SessionResolver,
  HttpClientService,
  {
    provide: HTTPSERVICE,
    useClass: SimpleHttpService
  },
  { provide: HTTPSERVICESETTINGS, useValue: environment.httpServiceSettings }
];
