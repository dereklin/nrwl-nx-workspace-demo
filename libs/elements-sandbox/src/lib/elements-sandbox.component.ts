import { Component, OnInit, ChangeDetectionStrategy, Injector } from '@angular/core';
import { PopupService } from './popup.service';
import { createCustomElement } from '@angular/elements';
import { PopupComponent } from './popup.component';

@Component({
  selector: 'nrwl-nx-workspace-demo-elements-sandbox',
  templateUrl: './elements-sandbox.component.html',
  styleUrls: ['./elements-sandbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementsSandboxComponent implements OnInit {
  constructor(injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }

  public ngOnInit() {}
}
