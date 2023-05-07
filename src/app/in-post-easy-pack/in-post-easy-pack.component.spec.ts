import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InPostEasyPackComponent } from './in-post-easy-pack.component';

describe('InPostEasyPackComponent', () => {
  let component: InPostEasyPackComponent;
  let fixture: ComponentFixture<InPostEasyPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InPostEasyPackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InPostEasyPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
