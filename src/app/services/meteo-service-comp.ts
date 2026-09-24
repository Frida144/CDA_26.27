import { Component } from '@angular/core';
import { MeteoService } from './meteo-service';
@Component({
  selector: 'app-http-api',
  imports: [],
  template: `
    <!-- <p>{{ newData.city_info.name }}</p> -->
    <!-- <p>{{ newData.city_info.elevation }}</p> -->
  `,
  styles: []
})
export class HttpApi {
  title: string = 'apiData';
  newData: any;
  constructor(private apiService: MeteoService) {}

  ngOnInit() {
    this.apiService.getData().subscribe((responseApi) => {
      this.newData = responseApi;
      console.log(this.newData);
      //console.log(this.newData.city_info.name);
    });
  }
}