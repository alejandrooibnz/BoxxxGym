import { LoginRegisterComponent } from './components/loginRegister/login-register.component';
import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { AvisoLegalComponent } from './components/aviso-legal/aviso-legal.component';



export const routes: Routes = [
     // Redirigir al home cuando no se ingrese ninguna ruta
     { path: '', redirectTo: '/home', pathMatch: 'full' }, // Aquí rediriges a home al cargar la web.

     { path: 'home', component: MainComponent }, 
 
     { path: 'catalogo', component: CatalogoComponent },
     { path: 'reservas', component: ReservasComponent },
     { path: 'Informacion', component: InformacionComponent },
     { path: 'contacto', component: ContactoComponent },
     { path: 'cookies', component: CookiesComponent},
     { path: 'aviso-legal', component: AvisoLegalComponent },
     { path: 'loginRegister', component: LoginRegisterComponent },

 
  
     // Ruta para manejar páginas no encontradas
     { path: '**', component: NotFoundComponent }
];
