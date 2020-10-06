import { Component, OnInit } from '@angular/core';
import {BikeFeService} from '../../services/bike-fe.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public bikes;

  constructor(private bikeService: BikeFeService) { }

  ngOnInit() {
  this.getBikes();
  }

  getBikes() {
    this.bikeService.getBikes().subscribe(
      data => {this.bikes = data; },
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  }
}
