import {Component, OnInit} from '@angular/core';
import {BikeFeService} from '../../services/bike-fe.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private bikeService: BikeFeService) {
  }

  models: string[] = [
    'MTB full Suspention',
    'Carbon Fiber Race Series',
    'Time Trial Blade'
  ];
  bikeform: FormGroup;
  validMessage = "";

  ngOnInit() {
    this.bikeform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  submitRegistration() {
    if (this.bikeform.valid) {
      this.validMessage = 'Your bike registration has been submitted. Thank you!';
      this.bikeService.createBikeRegistration(this.bikeform.value).subscribe(
        data => {
          // this.bikeform.reset();
          return true;
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.validMessage = 'Please fill out the form before submitting!';
    }
  }

}
