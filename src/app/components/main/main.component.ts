import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DestinacionesMain } from '../../common/destinaciones';
import { DestinacionesMainService } from '../../servicio/destinaciones-main.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationHelperService } from '../../servicio/translation-helper.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  destinacionesmain: DestinacionesMain = { titulo: '', destinaciones: [] }; // Inicializa con valores por defecto
  isLoading = true;
  currentLanguage = 'es';

  constructor(
    private destinacionesService: DestinacionesMainService,
    private translate: TranslateService,
    public translationHelper: TranslationHelperService
  ) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.loadDestinaciones();
  }

  loadDestinaciones() {
    this.isLoading = true;
    this.destinacionesService.getDestinaciones().subscribe({
      next: (data) => {
        this.destinacionesmain = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading destinations:', error);
        this.isLoading = false;
      },
    });
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLanguage = lang;
  }
}
