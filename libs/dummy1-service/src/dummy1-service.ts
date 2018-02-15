import { Injectable } from '@angular/core';

@Injectable()
export class Dummy1Service {
  public sayHello(name) {
    return `Hello ${name}`;
  }
}
