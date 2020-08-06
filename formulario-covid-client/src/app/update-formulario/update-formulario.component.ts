import { Component, OnInit } from '@angular/core';
import { Formulario } from '../formulario';
import { Router, ActivatedRoute } from '@angular/router';
import { FormularioCovidService } from '../formulario-covid.service';

@Component({
  selector: 'app-update-formulario',
  templateUrl: './update-formulario.component.html',
  styleUrls: ['./update-formulario.component.css']
})
export class UpdateFormularioComponent implements OnInit {

  id_formulario: number;
  formulario: Formulario;

  constructor(private route: ActivatedRoute, private router: Router,
    private formularioService:FormularioCovidService ) { }

  ngOnInit(){
    this.formulario = new Formulario();

    this.id_formulario = this.route.snapshot.params['id_formulario'];
    this.formularioService.getFormulario(this.id_formulario)
    .subscribe(data =>{
      console.log(data)
      this.formulario = data;
    }, error => console.log(error));
  }

  updateFormulario(){
    this.formularioService.updateFormulario(this.id_formulario, this.formulario)
    .subscribe(data => console.log(data), error => console.error(error));
    this.formulario = new Formulario();
    this.gotoList();
  }

  onSubmit(){
    this.updateFormulario();
  }

  gotoList(){
    this.router.navigate(['/formulario']);
  }

}
