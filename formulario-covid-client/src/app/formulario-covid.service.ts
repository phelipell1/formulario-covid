import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioCovidService {

  private baseUrl = 'http://localhost:8080/rest/formulario-covid/formulario';
  constructor(private http: HttpClient) { }

  getFormulario(id_formulario: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id_formulario}`)
  }

  createFormulario(formulario: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, formulario);
  }

  updateFormulario(id_formulario: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id_formulario}`, value);
  }

  deleteFormulario(id_formulario: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id_formulario}`, { responseType: 'text' });
  }

  getFormularioList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
