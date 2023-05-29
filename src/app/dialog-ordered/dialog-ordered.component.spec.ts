import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOrderedComponent } from './dialog-ordered.component';

describe('DialogOrderedComponent', () => {
  let component: DialogOrderedComponent;
  let fixture: ComponentFixture<DialogOrderedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOrderedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOrderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
