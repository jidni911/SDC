import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMemoComponent } from './shop-memo.component';

describe('ShopMemoComponent', () => {
  let component: ShopMemoComponent;
  let fixture: ComponentFixture<ShopMemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
