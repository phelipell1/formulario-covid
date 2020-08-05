import {FormularioCovidService } from '../formulario-covid.service';
import { Formulario } from '../formulario';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-formulario-covid',
  templateUrl: './create-formulario-covid.component.html',
  styleUrls: ['./create-formulario-covid.component.css']
})
export class CreateFormularioCovidComponent implements OnInit {

  formulario: Formulario = new Formulario();
  submitted = false;

  constructor(private formularioService: FormularioCovidService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newFormulario(): void {

    this.submitted = false;
    this.formulario = new Formulario();

  }

  save(){
    this.formularioService.createFormulario(this.formulario)
      .subscribe(data => console.log(data), error => console.log(error));
      this.formulario = new Formulario();
      this.gotoList();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/formulario']);
  }
}
