import { Component, OnInit } from '@angular/core';

import { Ng2OdometerModule } from 'ng2-odometer'; // <-- import the module

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public number1: number = 567;
  public number2: number = 291;
  public number3: number = 4212;
  public number4: number = 69;
  public number5: number = 530;
  public number6: number = 4562;
  constructor() { }

  ngOnInit() {
  }

}
