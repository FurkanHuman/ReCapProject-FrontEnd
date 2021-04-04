import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { RentalsComponent } from './components/rentals/rentals.component';
import { NaviComponent } from './components/navi/navi.component';
import { CategoryBarComponent } from './components/category-bar/category-bar.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CartSumaryComponent } from './components/cart-sumary/cart-sumary.component';
import { ToastrModule } from 'ngx-toastr';
import { FilterColorPipePipe } from './pipes/filter-color-pipe.pipe';
import { FilterBrandPipePipe } from './pipes/filter-brand-pipe.pipe';
import { FilterCarPipePipe } from './pipes/filter-car-pipe.pipe';
import { FilterComponent } from './components/filter/filter.component';
import { RentalFormComponent } from './components/rental-form/rental-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    BrandComponent,
    CustomerComponent,
    CarComponent,
    RentalsComponent,
    NaviComponent,
    CategoryBarComponent,
    CarImageComponent,
    CarDetailComponent,
    CartSumaryComponent,
    FilterColorPipePipe,
    FilterBrandPipePipe,
    FilterCarPipePipe,
    FilterComponent,
    RentalFormComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule, ToastrModule.forRoot({
      positionClass: "toast-top-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
