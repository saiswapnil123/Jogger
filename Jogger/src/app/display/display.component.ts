import { Component, OnInit } from '@angular/core';
import {JoggerServiceService} from '../jogger-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private Jog : JoggerServiceService) { }
Distance;
Duration;
  ngOnInit(): void {
    this.Jog.Select().subscribe((result)=>{
      this.Distance = result[0].Distance;
      this.Duration = result[0].Duration;
    });
  }
  

}
