import { WeatherService } from './../../services/weather.service';
import { Weather } from './../../services/weather.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss'],
})
export class HumidityComponent {
  @Input() weather: Weather;

  constructor(
    private weatherService: WeatherService
  ) { }

  round(temp) {
    return this.weatherService.round(temp);
  }

  uvIndex(index) {
    return this.weatherService.uvIndex(index);
  }

  fahrenheitToCelsius(temp) {
    return this.weatherService.fahrenheitToCelsius(temp);
  }

}
