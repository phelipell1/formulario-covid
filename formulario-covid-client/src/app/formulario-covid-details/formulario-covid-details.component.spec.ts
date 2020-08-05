import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCovidDetailsComponent } from './formulario-covid-details.component';

describe('FormularioCovidDetailsComponent', () => {
  let component: FormularioCovidDetailsComponent;
  let fixture: ComponentFixture<FormularioCovidDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCovidDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCovidDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
