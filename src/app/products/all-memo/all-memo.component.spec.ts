import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMemoComponent } from './all-memo.component';

describe('AllMemoComponent', () => {
  let component: AllMemoComponent;
  let fixture: ComponentFixture<AllMemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
