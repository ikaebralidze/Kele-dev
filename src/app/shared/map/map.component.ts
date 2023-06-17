import { Component, Input } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  private map: L.Map;
  @Input() coords: L.LatLngExpression[];
  @Input() coord: L.LatLngExpression;

  private initMap(): void {
    this.map = L.map('map', {
      center: this.coord,
      zoom: 16,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 10,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    const defaultIcon = L.icon({
      iconUrl: 'marker-icon.png',
      iconSize: [20, 20],
      iconAnchor: [2, 2],
      popupAnchor: [0, -2],
    });

    this.coords.forEach((e) => {
      L.marker(e, { icon: defaultIcon }).addTo(this.map);
    });

    tiles.addTo(this.map);
  }
  ngOnInit(): void {
    this.initMap();
  }
}
