import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { WeatherService } from 'src/app/services/weather.service';
import { LocationCoordinates, Weather } from 'src/app/services/weather.interface';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
})
export class DailyComponent implements OnInit {
  weather: Weather;

  constructor(
    private weatherService: WeatherService,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.getCoordinates();
    });
  }

  getCoordinates() {
    this.weatherService.getUserCoordinates()
      .subscribe((data: LocationCoordinates) => {
        this.weatherInformation(data.latitude, data.longitude);
      });
  }

  weatherInformation(lat, lng) {
    this.weatherService.getWeatherInfo(lat, lng)
      .subscribe((data: Weather) => {
        this.weather = data;
      });
  }

  weatherIcon(icon) {
    return this.weatherService.weatherIcon(icon);
  }

  round(temp) {
    return this.weatherService.round(temp);
  }

  fahrenheitToCelsius(temp) {
    return this.weatherService.fahrenheitToCelsius(temp);
  }

}
