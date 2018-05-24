import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { GC_AUTH_TOKEN, GC_USER_ID } from '../constants';

// 1
@Injectable()
export class AuthService {
  // 2
  private userId: string = null;

  // 3
  private _isAuthenticated = new BehaviorSubject(false);

  constructor() {}

  // 4
  get isAuthenticated(): Observable<any> {
    return this._isAuthenticated.asObservable();
  }
  // 5
  public saveUserData(id: string, token: string) {
    localStorage.setItem(GC_USER_ID, id);
    localStorage.setItem(GC_AUTH_TOKEN, token);
    this.setUserId(id);
  }

  // 6
  public setUserId(id: string) {
    this.userId = id;

    this._isAuthenticated.next(true);
  }
  // 7
  public logout() {
    localStorage.removeItem(GC_USER_ID);
    localStorage.removeItem(GC_AUTH_TOKEN);
    this.userId = null;

    this._isAuthenticated.next(false);
  }

  // 8
  public autoLogin() {
    const id = localStorage.getItem(GC_USER_ID);

    if (id) {
      this.setUserId(id);
    }
  }
}
