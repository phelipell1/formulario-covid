import { FormularioCovidDetailsComponent } from '../formulario-covid-details/formulario-covid-details.component';
import { Observable } from "rxjs";
import { FormularioCovidService } from '../formulario-covid.service';
import { Formulario } from '../formulario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-covid-list',
  templateUrl: './formulario-covid-list.component.html',
  styleUrls: ['./formulario-covid-list.component.css']
})
export class FormularioCovidListComponent implements OnInit {
  formulario: any;

  constructor(private formularioCovidService: FormularioCovidService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.formulario = this.formularioCovidService.getFormularioList();
  }

  deleteFormulario(id_formulario: number){
    this.formularioCovidService.deleteFormulario(id_formulario)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  formularioDetails(id_formulario: number){
    this.router.navigate(['details',id_formulario]);
  }

}
