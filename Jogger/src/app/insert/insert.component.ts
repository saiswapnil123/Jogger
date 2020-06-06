import { Component, OnInit, NgZone } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Jog} from '../Joggger';
import {Router} from '@angular/router';

import {JoggerServiceService} from '../jogger-service.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private Jogger : JoggerServiceService, private route :Router, private ng : NgZone) { }
  data = new Jog;
  ngOnInit(): void {
  }
form = new FormGroup({
  Date : new FormControl(),
  Distance : new FormControl(),
  Duration : new FormControl()
});

Insert()
{
  this.data.Date= this.form.value.Date;
  this.data.Distance= this.form.value.Distance;
  this.data.Duration = this.form.value.Duration;
  this.Jogger.Insert(this.data).subscribe((result)=>{
    console.log(result);
  });
  this.ng.run(()=>{
    this.route.navigateByUrl('/Joggers');  
  })
  
}
}
