import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  styleUrls: ['./rental-form.component.css'],
  providers: [DatePipe]
})
export class RentalFormComponent implements OnInit {
  customerId: number = 0;
  carImages: CarImage[] = [];
  cars: Car[] = [];
  rentals: Rental[] = []
  customers: Customer[] = []
  rentDate: Date;
  returnDate: Date;
  imageBasePath = 'https://localhost:44305'
  minDate: string;
  firstDateSelected: boolean;


  constructor(
    private toasterService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private carImageService: CarImageService,
    private customerService: CustomerService,
    private datePipe: DatePipe,
    private rentalservice: RentalService,
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
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    })
  }

  getSliderClassName(index: number) {
    if (index == 0) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }
  minimumDate() {
    this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    return this.minDate;
  }
  onChangeEvent(event: any) {
    this.minDate = event.target.value;
    this.firstDateSelected = true;
  }

  checkIfCarRental(carId: number) {
    this.rentalservice.getRentalsByCarId(carId).subscribe((response) => {
      this.rentals = response.data;
      this.rentals.map((rent) => {
        if (rent.returnDate == null || this.rentDate > rent.returnDate) {
          return true
        }
        return this.toasterService.error("bu araç şu an kullanılıyor")
      })
    })
  }
}
