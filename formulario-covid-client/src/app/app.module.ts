import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFormularioCovidComponent } from './create-formulario-covid/create-formulario-covid.component';
import { FormularioCovidDetailsComponent } from './formulario-covid-details/formulario-covid-details.component';
import { FormularioCovidListComponent } from './formulario-covid-list/formulario-covid-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateFormularioComponent } from './update-formulario/update-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFormularioCovidComponent,
    FormularioCovidDetailsComponent,
    FormularioCovidListComponent,
    UpdateFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
