import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignresetpassComponent } from './signresetpass.component';

describe('SignresetpassComponent', () => {
  let component: SignresetpassComponent;
  let fixture: ComponentFixture<SignresetpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignresetpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignresetpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
