import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root' // Esto lo hace disponible en toda la aplicación
})
export class TranslationHelperService {
  constructor(private translate: TranslateService) {}

  /**
   * Obtiene la traducción para un destino específico
   * @param destinoKey Identificador único del destino (ej: 'CARNAVAL_VENECIA')
   * @param field Campo a traducir ('TITULO', 'DIAS_NOCHES', 'PRECIO')
   */
  getDestinoTranslation(destinoKey: string, field: string): string {
    const translationKey = `DESTINOS.${destinoKey}.${field}`;
    const translation = this.translate.instant(translationKey);
    
    return translation !== translationKey ? translation : '';
  }

  normalizeDestinoKey(ruta: string): string {
    return ruta.toUpperCase()
               .replace(/-/g, '_')
               .replace(/ /g, '_');
  }
}