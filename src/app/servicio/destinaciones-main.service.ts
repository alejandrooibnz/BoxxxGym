import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DestinacionesMain } from '../common/destinaciones';

@Injectable({
  providedIn: 'root'
})
export class DestinacionesMainService {

  constructor( private http: HttpClient) { }

  getDestinaciones(): Observable<DestinacionesMain> {
    return this.http.get<DestinacionesMain>('assets/common/data/data.json');
  }
}
