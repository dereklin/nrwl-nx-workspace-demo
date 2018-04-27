import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';

import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { HttpClientService } from '@nrwl-nx-workspace-demo/http-client-service';
import { HTTPSERVICESETTINGS } from '@nrwl-nx-workspace-demo/app-tokens';
import { HttpService } from '@nrwl-nx-workspace-demo/app-interfaces';

@Injectable()
export class SimpleHttpService implements HttpService {
  constructor(
    private httpClientService: HttpClientService,
    @Inject(HTTPSERVICESETTINGS) private httpServiceSettings: any
  ) {}

  /**
   * Construct a complete url and post request
   * @param service
   * @param method
   * @param request
   * @returns {Observable<any>}
   */
  public post(service: string, method: string, request: any): Observable<any> {
    console.log('httpServiceSettings', this.httpServiceSettings);
    // tslint:disable
    return of({
      svg:
        'CiAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgogIDxwb2x5bGluZQogICAgIGZpbGw9Im5vbmUiCiAgICAgc3Ryb2tlPSIjMDA3NGQ5IgogICAgIHN0cm9rZS13aWR0aD0iMiIKICAgICBwb2ludHM9IgogICAgICAgMDAsMTIwCiAgICAgICAyMCw2MAogICAgICAgNDAsODAKICAgICAgIDYwLDIwCiAgICAgICA4MCw4MAogICAgICAgMTAwLDgwCiAgICAgICAxMjAsNjAKICAgICAgIDE0MCwxMDAKICAgICAgIDE2MCw5MAogICAgICAgMTgwLDgwCiAgICAgICAyMDAsIDExMAogICAgICAgMjIwLCAxMAogICAgICAgMjQwLCA3MAogICAgICAgMjYwLCAxMDAKICAgICAgIDI4MCwgMTAwCiAgICAgICAzMDAsIDQwCiAgICAgICAzMjAsIDAKICAgICAgIDM0MCwgMTAwCiAgICAgICAzNjAsIDEwMAogICAgICAgMzgwLCAxMjAKICAgICAgIDQwMCwgNjAKICAgICAgIDQyMCwgNzAKICAgICAgIDQ0MCwgODAKICAgICAiCiAgIC8+Cjwvc3ZnPgogIA=='
    });
  }

  private paramaterizeJson(data) {
    return Object.keys(data)
      .map((k) => {
        let value = data[k];
        if (typeof value === 'object') {
          value = JSON.stringify(value);
        }
        return encodeURIComponent(k) + '=' + encodeURIComponent(value);
      })
      .join('&');
  }
}
