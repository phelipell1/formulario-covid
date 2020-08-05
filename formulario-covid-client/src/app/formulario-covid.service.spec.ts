import { TestBed } from '@angular/core/testing';

import { FormularioCovidService } from './formulario-covid.service';

describe('FormularioCovidService', () => {
  let service: FormularioCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
