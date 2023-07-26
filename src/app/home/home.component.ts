import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../Services/news.service';
import { INews } from '../model/news.model';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoaded = false;

  constructor() {}

  loading(event: boolean) {
    this.isLoaded = event;
  }
  ngOnInit(): void {}
}
