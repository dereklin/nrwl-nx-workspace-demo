import { SessionResolver } from './session-resolver';
import { HttpService } from '@nrwl-nx-workspace-demo/app-interfaces';
import { Observable, of } from 'rxjs';
import { TestBed, inject } from '@angular/core/testing';
import { HTTPSERVICE } from '@nrwl-nx-workspace-demo/app-tokens';

class MyHttpService implements HttpService {
  public post(service: string, method: string, request: any): Observable<any> {
    return of({});
  }
}

describe('SessionResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionResolver, { provide: HTTPSERVICE, useClass: MyHttpService }]
    });
  });

  it('should be created', inject([SessionResolver], (service: SessionResolver) => {
    expect(service).toBeTruthy();
  }));
});
