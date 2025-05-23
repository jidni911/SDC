import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsellerClothingComponent } from './topseller-clothing.component';

describe('TopsellerClothingComponent', () => {
  let component: TopsellerClothingComponent;
  let fixture: ComponentFixture<TopsellerClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopsellerClothingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopsellerClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
