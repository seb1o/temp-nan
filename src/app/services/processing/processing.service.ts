import { Injectable } from '@angular/core';
import { TempTime } from '../../model/temp-time';

@Injectable({
  providedIn: 'root'
})
export class ProcessingService {


  constructor() { }

  getTempArrayFromHourlyData(hourly: any): TempTime[] {

    const tempArray = hourly.temperature_2m;
    const timeArray = hourly.time;
    const unionArray: TempTime[] = []

    for (let i = 0; i < tempArray.length; i++) {
      let temp = tempArray[i];
      temp = this.fromFtoC(temp);
      const hour = timeArray[i];
      const timeTemp = {
        time: hour,
        temp: temp
      }
      unionArray.push(timeTemp)
    }
    return unionArray
  }

  getMinTemp(tempArray: TempTime[]): TempTime {
    const tempeArray = [];
    for (const tempTime of tempArray) {
      const temp = tempTime.temp;
      tempeArray.push(temp);
    }
    const minTemp = Math.min(...tempeArray)
    const minTimeTemp = tempArray.find(timeTemp => timeTemp.temp === minTemp)
    return minTimeTemp!


  }
  getTempMean(tempArray: TempTime[]): number {
    let totTemp = 0;
    for (const tempTime of tempArray) {
      const temp = tempTime.temp;
      totTemp += temp
    }
    const avg = totTemp / tempArray.length;
    return (Math.round(avg * 10)) / 10
  }

  getMaxTemp(tempArray: TempTime[]): TempTime {
    const tempeArray = [];
    for (const tempTime of tempArray) {
      const temp = tempTime.temp;
      tempeArray.push(temp);
    }
    const maxTemp = Math.max(...tempeArray)
    const maxTimeTemp = tempArray.find(timeTemp => timeTemp.temp === maxTemp)
    return maxTimeTemp!;
  }

  fromFtoC(f: number): number {
    return (Math.round((f - 32) / (9 / 5) * 10)) / 10
  }

}
