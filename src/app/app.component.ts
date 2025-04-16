import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data/data.service';
import { TempTime } from './model/temp-time';
import { ProcessingService } from './services/processing/processing.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'temp-nan';

  dataServ = inject(DataService);
  processingServ = inject(ProcessingService)

  ngOnInit(){
    this.transformData()
  }

  async transformData(){
    const data = await this.dataServ.getData()
    const tempArray: TempTime[] = this.processingServ.getTempArrayFromHourlyData(data.hourly);
    const maxTempTime: TempTime = this.processingServ.getMaxTemp(tempArray);
    const minTempTime: TempTime = this.processingServ.getMinTemp(tempArray);
    const tempMean: number = this.processingServ.getTempMean(tempArray);
  }

}
