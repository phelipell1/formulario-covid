import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormularioComponent } from './update-formulario.component';

describe('UpdateFormularioComponent', () => {
  let component: UpdateFormularioComponent;
  let fixture: ComponentFixture<UpdateFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
