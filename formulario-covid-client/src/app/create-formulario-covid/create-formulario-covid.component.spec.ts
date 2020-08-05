import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormularioCovidComponent } from './create-formulario-covid.component';

describe('CreateFormularioCovidComponent', () => {
  let component: CreateFormularioCovidComponent;
  let fixture: ComponentFixture<CreateFormularioCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFormularioCovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormularioCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
