import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DestinacionesDestinos } from '../common/destinaciones';

@Injectable({
  providedIn: 'root'
})
export class DestinacionesDestinosService {

  constructor( private http: HttpClient) { }

  getDestinaciones(): Observable<DestinacionesDestinos> {
    return this.http.get<DestinacionesDestinos>('assets/common/data/dataDestinos.json');
  }
}
