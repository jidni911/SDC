import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeMessengerComponent } from './bike-messenger.component';

describe('BikeMessengerComponent', () => {
  let component: BikeMessengerComponent;
  let fixture: ComponentFixture<BikeMessengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeMessengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
