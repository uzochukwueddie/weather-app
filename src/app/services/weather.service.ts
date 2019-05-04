import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LocationCoordinates, Weather } from './weather.interface';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = environment.apiKey;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getUserCoordinates(): Observable<LocationCoordinates> {
    return this.httpClient.get<LocationCoordinates>(`${environment.geoIp}`);
  }

  getWeatherInfo(lat: number, lng: number): Observable<Weather> {
    return this.httpClient.get<Weather>(`${environment.weatherApi}/${this.apiKey}/${lat},${lng}`);
  }

  fahrenheitToCelsius(temp) {
    const result = (temp - 32) * (5 / 9);
    return Math.round(result);
  }

  round(temp) {
    return Math.round(temp);
  }

  weatherIcon(icon) {
    if (icon === 'rain') {
      return 'assets/rain.png';
    } else if (icon === 'snow') {
      return 'assets/snow.png';
    } else if (icon === 'sleet') {
      return 'assets/sleet.png';
    } else if (icon === 'hail') {
      return 'assets/rain.png';
    } else if (icon === 'wind') {
      return 'assets/wind.png';
    } else if (icon === 'fog') {
      return 'assets/fog.png';
    } else if (icon === 'cloudy') {
      return 'assets/cloudy.png';
    } else if (icon === 'partly-cloudy-day') {
      return 'assets/partly-cloudy-day.png';
    } else if (icon === 'partly-cloudy-night') {
      return 'assets/partly-cloudy-night.png';
    } else if (icon === 'clear-day') {
      return 'assets/clear-day.png';
    } else if (icon === 'clear-night') {
      return 'assets/clear-night.png';
    }
  }

  uvIndex(index) {
    if (index === 0 || index <= 2) {
      return `${index} Low`;
    } else if (index >= 3 || index <= 5) {
      return `${index} Moderate`;
    } else if (index >= 6 || index <= 7) {
      return `${index} High`;
    } else if (index >= 8 || index <= 10) {
      return `${index} Very High`;
    } else if (index >= 11) {
      return `${index} Extreme`;
    }
  }

  windDirection(deg) {
    if (deg >= 0 && deg <= 90) {
      return 'Northeast';
    } else if (deg > 90 && deg <= 180) {
      return 'Southeast';
    } else if (deg > 180 && deg <= 270) {
      return 'Southwest';
    } else {
      return 'Northwest';
    }
  }
}
