import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSettings } from '../data.constant.setting';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  public constructor(private http: HttpClient) {}

  // function to fetch json data from server
  fetchDetails() {
    return this.http.get(DataSettings.AssetsURL.offersData);
  }
}
