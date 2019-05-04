import { WeatherService } from './../../services/weather.service';
import { Weather } from './../../services/weather.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.scss'],
})
export class WindComponent {
  @Input() weather: Weather;

  constructor(
    private weatherService: WeatherService
  ) { }

  round(temp) {
    return this.weatherService.round(temp);
  }

  windDirection(deg) {
    return this.weatherService.windDirection(deg);
  }

}
