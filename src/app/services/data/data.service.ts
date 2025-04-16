import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(){
    const url = "https://api.open-meteo.com/v1/forecast?latitude=41.8919&longitude=12.5113&hourly=temperature_2m&timezone=Europe%2FBerlin&temperature_unit=fahrenheit&start_date=2025-01-26&end_date=2025-04-15"
    return fetch(url).then(r => r.json())
    
  }
}
