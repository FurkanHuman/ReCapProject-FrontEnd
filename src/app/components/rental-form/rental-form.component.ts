import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Customer } from 'src/app/models/Customer';
import { Rental } from 'src/app/models/rental';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html',
  styleUrls: ['./rental-form.component.css']
})
export class RentalFormComponent implements OnInit {
  customerId: number = 0;
  carImages: CarImage[] = [];
  cars: Car[] = [];
  rentals: Rental[] = []
  rentDate: Date;
  returnDate: Date;
  imageBasePath = 'https://localhost:44305'


  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private carImageService: CarImageService,
    private customerService: CustomerService,
    private rentalservice: RentalService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["carId"]) {
        this.getAllCustomers();
        this.getImageByCarId(params["carId"]);
        this.getCarById(params["carId"]);
      }
    })
  }

  getImageByCarId(carId: number) {
    this.carImageService.getImagesById(carId).subscribe((response) => {
      this.carImages = response.data;
    })
  }

  getCarById(carId: number) {
    this.carService.getCarsById(carId).subscribe((response) => {
      this.cars = response.data;
    })
  }

  getAllCustomers() {
    this.rentalservice.getRentals().subscribe((response) => {
      this.rentals = response.data;
    })
  }

  getSliderClassName(index: number) {
    if (index == 0) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }
}
