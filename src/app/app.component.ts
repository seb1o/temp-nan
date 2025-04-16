import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data/data.service';
import { TempTime } from './model/temp-time';
import { ProcessingService } from './services/processing/processing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'temp-nan';
   miniTemp = signal<TempTime| undefined>(undefined);
   maxTemp = signal<TempTime | undefined>(undefined);
   meanTemp = signal(0);
   firstDate = signal('');
   lastDate = signal('');
  dataServ = inject(DataService);
  processingServ = inject(ProcessingService)

  ngOnInit(){
    this.transformData()
  }

  async transformData(){
    const data = await this.dataServ.getData()
    console.log(data)
    
    const tempArray: TempTime[] = this.processingServ.getTempArrayFromHourlyData(data.hourly);
    this.firstDate.set(tempArray[0].time)
    this.lastDate.set(tempArray[tempArray.length-1].time)
    const minTempTime: TempTime = this.processingServ.getMinTemp(tempArray);
    this.miniTemp.set(minTempTime)
    console.log(minTempTime)

    const maxTempTime: TempTime = this.processingServ.getMaxTemp(tempArray);
    this.maxTemp.set(maxTempTime)
    console.log(maxTempTime)
    

    const tempMean: number = this.processingServ.getTempMean(tempArray);
    this.meanTemp.set(tempMean)
    console.log(tempMean)
  }

}
