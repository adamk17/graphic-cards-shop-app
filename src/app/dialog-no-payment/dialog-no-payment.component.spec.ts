import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNoPaymentComponent } from './dialog-no-payment.component';

describe('DialogNoPaymentComponent', () => {
  let component: DialogNoPaymentComponent;
  let fixture: ComponentFixture<DialogNoPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNoPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNoPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
