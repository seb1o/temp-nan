import { Injectable } from '@angular/core';
import { TempTime } from '../../model/temp-time';

@Injectable({
  providedIn: 'root'
})
export class ProcessingService {


  constructor() { }

  getTempArrayFromHourlyData(hourly: any): TempTime[] {
    return []
  }

  getMinTemp(tempArray: TempTime[]): TempTime {
    throw new Error('Method not implemented.');
  }
  getTempMean(tempArray: TempTime[]): number {
    throw new Error('Method not implemented.');
  }
  getMaxTemp(tempArray: TempTime[]): TempTime {
    throw new Error('Method not implemented.');
  }

  fromFtoC(f: number): number{
    return -1;
  }

}
