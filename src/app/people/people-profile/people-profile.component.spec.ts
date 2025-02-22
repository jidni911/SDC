import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleProfileComponent } from './people-profile.component';

describe('PeopleProfileComponent', () => {
  let component: PeopleProfileComponent;
  let fixture: ComponentFixture<PeopleProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
