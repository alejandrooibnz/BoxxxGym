import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { TranslateModule } from '@ngx-translate/core'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MainComponent, 
    CatalogoComponent, 
    NavBarComponent, 
    InformacionComponent, 
    FooterComponent, 
    MenuComponent, 
    ContactoComponent,
    TranslateModule // Añade esto para usar el pipe 'translate' en el template
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private translate = inject(TranslateService); // Inyecta el servicio de traducción

  constructor() {
    this.translate.setDefaultLang('es'); // Establece el idioma por defecto
    this.translate.use('es'); // Usa el idioma español inicialmente
  }
}