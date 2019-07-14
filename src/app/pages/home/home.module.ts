import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { HomePage } from './home.page';
import { DailyComponent } from 'src/app/components/daily/daily.component';
import { ChartComponent } from 'src/app/components/chart/chart.component';
import { HumidityComponent } from 'src/app/components/humidity/humidity.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { WindComponent } from 'src/app/components/wind/wind.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    NgCircleProgressModule.forRoot({
      backgroundPadding: -20,
      radius: 100,
      space: -10,
      animation: false,
      responsive: true,
      renderOnClick: false
    }),
    ChartsModule
  ],
  declarations: [
    HomePage,
    DailyComponent,
    ChartComponent,
    HumidityComponent,
    WindComponent,
    SearchComponent
  ]
})
export class HomePageModule {}
