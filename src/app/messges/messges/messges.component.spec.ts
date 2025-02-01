import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessgesComponent } from './messges.component';

describe('MessgesComponent', () => {
  let component: MessgesComponent;
  let fixture: ComponentFixture<MessgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
