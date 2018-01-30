import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';
import { HTTPSERVICE } from '@nrwl-nx-workspace-demo/app-tokens';
import { HttpService } from '@nrwl-nx-workspace-demo/app-interfaces';

@Injectable()
export class SessionResolver implements Resolve<any> {
  constructor(@Inject(HTTPSERVICE) private simpleHttpService: HttpService) {}

  public resolve() {
    return this.simpleHttpService.post('sessionService', 'getUserSession', {});
  }
}
