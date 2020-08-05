import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFormularioCovidComponent } from './create-formulario-covid/create-formulario-covid.component';
import { FormularioCovidDetailsComponent } from './formulario-covid-details/formulario-covid-details.component';
import { FormularioCovidListComponent } from './formulario-covid-list/formulario-covid-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFormularioCovidComponent,
    FormularioCovidDetailsComponent,
    FormularioCovidListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
