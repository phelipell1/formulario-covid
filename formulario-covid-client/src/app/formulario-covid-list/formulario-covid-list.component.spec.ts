import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCovidListComponent } from './formulario-covid-list.component';

describe('FormularioCovidListComponent', () => {
  let component: FormularioCovidListComponent;
  let fixture: ComponentFixture<FormularioCovidListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCovidListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCovidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
