import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaIdComponent } from './carta-id.component';

describe('CartaIdComponent', () => {
  let component: CartaIdComponent;
  let fixture: ComponentFixture<CartaIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
