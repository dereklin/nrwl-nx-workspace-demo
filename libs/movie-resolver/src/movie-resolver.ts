import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class MovieResolver implements Resolve<any> {
  constructor(private http: HttpClient) {}

  public resolve() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=1c27e642d8cedef632716f85732ec043').pipe(
      map((data: any) => {
        return data && data.results ? data.results : [];
      })
    );
  }
}
