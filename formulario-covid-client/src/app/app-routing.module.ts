import { CreateFormularioCovidComponent } from './create-formulario-covid/create-formulario-covid.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioCovidListComponent } from './formulario-covid-list/formulario-covid-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'formularios', pathMatch: 'full'},
  {path: 'add', component: CreateFormularioCovidComponent },
  {path: 'formularios', component: FormularioCovidListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
