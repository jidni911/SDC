import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsellerPartsComponent } from './topseller-parts.component';

describe('TopsellerPartsComponent', () => {
  let component: TopsellerPartsComponent;
  let fixture: ComponentFixture<TopsellerPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopsellerPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopsellerPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
