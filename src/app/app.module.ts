import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importante para HttpClient
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes'; // importa tus rutas desde el archivo que mencionaste

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
    // Aquí agregas otros componentes, directivas y pipes
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Necesario para formularios reactivos
    HttpClientModule, // Necesario para usar HttpClient
    // Otros módulos que necesites (FormsModule, RouterModule, etc.)
    RouterModule.forRoot(routes) // esto activa el sistema de rutas correctamente
  ],
  providers: [
    // Servicios globales van aquí
  ],
  bootstrap: [AppComponent] // Componente raíz
})
export class AppModule { }
export class TuModulo {}