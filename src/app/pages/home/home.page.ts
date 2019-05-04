import { Platform } from '@ionic/angular';
import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';

import { WeatherService } from 'src/app/services/weather.service';
import { LocationCoordinates, Weather } from 'src/app/services/weather.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  latCoords: number;
  lngCoords: number;
  city: string;
  weather: Weather;
  chartData = [];
  chartLabels = [];

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private weatherService: WeatherService,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.getCoordinates();
    });
  }

  getCoordinates() {
    this.weatherService.getUserCoordinates()
      .subscribe((data: LocationCoordinates) => {
        this.latCoords = data.latitude;
        this.lngCoords = data.longitude;
        this.city = data.city;
        this.weatherInformation(this.latCoords, this.lngCoords);
      });
  }

  weatherInformation(lat, lng) {
    this.weatherService.getWeatherInfo(lat, lng)
      .subscribe((data: Weather) => {
        this.weather = data;

        const dailyData = this.weather.daily.data;
        for (const i of dailyData) {
          this.chartData.push(this.fahrenheitToCelsius(i.temperatureMax));
          this.chartLabels.push(formatDate(i.time * 1000, 'EEE, MMM d', this.locale));
        }
      });
  }

  round(temp) {
    return this.weatherService.round(temp);
  }

  fahrenheitToCelsius(temp) {
    return this.weatherService.fahrenheitToCelsius(temp);
  }

  weatherIcon(icon) {
    return this.weatherService.weatherIcon(icon);
  }

}
