import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Destinacion, DestinacionesDestinos } from '../../common/destinaciones';
import { CommonModule } from '@angular/common';
import { DestinacionesDestinosService } from '../../servicio/destinaciones-destinos.service';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
})
export class ReservasComponent implements OnInit {
  destinacionesdestinos: DestinacionesDestinos = {
    titulo: '',
    destinaciones: [],
  };
  isLoading = true;

  groupedDestinations: { [key: string]: Destinacion[] } = {};

  constructor(private destinacionesService: DestinacionesDestinosService) {}
  ngOnInit(): void {
    this.loadDestinaciones();
  }

  loadDestinaciones() {
    this.isLoading = true;
    this.destinacionesService.getDestinaciones().subscribe({
      next: (data) => {
        this.destinacionesdestinos = data;
        this.groupDestinationsByCountry();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading destinations:', error);
        this.isLoading = false;
      },
    });
  }

  groupDestinationsByCountry() {
    this.groupedDestinations = {};

    this.destinacionesdestinos.destinaciones.forEach((destino) => {
      const country = destino.pais || 'Otros';
      if (!this.groupedDestinations[country]) {
        this.groupedDestinations[country] = [];
      }
      this.groupedDestinations[country].push(destino);
    });
  }
}
