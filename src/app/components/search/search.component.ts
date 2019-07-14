import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import * as places from 'places.js';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<{}>();

  constructor() { }

  ngOnInit() {
    this.placesAutocomplete();
  }

  placesAutocomplete() {
    const placesAutocomplete = places({
      appId: '',
      apiKey: '',
      container: document.querySelector('#city')
    });

    placesAutocomplete.on('change', e => {
      this.search.emit(e.suggestion);
      document.querySelector('input').value = '';
    });
  }

}
