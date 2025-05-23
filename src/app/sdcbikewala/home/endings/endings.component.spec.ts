import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndingsComponent } from './endings.component';

describe('EndingsComponent', () => {
  let component: EndingsComponent;
  let fixture: ComponentFixture<EndingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
