import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBadDataComponent } from './dialog-bad-data.component';

describe('DialogBadDataComponent', () => {
  let component: DialogBadDataComponent;
  let fixture: ComponentFixture<DialogBadDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBadDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBadDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
