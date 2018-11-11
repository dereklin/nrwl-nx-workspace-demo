import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
// tslint:disable
@Component({
  selector: 'nrwl-nx-workspace-demo-popup',
  template: `
    <span>Popup: {{message}}</span>
    <button (click)="closed.next()">&#x2716;</button>
  `,
  host: {
    '[@state]': 'state'
  },
  animations: [
    trigger('state', [
      state('opened', style({ transform: 'translateY(0%)' })),
      state('void, closed', style({ transform: 'translateY(100%)', opacity: 0 })),
      transition('* => *', animate('100ms ease-in'))
    ])
  ],
  styles: [
    `
      :host {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: #009cff;
        height: 48px;
        padding: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid black;
        font-size: 24px;
      }

      button {
        border-radius: 50%;
      }
    `
  ]
})
export class PopupComponent {
  private state: 'opened' | 'closed' = 'closed';

  @Input()
  set message(message: string) {
    this._message = message;
    this.state = 'opened';
  }
  get message(): string {
    return this._message;
  }
  public _message: string;

  @Output()
  public closed = new EventEmitter();
}
