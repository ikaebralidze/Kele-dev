import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  private map: L.Map;
  private centroid: L.LatLngExpression; //

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12,
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

    // create 5 random jitteries and add them to map
    // const jittery = Array(5)
    //   .fill(this.centroid)
    //   .map((x) => [
    //     x[0] + (Math.random() - 0.5) / 10,
    //     x[1] + (Math.random() - 0.5) / 10,
    //   ])
    //   .map((x) => L.marker(x as L.LatLngExpression))
    //   .forEach((x) => x.addTo(this.map));

    tiles.addTo(this.map);
  }
  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((e) => {
      const loc = e.coords;
      this.centroid = [loc.latitude, loc.longitude];

      this.initMap();
    });
  }
}
