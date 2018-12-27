import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsSandboxComponent } from './elements-sandbox.component';
import { PopupService } from './popup.service';
import { NgModule } from '@angular/core';
import { PopupComponent } from './popup.component';

@NgModule({
  declarations: [PopupComponent],
  entryComponents: [PopupComponent]
})
class TestModule {}

describe('ElementsSandboxComponent', () => {
  let component: ElementsSandboxComponent;
  let fixture: ComponentFixture<ElementsSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElementsSandboxComponent],
      providers: [PopupService],
      imports: [TestModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
