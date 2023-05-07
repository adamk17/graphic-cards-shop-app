import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressFieldComponent } from './adress-field.component';

describe('AdressFieldComponent', () => {
  let component: AdressFieldComponent;
  let fixture: ComponentFixture<AdressFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdressFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
