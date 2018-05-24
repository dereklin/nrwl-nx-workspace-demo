import { Observable } from 'rxjs';

export interface HttpService {
  post(service: string, method: string, request: any): Observable<any>;
}
