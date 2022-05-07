import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoincidenciasComponent } from './coincidencias.component';

describe('CoincidenciasComponent', () => {
  let component: CoincidenciasComponent;
  let fixture: ComponentFixture<CoincidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoincidenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoincidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
